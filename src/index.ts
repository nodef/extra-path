import {basename, extname} from "path";
export {posix, win32}      from "path";
import {toKebabCase}       from "extra-string";




// TYPES
// =====

export {FormatInputPathObject}    from "path";
export {ParsedPath, PlatformPath} from "path";



// PROPERTIES
// ==========

export {delimiter, sep} from "path";




// METHODS
// =======

export {basename, dirname, extname} from "path";
export {isAbsolute, relative} from "path";
export {format, join, parse}  from "path";
export {normalize, resolve}   from "path";
export {toNamespacedPath}     from "path";




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
