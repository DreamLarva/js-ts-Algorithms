/*
常见题
43. 字符串相乘
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
通过次数139,977提交次数313,224
* */
function multiply(num1: string, num2: string): string {
  const step1: string[] = [];
  // 乘
  let long: string;
  let short: string;
  if (num1.length > num2.length) {
    long = num1;
    short = num2;
  } else {
    long = num2;
    short = num1;
  }

  for (let i = short.length - 1; i >= 0; i--) {
    step1.push(multiplySingle(long, short[i]));
  }

  // 加
  let result = "0";
  for (let i = 0; i < step1.length; i++) {
    result = sum(result, step1[i] + "0".repeat(i));
  }

  return result;
}

function multiplySingle(long: string, single: string) {
  if (single === "0") return "0";
  let p = "";
  let j = 0;
  const s = Number(single);
  for (let i = long.length - 1; i >= 0; i--) {
    const d = s * Number(long[i]) + j;
    p = (d % 10) + p;
    j = Math.floor(d / 10);
  }

  return j === 0 ? p : j + p;
}

function sum(long: string, short: string) {
  if (short.length > long.length) [long, short] = [short, long];
  if (short === "0") return long;
  const r = (s: string) => s.split("").reverse();
  const s = r(short);
  const l = r(long);
  let result = "";
  let j = 0;
  for (let i = 0; i < long.length; i++) {
    const d = Number(s[i] ?? "0") + Number(l[i]) + j;
    result = (d % 10) + result;
    j = Math.floor(d / 10);
  }

  return j === 0 ? result : j + result;
}

function multiply2(num1: string, num2: string): string {
  if (!+num1 || !+num2) return "0";
  const prod = Array(num1.length + num2.length).fill(0);
  let currIdx = prod.length - 1;

  for (let i = num1.length - 1; i >= 0; i--) {
    // idx 也就是这一层运算 最右一位 开始的位置
    let idx = currIdx--;

    for (let j = num2.length - 1; j >= 0; j--) {
      const res = +num1[i] * +num2[j] + prod[idx];
      prod[idx] = res % 10;
      prod[--idx] += Math.floor(res / 10);
    }
  }
  return prod.join("").replace(/^0+/, "");
}

import assert from "assert";

assert.strictEqual(multiplySingle("2", "1"), "2");
assert.strictEqual(multiplySingle("12", "3"), "36");
assert.strictEqual(multiplySingle("12", "5"), "60");
assert.strictEqual(multiplySingle("99", "9"), String(99 * 9));
assert.strictEqual(multiplySingle("123456789", "9"), String(9 * 123456789));

assert.strictEqual(sum("12", "21"), String(33));
assert.strictEqual(sum("99", "99"), String(99 + 99));

assert.strictEqual(multiply("2", "3"), "6");
assert.strictEqual(multiply("123", "456"), "56088");
assert.strictEqual(multiply("123456789", "987654321"), "121932631112635269");

assert.strictEqual(multiply2("123", "321"), String(123 * 321));
