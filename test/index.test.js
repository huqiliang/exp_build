import buildExp from "../src/index";

const arr = ["", "aaAdb", "AAa3A", "aas3rt", "aaAs3r?t", "aaAs3r?tddddddddd"];

test("无限制的情况", () => {
  expect(buildExp().test(arr[0])).toBe(true);
});

test("必须包含大写字母", () => {
  expect(buildExp({ upper: true }).test(arr[1])).toBe(true);
});
test("必须包含小写字母", () => {
  expect(buildExp({ lower: true }).test(arr[2])).toBe(true);
});
test("必须包含数字", () => {
  expect(buildExp({ number: true }).test(arr[3])).toBe(true);
});

test("必须包含大写字母小写字母数字", () => {
  expect(
    buildExp({ upper: true, lower: true, number: true }).test(arr[4])
  ).toBe(true);
});
test("必须包含大写字母小写字母数字特殊字符", () => {
  expect(
    buildExp({ upper: true, lower: true, number: true, symbol: true }).test(
      arr[4]
    )
  ).toBe(true);
});

test("必须包含大写字母小写字母数字特殊字符最小长度为8", () => {
  expect(
    buildExp({
      upper: true,
      lower: true,
      number: true,
      symbol: true,
      length: 8
    }).test(arr[5])
  ).toBe(true);
});
