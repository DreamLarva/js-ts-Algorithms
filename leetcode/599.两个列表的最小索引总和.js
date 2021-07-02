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
    1. 两个列表的长度范围都在 [1, 1000]内。
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsS0FBZSxFQUFFLEtBQWU7SUFDN0QsU0FBUztJQUNULHdEQUF3RDtJQUN4RCxtQkFBbUI7SUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUVELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDMUIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO2lCQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDRjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNwQixjQUFjLENBQ1osQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUNuRDtJQUNFLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLFFBQVE7Q0FDVCxDQUNGLEVBQ0QsQ0FBQyxRQUFRLENBQUMsQ0FDWCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGNBQWMsQ0FDWixDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQ25ELENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDakMsRUFDRCxDQUFDLFFBQVEsQ0FBQyxDQUNYLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsY0FBYyxDQUNaLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFDbkQsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUNwRCxFQUNELENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lgYforr5BbmR55ZKMRG9yaXPmg7PlnKjmmZrppJDml7bpgInmi6nkuIDlrrbppJDljoXvvIzlubbkuJTku5bku6zpg73mnInkuIDkuKrooajnpLrmnIDllpzniLHppJDljoXnmoTliJfooajvvIzmr4/kuKrppJDljoXnmoTlkI3lrZfnlKjlrZfnrKbkuLLooajnpLrjgIJcblxu5L2g6ZyA6KaB5biu5Yqp5LuW5Lus55So5pyA5bCR55qE57Si5byV5ZKM5om+5Ye65LuW5Lus5YWx5ZCM5Zac54ix55qE6aSQ5Y6F44CCIOWmguaenOetlOahiOS4jeatouS4gOS4qu+8jOWImei+k+WHuuaJgOacieetlOahiOW5tuS4lOS4jeiAg+iZkemhuuW6j+OAgiDkvaDlj6/ku6XlgYforr7mgLvmmK/lrZjlnKjkuIDkuKrnrZTmoYjjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbltcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdXG5bXCJQaWF0dGlcIiwgXCJUaGUgR3JpbGwgYXQgVG9ycmV5IFBpbmVzXCIsIFwiSHVuZ3J5IEh1bnRlciBTdGVha2hvdXNlXCIsIFwiU2hvZ3VuXCJdXG7ovpPlh7o6IFtcIlNob2d1blwiXVxu6Kej6YeKOiDku5bku6zllK/kuIDlhbHlkIzllpzniLHnmoTppJDljoXmmK/igJxTaG9ndW7igJ3jgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6XG5bXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXVxuW1wiS0ZDXCIsIFwiU2hvZ3VuXCIsIFwiQnVyZ2VyIEtpbmdcIl1cbui+k+WHujogW1wiU2hvZ3VuXCJdXG7op6Pph4o6IOS7luS7rOWFseWQjOWWnOeIseS4lOWFt+acieacgOWwj+e0ouW8leWSjOeahOmkkOWOheaYr+KAnFNob2d1buKAne+8jOWug+acieacgOWwj+eahOe0ouW8leWSjDEoMCsxKeOAglxu5o+Q56S6OlxuICAgIDEuIOS4pOS4quWIl+ihqOeahOmVv+W6puiMg+WbtOmDveWcqCBbMSwgMTAwMF3lhoXjgIJcbiAgICAyLiDkuKTkuKrliJfooajkuK3nmoTlrZfnrKbkuLLnmoTplb/luqblsIblnKhbMe+8jDMwXeeahOiMg+WbtOWGheOAglxuICAgIDMuIOS4i+agh+S7jjDlvIDlp4vvvIzliLDliJfooajnmoTplb/luqblh48x44CCXG4gICAgNC4g5Lik5Liq5YiX6KGo6YO95rKh5pyJ6YeN5aSN55qE5YWD57Sg44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9taW5pbXVtLWluZGV4LXN1bS1vZi10d28tbGlzdHNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGxpc3QxXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBsaXN0MlxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBmaW5kUmVzdGF1cmFudCA9IGZ1bmN0aW9uIChsaXN0MTogc3RyaW5nW10sIGxpc3QyOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgLy8g5ZOI5biM6KGoIOino+WGs1xuICAvLyDlhbblrp4g5Yik5pat5pWw57uE5aSn5bCP5aW95YOP5rKh5q+b57q/IOWMuuWIqyDlj6rmmK8g6K6p55So55qE5ZOI5biM6KGo55qE5YaF5a2Y5bCP5LiA54K5IOaXtumXtOWkjeadguW6pui/mOaYryBPKG4gKyBtKeeahOagt+WtkFxuICAvLyDnjrDlsIYg6L6D5bCP55qE5LiA5Liq5pWw57uEIOaUvuWFpeWTiOW4jOihqFxuICBpZiAobGlzdDEubGVuZ3RoID4gbGlzdDIubGVuZ3RoKSByZXR1cm4gZmluZFJlc3RhdXJhbnQobGlzdDIsIGxpc3QxKTtcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdDEubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdDFbaV1dID0gaTtcbiAgfVxuXG4gIGxldCBtYXggPSBJbmZpbml0eTtcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgLy8g5omr5o+P6L6D5aSn55qE5pWw57uEXG4gIC8vIOiAgeWkq+WGmeeahOabtOWxjCDmt7vliqDov5nkuKog5Yik5pat5LmL5ZCOIGkgPD0gbWF4IOWPr+S7peaOkumZpOS4gOmDqOWIhuS4jeWPr+iDveeahOaDheWGtVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QyLmxlbmd0aCAmJiBpIDw9IG1heDsgaSsrKSB7XG4gICAgY29uc3Qgc3RyID0gbGlzdDJbaV07XG4gICAgaWYgKG1hcFtzdHJdICE9IG51bGwpIHtcbiAgICAgIGlmIChtYXBbc3RyXSArIGkgPCBtYXgpIHtcbiAgICAgICAgbWF4ID0gbWFwW3N0cl0gKyBpO1xuICAgICAgICByZXN1bHQgPSBbc3RyXTtcbiAgICAgIH0gZWxzZSBpZiAobWFwW3N0cl0gKyBpID09PSBtYXgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZpbmRSZXN0YXVyYW50KFxuICAgIFtcIlNob2d1blwiLCBcIlRhcGlvY2EgRXhwcmVzc1wiLCBcIkJ1cmdlciBLaW5nXCIsIFwiS0ZDXCJdLFxuICAgIFtcbiAgICAgIFwiUGlhdHRpXCIsXG4gICAgICBcIlRoZSBHcmlsbCBhdCBUb3JyZXkgUGluZXNcIixcbiAgICAgIFwiSHVuZ3J5IEh1bnRlciBTdGVha2hvdXNlXCIsXG4gICAgICBcIlNob2d1blwiLFxuICAgIF1cbiAgKSxcbiAgW1wiU2hvZ3VuXCJdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZmluZFJlc3RhdXJhbnQoXG4gICAgW1wiU2hvZ3VuXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJLRkNcIl0sXG4gICAgW1wiS0ZDXCIsIFwiU2hvZ3VuXCIsIFwiQnVyZ2VyIEtpbmdcIl1cbiAgKSxcbiAgW1wiU2hvZ3VuXCJdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZmluZFJlc3RhdXJhbnQoXG4gICAgW1wiU2hvZ3VuXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJLRkNcIl0sXG4gICAgW1wiS0ZDXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJTaG9ndW5cIl1cbiAgKSxcbiAgW1wiS0ZDXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJTaG9ndW5cIl1cbik7XG4iXX0=