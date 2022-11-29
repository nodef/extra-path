import {basename, extname} from "path";
import {toKebabCase}       from "extra-string";




// RE-EXPORTS
// ==========

export {
  // Types
  FormatInputPathObject,
  ParsedPath,
  PlatformPath,
  // Namespaces
  posix,
  win32,
  // Properties
  delimiter,
  sep,
  // Methods
  basename,
  dirname,
  extname,
  isAbsolute,
  relative,
  format,
  join,
  parse,
  normalize,
  resolve,
  toNamespacedPath,
} from "path";




// NAME
// ----

/**
 * Get file name without extension.
 * @param pth file path
 * @returns file name
 */
export function filename(pth: string): string {
  return basename(pth, extname(pth));
}


/**
 * Get symbol name for file.
 * @param pth file path
 * @returns symbol name
 */
export function symbolname(pth: string) {
  return filename(pth).replace(/[^\w$]+/g, "_");
}


/**
 * Get keyword name for file.
 * @param pth file path
 * @returns keyword name
 */
export function keywordname(pth: string): string {
  return toKebabCase(filename(pth));
}
