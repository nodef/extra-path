import * as path from "../src";




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
