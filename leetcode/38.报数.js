"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
  data = [];
  getLast() {
    return this.data[this.data.length - 1];
  }
  addMany(str) {
    str.split("").forEach((character) => this.add(character));
    return this;
  }
  add(character) {
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
var countAndSay = function (n) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgu5oql5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zOC7miqXmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q0c7QUFDSCxNQUFNLEtBQUs7SUFDVCxJQUFJLEdBQTJDLEVBQUUsQ0FBQztJQUVsRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELEdBQUcsQ0FBQyxTQUFpQjtRQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0Y7QUFFRDs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQVM7SUFDbkMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDYixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNWLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNqRDtJQUVELE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQztJQUM1QixNQUFNO0lBQ04sVUFBVTtJQUVWLEtBQUs7SUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFFdkIsV0FBVztJQUNYLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFBRSxLQUFLLEVBQUUsQ0FBQzthQUN4QjtZQUNILEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDWDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDL0I7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MzggbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzM4XSDmiqXmlbBcbiAqXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9jb3VudC1hbmQtc2F5L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQ4LjM4JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICAyMi45S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDQ3LjNLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJzEnXG4gKlxuICog5oql5pWw5bqP5YiX5piv5LiA5Liq5pW05pWw5bqP5YiX77yM5oyJ54Wn5YW25Lit55qE5pW05pWw55qE6aG65bqP6L+b6KGM5oql5pWw77yM5b6X5Yiw5LiL5LiA5Liq5pWw44CC5YW25YmN5LqU6aG55aaC5LiL77yaXG4gKlxuICogMS4gICAgIDFcbiAqIDIuICAgICAxMVxuICogMy4gICAgIDIxXG4gKiA0LiAgICAgMTIxMVxuICogNS4gICAgIDExMTIyMVxuICpcbiAqXG4gKiAxIOiiq+ivu+S9nCAgXCJvbmUgMVwiICAoXCLkuIDkuKrkuIBcIikgLCDljbMgMTHjgIJcbiAqIDExIOiiq+ivu+S9nCBcInR3byAxc1wiIChcIuS4pOS4quS4gFwi77yJLCDljbMgMjHjgIJcbiAqIDIxIOiiq+ivu+S9nCBcIm9uZSAyXCIsICBcIm9uZSAxXCIg77yIXCLkuIDkuKrkuoxcIiAsICBcIuS4gOS4quS4gFwiKSAsIOWNsyAxMjEx44CCXG4gKlxuICog57uZ5a6a5LiA5Liq5q2j5pW05pWwIG7vvIgxIOKJpCBuIOKJpCAzMO+8ie+8jOi+k+WHuuaKpeaVsOW6j+WIl+eahOesrCBuIOmhueOAglxuICpcbiAqIOazqOaEj++8muaVtOaVsOmhuuW6j+WwhuihqOekuuS4uuS4gOS4quWtl+espuS4suOAglxuICpcbiAqXG4gKlxuICog56S65L6LIDE6XG4gKlxuICog6L6T5YWlOiAxXG4gKiDovpPlh7o6IFwiMVwiXG4gKlxuICpcbiAqIOekuuS+iyAyOlxuICpcbiAqIOi+k+WFpTogNFxuICog6L6T5Ye6OiBcIjEyMTFcIlxuICpcbiAqXG4gKi9cbmNsYXNzIENvdW50IHtcbiAgZGF0YTogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfT4gPSBbXTtcblxuICBnZXRMYXN0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgYWRkTWFueShzdHI6IHN0cmluZykge1xuICAgIHN0ci5zcGxpdChcIlwiKS5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHRoaXMuYWRkKGNoYXJhY3RlcikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkKGNoYXJhY3Rlcjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogY2hhcmFjdGVyLCBjb3VudDogMSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdCA9IHRoaXMuZ2V0TGFzdCgpO1xuICAgICAgaWYgKGxhc3QudGV4dCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgIGxhc3QuY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogY2hhcmFjdGVyLCBjb3VudDogMSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnJlZHVjZSgocHJlLCB7IHRleHQsIGNvdW50IH0pID0+IHByZSArIGNvdW50ICsgdGV4dCwgXCJcIik7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgY291bnRBbmRTYXkgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIGlmIChuLS0gPT09IDEpIHtcbiAgICByZXR1cm4gXCIxXCI7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IG5ldyBDb3VudCgpLmFkZChcIjFcIik7XG4gIHdoaWxlICgtLW4pIHtcbiAgICByZXN1bHQgPSBuZXcgQ291bnQoKS5hZGRNYW55KHJlc3VsdC50b1N0cmluZygpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGNvdW50QW5kU2F5MiA9IGZ1bmN0aW9uIChuKSB7XG4gIC8vIOWJjeS6lOmhuVxuICAvLyDpgJLlvZIgKyDov63ku6NcblxuICAvLyDnu4jmraJcbiAgaWYgKG4gPT0gMSkgcmV0dXJuIFwiMVwiO1xuXG4gIC8vIOmAkuW9kiAtIC8vMlxuICBsZXQgc3RyID0gY291bnRBbmRTYXkyKG4gLSAxKTtcbiAgbGV0IHRlbXAgPSBzdHJbMF07XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBhbnMgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZW1wID09PSBzdHJbaV0pIGNvdW50Kys7XG4gICAgZWxzZSB7XG4gICAgICBhbnMgPSBhbnMgKyBcIlwiICsgY291bnQgKyB0ZW1wO1xuICAgICAgdGVtcCA9IHN0cltpXTtcbiAgICAgIGNvdW50ID0gMTtcbiAgICB9XG4gICAgaWYgKGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICBhbnMgPSBhbnMgKyBcIlwiICsgY291bnQgKyB0ZW1wO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYW5zO1xufTtcblxuZXhwb3J0IHt9O1xuIl19
