/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

1. num1 和num2 的长度都小于 5100.
2. num1 和num2 都只包含数字 0-9.
3. num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1: string, num2: string): string {
  /**
   * 本题 实际考察的是 大数 相加的运算
   * javascript 中 能够正常做四则运算的 范围是 Math.MAX_SAFE_INTEGER = 2 ** 53 -1 = 9007199254740991  (16位)
   * 所以只要两个数相加不超过 16 位 就能够正确运算
   * 所以 将 两个字符串 按照 每 15 位 分为1组 相加 再使用 数学的相加 就能保证精度 不出错
   * */

  if (num1.length <= 15 && num2.length <= 15) {
    return String(Number(num1) + Number(num2));
  }
  const length_offset = num1.length - num2.length;
  if (length_offset < 0) return addStrings(num2, num1);
  const step = 15;
  const pairs: string[][] = [];
  for (let i = 0; i < num1.length; i += step) {
    const pair: string[] = [];
    pair.push(num1.substr(i, step));
    if (i + step > length_offset) {
      const offset = i + step - length_offset;
      pair.push(
        num2.substr(
          Math.max(i - length_offset, 0),
          i - length_offset < 0 ? offset : step
        )
      );
    }
    pairs.push(pair);
  }

  let result = "";
  let carry = 0;
  pairs.reverse().forEach(([a, b = "0"]) => {
    const sum = Number(a) + Number(b) + carry;
    const max_length = Math.max(a.length, b.length);
    carry = 0;
    if (sum >= 10 ** max_length) {
      carry = 1;
      result = String(sum).slice(1) + result;
    } else {
      result = String(sum).padStart(max_length, "0") + result;
    }
  });

  return carry === 1 ? "1" + result : result;
};

/**
 * leetcode top 的 算法
 * 竖式相加
 * 从后往前 每位相加
 * */
var addStrings_2 = function (num1: string, num2: string) {
  let str = [];
  let p = num1.length - 1;
  let q = num2.length - 1;
  let l1 = num1.split("");
  let l2 = num2.split("");
  let carry = 0;

  while (p >= 0 || q >= 0 || carry != 0) {
    if (p >= 0) {
      let c = l1[p--];
      carry += c.charCodeAt(0) - "0".charCodeAt(0);
    }
    if (q >= 0) {
      let c = l2[q--];
      carry += c.charCodeAt(0) - "0".charCodeAt(0);
    }
    str.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return str.reverse().join("");
};

import assert from "assert";

assert.strictEqual(
  addStrings(
    "123456789012345678901234567890123456789012345678901234567890",
    "123456789012345678901234567890"
  ),
  "123456789012345678901234567890246913578024691357802469135780"
);
assert.strictEqual(
  addStrings("9333852702227987", "85731737104263"),
  "9419584439332250"
);

assert.strictEqual(
  addStrings("96423702883453279", "72156405165936898"),
  "168580108049390177"
);

assert.strictEqual(
  addStrings(
    "401716832807512840963",
    "167141802233061013023557397451289113296441069"
  ),
  "167141802233061013023557799168121920809282032"
);

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
const sample1 =
  "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
const sample2 =
  "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
suite
  .add("mine", function () {
    addStrings(sample1, sample2);
  })
  .add("top", function () {
    addStrings_2(sample1, sample2);
  })

  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
/**
 * 没错 我的方法 更屌!
 * */
