"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
* */
const BinaryTree_1 = require("../util/BinaryTree");
const assert_1 = __importDefault(require("assert"));
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root === null)
        return [];
    const { left, right, val } = root;
    if (!(left || right))
        return [String(val)];
    let result = [];
    if (left)
        result = result.concat(binaryTreePaths(left).map((v) => val + "->" + v));
    if (right)
        result = result.concat(binaryTreePaths(right).map((v) => val + "->" + v));
    return result;
};
/**
 * 更佳的方法
 * 巧用 js 可以在函数中声明函数 将结果放在递归外层
 * 节约了 每次递归和并结果的开销
 * */
var binaryTreePaths2 = function (root) {
    if (root === null)
        return [];
    const arr = [];
    getPath(root, String(root.val));
    return arr;
    function getPath(root, str) {
        if (!root)
            return;
        if (root.left) {
            const str_left = str + "->" + root.left.val;
            getPath(root.left, str_left);
        }
        if (root.right) {
            const str_right = str + "->" + root.right.val;
            getPath(root.right, str_right);
        }
        if (!root.left && !root.right) {
            arr.push(String(str));
            return;
        }
    }
};
assert_1.default.deepStrictEqual(binaryTreePaths(BinaryTree_1.createBinaryTree([1, 2, 3, null, 5])), [
    "1->2->5",
    "1->3",
]);
assert_1.default.deepStrictEqual(binaryTreePaths(null), []);
assert_1.default.deepStrictEqual(binaryTreePaths2(BinaryTree_1.createBinaryTree([1, 2, 3, null, 5])), [
    "1->2->5",
    "1->3",
]);
assert_1.default.deepStrictEqual(binaryTreePaths2(null), []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFDaEUsb0RBQTRCO0FBRTVCOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDbkQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLElBQUk7UUFDTixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxLQUFLO1FBQ1AsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7O0tBSUs7QUFDTCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsSUFBNkI7SUFDNUQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLEdBQUcsQ0FBQztJQUVYLFNBQVMsT0FBTyxDQUFDLElBQTZCLEVBQUUsR0FBVztRQUN6RCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsTUFBTSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM1RSxTQUFTO0lBQ1QsTUFBTTtDQUNQLENBQUMsQ0FBQztBQUNILGdCQUFNLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDN0UsU0FBUztJQUNULE1BQU07Q0FDUCxDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuaJgOacieS7juagueiKgueCueWIsOWPtuWtkOiKgueCueeahOi3r+W+hOOAglxyXG5cclxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTpcclxuXHJcbiAgIDFcclxuIC8gICBcXFxyXG4yICAgICAzXHJcbiBcXFxyXG4gIDVcclxuXHJcbui+k+WHujogW1wiMS0+Mi0+NVwiLCBcIjEtPjNcIl1cclxuXHJcbuino+mHijog5omA5pyJ5qC56IqC54K55Yiw5Y+25a2Q6IqC54K555qE6Lev5b6E5Li6OiAxLT4yLT41LCAxLT4zXHJcbiogKi9cclxuaW1wb3J0IHsgY3JlYXRlQmluYXJ5VHJlZSwgVHJlZU5vZGUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7c3RyaW5nW119XHJcbiAqL1xyXG52YXIgYmluYXJ5VHJlZVBhdGhzID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCk6IHN0cmluZ1tdIHtcclxuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHZhbCB9ID0gcm9vdDtcclxuICBpZiAoIShsZWZ0IHx8IHJpZ2h0KSkgcmV0dXJuIFtTdHJpbmcodmFsKV07XHJcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICBpZiAobGVmdClcclxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYmluYXJ5VHJlZVBhdGhzKGxlZnQpLm1hcCgodikgPT4gdmFsICsgXCItPlwiICsgdikpO1xyXG4gIGlmIChyaWdodClcclxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYmluYXJ5VHJlZVBhdGhzKHJpZ2h0KS5tYXAoKHYpID0+IHZhbCArIFwiLT5cIiArIHYpKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOabtOS9s+eahOaWueazlVxyXG4gKiDlt6fnlKgganMg5Y+v5Lul5Zyo5Ye95pWw5Lit5aOw5piO5Ye95pWwIOWwhue7k+aenOaUvuWcqOmAkuW9kuWkluWxglxyXG4gKiDoioLnuqbkuoYg5q+P5qyh6YCS5b2S5ZKM5bm257uT5p6c55qE5byA6ZSAXHJcbiAqICovXHJcbnZhciBiaW5hcnlUcmVlUGF0aHMyID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKTogc3RyaW5nW10ge1xyXG4gIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gW107XHJcbiAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGdldFBhdGgocm9vdCwgU3RyaW5nKHJvb3QudmFsKSk7XHJcbiAgcmV0dXJuIGFycjtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGF0aChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCwgc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghcm9vdCkgcmV0dXJuO1xyXG4gICAgaWYgKHJvb3QubGVmdCkge1xyXG4gICAgICBjb25zdCBzdHJfbGVmdCA9IHN0ciArIFwiLT5cIiArIHJvb3QubGVmdC52YWw7XHJcbiAgICAgIGdldFBhdGgocm9vdC5sZWZ0LCBzdHJfbGVmdCk7XHJcbiAgICB9XHJcbiAgICBpZiAocm9vdC5yaWdodCkge1xyXG4gICAgICBjb25zdCBzdHJfcmlnaHQgPSBzdHIgKyBcIi0+XCIgKyByb290LnJpZ2h0LnZhbDtcclxuICAgICAgZ2V0UGF0aChyb290LnJpZ2h0LCBzdHJfcmlnaHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyb290LmxlZnQgJiYgIXJvb3QucmlnaHQpIHtcclxuICAgICAgYXJyLnB1c2goU3RyaW5nKHN0cikpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChiaW5hcnlUcmVlUGF0aHMoY3JlYXRlQmluYXJ5VHJlZShbMSwgMiwgMywgbnVsbCwgNV0pKSwgW1xyXG4gIFwiMS0+Mi0+NVwiLFxyXG4gIFwiMS0+M1wiLFxyXG5dKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChiaW5hcnlUcmVlUGF0aHMobnVsbCksIFtdKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChiaW5hcnlUcmVlUGF0aHMyKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIG51bGwsIDVdKSksIFtcclxuICBcIjEtPjItPjVcIixcclxuICBcIjEtPjNcIixcclxuXSk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYmluYXJ5VHJlZVBhdGhzMihudWxsKSwgW10pO1xyXG4iXX0=