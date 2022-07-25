import * as path     from "../src";
import {filename}    from "../src";
import {symbolname}  from "../src";
import {keywordname} from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = path.filename("/home/user/file+name.txt");
  expect(a).toBe("file+name");
  // → file+name

  var a = path.symbolname("/home/user/file+name.txt");
  expect(a).toBe("file_name");
  // → file_name

  var a = path.keywordname("/home/user/file+name.txt");
  expect(a).toBe("file-name");
  // → file-name
});




test("filename", () => {
  var a = filename("/home/user/open+source.txt");
  expect(a).toBe("open+source");
  var a = filename("/home/user/closedSource.key");
  expect(a).toBe("closedSource");
  var a = filename("/home/user/copyleft_licenses.tar.gz");
  expect(a).toBe("copyleft_licenses.tar");
});


test("symbolname", () => {
  var a = symbolname("/home/user/open+source.txt");
  expect(a).toBe("open_source");
  var a = symbolname("/home/user/closedSource.key");
  expect(a).toBe("closedSource");
  var a = symbolname("/home/user/copyleft_licenses.tar.gz");
  expect(a).toBe("copyleft_licenses_tar");
});


test("keywordname", () => {
  var a = keywordname("/home/user/open+source.txt");
  expect(a).toBe("open-source");
  var a = keywordname("/home/user/closedSource.key");
  expect(a).toBe("closed-source");
  var a = keywordname("/home/user/copyleft_licenses.tar.gz");
  expect(a).toBe("copyleft-licenses-tar");
});
