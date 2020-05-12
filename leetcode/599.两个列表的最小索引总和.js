"use strict";
/*
假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。

示例 1:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
输出: ["Shogun"]
解释: 他们唯一共同喜爱的餐厅是“Shogun”。
示例 2:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
输出: ["Shogun"]
解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
提示:
    1. 两个列表的长度范围都在 [1, 1000]内。
    2. 两个列表中的字符串的长度将在[1，30]的范围内。
    3. 下标从0开始，到列表的长度减1。
    4. 两个列表都没有重复的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  // 哈希表 解决
  // 其实 判断数组大小好像没毛线 区别 只是 让用的哈希表的内存小一点 时间复杂度还是 O(n + m)的样子
  // 现将 较小的一个数组 放入哈希表
  if (list1.length > list2.length) return findRestaurant(list2, list1);
  const map = {};
  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }
  let max = Infinity;
  let result = [];
  // 扫描较大的数组
  // 老夫写的更屌 添加这个 判断之后 i <= max 可以排除一部分不可能的情况
  for (let i = 0; i < list2.length && i <= max; i++) {
    const str = list2[i];
    if (map[str] != null) {
      if (map[str] + i < max) {
        max = map[str] + i;
        result = [str];
      } else if (map[str] + i === max) {
        result.push(str);
      }
    }
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  ),
  ["Shogun"]
);
assert_1.default.deepStrictEqual(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  ),
  ["Shogun"]
);
assert_1.default.deepStrictEqual(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  ),
  ["KFC", "Burger King", "Tapioca Express", "Shogun"]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsS0FBZSxFQUFFLEtBQWU7SUFDM0QsU0FBUztJQUNULHdEQUF3RDtJQUN4RCxtQkFBbUI7SUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjtJQUVELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDMUIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9DLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDSjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixjQUFjLENBQ1YsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUNuRDtJQUNJLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLFFBQVE7Q0FDWCxDQUNKLEVBQ0QsQ0FBQyxRQUFRLENBQUMsQ0FDYixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGNBQWMsQ0FDVixDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQ25ELENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDbkMsRUFDRCxDQUFDLFFBQVEsQ0FBQyxDQUNiLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsY0FBYyxDQUNWLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFDbkQsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUN0RCxFQUNELENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDdEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lgYforr5BbmR55ZKMRG9yaXPmg7PlnKjmmZrppJDml7bpgInmi6nkuIDlrrbppJDljoXvvIzlubbkuJTku5bku6zpg73mnInkuIDkuKrooajnpLrmnIDllpzniLHppJDljoXnmoTliJfooajvvIzmr4/kuKrppJDljoXnmoTlkI3lrZfnlKjlrZfnrKbkuLLooajnpLrjgIJcblxu5L2g6ZyA6KaB5biu5Yqp5LuW5Lus55So5pyA5bCR55qE57Si5byV5ZKM5om+5Ye65LuW5Lus5YWx5ZCM5Zac54ix55qE6aSQ5Y6F44CCIOWmguaenOetlOahiOS4jeatouS4gOS4qu+8jOWImei+k+WHuuaJgOacieetlOahiOW5tuS4lOS4jeiAg+iZkemhuuW6j+OAgiDkvaDlj6/ku6XlgYforr7mgLvmmK/lrZjlnKjkuIDkuKrnrZTmoYjjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbltcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdXG5bXCJQaWF0dGlcIiwgXCJUaGUgR3JpbGwgYXQgVG9ycmV5IFBpbmVzXCIsIFwiSHVuZ3J5IEh1bnRlciBTdGVha2hvdXNlXCIsIFwiU2hvZ3VuXCJdXG7ovpPlh7o6IFtcIlNob2d1blwiXVxu6Kej6YeKOiDku5bku6zllK/kuIDlhbHlkIzllpzniLHnmoTppJDljoXmmK/igJxTaG9ndW7igJ3jgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6XG5bXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXVxuW1wiS0ZDXCIsIFwiU2hvZ3VuXCIsIFwiQnVyZ2VyIEtpbmdcIl1cbui+k+WHujogW1wiU2hvZ3VuXCJdXG7op6Pph4o6IOS7luS7rOWFseWQjOWWnOeIseS4lOWFt+acieacgOWwj+e0ouW8leWSjOeahOmkkOWOheaYr+KAnFNob2d1buKAne+8jOWug+acieacgOWwj+eahOe0ouW8leWSjDEoMCsxKeOAglxu5o+Q56S6OlxuICAgIDEuIOS4pOS4quWIl+ihqOeahOmVv+W6puiMg+WbtOmDveWcqMKgWzEsIDEwMDBd5YaF44CCXG4gICAgMi4g5Lik5Liq5YiX6KGo5Lit55qE5a2X56ym5Liy55qE6ZW/5bqm5bCG5ZyoWzHvvIwzMF3nmoTojIPlm7TlhoXjgIJcbiAgICAzLiDkuIvmoIfku44w5byA5aeL77yM5Yiw5YiX6KGo55qE6ZW/5bqm5YePMeOAglxuICAgIDQuIOS4pOS4quWIl+ihqOmDveayoeaciemHjeWkjeeahOWFg+e0oOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWluaW11bS1pbmRleC1zdW0tb2YtdHdvLWxpc3RzXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBsaXN0MVxuICogQHBhcmFtIHtzdHJpbmdbXX0gbGlzdDJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG52YXIgZmluZFJlc3RhdXJhbnQgPSBmdW5jdGlvbiAobGlzdDE6IHN0cmluZ1tdLCBsaXN0Mjogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgLy8g5ZOI5biM6KGoIOino+WGs1xuICAgIC8vIOWFtuWuniDliKTmlq3mlbDnu4TlpKflsI/lpb3lg4/msqHmr5vnur8g5Yy65YirIOWPquaYryDorqnnlKjnmoTlk4jluIzooajnmoTlhoXlrZjlsI/kuIDngrkg5pe26Ze05aSN5p2C5bqm6L+Y5pivIE8obiArIG0p55qE5qC35a2QXG4gICAgLy8g546w5bCGIOi+g+Wwj+eahOS4gOS4quaVsOe7hCDmlL7lhaXlk4jluIzooahcbiAgICBpZiAobGlzdDEubGVuZ3RoID4gbGlzdDIubGVuZ3RoKSByZXR1cm4gZmluZFJlc3RhdXJhbnQobGlzdDIsIGxpc3QxKTtcbiAgICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcFtsaXN0MVtpXV0gPSBpO1xuICAgIH1cblxuICAgIGxldCBtYXggPSBJbmZpbml0eTtcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIOaJq+aPj+i+g+Wkp+eahOaVsOe7hFxuICAgIC8vIOiAgeWkq+WGmeeahOabtOWxjCDmt7vliqDov5nkuKog5Yik5pat5LmL5ZCOIGkgPD0gbWF4IOWPr+S7peaOkumZpOS4gOmDqOWIhuS4jeWPr+iDveeahOaDheWGtVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdDIubGVuZ3RoICYmIGkgPD0gbWF4OyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RyID0gbGlzdDJbaV07XG4gICAgICAgIGlmIChtYXBbc3RyXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWFwW3N0cl0gKyBpIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gbWFwW3N0cl0gKyBpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtzdHJdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXBbc3RyXSArIGkgPT09IG1heCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHN0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZmluZFJlc3RhdXJhbnQoXG4gICAgICAgIFtcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdLFxuICAgICAgICBbXG4gICAgICAgICAgICBcIlBpYXR0aVwiLFxuICAgICAgICAgICAgXCJUaGUgR3JpbGwgYXQgVG9ycmV5IFBpbmVzXCIsXG4gICAgICAgICAgICBcIkh1bmdyeSBIdW50ZXIgU3RlYWtob3VzZVwiLFxuICAgICAgICAgICAgXCJTaG9ndW5cIixcbiAgICAgICAgXSxcbiAgICApLFxuICAgIFtcIlNob2d1blwiXSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGZpbmRSZXN0YXVyYW50KFxuICAgICAgICBbXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXSxcbiAgICAgICAgW1wiS0ZDXCIsIFwiU2hvZ3VuXCIsIFwiQnVyZ2VyIEtpbmdcIl0sXG4gICAgKSxcbiAgICBbXCJTaG9ndW5cIl0sXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBmaW5kUmVzdGF1cmFudChcbiAgICAgICAgW1wiU2hvZ3VuXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJLRkNcIl0sXG4gICAgICAgIFtcIktGQ1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiU2hvZ3VuXCJdLFxuICAgICksXG4gICAgW1wiS0ZDXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJTaG9ndW5cIl0sXG4pO1xuIl19
