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
assert_1.default.strictEqual(numJewelsInStones('aA', 'aAAbbbb'), 3);
assert_1.default.strictEqual(numJewelsInStones('z', 'ZZ'), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcxLuWuneefs+S4juefs+WktC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzcxLuWuneefs+S4juefs+WktC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ2xELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE1BQU0sR0FBRyxHQUE0QixFQUFFLENBQUM7SUFDeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNuQjtJQUVELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ25CLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osTUFBTSxFQUFFLENBQUM7U0FDWjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFDbEMsQ0FBQyxDQUNKLENBQUM7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQzVCLENBQUMsQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5a2X56ym5LiySsKg5Luj6KGo55+z5aS05Lit5a6d55+z55qE57G75Z6L77yM5ZKM5a2X56ym5LiywqBT5Luj6KGo5L2g5oul5pyJ55qE55+z5aS044CCwqBTwqDkuK3mr4/kuKrlrZfnrKbku6PooajkuobkuIDnp43kvaDmi6XmnInnmoTnn7PlpLTnmoTnsbvlnovvvIzkvaDmg7Pnn6XpgZPkvaDmi6XmnInnmoTnn7PlpLTkuK3mnInlpJrlsJHmmK/lrp3nn7PjgIJcclxuXHJcbkrCoOS4reeahOWtl+avjeS4jemHjeWkje+8jErCoOWSjMKgU+S4reeahOaJgOacieWtl+espumDveaYr+Wtl+avjeOAguWtl+avjeWMuuWIhuWkp+Wwj+WGme+8jOWboOatpFwiYVwi5ZKMXCJBXCLmmK/kuI3lkIznsbvlnovnmoTnn7PlpLTjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBKID0gXCJhQVwiLCBTID0gXCJhQUFiYmJiXCJcclxu6L6T5Ye6OiAzXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBKID0gXCJ6XCIsIFMgPSBcIlpaXCJcclxu6L6T5Ye6OiAwXHJcblxyXG7ms6jmhI86XHJcblPCoOWSjMKgSsKg5pyA5aSa5ZCr5pyJNTDkuKrlrZfmr43jgIJcclxuSsKg5Lit55qE5a2X56ym5LiN6YeN5aSN44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9qZXdlbHMtYW5kLXN0b25lc1xyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IEpcclxuICogQHBhcmFtIHtzdHJpbmd9IFNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG51bUpld2Vsc0luU3RvbmVzID0gZnVuY3Rpb24gKEo6IHN0cmluZywgUzogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiB0cnVlIH0gPSB7fTtcclxuICAgIGZvciAoY29uc3QgZ2VtIG9mIEopIHtcclxuICAgICAgICBtYXBbZ2VtXSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzdG9uZSBvZiBTKSB7XHJcbiAgICAgICAgaWYgKG1hcFtzdG9uZV0pIHtcclxuICAgICAgICAgICAgcmVzdWx0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIG51bUpld2Vsc0luU3RvbmVzKCdhQScsICdhQUFiYmJiJyksXHJcbiAgICAzLFxyXG4pO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgbnVtSmV3ZWxzSW5TdG9uZXMoJ3onLCAnWlonKSxcclxuICAgIDAsXHJcbik7XHJcbiJdfQ==