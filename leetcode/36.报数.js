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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYu5oql5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNi7miqXmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q0c7QUFDSCxNQUFNLEtBQUs7SUFBWDtRQUNJLFNBQUksR0FBMkMsRUFBRSxDQUFDO0lBNkJ0RCxDQUFDO0lBM0JHLE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsR0FBRyxDQUFDLFNBQWlCO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUVKO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFTO0lBQ2pDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ1gsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUNELElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDUixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDbkQ7SUFFRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0zOCBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMzhdIOaKpeaVsFxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2NvdW50LWFuZC1zYXkvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoNDguMzglKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDIyLjlLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogNDcuM0tcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnMSdcbiAqXG4gKiDmiqXmlbDluo/liJfmmK/kuIDkuKrmlbTmlbDluo/liJfvvIzmjInnhaflhbbkuK3nmoTmlbTmlbDnmoTpobrluo/ov5vooYzmiqXmlbDvvIzlvpfliLDkuIvkuIDkuKrmlbDjgILlhbbliY3kupTpobnlpoLkuIvvvJpcbiAqXG4gKiAxLiAgICAgMVxuICogMi4gICAgIDExXG4gKiAzLiAgICAgMjFcbiAqIDQuICAgICAxMjExXG4gKiA1LiAgICAgMTExMjIxXG4gKlxuICpcbiAqIDHCoOiiq+ivu+S9nMKgwqBcIm9uZSAxXCLCoMKgKFwi5LiA5Liq5LiAXCIpICwg5Y2zwqAxMeOAglxuICogMTEg6KKr6K+75L2cwqBcInR3byAxc1wiwqAoXCLkuKTkuKrkuIBcIu+8iSwg5Y2zwqAyMeOAglxuICogMjEg6KKr6K+75L2cwqBcIm9uZSAyXCIsIMKgXCJvbmUgMVwiwqDvvIhcIuS4gOS4quS6jFwiwqAswqDCoFwi5LiA5Liq5LiAXCIpwqAsIOWNs8KgMTIxMeOAglxuICpcbiAqIOe7meWumuS4gOS4quato+aVtOaVsCBu77yIMSDiiaTCoG7CoOKJpCAzMO+8ie+8jOi+k+WHuuaKpeaVsOW6j+WIl+eahOesrCBuIOmhueOAglxuICpcbiAqIOazqOaEj++8muaVtOaVsOmhuuW6j+WwhuihqOekuuS4uuS4gOS4quWtl+espuS4suOAglxuICpcbiAqXG4gKlxuICog56S65L6LwqAxOlxuICpcbiAqIOi+k+WFpTogMVxuICog6L6T5Ye6OiBcIjFcIlxuICpcbiAqXG4gKiDnpLrkvosgMjpcbiAqXG4gKiDovpPlhaU6IDRcbiAqIOi+k+WHujogXCIxMjExXCJcbiAqXG4gKlxuICovXG5jbGFzcyBDb3VudCB7XG4gICAgZGF0YTogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIGNvdW50OiBudW1iZXIgfT4gPSBbXTtcblxuICAgIGdldExhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIGFkZE1hbnkoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgc3RyLnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXJhY3RlcikgPT4gdGhpcy5hZGQoY2hhcmFjdGVyKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZChjaGFyYWN0ZXI6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goe3RleHQ6IGNoYXJhY3RlciwgY291bnQ6IDF9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLmdldExhc3QoKTtcbiAgICAgICAgICAgIGlmIChsYXN0LnRleHQgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIGxhc3QuY291bnQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goe3RleHQ6IGNoYXJhY3RlciwgY291bnQ6IDF9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKHByZSwge3RleHQsIGNvdW50fSkgPT4gcHJlICsgY291bnQgKyB0ZXh0LCBcIlwiKTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgY291bnRBbmRTYXkgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gICAgaWYgKG4tLSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gXCIxXCI7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSBuZXcgQ291bnQoKS5hZGQoXCIxXCIpO1xuICAgIHdoaWxlICgtLW4pIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IENvdW50KCkuYWRkTWFueShyZXN1bHQudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xufTtcblxuXG5leHBvcnQge307XG4iXX0=