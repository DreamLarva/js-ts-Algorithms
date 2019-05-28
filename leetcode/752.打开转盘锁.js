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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLuaJk+W8gOi9rOebmOmUgS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzUyLuaJk+W8gOi9rOebmOmUgS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQ0k7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxRQUFrQixFQUFFLE1BQWM7SUFDdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxHQUFHLEtBQUssTUFBTTtvQkFBRSxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQzFCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUMxRCxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsRUFDbEYsQ0FBQyxDQUFDLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7kvaDmnInkuIDkuKrluKbmnInlm5vkuKrlnIblvaLmi6jova7nmoTovaznm5jplIHjgILmr4/kuKrmi6jova7pg73mnIkxMOS4quaVsOWtl++8miAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScg44CC5q+P5Liq5ouo6L2u5Y+v5Lul6Ieq55Sx5peL6L2s77ya5L6L5aaC5oqKICc5JyDlj5jkuLogICcwJ++8jCcwJyDlj5jkuLogJzknIOOAguavj+asoeaXi+i9rOmDveWPquiDveaXi+i9rOS4gOS4quaLqOi9rueahOS4gOS9jeaVsOWtl+OAglxuXG7plIHnmoTliJ3lp4vmlbDlrZfkuLogJzAwMDAnIO+8jOS4gOS4quS7o+ihqOWbm+S4quaLqOi9rueahOaVsOWtl+eahOWtl+espuS4suOAglxuXG7liJfooaggZGVhZGVuZHMg5YyF5ZCr5LqG5LiA57uE5q275Lqh5pWw5a2X77yM5LiA5pem5ouo6L2u55qE5pWw5a2X5ZKM5YiX6KGo6YeM55qE5Lu75L2V5LiA5Liq5YWD57Sg55u45ZCM77yM6L+Z5Liq6ZSB5bCG5Lya6KKr5rC45LmF6ZSB5a6a77yM5peg5rOV5YaN6KKr5peL6L2s44CCXG5cbuWtl+espuS4siB0YXJnZXQg5Luj6KGo5Y+v5Lul6Kej6ZSB55qE5pWw5a2X77yM5L2g6ZyA6KaB57uZ5Ye65pyA5bCP55qE5peL6L2s5qyh5pWw77yM5aaC5p6c5peg6K665aaC5L2V5LiN6IO96Kej6ZSB77yM6L+U5ZueIC0x44CCXG5cblxuXG7npLrkvosgMTpcblxu6L6T5YWl77yaZGVhZGVuZHMgPSBbXCIwMjAxXCIsXCIwMTAxXCIsXCIwMTAyXCIsXCIxMjEyXCIsXCIyMDAyXCJdLCB0YXJnZXQgPSBcIjAyMDJcIlxu6L6T5Ye677yaNlxu6Kej6YeK77yaXG7lj6/og73nmoTnp7vliqjluo/liJfkuLogXCIwMDAwXCIgLT4gXCIxMDAwXCIgLT4gXCIxMTAwXCIgLT4gXCIxMjAwXCIgLT4gXCIxMjAxXCIgLT4gXCIxMjAyXCIgLT4gXCIwMjAyXCLjgIJcbuazqOaEjyBcIjAwMDBcIiAtPiBcIjAwMDFcIiAtPiBcIjAwMDJcIiAtPiBcIjAxMDJcIiAtPiBcIjAyMDJcIiDov5nmoLfnmoTluo/liJfmmK/kuI3og73op6PplIHnmoTvvIxcbuWboOS4uuW9k+aLqOWKqOWIsCBcIjAxMDJcIiDml7bov5nkuKrplIHlsLHkvJrooqvplIHlrprjgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6IGRlYWRlbmRzID0gW1wiODg4OFwiXSwgdGFyZ2V0ID0gXCIwMDA5XCJcbui+k+WHuu+8mjFcbuino+mHiu+8mlxu5oqK5pyA5ZCO5LiA5L2N5Y+N5ZCR5peL6L2s5LiA5qyh5Y2z5Y+vIFwiMDAwMFwiIC0+IFwiMDAwOVwi44CCXG7npLrkvosgMzpcblxu6L6T5YWlOiBkZWFkZW5kcyA9IFtcIjg4ODdcIixcIjg4ODlcIixcIjg4NzhcIixcIjg4OThcIixcIjg3ODhcIixcIjg5ODhcIixcIjc4ODhcIixcIjk4ODhcIl0sIHRhcmdldCA9IFwiODg4OFwiXG7ovpPlh7rvvJotMVxu6Kej6YeK77yaXG7ml6Dms5Xml4vovazliLDnm67moIfmlbDlrZfkuJTkuI3ooqvplIHlrprjgIJcbuekuuS+iyA0OlxuXG7ovpPlhaU6IGRlYWRlbmRzID0gW1wiMDAwMFwiXSwgdGFyZ2V0ID0gXCI4ODg4XCJcbui+k+WHuu+8mi0xXG5cblxu5o+Q56S677yaXG5cbjEuIOatu+S6oeWIl+ihqCBkZWFkZW5kcyDnmoTplb/luqbojIPlm7TkuLogWzEsIDUwMF3jgIJcbjIuIOebruagh+aVsOWtlyB0YXJnZXQg5LiN5Lya5ZyoIGRlYWRlbmRzIOS5i+S4reOAglxuMy4g5q+P5LiqIGRlYWRlbmRzIOWSjCB0YXJnZXQg5Lit55qE5a2X56ym5Liy55qE5pWw5a2X5Lya5ZyoIDEwLDAwMCDkuKrlj6/og73nmoTmg4XlhrUgJzAwMDAnIOWIsCAnOTk5OScg5Lit5Lqn55Sf44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlYWRlbmRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBvcGVuTG9jayA9IGZ1bmN0aW9uIChkZWFkZW5kczogc3RyaW5nW10sIHRhcmdldDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGVhZGVuZHNfc2V0ID0gbmV3IFNldChkZWFkZW5kcyk7XG4gICAgaWYgKGRlYWRlbmRzX3NldC5oYXMoXCIwMDAwXCIpKSByZXR1cm4gLTE7XG4gICAgY29uc3QgbGlzdDogW3N0cmluZywgbnVtYmVyXVtdID0gW107XG4gICAgbGlzdC5wdXNoKFtcIjAwMDBcIiwgMF0pO1xuICAgIHdoaWxlIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBbbm9kZSwgc3RlcF0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhY3Rpb24gb2YgWzEsIC0xXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cl9hcnIgPSBBcnJheS5mcm9tKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cl9hcnJbaV0gPSBTdHJpbmcoKHBhcnNlSW50KHN0cl9hcnJbaV0pICsgMTAgKyBhY3Rpb24pICUgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1ciA9IHN0cl9hcnIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyID09PSB0YXJnZXQpIHJldHVybiBzdGVwICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoIWRlYWRlbmRzX3NldC5oYXMoY3VyKSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW2N1ciwgc3RlcCArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVhZGVuZHNfc2V0LmFkZChjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgb3BlbkxvY2soW1wiODg4OFwiXSwgXCIwMDA5XCIpLFxuICAgIDEsXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIG9wZW5Mb2NrKFtcIjAyMDFcIiwgXCIwMTAxXCIsIFwiMDEwMlwiLCBcIjEyMTJcIiwgXCIyMDAyXCJdLCBcIjAyMDJcIiksXG4gICAgNixcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgb3BlbkxvY2soW1wiODg4N1wiLCBcIjg4ODlcIiwgXCI4ODc4XCIsIFwiODg5OFwiLCBcIjg3ODhcIiwgXCI4OTg4XCIsIFwiNzg4OFwiLCBcIjk4ODhcIl0sIFwiODg4OFwiKSxcbiAgICAtMSxcbik7XG4iXX0=