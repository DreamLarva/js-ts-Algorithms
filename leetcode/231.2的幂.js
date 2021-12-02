"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
示例 1:

输入: 1
输出: true
解释: 2 ** 0 = 1
示例 2:

输入: 16
输出: true
解释: 2 ** 4 = 16
示例 3:

输入: 218
输出: false
* */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {};
function solution1(n) {
  /**
   * js 所以数字 都是32位有符号类型
   * 正数 左起第一为 0
   * 负数 左起第一为 1
   * 负数的表示方式为 正数的补码 + 1
   * 5 => 0...0101
   * -5 => 取补码 1...1010  => 加1 1...1011
   *
   * 如果是 2 的n次幂 那么 补码 那么负数一定是符合正则 11{31 - n}0{n}
   * 与原值 00{31 -1 - n}10{n} 做 位与 操作 那么 刚好 与原值相等
   * */
  return n > 0 && (n & -n) === n;
}
function solution2(n) {
  // 由于 2的n次幂 -1操作后 最高位一定会退位 和 自己做 位与 操作刚好错开 值为0
  return n > 0 && (n & (n - 1)) === 0;
}
function solution3(n) {
  // 直接获取 最大 2的n次幂 来做取余操作
  return n > 0 && (1 << 30) % n === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMxLjLnmoTluYIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIzMS4y55qE5bmCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVMsSUFBRyxDQUFDLENBQUM7QUFFM0MsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUMxQjs7Ozs7Ozs7OztTQVVLO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQzFCLDhDQUE4QztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLENBQVM7SUFDMUIsdUJBQXVCO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pW05pWw77yM57yW5YaZ5LiA5Liq5Ye95pWw5p2l5Yik5pat5a6D5piv5ZCm5pivIDIg55qE5bmC5qyh5pa544CCXG7npLrkvosgMTpcblxu6L6T5YWlOiAxXG7ovpPlh7o6IHRydWVcbuino+mHijogMiAqKiAwID0gMVxu56S65L6LIDI6XG5cbui+k+WFpTogMTZcbui+k+WHujogdHJ1ZVxu6Kej6YeKOiAyICoqIDQgPSAxNlxu56S65L6LIDM6XG5cbui+k+WFpTogMjE4XG7ovpPlh7o6IGZhbHNlXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNQb3dlck9mVHdvID0gZnVuY3Rpb24gKG46IG51bWJlcikge307XG5cbmZ1bmN0aW9uIHNvbHV0aW9uMShuOiBudW1iZXIpIHtcbiAgLyoqXG4gICAqIGpzIOaJgOS7peaVsOWtlyDpg73mmK8zMuS9jeacieespuWPt+exu+Wei1xuICAgKiDmraPmlbAg5bem6LW356ys5LiA5Li6IDBcbiAgICog6LSf5pWwIOW3pui1t+esrOS4gOS4uiAxXG4gICAqIOi0n+aVsOeahOihqOekuuaWueW8j+S4uiDmraPmlbDnmoTooaXnoIEgKyAxXG4gICAqIDUgPT4gMC4uLjAxMDFcbiAgICogLTUgPT4g5Y+W6KGl56CBIDEuLi4xMDEwICA9PiDliqAxIDEuLi4xMDExXG4gICAqXG4gICAqIOWmguaenOaYryAyIOeahG7mrKHluYIg6YKj5LmIIOihpeeggSDpgqPkuYjotJ/mlbDkuIDlrprmmK/nrKblkIjmraPliJkgMTF7MzEgLSBufTB7bn1cbiAgICog5LiO5Y6f5YC8IDAwezMxIC0xIC0gbn0xMHtufSDlgZog5L2N5LiOIOaTjeS9nCDpgqPkuYgg5Yia5aW9IOS4juWOn+WAvOebuOetiVxuICAgKiAqL1xuICByZXR1cm4gbiA+IDAgJiYgKG4gJiAtbikgPT09IG47XG59XG5cbmZ1bmN0aW9uIHNvbHV0aW9uMihuOiBudW1iZXIpIHtcbiAgLy8g55Sx5LqOIDLnmoRu5qyh5bmCIC0x5pON5L2c5ZCOIOacgOmrmOS9jeS4gOWumuS8mumAgOS9jSDlkowg6Ieq5bex5YGaIOS9jeS4jiDmk43kvZzliJrlpb3plJnlvIAg5YC85Li6MFxuICByZXR1cm4gbiA+IDAgJiYgKG4gJiAobiAtIDEpKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gc29sdXRpb24zKG46IG51bWJlcikge1xuICAvLyDnm7TmjqXojrflj5Yg5pyA5aSnIDLnmoRu5qyh5bmCIOadpeWBmuWPluS9meaTjeS9nFxuICByZXR1cm4gbiA+IDAgJiYgKDEgPDwgMzApICUgbiA9PT0gMDtcbn1cblxuZXhwb3J0IHt9O1xuIl19
