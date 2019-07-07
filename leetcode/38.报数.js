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
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 *
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 *
 * 注意：整数顺序将表示为一个字符串。
 *
 *
 *
 * 示例 1:
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
    constructor() {
        this.data = [];
    }
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
        }
        else {
            const last = this.getLast();
            if (last.text === character) {
                last.count++;
            }
            else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgu5oql5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zOC7miqXmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q0c7QUFDSCxNQUFNLEtBQUs7SUFBWDtRQUNJLFNBQUksR0FBMkMsRUFBRSxDQUFDO0lBNkJ0RCxDQUFDO0lBM0JHLE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsR0FBRyxDQUFDLFNBQWlCO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUVKO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFTO0lBQ2pDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ1gsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUNELElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDUixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDbkQ7SUFFRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTM4IGxhbmc9amF2YXNjcmlwdFxyXG4gKlxyXG4gKiBbMzhdIOaKpeaVsFxyXG4gKlxyXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9jb3VudC1hbmQtc2F5L2Rlc2NyaXB0aW9uL1xyXG4gKlxyXG4gKiBhbGdvcml0aG1zXHJcbiAqIEVhc3kgKDQ4LjM4JSlcclxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDIyLjlLXHJcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA0Ny4zS1xyXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJzEnXHJcbiAqXHJcbiAqIOaKpeaVsOW6j+WIl+aYr+S4gOS4quaVtOaVsOW6j+WIl++8jOaMieeFp+WFtuS4reeahOaVtOaVsOeahOmhuuW6j+i/m+ihjOaKpeaVsO+8jOW+l+WIsOS4i+S4gOS4quaVsOOAguWFtuWJjeS6lOmhueWmguS4i++8mlxyXG4gKlxyXG4gKiAxLiAgICAgMVxyXG4gKiAyLiAgICAgMTFcclxuICogMy4gICAgIDIxXHJcbiAqIDQuICAgICAxMjExXHJcbiAqIDUuICAgICAxMTEyMjFcclxuICpcclxuICpcclxuICogMcKg6KKr6K+75L2cwqDCoFwib25lIDFcIsKgwqAoXCLkuIDkuKrkuIBcIikgLCDljbPCoDEx44CCXHJcbiAqIDExIOiiq+ivu+S9nMKgXCJ0d28gMXNcIsKgKFwi5Lik5Liq5LiAXCLvvIksIOWNs8KgMjHjgIJcclxuICogMjEg6KKr6K+75L2cwqBcIm9uZSAyXCIsIMKgXCJvbmUgMVwiwqDvvIhcIuS4gOS4quS6jFwiwqAswqDCoFwi5LiA5Liq5LiAXCIpwqAsIOWNs8KgMTIxMeOAglxyXG4gKlxyXG4gKiDnu5nlrprkuIDkuKrmraPmlbTmlbAgbu+8iDEg4omkwqBuwqDiiaQgMzDvvInvvIzovpPlh7rmiqXmlbDluo/liJfnmoTnrKwgbiDpobnjgIJcclxuICpcclxuICog5rOo5oSP77ya5pW05pWw6aG65bqP5bCG6KGo56S65Li65LiA5Liq5a2X56ym5Liy44CCXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqIOekuuS+i8KgMTpcclxuICpcclxuICog6L6T5YWlOiAxXHJcbiAqIOi+k+WHujogXCIxXCJcclxuICpcclxuICpcclxuICog56S65L6LIDI6XHJcbiAqXHJcbiAqIOi+k+WFpTogNFxyXG4gKiDovpPlh7o6IFwiMTIxMVwiXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBDb3VudCB7XHJcbiAgICBkYXRhOiBBcnJheTx7IHRleHQ6IHN0cmluZywgY291bnQ6IG51bWJlciB9PiA9IFtdO1xyXG5cclxuICAgIGdldExhc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmRhdGEubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWFueShzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHN0ci5zcGxpdChcIlwiKS5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHRoaXMuYWRkKGNoYXJhY3RlcikpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChjaGFyYWN0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKHt0ZXh0OiBjaGFyYWN0ZXIsIGNvdW50OiAxfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMuZ2V0TGFzdCgpO1xyXG4gICAgICAgICAgICBpZiAobGFzdC50ZXh0ID09PSBjaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxhc3QuY291bnQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKHt0ZXh0OiBjaGFyYWN0ZXIsIGNvdW50OiAxfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKHByZSwge3RleHQsIGNvdW50fSkgPT4gcHJlICsgY291bnQgKyB0ZXh0LCBcIlwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgY291bnRBbmRTYXkgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgICBpZiAobi0tID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiMVwiO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBDb3VudCgpLmFkZChcIjFcIik7XHJcbiAgICB3aGlsZSAoLS1uKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IENvdW50KCkuYWRkTWFueShyZXN1bHQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19