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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgu5oql5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zOC7miqXmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q0c7QUFDSCxNQUFNLEtBQUs7SUFDVCxJQUFJLEdBQTJDLEVBQUUsQ0FBQztJQUVsRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELEdBQUcsQ0FBQyxTQUFpQjtRQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0Y7QUFFRDs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQVM7SUFDbkMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDYixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNWLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNqRDtJQUVELE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTM4IGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFszOF0g5oql5pWwXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY291bnQtYW5kLXNheS9kZXNjcmlwdGlvbi9cbiAqXG4gKiBhbGdvcml0aG1zXG4gKiBFYXN5ICg0OC4zOCUpXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgMjIuOUtcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA0Ny4zS1xuICogVGVzdGNhc2UgRXhhbXBsZTogICcxJ1xuICpcbiAqIOaKpeaVsOW6j+WIl+aYr+S4gOS4quaVtOaVsOW6j+WIl++8jOaMieeFp+WFtuS4reeahOaVtOaVsOeahOmhuuW6j+i/m+ihjOaKpeaVsO+8jOW+l+WIsOS4i+S4gOS4quaVsOOAguWFtuWJjeS6lOmhueWmguS4i++8mlxuICpcbiAqIDEuICAgICAxXG4gKiAyLiAgICAgMTFcbiAqIDMuICAgICAyMVxuICogNC4gICAgIDEyMTFcbiAqIDUuICAgICAxMTEyMjFcbiAqXG4gKlxuICogMSDooqvor7vkvZwgIFwib25lIDFcIiAgKFwi5LiA5Liq5LiAXCIpICwg5Y2zIDEx44CCXG4gKiAxMSDooqvor7vkvZwgXCJ0d28gMXNcIiAoXCLkuKTkuKrkuIBcIu+8iSwg5Y2zIDIx44CCXG4gKiAyMSDooqvor7vkvZwgXCJvbmUgMlwiLCAgXCJvbmUgMVwiIO+8iFwi5LiA5Liq5LqMXCIgLCAgXCLkuIDkuKrkuIBcIikgLCDljbMgMTIxMeOAglxuICpcbiAqIOe7meWumuS4gOS4quato+aVtOaVsCBu77yIMSDiiaQgbiDiiaQgMzDvvInvvIzovpPlh7rmiqXmlbDluo/liJfnmoTnrKwgbiDpobnjgIJcbiAqXG4gKiDms6jmhI/vvJrmlbTmlbDpobrluo/lsIbooajnpLrkuLrkuIDkuKrlrZfnrKbkuLLjgIJcbiAqXG4gKlxuICpcbiAqIOekuuS+iyAxOlxuICpcbiAqIOi+k+WFpTogMVxuICog6L6T5Ye6OiBcIjFcIlxuICpcbiAqXG4gKiDnpLrkvosgMjpcbiAqXG4gKiDovpPlhaU6IDRcbiAqIOi+k+WHujogXCIxMjExXCJcbiAqXG4gKlxuICovXG5jbGFzcyBDb3VudCB7XG4gIGRhdGE6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0+ID0gW107XG5cbiAgZ2V0TGFzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGFkZE1hbnkoc3RyOiBzdHJpbmcpIHtcbiAgICBzdHIuc3BsaXQoXCJcIikuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB0aGlzLmFkZChjaGFyYWN0ZXIpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZChjaGFyYWN0ZXI6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IGNoYXJhY3RlciwgY291bnQ6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLmdldExhc3QoKTtcbiAgICAgIGlmIChsYXN0LnRleHQgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICBsYXN0LmNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IGNoYXJhY3RlciwgY291bnQ6IDEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKHByZSwgeyB0ZXh0LCBjb3VudCB9KSA9PiBwcmUgKyBjb3VudCArIHRleHQsIFwiXCIpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGNvdW50QW5kU2F5ID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuICBpZiAobi0tID09PSAxKSB7XG4gICAgcmV0dXJuIFwiMVwiO1xuICB9XG4gIGxldCByZXN1bHQgPSBuZXcgQ291bnQoKS5hZGQoXCIxXCIpO1xuICB3aGlsZSAoLS1uKSB7XG4gICAgcmVzdWx0ID0gbmV3IENvdW50KCkuYWRkTWFueShyZXN1bHQudG9TdHJpbmcoKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge307XG4iXX0=