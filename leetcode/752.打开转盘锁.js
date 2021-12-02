"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
function openLock(deadends, target) {
  if (target === "0000") return 0;
  const deadends_set = new Set(deadends);
  if (deadends_set.has("0000")) return -1;
  const list = [];
  list.push(["0000", 0]);
  while (list.length) {
    const [node, step] = list.shift();
    for (let i = 0; i < 4; i++) {
      for (const action of [1, -1]) {
        const str_arr = Array.from(node);
        //        实现 0 -> 9  9 -> 0
        str_arr[i] = String((parseInt(str_arr[i]) + 10 + action) % 10);
        const cur = str_arr.join("");
        if (cur === target) return step + 1;
        // 记录已经走过的点
        if (!deadends_set.has(cur)) {
          list.push([cur, step + 1]);
          deadends_set.add(cur);
        }
      }
    }
  }
  return -1;
}
const assert_1 = __importDefault(require("assert"));
// assert.strictEqual(openLock(["8888"], "0009"), 1);
assert_1.default.strictEqual(
  openLock(["0201", "0101", "0102", "1212", "2002"], "0202"),
  6
);
// assert.strictEqual(
//   openLock(
//     ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
//     "8888"
//   ),
//   -1
// );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLuaJk+W8gOi9rOebmOmUgS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzUyLuaJk+W8gOi9rOebmOmUgS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQ0k7QUFDSjs7OztHQUlHO0FBQ0gsU0FBUyxRQUFRLENBQUMsUUFBa0IsRUFBRSxNQUFjO0lBQ2xELElBQUksTUFBTSxLQUFLLE1BQU07UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxNQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLElBQUksR0FBdUIsRUFBRSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDbEIsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFHLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLDJCQUEyQjtnQkFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRS9ELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLElBQUksR0FBRyxLQUFLLE1BQU07b0JBQUUsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUVwQyxXQUFXO2dCQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLHFEQUFxRDtBQUNyRCxnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUMxRCxDQUFDLENBQ0YsQ0FBQztBQUNGLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2Qsd0VBQXdFO0FBQ3hFLGFBQWE7QUFDYixPQUFPO0FBQ1AsT0FBTztBQUNQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5L2g5pyJ5LiA5Liq5bim5pyJ5Zub5Liq5ZyG5b2i5ouo6L2u55qE6L2s55uY6ZSB44CC5q+P5Liq5ouo6L2u6YO95pyJMTDkuKrmlbDlrZfvvJogJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknIOOAguavj+S4quaLqOi9ruWPr+S7peiHqueUseaXi+i9rO+8muS+i+WmguaKiiAnOScg5Y+Y5Li6ICAnMCfvvIwnMCcg5Y+Y5Li6ICc5JyDjgILmr4/mrKHml4vovazpg73lj6rog73ml4vovazkuIDkuKrmi6jova7nmoTkuIDkvY3mlbDlrZfjgIJcblxu6ZSB55qE5Yid5aeL5pWw5a2X5Li6ICcwMDAwJyDvvIzkuIDkuKrku6Pooajlm5vkuKrmi6jova7nmoTmlbDlrZfnmoTlrZfnrKbkuLLjgIJcblxu5YiX6KGoIGRlYWRlbmRzIOWMheWQq+S6huS4gOe7hOatu+S6oeaVsOWtl++8jOS4gOaXpuaLqOi9rueahOaVsOWtl+WSjOWIl+ihqOmHjOeahOS7u+S9leS4gOS4quWFg+e0oOebuOWQjO+8jOi/meS4qumUgeWwhuS8muiiq+awuOS5hemUgeWumu+8jOaXoOazleWGjeiiq+aXi+i9rOOAglxuXG7lrZfnrKbkuLIgdGFyZ2V0IOS7o+ihqOWPr+S7peino+mUgeeahOaVsOWtl++8jOS9oOmcgOimgee7meWHuuacgOWwj+eahOaXi+i9rOasoeaVsO+8jOWmguaenOaXoOiuuuWmguS9leS4jeiDveino+mUge+8jOi/lOWbniAtMeOAglxuXG5cblxu56S65L6LIDE6XG5cbui+k+WFpe+8mmRlYWRlbmRzID0gW1wiMDIwMVwiLFwiMDEwMVwiLFwiMDEwMlwiLFwiMTIxMlwiLFwiMjAwMlwiXSwgdGFyZ2V0ID0gXCIwMjAyXCJcbui+k+WHuu+8mjZcbuino+mHiu+8mlxu5Y+v6IO955qE56e75Yqo5bqP5YiX5Li6IFwiMDAwMFwiIC0+IFwiMTAwMFwiIC0+IFwiMTEwMFwiIC0+IFwiMTIwMFwiIC0+IFwiMTIwMVwiIC0+IFwiMTIwMlwiIC0+IFwiMDIwMlwi44CCXG7ms6jmhI8gXCIwMDAwXCIgLT4gXCIwMDAxXCIgLT4gXCIwMDAyXCIgLT4gXCIwMTAyXCIgLT4gXCIwMjAyXCIg6L+Z5qC355qE5bqP5YiX5piv5LiN6IO96Kej6ZSB55qE77yMXG7lm6DkuLrlvZPmi6jliqjliLAgXCIwMTAyXCIg5pe26L+Z5Liq6ZSB5bCx5Lya6KKr6ZSB5a6a44CCXG7npLrkvosgMjpcblxu6L6T5YWlOiBkZWFkZW5kcyA9IFtcIjg4ODhcIl0sIHRhcmdldCA9IFwiMDAwOVwiXG7ovpPlh7rvvJoxXG7op6Pph4rvvJpcbuaKiuacgOWQjuS4gOS9jeWPjeWQkeaXi+i9rOS4gOasoeWNs+WPryBcIjAwMDBcIiAtPiBcIjAwMDlcIuOAglxu56S65L6LIDM6XG5cbui+k+WFpTogZGVhZGVuZHMgPSBbXCI4ODg3XCIsXCI4ODg5XCIsXCI4ODc4XCIsXCI4ODk4XCIsXCI4Nzg4XCIsXCI4OTg4XCIsXCI3ODg4XCIsXCI5ODg4XCJdLCB0YXJnZXQgPSBcIjg4ODhcIlxu6L6T5Ye677yaLTFcbuino+mHiu+8mlxu5peg5rOV5peL6L2s5Yiw55uu5qCH5pWw5a2X5LiU5LiN6KKr6ZSB5a6a44CCXG7npLrkvosgNDpcblxu6L6T5YWlOiBkZWFkZW5kcyA9IFtcIjAwMDBcIl0sIHRhcmdldCA9IFwiODg4OFwiXG7ovpPlh7rvvJotMVxuXG5cbuaPkOekuu+8mlxuXG4xLiDmrbvkuqHliJfooaggZGVhZGVuZHMg55qE6ZW/5bqm6IyD5Zu05Li6IFsxLCA1MDBd44CCXG4yLiDnm67moIfmlbDlrZcgdGFyZ2V0IOS4jeS8muWcqCBkZWFkZW5kcyDkuYvkuK3jgIJcbjMuIOavj+S4qiBkZWFkZW5kcyDlkowgdGFyZ2V0IOS4reeahOWtl+espuS4sueahOaVsOWtl+S8muWcqCAxMCwwMDAg5Liq5Y+v6IO955qE5oOF5Ya1ICcwMDAwJyDliLAgJzk5OTknIOS4reS6p+eUn+OAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkZWFkZW5kc1xuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBvcGVuTG9jayhkZWFkZW5kczogc3RyaW5nW10sIHRhcmdldDogc3RyaW5nKSB7XG4gIGlmICh0YXJnZXQgPT09IFwiMDAwMFwiKSByZXR1cm4gMDtcbiAgY29uc3QgZGVhZGVuZHNfc2V0ID0gbmV3IFNldChkZWFkZW5kcyk7XG4gIGlmIChkZWFkZW5kc19zZXQuaGFzKFwiMDAwMFwiKSkgcmV0dXJuIC0xO1xuICBjb25zdCBsaXN0OiBbc3RyaW5nLCBudW1iZXJdW10gPSBbXTtcbiAgbGlzdC5wdXNoKFtcIjAwMDBcIiwgMF0pO1xuICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICBjb25zdCBbbm9kZSwgc3RlcF0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBbMSwgLTFdKSB7XG4gICAgICAgIGNvbnN0IHN0cl9hcnIgPSBBcnJheS5mcm9tKG5vZGUpO1xuICAgICAgICAvLyAgICAgICAg5a6e546wIDAgLT4gOSAgOSAtPiAwXG4gICAgICAgIHN0cl9hcnJbaV0gPSBTdHJpbmcoKHBhcnNlSW50KHN0cl9hcnJbaV0pICsgMTAgKyBhY3Rpb24pICUgMTApO1xuXG4gICAgICAgIGNvbnN0IGN1ciA9IHN0cl9hcnIuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKGN1ciA9PT0gdGFyZ2V0KSByZXR1cm4gc3RlcCArIDE7XG5cbiAgICAgICAgLy8g6K6w5b2V5bey57uP6LWw6L+H55qE54K5XG4gICAgICAgIGlmICghZGVhZGVuZHNfc2V0LmhhcyhjdXIpKSB7XG4gICAgICAgICAgbGlzdC5wdXNoKFtjdXIsIHN0ZXAgKyAxXSk7XG4gICAgICAgICAgZGVhZGVuZHNfc2V0LmFkZChjdXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKG9wZW5Mb2NrKFtcIjg4ODhcIl0sIFwiMDAwOVwiKSwgMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIG9wZW5Mb2NrKFtcIjAyMDFcIiwgXCIwMTAxXCIsIFwiMDEwMlwiLCBcIjEyMTJcIiwgXCIyMDAyXCJdLCBcIjAyMDJcIiksXG4gIDZcbik7XG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoXG4vLyAgIG9wZW5Mb2NrKFxuLy8gICAgIFtcIjg4ODdcIiwgXCI4ODg5XCIsIFwiODg3OFwiLCBcIjg4OThcIiwgXCI4Nzg4XCIsIFwiODk4OFwiLCBcIjc4ODhcIiwgXCI5ODg4XCJdLFxuLy8gICAgIFwiODg4OFwiXG4vLyAgICksXG4vLyAgIC0xXG4vLyApO1xuIl19
