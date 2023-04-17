import { createReadStream } from 'fs'
import mime from 'mime-types'

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
    // Found!
    res.statusCode = 200

    // Here you can set headers like Cache-Control, etc.
    res.setHeader('Content-Type', mime.lookup(filePath) || undefined)

    // Stream the file to the response.
    createReadStream(filePath).pipe(res)
  } else {
    // Oh no, file does not exist.
    res.statusCode = 404
    res.end('404 Not found')
  }
}
