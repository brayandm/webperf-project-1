import { createReadStream } from 'fs'
import { createGzip } from 'zlib'
import mime from 'mime-types'
import { promises } from 'fs'

import { cleanPath } from './utils.mjs'

export default async function staticHandler(req, res) {
  // Parse the request URL.
  const url = new URL(req.url, `http://${req.headers.host}`)

  // Clean the path.
  const filePath = await cleanPath(url.pathname)

  // Might be useful later.
  // const fileExtension = extname(filePath)

  const isHtml = filePath && filePath.match(/\.html$/)
  const isAsset = filePath && filePath.match(/\.(css|js|woff|woff2|ttf|eot|svg|png|jpg|jpeg|gif|webp)$/);
  
  if (isHtml) {
    res.setHeader('Cache-Control', 'public, max-age=60'); // 1 minute
  }
  
  if (isAsset) {
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
  }

  // Check if the file exists.
  if (filePath) {
    // Get the file's metadata.
    const stat = await promises.stat(filePath)

    // Generate a unique ETag value based on the file's contents.
    const etag = `W/"${stat.size.toString(16)}-${stat.mtime.getTime().toString(16)}"`

    // Set the ETag and Last-Modified headers.
    res.setHeader('ETag', etag)
    res.setHeader('Last-Modified', stat.mtime.toUTCString())

    // Check if the client has a cached version of the file.
    const ifNoneMatch = req.headers['if-none-match']
    const ifModifiedSince = req.headers['if-modified-since']
    if (ifNoneMatch === etag || ifModifiedSince === stat.mtime.toUTCString()) {
      // The client has a cached version of the file.
      res.statusCode = 304
      res.end()
      return
    }

    // Found!
    res.statusCode = 200

    // Here you can set headers like Cache-Control, etc.
    res.setHeader('Content-Type', mime.lookup(filePath) || undefined)

    // Check if the client supports gzip compression.
    const acceptEncoding = req.headers['accept-encoding'] || ''
    if (acceptEncoding.includes('gzip')) {
      // Compress the response using gzip.
      res.setHeader('Content-Encoding', 'gzip')
      createReadStream(filePath).pipe(createGzip()).pipe(res)
    } else {
      // Stream the file to the response without compression.
      createReadStream(filePath).pipe(res)
    }
  } else {
    // Oh no, file does not exist.
    res.statusCode = 404
    res.end('404 Not found')
  }
}
