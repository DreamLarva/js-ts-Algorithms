"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:

输入: J = "z", S = "ZZ"
输出: 0

注意:
S 和 J 最多含有50个字母。
J 中的字符不重复。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jewels-and-stones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let result = 0;
    const map = {};
    for (const gem of J) {
        map[gem] = true;
    }
    for (const stone of S) {
        if (map[stone]) {
            result++;
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(numJewelsInStones("aA", "aAAbbbb"), 3);
assert_1.default.strictEqual(numJewelsInStones("z", "ZZ"), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcxLuWuneefs+S4juefs+WktC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzcxLuWuneefs+S4juefs+WktC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ3BELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE1BQU0sR0FBRyxHQUE0QixFQUFFLENBQUM7SUFDeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNqQjtJQUVELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2QsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUxRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5a2X56ym5LiySsKg5Luj6KGo55+z5aS05Lit5a6d55+z55qE57G75Z6L77yM5ZKM5a2X56ym5LiywqBT5Luj6KGo5L2g5oul5pyJ55qE55+z5aS044CCwqBTwqDkuK3mr4/kuKrlrZfnrKbku6PooajkuobkuIDnp43kvaDmi6XmnInnmoTnn7PlpLTnmoTnsbvlnovvvIzkvaDmg7Pnn6XpgZPkvaDmi6XmnInnmoTnn7PlpLTkuK3mnInlpJrlsJHmmK/lrp3nn7PjgIJcblxuSsKg5Lit55qE5a2X5q+N5LiN6YeN5aSN77yMSsKg5ZKMwqBT5Lit55qE5omA5pyJ5a2X56ym6YO95piv5a2X5q+N44CC5a2X5q+N5Yy65YiG5aSn5bCP5YaZ77yM5Zug5q2kXCJhXCLlkoxcIkFcIuaYr+S4jeWQjOexu+Wei+eahOefs+WktOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBKID0gXCJhQVwiLCBTID0gXCJhQUFiYmJiXCJcbui+k+WHujogM1xu56S65L6LIDI6XG5cbui+k+WFpTogSiA9IFwielwiLCBTID0gXCJaWlwiXG7ovpPlh7o6IDBcblxu5rOo5oSPOlxuU8Kg5ZKMwqBKwqDmnIDlpJrlkKvmnIk1MOS4quWtl+avjeOAglxuSsKg5Lit55qE5a2X56ym5LiN6YeN5aSN44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9qZXdlbHMtYW5kLXN0b25lc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBKXG4gKiBAcGFyYW0ge3N0cmluZ30gU1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbnVtSmV3ZWxzSW5TdG9uZXMgPSBmdW5jdGlvbiAoSjogc3RyaW5nLCBTOiBzdHJpbmcpIHtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiB0cnVlIH0gPSB7fTtcbiAgZm9yIChjb25zdCBnZW0gb2YgSikge1xuICAgIG1hcFtnZW1dID0gdHJ1ZTtcbiAgfVxuXG4gIGZvciAoY29uc3Qgc3RvbmUgb2YgUykge1xuICAgIGlmIChtYXBbc3RvbmVdKSB7XG4gICAgICByZXN1bHQrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChudW1KZXdlbHNJblN0b25lcyhcImFBXCIsIFwiYUFBYmJiYlwiKSwgMyk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChudW1KZXdlbHNJblN0b25lcyhcInpcIiwgXCJaWlwiKSwgMCk7XG4iXX0=