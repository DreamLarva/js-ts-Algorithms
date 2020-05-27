"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
        if (min === two)
            pointer_two++;
        if (min === three)
            pointer_three++;
        if (min === five)
            pointer_five++;
    }
    return t[t.length - 1];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(nthUglyNumber(10), 12);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY0LuS4keaVsElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNjQu5LiR5pWwSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNyQzs7Ozs7Ozs7Ozs7Ozs7V0FjTztJQUNQLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBRXhCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFWixJQUFJLEdBQUcsS0FBSyxHQUFHO1lBQUUsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxHQUFHLEtBQUssS0FBSztZQUFFLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksR0FBRyxLQUFLLElBQUk7WUFBRSxZQUFZLEVBQUUsQ0FBQztLQUNsQztJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue8luWGmeS4gOS4queoi+W6j++8jOaJvuWHuuesrCBuIOS4quS4keaVsOOAglxyXG5cclxu5LiR5pWw5bCx5piv5Y+q5YyF5ZCr6LSo5Zug5pWwIDIsIDMsIDUg55qE5q2j5pW05pWw44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IG4gPSAxMFxyXG7ovpPlh7o6IDEyXHJcbuino+mHijogMSwgMiwgMywgNCwgNSwgNiwgOCwgOSwgMTAsIDEyIOaYr+WJjSAxMCDkuKrkuJHmlbDjgIJcclxu6K+05piOOlxyXG5cclxuMSDmmK/kuJHmlbDjgIJcclxubiDkuI3otoXov4cxNjkw44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBudGhVZ2x5TnVtYmVyID0gZnVuY3Rpb24gKG46IG51bWJlcik6IG51bWJlciB7XHJcbiAgLyoqXHJcbiAgICAg5LiJ5oyH6ZKI5rOV44CC5LiA6YOo5YiG5piv5LiR5pWw5pWw57uE77yM5Y+m5LiA6YOo5YiG5piv5p2D6YeNMu+8jDPvvIw144CC5LiL5LiA5Liq5LiR5pWw77yM5a6a5LmJ5Li65LiR5pWw5pWw57uE5Lit55qE5pWw5LmY5Lul5p2D6YeN77yM5omA5b6X55qE5pyA5bCP5YC844CCXHJcblxyXG4gICAgIOmCo+S5iO+8jDLor6XkuZjku6XosIHvvJ8z6K+l5LmY5Lul6LCB77yfNeivpeS5mOS7peiwge+8n1xyXG5cclxuICAgICDlhbbkuIDvvIzkvb/nlKjkuInkuKrmjIfpkohpZHhbM13vvIzlkYror4nlroPku6zjgILmr5TlpoLvvIwy5bqU6K+l5LmY5LuldWdseVtpZHhbMF1d77yM5Y2z5pWw57uE5Lit55qE56ysaWR4WzBd5Liq5YC844CC77yI5p2D6YeNMu+8jDPvvIw15YiG5Yir5a+55bqU5oyH6ZKI77yMaWR4WzBdLGlkeFsxXSxpZHhbMl3vvIlcclxuXHJcbiAgICAg5YW25LqM77yM5b2T5ZG95Lit5LiL5LiA5Liq5LiR5pWw5pe277yM6K+05piO6K+l5oyH6ZKI5oyH5ZCR55qE5LiR5pWwIOS5mOS7peWvueW6lOadg+mHjeaJgOW+l+enr+acgOWwj+OAguatpOaXtu+8jOaMh+mSiOW6lOivpeaMh+WQkeS4i+S4gOS4quS4keaVsOOAgu+8iGlkeFtd5Lit5L+d5a2Y55qE5piv5LiR5pWw5pWw57uE5LiL5qCH77yJXHJcblxyXG4gICAgIOWFtuS4ie+8jOimgeS9v+eUqOS4ieS4quW5tuWIl+eahGlm6K6p5oyH6ZKI5oyH5ZCR5LiA5Liq5pu05aSn55qE5pWw77yM5LiN6IO955SoaWYtZWxzZeOAguWboOS4uuaciei/meenjeaDheWGte+8mlxyXG5cclxuICAgICDkuJHmlbA277yM5Y+v6IO955Sx5LqO5LiR5pWwMuS5mOS7peadg+mHjTPkuqfnlJ/vvJvkuZ/lj6/og73nlLHkuo7kuJHmlbAz5LmY5Lul5p2D6YeNMuS6p+eUn+OAglxyXG5cclxuICAgICDkuJHmlbAxMO+8jC4uLiDnrYnnrYnjgIJcclxuICAgICAqICovXHJcbiAgbGV0IHBvaW50ZXJfdHdvID0gMDtcclxuICBsZXQgcG9pbnRlcl90aHJlZSA9IDA7XHJcbiAgbGV0IHBvaW50ZXJfZml2ZSA9IDA7XHJcbiAgY29uc3QgdCA9IFsxXTsgLy8g56ys5LiA5Liq5pWw5Li6MVxyXG5cclxuICAvLyDnlLHkuo7lrZjlhaXnvJPlrZjnmoQg5pWw5LiA5a6a5piv5LiR5pWwIOaJgOS7peS5mCDkuIogMiAgMyAgNSDkuZ/kuIDlrprmmK9cclxuICAvLyDpgqPkuYjlsLHkuI3nlKjnrqHkuYvliY0g5pyJ5Yeg5LiqIDIgMyA1IOWPquimgeinieW+l+eOsOWcqOaYr+imgeS5mCAyIDMgNSDkuK3lk6rlk6rkuKpcclxuICAvLyAyIDMgNSDnmoTmjIfpkogg5piv5pyA5bCP55qE6YKj5Liq5YC8IOivtOaYjiDlupTor6Ug6YCJ5oup57yT5a2Y5Lit55qEIOS4i+S4gOS4quWAvCDmnaXkuZhcclxuICB3aGlsZSAodC5sZW5ndGggPCBuKSB7XHJcbiAgICBjb25zdCB0d28gPSB0W3BvaW50ZXJfdHdvXSAqIDI7XHJcbiAgICBjb25zdCB0aHJlZSA9IHRbcG9pbnRlcl90aHJlZV0gKiAzO1xyXG4gICAgY29uc3QgZml2ZSA9IHRbcG9pbnRlcl9maXZlXSAqIDU7XHJcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0d28sIHRocmVlLCBmaXZlKTtcclxuICAgIHQucHVzaChtaW4pO1xyXG5cclxuICAgIGlmIChtaW4gPT09IHR3bykgcG9pbnRlcl90d28rKztcclxuICAgIGlmIChtaW4gPT09IHRocmVlKSBwb2ludGVyX3RocmVlKys7XHJcbiAgICBpZiAobWluID09PSBmaXZlKSBwb2ludGVyX2ZpdmUrKztcclxuICB9XHJcblxyXG4gIHJldHVybiB0W3QubGVuZ3RoIC0gMV07XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChudGhVZ2x5TnVtYmVyKDEwKSwgMTIpO1xyXG4iXX0=