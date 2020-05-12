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
var openLock = function (deadends, target) {
  const deadends_set = new Set(deadends);
  if (deadends_set.has("0000")) return -1;
  const list = [];
  list.push(["0000", 0]);
  while (list.length) {
    const [node, step] = list.shift();
    for (let i = 0; i < 4; i++) {
      for (const action of [1, -1]) {
        const str_arr = Array.from(node);
        str_arr[i] = String((parseInt(str_arr[i]) + 10 + action) % 10);
        const cur = str_arr.join("");
        if (cur === target) return step + 1;
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
assert_1.default.strictEqual(
  openLock(["0201", "0101", "0102", "1212", "2002"], "0202"),
  6
);
assert_1.default.strictEqual(
  openLock(
    ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
    "8888"
  ),
  -1
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUyLuaJk+W8gOi9rOebmOmUgS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzUyLuaJk+W8gOi9rOebmOmUgS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQ0k7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxRQUFrQixFQUFFLE1BQWM7SUFDdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxHQUFHLEtBQUssTUFBTTtvQkFBRSxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQzFCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUMxRCxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsRUFDbEYsQ0FBQyxDQUFDLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuS9oOacieS4gOS4quW4puacieWbm+S4quWchuW9ouaLqOi9rueahOi9rOebmOmUgeOAguavj+S4quaLqOi9rumDveaciTEw5Liq5pWw5a2X77yaICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyDjgILmr4/kuKrmi6jova7lj6/ku6Xoh6rnlLHml4vovazvvJrkvovlpoLmioogJzknIOWPmOS4uiAgJzAn77yMJzAnIOWPmOS4uiAnOScg44CC5q+P5qyh5peL6L2s6YO95Y+q6IO95peL6L2s5LiA5Liq5ouo6L2u55qE5LiA5L2N5pWw5a2X44CCXHJcblxyXG7plIHnmoTliJ3lp4vmlbDlrZfkuLogJzAwMDAnIO+8jOS4gOS4quS7o+ihqOWbm+S4quaLqOi9rueahOaVsOWtl+eahOWtl+espuS4suOAglxyXG5cclxu5YiX6KGoIGRlYWRlbmRzIOWMheWQq+S6huS4gOe7hOatu+S6oeaVsOWtl++8jOS4gOaXpuaLqOi9rueahOaVsOWtl+WSjOWIl+ihqOmHjOeahOS7u+S9leS4gOS4quWFg+e0oOebuOWQjO+8jOi/meS4qumUgeWwhuS8muiiq+awuOS5hemUgeWumu+8jOaXoOazleWGjeiiq+aXi+i9rOOAglxyXG5cclxu5a2X56ym5LiyIHRhcmdldCDku6Pooajlj6/ku6Xop6PplIHnmoTmlbDlrZfvvIzkvaDpnIDopoHnu5nlh7rmnIDlsI/nmoTml4vovazmrKHmlbDvvIzlpoLmnpzml6DorrrlpoLkvZXkuI3og73op6PplIHvvIzov5Tlm54gLTHjgIJcclxuXHJcblxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaXvvJpkZWFkZW5kcyA9IFtcIjAyMDFcIixcIjAxMDFcIixcIjAxMDJcIixcIjEyMTJcIixcIjIwMDJcIl0sIHRhcmdldCA9IFwiMDIwMlwiXHJcbui+k+WHuu+8mjZcclxu6Kej6YeK77yaXHJcbuWPr+iDveeahOenu+WKqOW6j+WIl+S4uiBcIjAwMDBcIiAtPiBcIjEwMDBcIiAtPiBcIjExMDBcIiAtPiBcIjEyMDBcIiAtPiBcIjEyMDFcIiAtPiBcIjEyMDJcIiAtPiBcIjAyMDJcIuOAglxyXG7ms6jmhI8gXCIwMDAwXCIgLT4gXCIwMDAxXCIgLT4gXCIwMDAyXCIgLT4gXCIwMTAyXCIgLT4gXCIwMjAyXCIg6L+Z5qC355qE5bqP5YiX5piv5LiN6IO96Kej6ZSB55qE77yMXHJcbuWboOS4uuW9k+aLqOWKqOWIsCBcIjAxMDJcIiDml7bov5nkuKrplIHlsLHkvJrooqvplIHlrprjgIJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IGRlYWRlbmRzID0gW1wiODg4OFwiXSwgdGFyZ2V0ID0gXCIwMDA5XCJcclxu6L6T5Ye677yaMVxyXG7op6Pph4rvvJpcclxu5oqK5pyA5ZCO5LiA5L2N5Y+N5ZCR5peL6L2s5LiA5qyh5Y2z5Y+vIFwiMDAwMFwiIC0+IFwiMDAwOVwi44CCXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBkZWFkZW5kcyA9IFtcIjg4ODdcIixcIjg4ODlcIixcIjg4NzhcIixcIjg4OThcIixcIjg3ODhcIixcIjg5ODhcIixcIjc4ODhcIixcIjk4ODhcIl0sIHRhcmdldCA9IFwiODg4OFwiXHJcbui+k+WHuu+8mi0xXHJcbuino+mHiu+8mlxyXG7ml6Dms5Xml4vovazliLDnm67moIfmlbDlrZfkuJTkuI3ooqvplIHlrprjgIJcclxu56S65L6LIDQ6XHJcblxyXG7ovpPlhaU6IGRlYWRlbmRzID0gW1wiMDAwMFwiXSwgdGFyZ2V0ID0gXCI4ODg4XCJcclxu6L6T5Ye677yaLTFcclxuXHJcblxyXG7mj5DnpLrvvJpcclxuXHJcbjEuIOatu+S6oeWIl+ihqCBkZWFkZW5kcyDnmoTplb/luqbojIPlm7TkuLogWzEsIDUwMF3jgIJcclxuMi4g55uu5qCH5pWw5a2XIHRhcmdldCDkuI3kvJrlnKggZGVhZGVuZHMg5LmL5Lit44CCXHJcbjMuIOavj+S4qiBkZWFkZW5kcyDlkowgdGFyZ2V0IOS4reeahOWtl+espuS4sueahOaVsOWtl+S8muWcqCAxMCwwMDAg5Liq5Y+v6IO955qE5oOF5Ya1ICcwMDAwJyDliLAgJzk5OTknIOS4reS6p+eUn+OAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkZWFkZW5kc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBvcGVuTG9jayA9IGZ1bmN0aW9uIChkZWFkZW5kczogc3RyaW5nW10sIHRhcmdldDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkZWFkZW5kc19zZXQgPSBuZXcgU2V0KGRlYWRlbmRzKTtcclxuICAgIGlmIChkZWFkZW5kc19zZXQuaGFzKFwiMDAwMFwiKSkgcmV0dXJuIC0xO1xyXG4gICAgY29uc3QgbGlzdDogW3N0cmluZywgbnVtYmVyXVtdID0gW107XHJcbiAgICBsaXN0LnB1c2goW1wiMDAwMFwiLCAwXSk7XHJcbiAgICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbbm9kZSwgc3RlcF0gPSBsaXN0LnNoaWZ0KCkhO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWN0aW9uIG9mIFsxLCAtMV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cl9hcnIgPSBBcnJheS5mcm9tKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgc3RyX2FycltpXSA9IFN0cmluZygocGFyc2VJbnQoc3RyX2FycltpXSkgKyAxMCArIGFjdGlvbikgJSAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSBzdHJfYXJyLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyID09PSB0YXJnZXQpIHJldHVybiBzdGVwICsgMTtcclxuICAgICAgICAgICAgICAgIGlmICghZGVhZGVuZHNfc2V0LmhhcyhjdXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtjdXIsIHN0ZXAgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVhZGVuZHNfc2V0LmFkZChjdXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgb3BlbkxvY2soW1wiODg4OFwiXSwgXCIwMDA5XCIpLFxyXG4gICAgMSxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgb3BlbkxvY2soW1wiMDIwMVwiLCBcIjAxMDFcIiwgXCIwMTAyXCIsIFwiMTIxMlwiLCBcIjIwMDJcIl0sIFwiMDIwMlwiKSxcclxuICAgIDYsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIG9wZW5Mb2NrKFtcIjg4ODdcIiwgXCI4ODg5XCIsIFwiODg3OFwiLCBcIjg4OThcIiwgXCI4Nzg4XCIsIFwiODk4OFwiLCBcIjc4ODhcIiwgXCI5ODg4XCJdLCBcIjg4ODhcIiksXHJcbiAgICAtMSxcclxuKTtcclxuIl19
