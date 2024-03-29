/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (48.38%)
 * Total Accepted:    22.9K
 * Total Submissions: 47.3K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 *
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 *
 * 注意：整数顺序将表示为一个字符串。
 *
 *
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: "1"
 *
 *
 * 示例 2:
 *
 * 输入: 4
 * 输出: "1211"
 *
 *
 */
class Count {
  data: Array<{ text: string; count: number }> = [];

  getLast() {
    return this.data[this.data.length - 1];
  }

  addMany(str: string) {
    str.split("").forEach((character) => this.add(character));
    return this;
  }

  add(character: string) {
    if (this.data.length === 0) {
      this.data.push({ text: character, count: 1 });
    } else {
      const last = this.getLast();
      if (last.text === character) {
        last.count++;
      } else {
        this.data.push({ text: character, count: 1 });
      }
    }
    return this;
  }

  toString() {
    return this.data.reduce((pre, { text, count }) => pre + count + text, "");
  }
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n: number) {
  if (n-- === 1) {
    return "1";
  }
  let result = new Count().add("1");
  while (--n) {
    result = new Count().addMany(result.toString());
  }

  return result.toString();
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay2 = function (n) {
  // 前五项
  // 递归 + 迭代

  // 终止
  if (n == 1) return "1";

  // 递归 - //2
  let str = countAndSay2(n - 1);
  let temp = str[0];
  let count = 0;
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (temp === str[i]) count++;
    else {
      ans = ans + "" + count + temp;
      temp = str[i];
      count = 1;
    }
    if (i === str.length - 1) {
      ans = ans + "" + count + temp;
    }
  }
  return ans;
};

export {};
