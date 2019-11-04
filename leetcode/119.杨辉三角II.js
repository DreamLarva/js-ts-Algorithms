"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
* */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 1)
        return [1];
    if (rowIndex === 2)
        return [1, 1];
    const result = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        for (let j = result.length; j >= 0; j--) {
            result[j] = (result[j] || 0) + (result[j - 1] || 0);
        }
    }
    return result;
};
/**
 * 算法到 O(k)
 * 则 使用 杨辉三角的通项公式
 * */
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(getRow(3), [1, 3, 3, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5LuadqOi+ieS4ieinkklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMTku5p2o6L6J5LiJ6KeSSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTtBQUNKOzs7R0FHRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsUUFBZ0I7SUFDbkMsSUFBSSxRQUFRLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLFFBQVEsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkQ7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUNGOzs7S0FHSztBQUVMLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq6Z2e6LSf57Si5byVIGvvvIzlhbbkuK0gayDiiaQgMzPvvIzov5Tlm57mnajovonkuInop5LnmoTnrKwgayDooYzjgIJcclxuXHJcblxyXG5cclxu5Zyo5p2o6L6J5LiJ6KeS5Lit77yM5q+P5Liq5pWw5piv5a6D5bem5LiK5pa55ZKM5Y+z5LiK5pa555qE5pWw55qE5ZKM44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IDNcclxu6L6T5Ye6OiBbMSwzLDMsMV1cclxu6L+b6Zi277yaXHJcblxyXG7kvaDlj6/ku6XkvJjljJbkvaDnmoTnrpfms5XliLAgTyhrKSDnqbrpl7TlpI3mnYLluqblkJfvvJ9cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvd0luZGV4XHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxudmFyIGdldFJvdyA9IGZ1bmN0aW9uIChyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAocm93SW5kZXggPT09IDEpIHJldHVybiBbMV07XHJcbiAgICBpZiAocm93SW5kZXggPT09IDIpIHJldHVybiBbMSwgMV07XHJcbiAgICBjb25zdCByZXN1bHQgPSBbMSwgMV07XHJcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByb3dJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHJlc3VsdC5sZW5ndGg7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IChyZXN1bHRbal0gfHwgMCkgKyAocmVzdWx0W2ogLSAxXSB8fCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuLyoqXHJcbiAqIOeul+azleWIsCBPKGspXHJcbiAqIOWImSDkvb/nlKgg5p2o6L6J5LiJ6KeS55qE6YCa6aG55YWs5byPXHJcbiAqICovXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0Um93KDMpLCBbMSwgMywgMywgMV0pO1xyXG4iXX0=