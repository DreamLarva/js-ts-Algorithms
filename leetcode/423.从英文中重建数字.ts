/*
423. 从英文中重建数字
给你一个字符串 s ，其中包含字母顺序打乱的用英文单词表示的若干数字（0-9）。按 升序 返回原始的数字。



示例 1：

输入：s = "owoztneoer"
输出："012"
示例 2：

输入：s = "fviefuro"
输出："45"


提示：

1 <= s.length <= 105
s[i] 为 ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"] 这些字符之一
s 保证是一个符合题目要求的字符串

* */
import { result } from "lodash";

function originalDigits(s: string): string {
  /*
  之一 如果一个数字里面某个字母出现多次

  字母	数字
   e	 0 1 3 5 7 8 9 // 3 7 要 * 2
   f	 4 5
   g	 8
   h	 3 8
   i	 5 6 8 9
   n	 1 7 9 // 9 要 * 2
   o	 0 1 2 4
   r	 0 3 4
   s	 6 7
   t	 2 3 8
   u	 4
   v	 5 7
   w	 2
   x	 6
   z	 0
  * */
  /**
   * 第一步推断 8 4 2 6 0
   * 通过一直继续推断 5  3  7
   * 通过一 二 直继续推断 9 1
   * */
  const map: { [k: string]: number } = {};
  for (const char of s) {
    map[char] = map[char] ?? 0;
    map[char]++;
  }

  const a: number[] = Array(10).fill(0);
  a[8] = map["g"] ?? 0;
  a[4] = map["u"] ?? 0;
  a[2] = map["w"] ?? 0;
  a[6] = map["x"] ?? 0;
  a[0] = map["z"] ?? 0;
  a[5] = (map["f"] ?? 0) - a[4];
  a[3] = (map["h"] ?? 0) - a[8];
  a[7] = (map["v"] ?? 0) - a[5];
  a[9] = (map["i"] ?? 0) - a[5] - a[6] - a[8];
  a[1] = (map["n"] ?? 0) - a[7] - a[9] * 2;

  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) continue;
    for (let j = 0; j < a[i]; j++) {
      result += i;
    }
  }
  return result;
}

import assert from "assert";
assert.strictEqual(originalDigits("nnei"), "9");
// assert.strictEqual(originalDigits("owoztneoer"), "012");
// assert.strictEqual(originalDigits("fviefuro"), "45");

type a = { a: unknown };
