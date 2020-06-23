/*
编写一个程序，找出第 n 个丑数。

丑数就是只包含质因数 2, 3, 5 的正整数。

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:

1 是丑数。
n 不超过1690。
* */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n: number): number {
  /**
     三指针法。一部分是丑数数组，另一部分是权重2，3，5。下一个丑数，定义为丑数数组中的数乘以权重，所得的最小值。

     那么，2该乘以谁？3该乘以谁？5该乘以谁？

     其一，使用三个指针idx[3]，告诉它们。比如，2应该乘以ugly[idx[0]]，即数组中的第idx[0]个值。（权重2，3，5分别对应指针，idx[0],idx[1],idx[2]）

     其二，当命中下一个丑数时，说明该指针指向的丑数 乘以对应权重所得积最小。此时，指针应该指向下一个丑数。（idx[]中保存的是丑数数组下标）

     其三，要使用三个并列的if让指针指向一个更大的数，不能用if-else。因为有这种情况：

     丑数6，可能由于丑数2乘以权重3产生；也可能由于丑数3乘以权重2产生。

     丑数10，... 等等。
     * */
  let pointer_two = 0;
  let pointer_three = 0;
  let pointer_five = 0;
  const t = [1]; // 第一个数为1

  // 由于存入缓存的 数一定是丑数 所以乘 上 2  3  5 也一定是
  // 那么就不用管之前 有几个 2 3 5 只要觉得现在是要乘 2 3 5 中哪哪个
  // 2 3 5 的指针 是最小的那个值 说明 应该 选择缓存中的 下一个值 来乘
  while (t.length < n) {
    const two = t[pointer_two] * 2;
    const three = t[pointer_three] * 3;
    const five = t[pointer_five] * 5;
    const min = Math.min(two, three, five);
    t.push(min);

    if (min === two) pointer_two++;
    if (min === three) pointer_three++;
    if (min === five) pointer_five++;
  }

  return t[t.length - 1];
};

import assert from "assert";

assert.strictEqual(nthUglyNumber(10), 12);
