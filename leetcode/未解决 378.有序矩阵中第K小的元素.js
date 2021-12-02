"use strict";
/*
378. 有序矩阵中第K小的元素
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。



示例：

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。


提示：
你可以假设 k 的值永远是有效的，1 ≤ k ≤ n2
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
/**
 * 暴力排序
 * */
function kthSmallest(matrix, k) {
  return lodash_1.default.flatten(matrix).sort((a, b) => a - b)[k - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazIDM3OC7mnInluo/nn6npmLXkuK3nrKxL5bCP55qE5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/mnKrop6PlhrMgMzc4LuacieW6j+efqemYteS4reesrEvlsI/nmoTlhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7Ozs7O0FBRUosb0RBQXVCO0FBQ3ZCOztLQUVLO0FBQ0wsU0FBUyxXQUFXLENBQUMsTUFBa0IsRUFBRSxDQUFTO0lBQ2hELE9BQU8sZ0JBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjM3OC4g5pyJ5bqP55+p6Zi15Lit56ysS+Wwj+eahOWFg+e0oFxu57uZ5a6a5LiA5LiqIG4geCBuIOefqemYte+8jOWFtuS4reavj+ihjOWSjOavj+WIl+WFg+e0oOWdh+aMieWNh+W6j+aOkuW6j++8jOaJvuWIsOefqemYteS4reesrCBrIOWwj+eahOWFg+e0oOOAglxu6K+35rOo5oSP77yM5a6D5piv5o6S5bqP5ZCO55qE56ysIGsg5bCP5YWD57Sg77yM6ICM5LiN5piv56ysIGsg5Liq5LiN5ZCM55qE5YWD57Sg44CCXG5cblxuXG7npLrkvovvvJpcblxubWF0cml4ID0gW1xuICAgWyAxLCAgNSwgIDldLFxuICAgWzEwLCAxMSwgMTNdLFxuICAgWzEyLCAxMywgMTVdXG5dLFxuayA9IDgsXG5cbui/lOWbniAxM+OAglxuXG5cbuaPkOekuu+8mlxu5L2g5Y+v5Lul5YGH6K6+IGsg55qE5YC85rC46L+c5piv5pyJ5pWI55qE77yMMSDiiaQgayDiiaQgbjJcbiogKi9cblxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuLyoqXG4gKiDmmrTlipvmjpLluo9cbiAqICovXG5mdW5jdGlvbiBrdGhTbWFsbGVzdChtYXRyaXg6IG51bWJlcltdW10sIGs6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBfLmZsYXR0ZW4obWF0cml4KS5zb3J0KChhLCBiKSA9PiBhIC0gYilbayAtIDFdO1xufVxuIl19
