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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgu5oql5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zOC7miqXmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q0c7QUFDSCxNQUFNLEtBQUs7SUFBWDtRQUNFLFNBQUksR0FBMkMsRUFBRSxDQUFDO0lBNEJwRCxDQUFDO0lBMUJDLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsR0FBRyxDQUFDLFNBQWlCO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQztTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBUztJQUNuQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNiLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ1YsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MzggbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzM4XSDmiqXmlbBcbiAqXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9jb3VudC1hbmQtc2F5L2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQ4LjM4JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICAyMi45S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDQ3LjNLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJzEnXG4gKlxuICog5oql5pWw5bqP5YiX5piv5LiA5Liq5pW05pWw5bqP5YiX77yM5oyJ54Wn5YW25Lit55qE5pW05pWw55qE6aG65bqP6L+b6KGM5oql5pWw77yM5b6X5Yiw5LiL5LiA5Liq5pWw44CC5YW25YmN5LqU6aG55aaC5LiL77yaXG4gKlxuICogMS4gICAgIDFcbiAqIDIuICAgICAxMVxuICogMy4gICAgIDIxXG4gKiA0LiAgICAgMTIxMVxuICogNS4gICAgIDExMTIyMVxuICpcbiAqXG4gKiAxwqDooqvor7vkvZzCoMKgXCJvbmUgMVwiwqDCoChcIuS4gOS4quS4gFwiKSAsIOWNs8KgMTHjgIJcbiAqIDExIOiiq+ivu+S9nMKgXCJ0d28gMXNcIsKgKFwi5Lik5Liq5LiAXCLvvIksIOWNs8KgMjHjgIJcbiAqIDIxIOiiq+ivu+S9nMKgXCJvbmUgMlwiLCDCoFwib25lIDFcIsKg77yIXCLkuIDkuKrkuoxcIsKgLMKgwqBcIuS4gOS4quS4gFwiKcKgLCDljbPCoDEyMTHjgIJcbiAqXG4gKiDnu5nlrprkuIDkuKrmraPmlbTmlbAgbu+8iDEg4omkwqBuwqDiiaQgMzDvvInvvIzovpPlh7rmiqXmlbDluo/liJfnmoTnrKwgbiDpobnjgIJcbiAqXG4gKiDms6jmhI/vvJrmlbTmlbDpobrluo/lsIbooajnpLrkuLrkuIDkuKrlrZfnrKbkuLLjgIJcbiAqXG4gKlxuICpcbiAqIOekuuS+i8KgMTpcbiAqXG4gKiDovpPlhaU6IDFcbiAqIOi+k+WHujogXCIxXCJcbiAqXG4gKlxuICog56S65L6LIDI6XG4gKlxuICog6L6T5YWlOiA0XG4gKiDovpPlh7o6IFwiMTIxMVwiXG4gKlxuICpcbiAqL1xuY2xhc3MgQ291bnQge1xuICBkYXRhOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgY291bnQ6IG51bWJlciB9PiA9IFtdO1xuXG4gIGdldExhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmRhdGEubGVuZ3RoIC0gMV07XG4gIH1cblxuICBhZGRNYW55KHN0cjogc3RyaW5nKSB7XG4gICAgc3RyLnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXJhY3RlcikgPT4gdGhpcy5hZGQoY2hhcmFjdGVyKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGQoY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBjaGFyYWN0ZXIsIGNvdW50OiAxIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0ID0gdGhpcy5nZXRMYXN0KCk7XG4gICAgICBpZiAobGFzdC50ZXh0ID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgbGFzdC5jb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBjaGFyYWN0ZXIsIGNvdW50OiAxIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEucmVkdWNlKChwcmUsIHsgdGV4dCwgY291bnQgfSkgPT4gcHJlICsgY291bnQgKyB0ZXh0LCBcIlwiKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBjb3VudEFuZFNheSA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgaWYgKG4tLSA9PT0gMSkge1xuICAgIHJldHVybiBcIjFcIjtcbiAgfVxuICBsZXQgcmVzdWx0ID0gbmV3IENvdW50KCkuYWRkKFwiMVwiKTtcbiAgd2hpbGUgKC0tbikge1xuICAgIHJlc3VsdCA9IG5ldyBDb3VudCgpLmFkZE1hbnkocmVzdWx0LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IHt9O1xuIl19