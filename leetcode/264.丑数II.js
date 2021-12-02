"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
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
var nthUglyNumber = function (n) {
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(nthUglyNumber(10), 12);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY0LuS4keaVsElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNjQu5LiR5pWwSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNyQzs7Ozs7Ozs7Ozs7Ozs7V0FjTztJQUNQLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBRXhCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFWixJQUFJLEdBQUcsS0FBSyxHQUFHO1lBQUUsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxHQUFHLEtBQUssS0FBSztZQUFFLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksR0FBRyxLQUFLLElBQUk7WUFBRSxZQUFZLEVBQUUsQ0FBQztLQUNsQztJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nvJblhpnkuIDkuKrnqIvluo/vvIzmib7lh7rnrKwgbiDkuKrkuJHmlbDjgIJcblxu5LiR5pWw5bCx5piv5Y+q5YyF5ZCr6LSo5Zug5pWwIDIsIDMsIDUg55qE5q2j5pW05pWw44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBuID0gMTBcbui+k+WHujogMTJcbuino+mHijogMSwgMiwgMywgNCwgNSwgNiwgOCwgOSwgMTAsIDEyIOaYr+WJjSAxMCDkuKrkuJHmlbDjgIJcbuivtOaYjjpcblxuMSDmmK/kuJHmlbDjgIJcbm4g5LiN6LaF6L+HMTY5MOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbnRoVWdseU51bWJlciA9IGZ1bmN0aW9uIChuOiBudW1iZXIpOiBudW1iZXIge1xuICAvKipcbiAgICAg5LiJ5oyH6ZKI5rOV44CC5LiA6YOo5YiG5piv5LiR5pWw5pWw57uE77yM5Y+m5LiA6YOo5YiG5piv5p2D6YeNMu+8jDPvvIw144CC5LiL5LiA5Liq5LiR5pWw77yM5a6a5LmJ5Li65LiR5pWw5pWw57uE5Lit55qE5pWw5LmY5Lul5p2D6YeN77yM5omA5b6X55qE5pyA5bCP5YC844CCXG5cbiAgICAg6YKj5LmI77yMMuivpeS5mOS7peiwge+8nzPor6XkuZjku6XosIHvvJ816K+l5LmY5Lul6LCB77yfXG5cbiAgICAg5YW25LiA77yM5L2/55So5LiJ5Liq5oyH6ZKIaWR4WzNd77yM5ZGK6K+J5a6D5Lus44CC5q+U5aaC77yMMuW6lOivpeS5mOS7pXVnbHlbaWR4WzBdXe+8jOWNs+aVsOe7hOS4reeahOesrGlkeFswXeS4quWAvOOAgu+8iOadg+mHjTLvvIwz77yMNeWIhuWIq+WvueW6lOaMh+mSiO+8jGlkeFswXSxpZHhbMV0saWR4WzJd77yJXG5cbiAgICAg5YW25LqM77yM5b2T5ZG95Lit5LiL5LiA5Liq5LiR5pWw5pe277yM6K+05piO6K+l5oyH6ZKI5oyH5ZCR55qE5LiR5pWwIOS5mOS7peWvueW6lOadg+mHjeaJgOW+l+enr+acgOWwj+OAguatpOaXtu+8jOaMh+mSiOW6lOivpeaMh+WQkeS4i+S4gOS4quS4keaVsOOAgu+8iGlkeFtd5Lit5L+d5a2Y55qE5piv5LiR5pWw5pWw57uE5LiL5qCH77yJXG5cbiAgICAg5YW25LiJ77yM6KaB5L2/55So5LiJ5Liq5bm25YiX55qEaWborqnmjIfpkojmjIflkJHkuIDkuKrmm7TlpKfnmoTmlbDvvIzkuI3og73nlKhpZi1lbHNl44CC5Zug5Li65pyJ6L+Z56eN5oOF5Ya177yaXG5cbiAgICAg5LiR5pWwNu+8jOWPr+iDveeUseS6juS4keaVsDLkuZjku6XmnYPph40z5Lqn55Sf77yb5Lmf5Y+v6IO955Sx5LqO5LiR5pWwM+S5mOS7peadg+mHjTLkuqfnlJ/jgIJcblxuICAgICDkuJHmlbAxMO+8jC4uLiDnrYnnrYnjgIJcbiAgICAgKiAqL1xuICBsZXQgcG9pbnRlcl90d28gPSAwO1xuICBsZXQgcG9pbnRlcl90aHJlZSA9IDA7XG4gIGxldCBwb2ludGVyX2ZpdmUgPSAwO1xuICBjb25zdCB0ID0gWzFdOyAvLyDnrKzkuIDkuKrmlbDkuLoxXG5cbiAgLy8g55Sx5LqO5a2Y5YWl57yT5a2Y55qEIOaVsOS4gOWumuaYr+S4keaVsCDmiYDku6XkuZgg5LiKIDIgIDMgIDUg5Lmf5LiA5a6a5pivXG4gIC8vIOmCo+S5iOWwseS4jeeUqOeuoeS5i+WJjSDmnInlh6DkuKogMiAzIDUg5Y+q6KaB6KeJ5b6X546w5Zyo5piv6KaB5LmYIDIgMyA1IOS4reWTquWTquS4qlxuICAvLyAyIDMgNSDnmoTmjIfpkogg5piv5pyA5bCP55qE6YKj5Liq5YC8IOivtOaYjiDlupTor6Ug6YCJ5oup57yT5a2Y5Lit55qEIOS4i+S4gOS4quWAvCDmnaXkuZhcbiAgd2hpbGUgKHQubGVuZ3RoIDwgbikge1xuICAgIGNvbnN0IHR3byA9IHRbcG9pbnRlcl90d29dICogMjtcbiAgICBjb25zdCB0aHJlZSA9IHRbcG9pbnRlcl90aHJlZV0gKiAzO1xuICAgIGNvbnN0IGZpdmUgPSB0W3BvaW50ZXJfZml2ZV0gKiA1O1xuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHR3bywgdGhyZWUsIGZpdmUpO1xuICAgIHQucHVzaChtaW4pO1xuXG4gICAgaWYgKG1pbiA9PT0gdHdvKSBwb2ludGVyX3R3bysrO1xuICAgIGlmIChtaW4gPT09IHRocmVlKSBwb2ludGVyX3RocmVlKys7XG4gICAgaWYgKG1pbiA9PT0gZml2ZSkgcG9pbnRlcl9maXZlKys7XG4gIH1cblxuICByZXR1cm4gdFt0Lmxlbmd0aCAtIDFdO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChudGhVZ2x5TnVtYmVyKDEwKSwgMTIpO1xuIl19
