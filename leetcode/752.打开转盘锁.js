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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLuaJk+W8gOi9rOebmOmUgS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzUyLuaJk+W8gOi9rOebmOmUgS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQ0k7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxRQUFrQixFQUFFLE1BQWM7SUFDekQsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxHQUFHLEtBQUssTUFBTTtvQkFBRSxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsRUFDMUQsQ0FBQyxDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsUUFBUSxDQUNOLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUNoRSxNQUFNLENBQ1AsRUFDRCxDQUFDLENBQUMsQ0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5L2g5pyJ5LiA5Liq5bim5pyJ5Zub5Liq5ZyG5b2i5ouo6L2u55qE6L2s55uY6ZSB44CC5q+P5Liq5ouo6L2u6YO95pyJMTDkuKrmlbDlrZfvvJogJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknIOOAguavj+S4quaLqOi9ruWPr+S7peiHqueUseaXi+i9rO+8muS+i+WmguaKiiAnOScg5Y+Y5Li6ICAnMCfvvIwnMCcg5Y+Y5Li6ICc5JyDjgILmr4/mrKHml4vovazpg73lj6rog73ml4vovazkuIDkuKrmi6jova7nmoTkuIDkvY3mlbDlrZfjgIJcclxuXHJcbumUgeeahOWIneWni+aVsOWtl+S4uiAnMDAwMCcg77yM5LiA5Liq5Luj6KGo5Zub5Liq5ouo6L2u55qE5pWw5a2X55qE5a2X56ym5Liy44CCXHJcblxyXG7liJfooaggZGVhZGVuZHMg5YyF5ZCr5LqG5LiA57uE5q275Lqh5pWw5a2X77yM5LiA5pem5ouo6L2u55qE5pWw5a2X5ZKM5YiX6KGo6YeM55qE5Lu75L2V5LiA5Liq5YWD57Sg55u45ZCM77yM6L+Z5Liq6ZSB5bCG5Lya6KKr5rC45LmF6ZSB5a6a77yM5peg5rOV5YaN6KKr5peL6L2s44CCXHJcblxyXG7lrZfnrKbkuLIgdGFyZ2V0IOS7o+ihqOWPr+S7peino+mUgeeahOaVsOWtl++8jOS9oOmcgOimgee7meWHuuacgOWwj+eahOaXi+i9rOasoeaVsO+8jOWmguaenOaXoOiuuuWmguS9leS4jeiDveino+mUge+8jOi/lOWbniAtMeOAglxyXG5cclxuXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpe+8mmRlYWRlbmRzID0gW1wiMDIwMVwiLFwiMDEwMVwiLFwiMDEwMlwiLFwiMTIxMlwiLFwiMjAwMlwiXSwgdGFyZ2V0ID0gXCIwMjAyXCJcclxu6L6T5Ye677yaNlxyXG7op6Pph4rvvJpcclxu5Y+v6IO955qE56e75Yqo5bqP5YiX5Li6IFwiMDAwMFwiIC0+IFwiMTAwMFwiIC0+IFwiMTEwMFwiIC0+IFwiMTIwMFwiIC0+IFwiMTIwMVwiIC0+IFwiMTIwMlwiIC0+IFwiMDIwMlwi44CCXHJcbuazqOaEjyBcIjAwMDBcIiAtPiBcIjAwMDFcIiAtPiBcIjAwMDJcIiAtPiBcIjAxMDJcIiAtPiBcIjAyMDJcIiDov5nmoLfnmoTluo/liJfmmK/kuI3og73op6PplIHnmoTvvIxcclxu5Zug5Li65b2T5ouo5Yqo5YiwIFwiMDEwMlwiIOaXtui/meS4qumUgeWwseS8muiiq+mUgeWumuOAglxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogZGVhZGVuZHMgPSBbXCI4ODg4XCJdLCB0YXJnZXQgPSBcIjAwMDlcIlxyXG7ovpPlh7rvvJoxXHJcbuino+mHiu+8mlxyXG7miormnIDlkI7kuIDkvY3lj43lkJHml4vovazkuIDmrKHljbPlj68gXCIwMDAwXCIgLT4gXCIwMDA5XCLjgIJcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IGRlYWRlbmRzID0gW1wiODg4N1wiLFwiODg4OVwiLFwiODg3OFwiLFwiODg5OFwiLFwiODc4OFwiLFwiODk4OFwiLFwiNzg4OFwiLFwiOTg4OFwiXSwgdGFyZ2V0ID0gXCI4ODg4XCJcclxu6L6T5Ye677yaLTFcclxu6Kej6YeK77yaXHJcbuaXoOazleaXi+i9rOWIsOebruagh+aVsOWtl+S4lOS4jeiiq+mUgeWumuOAglxyXG7npLrkvosgNDpcclxuXHJcbui+k+WFpTogZGVhZGVuZHMgPSBbXCIwMDAwXCJdLCB0YXJnZXQgPSBcIjg4ODhcIlxyXG7ovpPlh7rvvJotMVxyXG5cclxuXHJcbuaPkOekuu+8mlxyXG5cclxuMS4g5q275Lqh5YiX6KGoIGRlYWRlbmRzIOeahOmVv+W6puiMg+WbtOS4uiBbMSwgNTAwXeOAglxyXG4yLiDnm67moIfmlbDlrZcgdGFyZ2V0IOS4jeS8muWcqCBkZWFkZW5kcyDkuYvkuK3jgIJcclxuMy4g5q+P5LiqIGRlYWRlbmRzIOWSjCB0YXJnZXQg5Lit55qE5a2X56ym5Liy55qE5pWw5a2X5Lya5ZyoIDEwLDAwMCDkuKrlj6/og73nmoTmg4XlhrUgJzAwMDAnIOWIsCAnOTk5OScg5Lit5Lqn55Sf44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlYWRlbmRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG9wZW5Mb2NrID0gZnVuY3Rpb24gKGRlYWRlbmRzOiBzdHJpbmdbXSwgdGFyZ2V0OiBzdHJpbmcpIHtcclxuICBjb25zdCBkZWFkZW5kc19zZXQgPSBuZXcgU2V0KGRlYWRlbmRzKTtcclxuICBpZiAoZGVhZGVuZHNfc2V0LmhhcyhcIjAwMDBcIikpIHJldHVybiAtMTtcclxuICBjb25zdCBsaXN0OiBbc3RyaW5nLCBudW1iZXJdW10gPSBbXTtcclxuICBsaXN0LnB1c2goW1wiMDAwMFwiLCAwXSk7XHJcbiAgd2hpbGUgKGxpc3QubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBbbm9kZSwgc3RlcF0gPSBsaXN0LnNoaWZ0KCkhO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgZm9yIChjb25zdCBhY3Rpb24gb2YgWzEsIC0xXSkge1xyXG4gICAgICAgIGNvbnN0IHN0cl9hcnIgPSBBcnJheS5mcm9tKG5vZGUpO1xyXG4gICAgICAgIHN0cl9hcnJbaV0gPSBTdHJpbmcoKHBhcnNlSW50KHN0cl9hcnJbaV0pICsgMTAgKyBhY3Rpb24pICUgMTApO1xyXG4gICAgICAgIGNvbnN0IGN1ciA9IHN0cl9hcnIuam9pbihcIlwiKTtcclxuICAgICAgICBpZiAoY3VyID09PSB0YXJnZXQpIHJldHVybiBzdGVwICsgMTtcclxuICAgICAgICBpZiAoIWRlYWRlbmRzX3NldC5oYXMoY3VyKSkge1xyXG4gICAgICAgICAgbGlzdC5wdXNoKFtjdXIsIHN0ZXAgKyAxXSk7XHJcbiAgICAgICAgICBkZWFkZW5kc19zZXQuYWRkKGN1cik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gLTE7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChvcGVuTG9jayhbXCI4ODg4XCJdLCBcIjAwMDlcIiksIDEpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgb3BlbkxvY2soW1wiMDIwMVwiLCBcIjAxMDFcIiwgXCIwMTAyXCIsIFwiMTIxMlwiLCBcIjIwMDJcIl0sIFwiMDIwMlwiKSxcclxuICA2XHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICBvcGVuTG9jayhcclxuICAgIFtcIjg4ODdcIiwgXCI4ODg5XCIsIFwiODg3OFwiLCBcIjg4OThcIiwgXCI4Nzg4XCIsIFwiODk4OFwiLCBcIjc4ODhcIiwgXCI5ODg4XCJdLFxyXG4gICAgXCI4ODg4XCJcclxuICApLFxyXG4gIC0xXHJcbik7XHJcbiJdfQ==