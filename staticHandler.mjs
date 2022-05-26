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
