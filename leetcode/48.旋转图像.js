"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
* */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  // 要保证所有 值都 交换 那么 应该交换了 约4分之1 的值(n 为奇数  除了中心有值不用交换的)
  // 4x4 那么 遍历 2x2
  // 5x5 => 2x3 或者 3x2
  // 7x7 => 4x3 或者 3x4
  for (let i = 0; i < n / 2; i++) {
    const j_limit = (n & 1) === 1 ? n - n / 2 - 1 : n / 2;
    for (let j = 0; j < j_limit; j++) {
      // console.log(i, j);
      // 使用解构 可以不用 临时变量
      [
        matrix[i][j],
        matrix[n - j - 1][i],
        matrix[n - i - 1][n - j - 1],
        matrix[j][n - i - 1],
      ] = [
        matrix[n - j - 1][i],
        matrix[n - i - 1][n - j - 1],
        matrix[j][n - i - 1],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
  [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ]
);
assert_1.default.deepStrictEqual(
  rotate([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]),
  [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ]
);
assert_1.default.deepStrictEqual(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgu5peL6L2s5Zu+5YOPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80OC7ml4vovazlm77lg48udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5Q0k7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLE1BQU0sR0FBRyxVQUFVLE1BQWtCO0lBQ3JDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEIsb0RBQW9EO0lBQ3BELGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQjtnQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixHQUFHO2dC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gOS4qiBuIMOXIG4g55qE5LqM57u055+p6Zi16KGo56S65LiA5Liq5Zu+5YOP44CCXHJcblxyXG7lsIblm77lg4/pobrml7bpkojml4vovawgOTAg5bqm44CCXHJcblxyXG7or7TmmI7vvJpcclxuXHJcbuS9oOW/hemhu+WcqOWOn+WcsOaXi+i9rOWbvuWDj++8jOi/meaEj+WRs+edgOS9oOmcgOimgeebtOaOpeS/ruaUuei+k+WFpeeahOS6jOe7tOefqemYteOAguivt+S4jeimgeS9v+eUqOWPpuS4gOS4quefqemYteadpeaXi+i9rOWbvuWDj+OAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7nu5nlrpogbWF0cml4ID1cclxuW1xyXG4gIFsxLDIsM10sXHJcbiAgWzQsNSw2XSxcclxuICBbNyw4LDldXHJcbl0sXHJcblxyXG7ljp/lnLDml4vovazovpPlhaXnn6npmLXvvIzkvb/lhbblj5jkuLo6XHJcbltcclxuICBbNyw0LDFdLFxyXG4gIFs4LDUsMl0sXHJcbiAgWzksNiwzXVxyXG5dXHJcbuekuuS+iyAyOlxyXG5cclxu57uZ5a6aIG1hdHJpeCA9XHJcbltcclxuICBbIDUsIDEsIDksMTFdLFxyXG4gIFsgMiwgNCwgOCwxMF0sXHJcbiAgWzEzLCAzLCA2LCA3XSxcclxuICBbMTUsMTQsMTIsMTZdXHJcbl0sXHJcblxyXG7ljp/lnLDml4vovazovpPlhaXnn6npmLXvvIzkvb/lhbblj5jkuLo6XHJcbltcclxuICBbMTUsMTMsIDIsIDVdLFxyXG4gIFsxNCwgMywgNCwgMV0sXHJcbiAgWzEyLCA2LCA4LCA5XSxcclxuICBbMTYsIDcsMTAsMTFdXHJcbl1cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBtYXRyaXhcclxuICogQHJldHVybiB7dm9pZH0gRG8gbm90IHJldHVybiBhbnl0aGluZywgbW9kaWZ5IG1hdHJpeCBpbi1wbGFjZSBpbnN0ZWFkLlxyXG4gKi9cclxudmFyIHJvdGF0ZSA9IGZ1bmN0aW9uIChtYXRyaXg6IG51bWJlcltdW10pIHtcclxuICAgIGNvbnN0IG4gPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgLy8g6KaB5L+d6K+B5omA5pyJIOWAvOmDvSDkuqTmjaIg6YKj5LmIIOW6lOivpeS6pOaNouS6hiDnuqY05YiG5LmLMSDnmoTlgLwobiDkuLrlpYfmlbAgIOmZpOS6huS4reW/g+acieWAvOS4jeeUqOS6pOaNoueahClcclxuICAgIC8vIDR4NCDpgqPkuYgg6YGN5Y6GIDJ4MlxyXG4gICAgLy8gNXg1ID0+IDJ4MyDmiJbogIUgM3gyXHJcbiAgICAvLyA3eDcgPT4gNHgzIOaIluiAhSAzeDRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbiAvIDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGpfbGltaXQgPSAobiAmIDEpID09PSAxID8gbiAtIG4gLyAyIC0gMSA6IG4gLyAyO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGpfbGltaXQ7IGorKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBqKTtcclxuICAgICAgICAgICAgLy8g5L2/55So6Kej5p6EIOWPr+S7peS4jeeUqCDkuLTml7blj5jph49cclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdLFxyXG4gICAgICAgICAgICAgICAgbWF0cml4W24gLSBqIC0gMV1baV0sXHJcbiAgICAgICAgICAgICAgICBtYXRyaXhbbiAtIGkgLSAxXVtuIC0gaiAtIDFdLFxyXG4gICAgICAgICAgICAgICAgbWF0cml4W2pdW24gLSBpIC0gMV0sXHJcbiAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICBtYXRyaXhbbiAtIGogLSAxXVtpXSxcclxuICAgICAgICAgICAgICAgIG1hdHJpeFtuIC0gaSAtIDFdW24gLSBqIC0gMV0sXHJcbiAgICAgICAgICAgICAgICBtYXRyaXhbal1bbiAtIGkgLSAxXSxcclxuICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdHJpeDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJvdGF0ZShbXHJcbiAgICAgICAgWzUsIDEsIDksIDExXSxcclxuICAgICAgICBbMiwgNCwgOCwgMTBdLFxyXG4gICAgICAgIFsxMywgMywgNiwgN10sXHJcbiAgICAgICAgWzE1LCAxNCwgMTIsIDE2XSxcclxuICAgIF0pLFxyXG4gICAgW1xyXG4gICAgICAgIFsxNSwgMTMsIDIsIDVdLFxyXG4gICAgICAgIFsxNCwgMywgNCwgMV0sXHJcbiAgICAgICAgWzEyLCA2LCA4LCA5XSxcclxuICAgICAgICBbMTYsIDcsIDEwLCAxMV0sXHJcbiAgICBdLFxyXG4pO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJvdGF0ZShbXHJcbiAgICAgICAgWzEsIDIsIDMsIDQsIDVdLFxyXG4gICAgICAgIFs2LCA3LCA4LCA5LCAxMF0sXHJcbiAgICAgICAgWzExLCAxMiwgMTMsIDE0LCAxNV0sXHJcbiAgICAgICAgWzE2LCAxNywgMTgsIDE5LCAyMF0sXHJcbiAgICAgICAgWzIxLCAyMiwgMjMsIDI0LCAyNV0sXHJcbiAgICBdKSxcclxuICAgIFtcclxuICAgICAgICBbMjEsIDE2LCAxMSwgNiwgMV0sXHJcbiAgICAgICAgWzIyLCAxNywgMTIsIDcsIDJdLFxyXG4gICAgICAgIFsyMywgMTgsIDEzLCA4LCAzXSxcclxuICAgICAgICBbMjQsIDE5LCAxNCwgOSwgNF0sXHJcbiAgICAgICAgWzI1LCAyMCwgMTUsIDEwLCA1XSxcclxuICAgIF0sXHJcbik7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgcm90YXRlKFtcclxuICAgICAgICBbMSwgMiwgM10sXHJcbiAgICAgICAgWzQsIDUsIDZdLFxyXG4gICAgICAgIFs3LCA4LCA5XSxcclxuICAgIF0pLFxyXG4gICAgW1xyXG4gICAgICAgIFs3LCA0LCAxXSxcclxuICAgICAgICBbOCwgNSwgMl0sXHJcbiAgICAgICAgWzksIDYsIDNdLFxyXG4gICAgXSxcclxuKTtcclxuIl19
