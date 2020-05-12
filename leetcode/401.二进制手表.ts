/*

二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。

每个 LED 代表一个 0 或 1，最低位在右侧。



例如，上面的二进制手表读取 “3:25”。

给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。

案例:

输入: n = 1
返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]


注意事项:

输出的顺序没有要求。
小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
* */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num: number) {
  // 暴力
  // 因为无论什么输入 最多也就算 12 * 60 也就720次 是能够接受的
  const result: string[] = [];
  for (let hour = 0, minute = 0; hour <= 11; ) {
    if (howManyOne(hour) + howManyOne(minute) === num) {
      result.push(`${hour}:${String(minute).padStart(2, "0")}`);
    }

    if (minute === 59) {
      minute = 0;
      hour++;
    } else {
      minute++;
    }
  }
  return result;

  function howManyOne(num: number) {
    let result = 0;
    while (num) {
      num % 2 === 1 && result++;
      num = Math.floor(num / 2);
    }
    return result;
  }
};

import assert from "assert";

assert.deepStrictEqual(
  new Set(readBinaryWatch(1)),
  new Set([
    "1:00",
    "2:00",
    "4:00",
    "8:00",
    "0:01",
    "0:02",
    "0:04",
    "0:08",
    "0:16",
    "0:32",
  ])
);
assert.deepStrictEqual(new Set(readBinaryWatch(0)), new Set(["0:00"]));
