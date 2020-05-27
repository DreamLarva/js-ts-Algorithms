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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
    if (list1.length > list2.length)
        return findRestaurant(list2, list1);
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
            }
            else if (map[str] + i === max) {
                result.push(str);
            }
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
]), ["Shogun"]);
assert_1.default.deepStrictEqual(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]), ["Shogun"]);
assert_1.default.deepStrictEqual(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Burger King", "Tapioca Express", "Shogun"]), ["KFC", "Burger King", "Tapioca Express", "Shogun"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsS0FBZSxFQUFFLEtBQWU7SUFDN0QsU0FBUztJQUNULHdEQUF3RDtJQUN4RCxtQkFBbUI7SUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUVELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDMUIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO2lCQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDRjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNwQixjQUFjLENBQ1osQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUNuRDtJQUNFLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLFFBQVE7Q0FDVCxDQUNGLEVBQ0QsQ0FBQyxRQUFRLENBQUMsQ0FDWCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGNBQWMsQ0FDWixDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQ25ELENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDakMsRUFDRCxDQUFDLFFBQVEsQ0FBQyxDQUNYLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsY0FBYyxDQUNaLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFDbkQsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUNwRCxFQUNELENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lgYforr5BbmR55ZKMRG9yaXPmg7PlnKjmmZrppJDml7bpgInmi6nkuIDlrrbppJDljoXvvIzlubbkuJTku5bku6zpg73mnInkuIDkuKrooajnpLrmnIDllpzniLHppJDljoXnmoTliJfooajvvIzmr4/kuKrppJDljoXnmoTlkI3lrZfnlKjlrZfnrKbkuLLooajnpLrjgIJcblxu5L2g6ZyA6KaB5biu5Yqp5LuW5Lus55So5pyA5bCR55qE57Si5byV5ZKM5om+5Ye65LuW5Lus5YWx5ZCM5Zac54ix55qE6aSQ5Y6F44CCIOWmguaenOetlOahiOS4jeatouS4gOS4qu+8jOWImei+k+WHuuaJgOacieetlOahiOW5tuS4lOS4jeiAg+iZkemhuuW6j+OAgiDkvaDlj6/ku6XlgYforr7mgLvmmK/lrZjlnKjkuIDkuKrnrZTmoYjjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbltcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdXG5bXCJQaWF0dGlcIiwgXCJUaGUgR3JpbGwgYXQgVG9ycmV5IFBpbmVzXCIsIFwiSHVuZ3J5IEh1bnRlciBTdGVha2hvdXNlXCIsIFwiU2hvZ3VuXCJdXG7ovpPlh7o6IFtcIlNob2d1blwiXVxu6Kej6YeKOiDku5bku6zllK/kuIDlhbHlkIzllpzniLHnmoTppJDljoXmmK/igJxTaG9ndW7igJ3jgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6XG5bXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXVxuW1wiS0ZDXCIsIFwiU2hvZ3VuXCIsIFwiQnVyZ2VyIEtpbmdcIl1cbui+k+WHujogW1wiU2hvZ3VuXCJdXG7op6Pph4o6IOS7luS7rOWFseWQjOWWnOeIseS4lOWFt+acieacgOWwj+e0ouW8leWSjOeahOmkkOWOheaYr+KAnFNob2d1buKAne+8jOWug+acieacgOWwj+eahOe0ouW8leWSjDEoMCsxKeOAglxu5o+Q56S6OlxuICAgIDEuIOS4pOS4quWIl+ihqOeahOmVv+W6puiMg+WbtOmDveWcqMKgWzEsIDEwMDBd5YaF44CCXG4gICAgMi4g5Lik5Liq5YiX6KGo5Lit55qE5a2X56ym5Liy55qE6ZW/5bqm5bCG5ZyoWzHvvIwzMF3nmoTojIPlm7TlhoXjgIJcbiAgICAzLiDkuIvmoIfku44w5byA5aeL77yM5Yiw5YiX6KGo55qE6ZW/5bqm5YePMeOAglxuICAgIDQuIOS4pOS4quWIl+ihqOmDveayoeaciemHjeWkjeeahOWFg+e0oOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWluaW11bS1pbmRleC1zdW0tb2YtdHdvLWxpc3RzXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBsaXN0MVxuICogQHBhcmFtIHtzdHJpbmdbXX0gbGlzdDJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG52YXIgZmluZFJlc3RhdXJhbnQgPSBmdW5jdGlvbiAobGlzdDE6IHN0cmluZ1tdLCBsaXN0Mjogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIC8vIOWTiOW4jOihqCDop6PlhrNcbiAgLy8g5YW25a6eIOWIpOaWreaVsOe7hOWkp+Wwj+WlveWDj+ayoeavm+e6vyDljLrliKsg5Y+q5pivIOiuqeeUqOeahOWTiOW4jOihqOeahOWGheWtmOWwj+S4gOeCuSDml7bpl7TlpI3mnYLluqbov5jmmK8gTyhuICsgbSnnmoTmoLflrZBcbiAgLy8g546w5bCGIOi+g+Wwj+eahOS4gOS4quaVsOe7hCDmlL7lhaXlk4jluIzooahcbiAgaWYgKGxpc3QxLmxlbmd0aCA+IGxpc3QyLmxlbmd0aCkgcmV0dXJuIGZpbmRSZXN0YXVyYW50KGxpc3QyLCBsaXN0MSk7XG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QxLmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3QxW2ldXSA9IGk7XG4gIH1cblxuICBsZXQgbWF4ID0gSW5maW5pdHk7XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIC8vIOaJq+aPj+i+g+Wkp+eahOaVsOe7hFxuICAvLyDogIHlpKvlhpnnmoTmm7TlsYwg5re75Yqg6L+Z5LiqIOWIpOaWreS5i+WQjiBpIDw9IG1heCDlj6/ku6XmjpLpmaTkuIDpg6jliIbkuI3lj6/og73nmoTmg4XlhrVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Mi5sZW5ndGggJiYgaSA8PSBtYXg7IGkrKykge1xuICAgIGNvbnN0IHN0ciA9IGxpc3QyW2ldO1xuICAgIGlmIChtYXBbc3RyXSAhPSBudWxsKSB7XG4gICAgICBpZiAobWFwW3N0cl0gKyBpIDwgbWF4KSB7XG4gICAgICAgIG1heCA9IG1hcFtzdHJdICsgaTtcbiAgICAgICAgcmVzdWx0ID0gW3N0cl07XG4gICAgICB9IGVsc2UgaWYgKG1hcFtzdHJdICsgaSA9PT0gbWF4KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN0cik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBmaW5kUmVzdGF1cmFudChcbiAgICBbXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXSxcbiAgICBbXG4gICAgICBcIlBpYXR0aVwiLFxuICAgICAgXCJUaGUgR3JpbGwgYXQgVG9ycmV5IFBpbmVzXCIsXG4gICAgICBcIkh1bmdyeSBIdW50ZXIgU3RlYWtob3VzZVwiLFxuICAgICAgXCJTaG9ndW5cIixcbiAgICBdXG4gICksXG4gIFtcIlNob2d1blwiXVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZpbmRSZXN0YXVyYW50KFxuICAgIFtcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdLFxuICAgIFtcIktGQ1wiLCBcIlNob2d1blwiLCBcIkJ1cmdlciBLaW5nXCJdXG4gICksXG4gIFtcIlNob2d1blwiXVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZpbmRSZXN0YXVyYW50KFxuICAgIFtcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdLFxuICAgIFtcIktGQ1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiU2hvZ3VuXCJdXG4gICksXG4gIFtcIktGQ1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiU2hvZ3VuXCJdXG4pO1xuIl19