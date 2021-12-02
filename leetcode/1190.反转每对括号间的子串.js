"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
1190. 反转每对括号间的子串
给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。



示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"


提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
我们确保所有括号都是成对出现的
* */
function reverseParentheses(s) {
  const stack1 = [];
  const stack2 = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      stack2.push(i);
    } else if (s[i] === ")") {
      stack1.push([stack2.pop(), i]);
    }
    i++;
  }
  const _s = s.split("");
  stack1.forEach(([start, end]) => {
    _s.splice(
      start + 1,
      end - start - 1,
      ..._s.slice(start + 1, end).reverse()
    );
  });
  return _s.join("").replace(/[()]/g, "");
}
/**
 *
 * 官方最优解
 * 第一步我们向右移动到左括号，此时我们跳跃到该左括号对应的右括号（进入了更深一层）；
 * 第二到第三步我们在括号内部向左移动（完成了更深层的遍历）；
 * 第四步我们向左移动到左括号，此时我们跳跃到该左括号对应的右括号（返回到上一层）；
 * 第五步我们在括号外向右移动（继续遍历）。
 * */
function reverseParentheses2(s) {
  const n = s.length;
  const pair = new Array(n).fill(0);
  /**
   * 创建一个 () 位置 对应 数组
   * */
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      const j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  }
  const sb = [];
  let index = 0;
  let step = 1; // 1 代表向右走 ; -1代表向左走
  while (index < n) {
    if (s[index] === "(" || s[index] === ")") {
      index = pair[index];
      step = -step; // 碰到 ( ) 就调转方向
    } else {
      sb.push(s[index]);
    }
    index += step;
  }
  return sb.join("");
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseParentheses("(abcd)"), "dcba");
assert_1.default.strictEqual(reverseParentheses("(u(love)i)"), "iloveu");
assert_1.default.strictEqual(reverseParentheses("(ed(et(oc))el)"), "leetcode");
assert_1.default.strictEqual(
  reverseParentheses("a(bcdefghijkl(mno)p)q"),
  "apmnolkjihgfedcbq"
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5MC7lj43ovazmr4/lr7nmi6zlj7fpl7TnmoTlrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzExOTAu5Y+N6L2s5q+P5a+55ous5Y+36Ze055qE5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDSTtBQUNKLFNBQVMsa0JBQWtCLENBQUMsQ0FBUztJQUNuQyxNQUFNLE1BQU0sR0FBdUIsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUNELENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFFRCxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQ1AsS0FBSyxHQUFHLENBQUMsRUFDVCxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFDZixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FDdEMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVEOzs7Ozs7O0tBT0s7QUFDTCxTQUFTLG1CQUFtQixDQUFDLENBQVM7SUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEM7O1NBRUs7SUFDTCxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO2FBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNiO0tBQ0Y7SUFFRCxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDbEMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3hDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZTtTQUM5QjthQUFNO1lBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuQjtRQUNELEtBQUssSUFBSSxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELGdCQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELGdCQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLEVBQzNDLG1CQUFtQixDQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjExOTAuIOWPjei9rOavj+WvueaLrOWPt+mXtOeahOWtkOS4slxu57uZ5Ye65LiA5Liq5a2X56ym5LiyIHPvvIjku4XlkKvmnInlsI/lhpnoi7HmloflrZfmr43lkozmi6zlj7fvvInjgIJcblxu6K+35L2g5oyJ54Wn5LuO5ous5Y+35YaF5Yiw5aSW55qE6aG65bqP77yM6YCQ5bGC5Y+N6L2s5q+P5a+55Yy56YWN5ous5Y+35Lit55qE5a2X56ym5Liy77yM5bm26L+U5Zue5pyA57uI55qE57uT5p6c44CCXG5cbuazqOaEj++8jOaCqOeahOe7k+aenOS4rSDkuI3lupQg5YyF5ZCr5Lu75L2V5ous5Y+344CCXG5cblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpzID0gXCIoYWJjZClcIlxu6L6T5Ye677yaXCJkY2JhXCJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mnMgPSBcIih1KGxvdmUpaSlcIlxu6L6T5Ye677yaXCJpbG92ZXVcIlxu56S65L6LIDPvvJpcblxu6L6T5YWl77yacyA9IFwiKGVkKGV0KG9jKSllbClcIlxu6L6T5Ye677yaXCJsZWV0Y29kZVwiXG7npLrkvosgNO+8mlxuXG7ovpPlhaXvvJpzID0gXCJhKGJjZGVmZ2hpamtsKG1ubylwKXFcIlxu6L6T5Ye677yaXCJhcG1ub2xramloZ2ZlZGNicVwiXG5cblxu5o+Q56S677yaXG5cbjAgPD0gcy5sZW5ndGggPD0gMjAwMFxucyDkuK3lj6rmnInlsI/lhpnoi7HmloflrZfmr43lkozmi6zlj7dcbuaIkeS7rOehruS/neaJgOacieaLrOWPt+mDveaYr+aIkOWvueWHuueOsOeahFxuKiAqL1xuZnVuY3Rpb24gcmV2ZXJzZVBhcmVudGhlc2VzKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHN0YWNrMTogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGNvbnN0IHN0YWNrMjogbnVtYmVyW10gPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IHMubGVuZ3RoKSB7XG4gICAgaWYgKHNbaV0gPT09IFwiKFwiKSB7XG4gICAgICBzdGFjazIucHVzaChpKTtcbiAgICB9IGVsc2UgaWYgKHNbaV0gPT09IFwiKVwiKSB7XG4gICAgICBzdGFjazEucHVzaChbc3RhY2syLnBvcCgpISwgaV0pO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICBjb25zdCBfcyA9IHMuc3BsaXQoXCJcIik7XG4gIHN0YWNrMS5mb3JFYWNoKChbc3RhcnQsIGVuZF0pID0+IHtcbiAgICBfcy5zcGxpY2UoXG4gICAgICBzdGFydCArIDEsXG4gICAgICBlbmQgLSBzdGFydCAtIDEsXG4gICAgICAuLi5fcy5zbGljZShzdGFydCArIDEsIGVuZCkucmV2ZXJzZSgpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9zLmpvaW4oXCJcIikucmVwbGFjZSgvWygpXS9nLCBcIlwiKTtcbn1cblxuLyoqXG4gKlxuICog5a6Y5pa55pyA5LyY6KejXG4gKiDnrKzkuIDmraXmiJHku6zlkJHlj7Pnp7vliqjliLDlt6bmi6zlj7fvvIzmraTml7bmiJHku6zot7Pot4PliLDor6Xlt6bmi6zlj7flr7nlupTnmoTlj7Pmi6zlj7fvvIjov5vlhaXkuobmm7Tmt7HkuIDlsYLvvInvvJtcbiAqIOesrOS6jOWIsOesrOS4ieatpeaIkeS7rOWcqOaLrOWPt+WGhemDqOWQkeW3puenu+WKqO+8iOWujOaIkOS6huabtOa3seWxgueahOmBjeWOhu+8ie+8m1xuICog56ys5Zub5q2l5oiR5Lus5ZCR5bem56e75Yqo5Yiw5bem5ous5Y+377yM5q2k5pe25oiR5Lus6Lez6LeD5Yiw6K+l5bem5ous5Y+35a+55bqU55qE5Y+z5ous5Y+377yI6L+U5Zue5Yiw5LiK5LiA5bGC77yJ77ybXG4gKiDnrKzkupTmraXmiJHku6zlnKjmi6zlj7flpJblkJHlj7Pnp7vliqjvvIjnu6fnu63pgY3ljobvvInjgIJcbiAqICovXG5mdW5jdGlvbiByZXZlcnNlUGFyZW50aGVzZXMyKHM6IHN0cmluZykge1xuICBjb25zdCBuID0gcy5sZW5ndGg7XG4gIGNvbnN0IHBhaXIgPSBuZXcgQXJyYXkobikuZmlsbCgwKTtcbiAgLyoqXG4gICAqIOWIm+W7uuS4gOS4qiAoKSDkvY3nva4g5a+55bqUIOaVsOe7hFxuICAgKiAqL1xuICBjb25zdCBzdGFjayA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChzW2ldID09PSBcIihcIikge1xuICAgICAgc3RhY2sucHVzaChpKTtcbiAgICB9IGVsc2UgaWYgKHNbaV0gPT0gXCIpXCIpIHtcbiAgICAgIGNvbnN0IGogPSBzdGFjay5wb3AoKSE7XG4gICAgICBwYWlyW2ldID0gajtcbiAgICAgIHBhaXJbal0gPSBpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNiID0gW107XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBzdGVwID0gMTsgLy8gMSDku6PooajlkJHlj7PotbAgOyAtMeS7o+ihqOWQkeW3pui1sFxuICB3aGlsZSAoaW5kZXggPCBuKSB7XG4gICAgaWYgKHNbaW5kZXhdID09PSBcIihcIiB8fCBzW2luZGV4XSA9PT0gXCIpXCIpIHtcbiAgICAgIGluZGV4ID0gcGFpcltpbmRleF07XG4gICAgICBzdGVwID0gLXN0ZXA7IC8vIOeisOWIsCAoICkg5bCx6LCD6L2s5pa55ZCRXG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goc1tpbmRleF0pO1xuICAgIH1cbiAgICBpbmRleCArPSBzdGVwO1xuICB9XG4gIHJldHVybiBzYi5qb2luKFwiXCIpO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VQYXJlbnRoZXNlcyhcIihhYmNkKVwiKSwgXCJkY2JhXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VQYXJlbnRoZXNlcyhcIih1KGxvdmUpaSlcIiksIFwiaWxvdmV1XCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VQYXJlbnRoZXNlcyhcIihlZChldChvYykpZWwpXCIpLCBcImxlZXRjb2RlXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICByZXZlcnNlUGFyZW50aGVzZXMoXCJhKGJjZGVmZ2hpamtsKG1ubylwKXFcIiksXG4gIFwiYXBtbm9sa2ppaGdmZWRjYnFcIlxuKTtcbiJdfQ==
