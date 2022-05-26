import { join, sep } from "path";
import { access, stat } from "fs/promises";
import { constants } from "fs";

const baseDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src'

// Clean up request path, so we can use it to open a file.
// NOTE: This is a naive implementation and should not be used in production.
export async function cleanPath(path) {
  // Remove ".." segments
  path = path.replace(/\/\.\.(?=\/)/g, '')
  // Remove duplicate /
  path = path.replace(/\/+(?=\/)/g, '')
  // Remove starting /
  path = path.replace(/^\/+/, '')

  // Convert to FS path
  path = path.split('/').join(sep)

  // Prepend the baseDir.
  path = join(baseDir, path)

  // Check if file exists.
  if (await isValidFile(path)) {
    return path
  }

  // Check if an index file exists.
  path = join(path, 'index.html')
  if (await isValidFile(path)) {
    return path
  }

  return null
}

async function isValidFile(path) {
  try {
    // Check if we can read the file (throws an error if not).
    await access(path, constants.R_OK)

    // Check if the path exists as a file (and not directory).
    const fileStat = await stat(path)
    return fileStat.isFile()
  } catch (err) {
    return false
  }
}
