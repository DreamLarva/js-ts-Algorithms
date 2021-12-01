"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]


提示：
  1 <= candidates.length <= 30
  1 <= candidates[i] <= 200
  candidate 中的每个元素都是独一无二的。
  1 <= target <= 500
* */
function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    // 我他妈直接 使用回溯算法
    const result = [];
    step(0, candidates);
    return result;
    function step(current, candidates, currentList = []) {
        for (let i = 0; i < candidates.length; i++) {
            const newValue = current + candidates[i];
            if (newValue > target)
                return; // 排序过 之后的值只可能变大
            if (newValue === target) {
                result.push(currentList.concat(candidates[i]));
                return; // 因为排序过 之后的值只可能变大
            }
            step(newValue, candidates.slice(i), currentList.concat(candidates[i]));
        }
    }
}
const assert_1 = __importDefault(require("assert"));
const assertHelper_1 = require("../util/assertHelper");
assert_1.default.deepStrictEqual((0, assertHelper_1.sortDeep)(combinationSum([2, 3, 6, 7], 7)), (0, assertHelper_1.sortDeep)([[7], [2, 2, 3]]));
assert_1.default.deepStrictEqual((0, assertHelper_1.sortDeep)(combinationSum([2, 3, 5], 8)), (0, assertHelper_1.sortDeep)([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzku57uE5ZCI5oC75ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zOS7nu4TlkIjmgLvlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtDSTtBQUNKLFNBQVMsY0FBYyxDQUFDLFVBQW9CLEVBQUUsTUFBYztJQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLGVBQWU7SUFDZixNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsSUFBSSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwQixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUNYLE9BQWUsRUFDZixVQUFvQixFQUNwQixjQUF3QixFQUFFO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sUUFBUSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxRQUFRLEdBQUcsTUFBTTtnQkFBRSxPQUFPLENBQUMsZ0JBQWdCO1lBRS9DLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxrQkFBa0I7YUFDM0I7WUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxvREFBNEI7QUFDNUIsdURBQWdEO0FBRWhELGdCQUFNLENBQUMsZUFBZSxDQUNwQixJQUFBLHVCQUFRLEVBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDekMsSUFBQSx1QkFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLElBQUEsdUJBQVEsRUFBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3RDLElBQUEsdUJBQVEsRUFBQztJQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNQLENBQUMsQ0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxu57uZ5a6a5LiA5Liq5peg6YeN5aSN5YWD57Sg55qE5pWw57uEIGNhbmRpZGF0ZXMg5ZKM5LiA5Liq55uu5qCH5pWwIHRhcmdldCDvvIzmib7lh7ogY2FuZGlkYXRlcyDkuK3miYDmnInlj6/ku6Xkvb/mlbDlrZflkozkuLogdGFyZ2V0IOeahOe7hOWQiOOAglxuXG5jYW5kaWRhdGVzIOS4reeahOaVsOWtl+WPr+S7peaXoOmZkOWItumHjeWkjeiiq+mAieWPluOAglxuXG7or7TmmI7vvJpcblxu5omA5pyJ5pWw5a2X77yI5YyF5ousIHRhcmdldO+8iemDveaYr+ato+aVtOaVsOOAglxu6Kej6ZuG5LiN6IO95YyF5ZCr6YeN5aSN55qE57uE5ZCI44CCXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpjYW5kaWRhdGVzID0gWzIsMyw2LDddLCB0YXJnZXQgPSA3LFxu5omA5rGC6Kej6ZuG5Li677yaXG5bXG4gIFs3XSxcbiAgWzIsMiwzXVxuXVxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaY2FuZGlkYXRlcyA9IFsyLDMsNV0sIHRhcmdldCA9IDgsXG7miYDmsYLop6Ppm4bkuLrvvJpcbltcbiAgWzIsMiwyLDJdLFxuICBbMiwzLDNdLFxuICBbMyw1XVxuXVxuXG5cbuaPkOekuu+8mlxuICAxIDw9IGNhbmRpZGF0ZXMubGVuZ3RoIDw9IDMwXG4gIDEgPD0gY2FuZGlkYXRlc1tpXSA8PSAyMDBcbiAgY2FuZGlkYXRlIOS4reeahOavj+S4quWFg+e0oOmDveaYr+eLrOS4gOaXoOS6jOeahOOAglxuICAxIDw9IHRhcmdldCA8PSA1MDBcbiogKi9cbmZ1bmN0aW9uIGNvbWJpbmF0aW9uU3VtKGNhbmRpZGF0ZXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjYW5kaWRhdGVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgLy8g5oiR5LuW5aaI55u05o6lIOS9v+eUqOWbnua6r+eul+azlVxuICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgc3RlcCgwLCBjYW5kaWRhdGVzKTtcbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBzdGVwKFxuICAgIGN1cnJlbnQ6IG51bWJlcixcbiAgICBjYW5kaWRhdGVzOiBudW1iZXJbXSxcbiAgICBjdXJyZW50TGlzdDogbnVtYmVyW10gPSBbXVxuICApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudCArIGNhbmRpZGF0ZXNbaV07XG4gICAgICBpZiAobmV3VmFsdWUgPiB0YXJnZXQpIHJldHVybjsgLy8g5o6S5bqP6L+HIOS5i+WQjueahOWAvOWPquWPr+iDveWPmOWkp1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHRhcmdldCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50TGlzdC5jb25jYXQoY2FuZGlkYXRlc1tpXSkpO1xuICAgICAgICByZXR1cm47IC8vIOWboOS4uuaOkuW6j+i/hyDkuYvlkI7nmoTlgLzlj6rlj6/og73lj5jlpKdcbiAgICAgIH1cblxuICAgICAgc3RlcChuZXdWYWx1ZSwgY2FuZGlkYXRlcy5zbGljZShpKSwgY3VycmVudExpc3QuY29uY2F0KGNhbmRpZGF0ZXNbaV0pKTtcbiAgICB9XG4gIH1cbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBzb3J0RGVlcCB9IGZyb20gXCIuLi91dGlsL2Fzc2VydEhlbHBlclwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBzb3J0RGVlcChjb21iaW5hdGlvblN1bShbMiwgMywgNiwgN10sIDcpKSxcbiAgc29ydERlZXAoW1s3XSwgWzIsIDIsIDNdXSlcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBzb3J0RGVlcChjb21iaW5hdGlvblN1bShbMiwgMywgNV0sIDgpKSxcbiAgc29ydERlZXAoW1xuICAgIFsyLCAyLCAyLCAyXSxcbiAgICBbMiwgMywgM10sXG4gICAgWzMsIDVdLFxuICBdKVxuKTtcbiJdfQ==