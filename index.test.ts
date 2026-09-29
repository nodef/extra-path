import {assertEquals} from "@std/assert";
import * as xpath from "./index.ts";
import {
  filename,
  symbolname,
  keywordname,
} from "./index.ts";




// 1. Basic tests.
Deno.test("example1", () => {
  let a;
  a = xpath.filename("/home/user/file+name.txt");
  assertEquals(a, "file+name");
  // → "file+name"

  a = xpath.symbolname("/home/user/file+name.txt");
  assertEquals(a, "file_name");
  // → "file_name"

  a = xpath.keywordname("/home/user/file+name.txt");
  assertEquals(a, "file-name");
  // → "file-name"
});




// NAME
// ----

Deno.test("filename", () => {
  let a;
  a = filename("/home/user/open+source.txt");
  assertEquals(a, "open+source");
  a = filename("/home/user/closedSource.key");
  assertEquals(a, "closedSource");
  a = filename("/home/user/copyleft_licenses.tar.gz");
  assertEquals(a, "copyleft_licenses.tar");
});


Deno.test("symbolname", () => {
  let a;
  a = symbolname("/home/user/open+source.txt");
  assertEquals(a, "open_source");
  a = symbolname("/home/user/closedSource.key");
  assertEquals(a, "closedSource");
  a = symbolname("/home/user/copyleft_licenses.tar.gz");
  assertEquals(a, "copyleft_licenses_tar");
});


Deno.test("keywordname", () => {
  let a;
  a = keywordname("/home/user/open+source.txt");
  assertEquals(a, "open-source");
  a = keywordname("/home/user/closedSource.key");
  assertEquals(a, "closed-source");
  a = keywordname("/home/user/copyleft_licenses.tar.gz");
  assertEquals(a, "copyleft-licenses-tar");
});
