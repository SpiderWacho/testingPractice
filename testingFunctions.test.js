const { exportAllDeclaration } = require("@babel/types");
const {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analizeArray,
} = require("./testingFunctions");

test("Capitalize: First letter is capitalized", () => {
  expect(capitalize("marian")).toMatch(/^[A-Z]/);
});

test("Capitalize: Rest of string is minus", () => {
  expect(capitalize("marian")).toMatch(/[A-Z][a-z]+/);
});

test("Reverse string:  String is reversed", () => {
  expect(reverseString("pompon")).toMatch("nopmop");
});

test("Reverse string: String keep being case sensitive", () => {
  expect(reverseString("pomPON")).toMatch("NOPmop");
});

test("Calculator: Sum is equal to 6", () => {
  expect(calculator.sum(2, 4)).toBe(6);
});

test("Calculator: Substract is equal to 9", () => {
  expect(calculator.substract(17, 8)).toBe(9);
});

test("Calculator: Division is equal to 9", () => {
  expect(calculator.divide(100, 5)).toBe(20);
});

test("Calculator: Multiplication is equal to 1000", () => {
  expect(calculator.multiply(100, 10)).toBe(1000);
});

test("Cipher: Expect abc to be bcd with an offset of 1", () => {
  expect(cipher("abc")).toMatch("bcd");
});

test("Cipher: wraps around z", () => {
  expect(cipher("xyz")).toMatch("yza");
});

test("Cipher: supports multiple wraps around z", () => {
  expect(cipher("abc", 52)).toMatch("abc");
});

test("Cipher: dont change puntuaction", () => {
  expect(cipher("a.c")).toMatch("b.d");
});

test("Cipher: dont change spaces", () => {
  expect(cipher("a .c")).toMatch("b .d");
});

test("analyzeArray: Min return min number", () => {
  const object = analizeArray([1, 2, 3, 4, 5]);
  expect(object.min).toBe(1);
});

test("analyzeArray: Average return average number", () => {
  const object = analizeArray([1, 2, 3, 4, 5]);
  expect(object.average).toBe(3);
});

test("analyzeArray: Max return max number", () => {
  const object = analizeArray([1, 2, 3, 4, 5]);
  expect(object.max).toBe(5);
});

test("analyzeArray: Length return length of array", () => {
  const object = analizeArray([1, 2, 3, 4, 5]);
  expect(object.length).toBe(5);
});
