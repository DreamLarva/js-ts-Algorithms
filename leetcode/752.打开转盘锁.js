"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。



示例 1:

输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
输出：6
解释：
可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
因为当拨动到 "0102" 时这个锁就会被锁定。
示例 2:

输入: deadends = ["8888"], target = "0009"
输出：1
解释：
把最后一位反向旋转一次即可 "0000" -> "0009"。
示例 3:

输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
输出：-1
解释：
无法旋转到目标数字且不被锁定。
示例 4:

输入: deadends = ["0000"], target = "8888"
输出：-1


提示：

1. 死亡列表 deadends 的长度范围为 [1, 500]。
2. 目标数字 target 不会在 deadends 之中。
3. 每个 deadends 和 target 中的字符串的数字会在 10,000 个可能的情况 '0000' 到 '9999' 中产生。
* */
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const deadends_set = new Set(deadends);
    if (deadends_set.has("0000"))
        return -1;
    const list = [];
    list.push(["0000", 0]);
    while (list.length) {
        const [node, step] = list.shift();
        for (let i = 0; i < 4; i++) {
            for (const action of [1, -1]) {
                const str_arr = Array.from(node);
                str_arr[i] = String((parseInt(str_arr[i]) + 10 + action) % 10);
                const cur = str_arr.join("");
                if (cur === target)
                    return step + 1;
                if (!deadends_set.has(cur)) {
                    list.push([cur, step + 1]);
                    deadends_set.add(cur);
                }
            }
        }
    }
    return -1;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(openLock(["8888"], "0009"), 1);
assert_1.default.strictEqual(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"), 6);
assert_1.default.strictEqual(openLock(["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888"), -1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLuaJk+W8gOi9rOebmOmUgS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzUyLuaJk+W8gOi9rOebmOmUgS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQ0k7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxRQUFrQixFQUFFLE1BQWM7SUFDekQsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxHQUFHLEtBQUssTUFBTTtvQkFBRSxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsRUFDMUQsQ0FBQyxDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsUUFBUSxDQUNOLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUNoRSxNQUFNLENBQ1AsRUFDRCxDQUFDLENBQUMsQ0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS9oOacieS4gOS4quW4puacieWbm+S4quWchuW9ouaLqOi9rueahOi9rOebmOmUgeOAguavj+S4quaLqOi9rumDveaciTEw5Liq5pWw5a2X77yaICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyDjgILmr4/kuKrmi6jova7lj6/ku6Xoh6rnlLHml4vovazvvJrkvovlpoLmioogJzknIOWPmOS4uiAgJzAn77yMJzAnIOWPmOS4uiAnOScg44CC5q+P5qyh5peL6L2s6YO95Y+q6IO95peL6L2s5LiA5Liq5ouo6L2u55qE5LiA5L2N5pWw5a2X44CCXG5cbumUgeeahOWIneWni+aVsOWtl+S4uiAnMDAwMCcg77yM5LiA5Liq5Luj6KGo5Zub5Liq5ouo6L2u55qE5pWw5a2X55qE5a2X56ym5Liy44CCXG5cbuWIl+ihqCBkZWFkZW5kcyDljIXlkKvkuobkuIDnu4TmrbvkuqHmlbDlrZfvvIzkuIDml6bmi6jova7nmoTmlbDlrZflkozliJfooajph4znmoTku7vkvZXkuIDkuKrlhYPntKDnm7jlkIzvvIzov5nkuKrplIHlsIbkvJrooqvmsLjkuYXplIHlrprvvIzml6Dms5Xlho3ooqvml4vovazjgIJcblxu5a2X56ym5LiyIHRhcmdldCDku6Pooajlj6/ku6Xop6PplIHnmoTmlbDlrZfvvIzkvaDpnIDopoHnu5nlh7rmnIDlsI/nmoTml4vovazmrKHmlbDvvIzlpoLmnpzml6DorrrlpoLkvZXkuI3og73op6PplIHvvIzov5Tlm54gLTHjgIJcblxuXG5cbuekuuS+iyAxOlxuXG7ovpPlhaXvvJpkZWFkZW5kcyA9IFtcIjAyMDFcIixcIjAxMDFcIixcIjAxMDJcIixcIjEyMTJcIixcIjIwMDJcIl0sIHRhcmdldCA9IFwiMDIwMlwiXG7ovpPlh7rvvJo2XG7op6Pph4rvvJpcbuWPr+iDveeahOenu+WKqOW6j+WIl+S4uiBcIjAwMDBcIiAtPiBcIjEwMDBcIiAtPiBcIjExMDBcIiAtPiBcIjEyMDBcIiAtPiBcIjEyMDFcIiAtPiBcIjEyMDJcIiAtPiBcIjAyMDJcIuOAglxu5rOo5oSPIFwiMDAwMFwiIC0+IFwiMDAwMVwiIC0+IFwiMDAwMlwiIC0+IFwiMDEwMlwiIC0+IFwiMDIwMlwiIOi/meagt+eahOW6j+WIl+aYr+S4jeiDveino+mUgeeahO+8jFxu5Zug5Li65b2T5ouo5Yqo5YiwIFwiMDEwMlwiIOaXtui/meS4qumUgeWwseS8muiiq+mUgeWumuOAglxu56S65L6LIDI6XG5cbui+k+WFpTogZGVhZGVuZHMgPSBbXCI4ODg4XCJdLCB0YXJnZXQgPSBcIjAwMDlcIlxu6L6T5Ye677yaMVxu6Kej6YeK77yaXG7miormnIDlkI7kuIDkvY3lj43lkJHml4vovazkuIDmrKHljbPlj68gXCIwMDAwXCIgLT4gXCIwMDA5XCLjgIJcbuekuuS+iyAzOlxuXG7ovpPlhaU6IGRlYWRlbmRzID0gW1wiODg4N1wiLFwiODg4OVwiLFwiODg3OFwiLFwiODg5OFwiLFwiODc4OFwiLFwiODk4OFwiLFwiNzg4OFwiLFwiOTg4OFwiXSwgdGFyZ2V0ID0gXCI4ODg4XCJcbui+k+WHuu+8mi0xXG7op6Pph4rvvJpcbuaXoOazleaXi+i9rOWIsOebruagh+aVsOWtl+S4lOS4jeiiq+mUgeWumuOAglxu56S65L6LIDQ6XG5cbui+k+WFpTogZGVhZGVuZHMgPSBbXCIwMDAwXCJdLCB0YXJnZXQgPSBcIjg4ODhcIlxu6L6T5Ye677yaLTFcblxuXG7mj5DnpLrvvJpcblxuMS4g5q275Lqh5YiX6KGoIGRlYWRlbmRzIOeahOmVv+W6puiMg+WbtOS4uiBbMSwgNTAwXeOAglxuMi4g55uu5qCH5pWw5a2XIHRhcmdldCDkuI3kvJrlnKggZGVhZGVuZHMg5LmL5Lit44CCXG4zLiDmr4/kuKogZGVhZGVuZHMg5ZKMIHRhcmdldCDkuK3nmoTlrZfnrKbkuLLnmoTmlbDlrZfkvJrlnKggMTAsMDAwIOS4quWPr+iDveeahOaDheWGtSAnMDAwMCcg5YiwICc5OTk5JyDkuK3kuqfnlJ/jgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZGVhZGVuZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG9wZW5Mb2NrID0gZnVuY3Rpb24gKGRlYWRlbmRzOiBzdHJpbmdbXSwgdGFyZ2V0OiBzdHJpbmcpIHtcbiAgY29uc3QgZGVhZGVuZHNfc2V0ID0gbmV3IFNldChkZWFkZW5kcyk7XG4gIGlmIChkZWFkZW5kc19zZXQuaGFzKFwiMDAwMFwiKSkgcmV0dXJuIC0xO1xuICBjb25zdCBsaXN0OiBbc3RyaW5nLCBudW1iZXJdW10gPSBbXTtcbiAgbGlzdC5wdXNoKFtcIjAwMDBcIiwgMF0pO1xuICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICBjb25zdCBbbm9kZSwgc3RlcF0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBbMSwgLTFdKSB7XG4gICAgICAgIGNvbnN0IHN0cl9hcnIgPSBBcnJheS5mcm9tKG5vZGUpO1xuICAgICAgICBzdHJfYXJyW2ldID0gU3RyaW5nKChwYXJzZUludChzdHJfYXJyW2ldKSArIDEwICsgYWN0aW9uKSAlIDEwKTtcbiAgICAgICAgY29uc3QgY3VyID0gc3RyX2Fyci5qb2luKFwiXCIpO1xuICAgICAgICBpZiAoY3VyID09PSB0YXJnZXQpIHJldHVybiBzdGVwICsgMTtcbiAgICAgICAgaWYgKCFkZWFkZW5kc19zZXQuaGFzKGN1cikpIHtcbiAgICAgICAgICBsaXN0LnB1c2goW2N1ciwgc3RlcCArIDFdKTtcbiAgICAgICAgICBkZWFkZW5kc19zZXQuYWRkKGN1cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKG9wZW5Mb2NrKFtcIjg4ODhcIl0sIFwiMDAwOVwiKSwgMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIG9wZW5Mb2NrKFtcIjAyMDFcIiwgXCIwMTAxXCIsIFwiMDEwMlwiLCBcIjEyMTJcIiwgXCIyMDAyXCJdLCBcIjAyMDJcIiksXG4gIDZcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIG9wZW5Mb2NrKFxuICAgIFtcIjg4ODdcIiwgXCI4ODg5XCIsIFwiODg3OFwiLCBcIjg4OThcIiwgXCI4Nzg4XCIsIFwiODk4OFwiLCBcIjc4ODhcIiwgXCI5ODg4XCJdLFxuICAgIFwiODg4OFwiXG4gICksXG4gIC0xXG4pO1xuIl19