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
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(getRow(3), [1, 3, 3, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5LuadqOi+ieS4ieinkklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMTku5p2o6L6J5LiJ6KeSSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTtBQUNKOzs7R0FHRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsUUFBZ0I7SUFDbkMsSUFBSSxRQUFRLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLFFBQVEsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkQ7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumdnui0n+e0ouW8lSBr77yM5YW25LitIGsg4omkIDMz77yM6L+U5Zue5p2o6L6J5LiJ6KeS55qE56ysIGsg6KGM44CCXG5cblxuXG7lnKjmnajovonkuInop5LkuK3vvIzmr4/kuKrmlbDmmK/lroPlt6bkuIrmlrnlkozlj7PkuIrmlrnnmoTmlbDnmoTlkozjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IDNcbui+k+WHujogWzEsMywzLDFdXG7ov5vpmLbvvJpcblxu5L2g5Y+v5Lul5LyY5YyW5L2g55qE566X5rOV5YiwIE8oaykg56m66Ze05aSN5p2C5bqm5ZCX77yfXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3dJbmRleFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBnZXRSb3cgPSBmdW5jdGlvbiAocm93SW5kZXg6IG51bWJlcikge1xuICAgIGlmIChyb3dJbmRleCA9PT0gMSkgcmV0dXJuIFsxXTtcbiAgICBpZiAocm93SW5kZXggPT09IDIpIHJldHVybiBbMSwgMV07XG4gICAgY29uc3QgcmVzdWx0ID0gWzEsIDFdO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJvd0luZGV4OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IHJlc3VsdC5sZW5ndGg7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICByZXN1bHRbal0gPSAocmVzdWx0W2pdIHx8IDApICsgKHJlc3VsdFtqIC0gMV0gfHwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2V0Um93KDMpLCBbMSwgMywgMywgMV0pO1xuIl19