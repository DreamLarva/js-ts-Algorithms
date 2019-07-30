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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTk5LuS4pOS4quWIl+ihqOeahOacgOWwj+e0ouW8leaAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsS0FBZSxFQUFFLEtBQWU7SUFDM0QsU0FBUztJQUNULHdEQUF3RDtJQUN4RCxtQkFBbUI7SUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjtJQUVELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDMUIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9DLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDSjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixjQUFjLENBQ1YsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUNuRDtJQUNJLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLFFBQVE7Q0FDWCxDQUNKLEVBQ0QsQ0FBQyxRQUFRLENBQUMsQ0FDYixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGNBQWMsQ0FDVixDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQ25ELENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDbkMsRUFDRCxDQUFDLFFBQVEsQ0FBQyxDQUNiLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsY0FBYyxDQUNWLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFDbkQsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUN0RCxFQUNELENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDdEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWBh+iuvkFuZHnlkoxEb3Jpc+aDs+WcqOaZmumkkOaXtumAieaLqeS4gOWutumkkOWOhe+8jOW5tuS4lOS7luS7rOmDveacieS4gOS4quihqOekuuacgOWWnOeIsemkkOWOheeahOWIl+ihqO+8jOavj+S4qumkkOWOheeahOWQjeWtl+eUqOWtl+espuS4suihqOekuuOAglxyXG5cclxu5L2g6ZyA6KaB5biu5Yqp5LuW5Lus55So5pyA5bCR55qE57Si5byV5ZKM5om+5Ye65LuW5Lus5YWx5ZCM5Zac54ix55qE6aSQ5Y6F44CCIOWmguaenOetlOahiOS4jeatouS4gOS4qu+8jOWImei+k+WHuuaJgOacieetlOahiOW5tuS4lOS4jeiAg+iZkemhuuW6j+OAgiDkvaDlj6/ku6XlgYforr7mgLvmmK/lrZjlnKjkuIDkuKrnrZTmoYjjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOlxyXG5bXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXVxyXG5bXCJQaWF0dGlcIiwgXCJUaGUgR3JpbGwgYXQgVG9ycmV5IFBpbmVzXCIsIFwiSHVuZ3J5IEh1bnRlciBTdGVha2hvdXNlXCIsIFwiU2hvZ3VuXCJdXHJcbui+k+WHujogW1wiU2hvZ3VuXCJdXHJcbuino+mHijog5LuW5Lus5ZSv5LiA5YWx5ZCM5Zac54ix55qE6aSQ5Y6F5piv4oCcU2hvZ3Vu4oCd44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOlxyXG5bXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXVxyXG5bXCJLRkNcIiwgXCJTaG9ndW5cIiwgXCJCdXJnZXIgS2luZ1wiXVxyXG7ovpPlh7o6IFtcIlNob2d1blwiXVxyXG7op6Pph4o6IOS7luS7rOWFseWQjOWWnOeIseS4lOWFt+acieacgOWwj+e0ouW8leWSjOeahOmkkOWOheaYr+KAnFNob2d1buKAne+8jOWug+acieacgOWwj+eahOe0ouW8leWSjDEoMCsxKeOAglxyXG7mj5DnpLo6XHJcbiAgICAxLiDkuKTkuKrliJfooajnmoTplb/luqbojIPlm7Tpg73lnKjCoFsxLCAxMDAwXeWGheOAglxyXG4gICAgMi4g5Lik5Liq5YiX6KGo5Lit55qE5a2X56ym5Liy55qE6ZW/5bqm5bCG5ZyoWzHvvIwzMF3nmoTojIPlm7TlhoXjgIJcclxuICAgIDMuIOS4i+agh+S7jjDlvIDlp4vvvIzliLDliJfooajnmoTplb/luqblh48x44CCXHJcbiAgICA0LiDkuKTkuKrliJfooajpg73msqHmnInph43lpI3nmoTlhYPntKDjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21pbmltdW0taW5kZXgtc3VtLW9mLXR3by1saXN0c1xyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGxpc3QxXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGxpc3QyXHJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxyXG4gKi9cclxudmFyIGZpbmRSZXN0YXVyYW50ID0gZnVuY3Rpb24gKGxpc3QxOiBzdHJpbmdbXSwgbGlzdDI6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgLy8g5ZOI5biM6KGoIOino+WGs1xyXG4gICAgLy8g5YW25a6eIOWIpOaWreaVsOe7hOWkp+Wwj+WlveWDj+ayoeavm+e6vyDljLrliKsg5Y+q5pivIOiuqeeUqOeahOWTiOW4jOihqOeahOWGheWtmOWwj+S4gOeCuSDml7bpl7TlpI3mnYLluqbov5jmmK8gTyhuICsgbSnnmoTmoLflrZBcclxuICAgIC8vIOeOsOWwhiDovoPlsI/nmoTkuIDkuKrmlbDnu4Qg5pS+5YWl5ZOI5biM6KGoXHJcbiAgICBpZiAobGlzdDEubGVuZ3RoID4gbGlzdDIubGVuZ3RoKSByZXR1cm4gZmluZFJlc3RhdXJhbnQobGlzdDIsIGxpc3QxKTtcclxuICAgIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0MS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1hcFtsaXN0MVtpXV0gPSBpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtYXggPSBJbmZpbml0eTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAvLyDmiavmj4/ovoPlpKfnmoTmlbDnu4RcclxuICAgIC8vIOiAgeWkq+WGmeeahOabtOWxjCDmt7vliqDov5nkuKog5Yik5pat5LmL5ZCOIGkgPD0gbWF4IOWPr+S7peaOkumZpOS4gOmDqOWIhuS4jeWPr+iDveeahOaDheWGtVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Mi5sZW5ndGggJiYgaSA8PSBtYXg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGxpc3QyW2ldO1xyXG4gICAgICAgIGlmIChtYXBbc3RyXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBbc3RyXSArIGkgPCBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG1heCA9IG1hcFtzdHJdICsgaTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtzdHJdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hcFtzdHJdICsgaSA9PT0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBmaW5kUmVzdGF1cmFudChcclxuICAgICAgICBbXCJTaG9ndW5cIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJCdXJnZXIgS2luZ1wiLCBcIktGQ1wiXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiUGlhdHRpXCIsXHJcbiAgICAgICAgICAgIFwiVGhlIEdyaWxsIGF0IFRvcnJleSBQaW5lc1wiLFxyXG4gICAgICAgICAgICBcIkh1bmdyeSBIdW50ZXIgU3RlYWtob3VzZVwiLFxyXG4gICAgICAgICAgICBcIlNob2d1blwiLFxyXG4gICAgICAgIF0sXHJcbiAgICApLFxyXG4gICAgW1wiU2hvZ3VuXCJdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgZmluZFJlc3RhdXJhbnQoXHJcbiAgICAgICAgW1wiU2hvZ3VuXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJLRkNcIl0sXHJcbiAgICAgICAgW1wiS0ZDXCIsIFwiU2hvZ3VuXCIsIFwiQnVyZ2VyIEtpbmdcIl0sXHJcbiAgICApLFxyXG4gICAgW1wiU2hvZ3VuXCJdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgZmluZFJlc3RhdXJhbnQoXHJcbiAgICAgICAgW1wiU2hvZ3VuXCIsIFwiVGFwaW9jYSBFeHByZXNzXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJLRkNcIl0sXHJcbiAgICAgICAgW1wiS0ZDXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJTaG9ndW5cIl0sXHJcbiAgICApLFxyXG4gICAgW1wiS0ZDXCIsIFwiQnVyZ2VyIEtpbmdcIiwgXCJUYXBpb2NhIEV4cHJlc3NcIiwgXCJTaG9ndW5cIl0sXHJcbik7XHJcbiJdfQ==