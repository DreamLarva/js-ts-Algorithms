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
        result = result.concat(binaryTreePaths(left).map(v => val + "->" + v));
    if (right)
        result = result.concat(binaryTreePaths(right).map(v => val + "->" + v));
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
            const str_left = str + '->' + root.left.val;
            getPath(root.left, str_left);
        }
        if (root.right) {
            const str_right = str + '->' + root.right.val;
            getPath(root.right, str_right);
        }
        if (!root.left && !root.right) {
            arr.push(String(str));
            return;
        }
    }
};
assert_1.default.deepStrictEqual(binaryTreePaths(BinaryTree_1.createBinaryTree([1, 2, 3, null, 5])), ["1->2->5", "1->3"]);
assert_1.default.deepStrictEqual(binaryTreePaths(null), []);
assert_1.default.deepStrictEqual(binaryTreePaths2(BinaryTree_1.createBinaryTree([1, 2, 3, null, 5])), ["1->2->5", "1->3"]);
assert_1.default.deepStrictEqual(binaryTreePaths2(null), []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBOEQ7QUFDOUQsb0RBQTRCO0FBRTVCOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDakQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztJQUNoQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLElBQUk7UUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLElBQUksS0FBSztRQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY7Ozs7S0FJSztBQUNMLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUE2QjtJQUMxRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sR0FBRyxDQUFDO0lBRVgsU0FBUyxPQUFPLENBQUMsSUFBNkIsRUFBRSxHQUFXO1FBQ3ZELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxNQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osTUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtJQUNMLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZUFBZSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckQsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQ3RCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUNyQixFQUFFLENBQ0wsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3RELENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUN0QixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0QixFQUFFLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57miYDmnInku47moLnoioLngrnliLDlj7blrZDoioLngrnnmoTot6/lvoTjgIJcblxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6XG5cbiAgIDFcbiAvICAgXFxcbjIgICAgIDNcbiBcXFxuICA1XG5cbui+k+WHujogW1wiMS0+Mi0+NVwiLCBcIjEtPjNcIl1cblxu6Kej6YeKOiDmiYDmnInmoLnoioLngrnliLDlj7blrZDoioLngrnnmoTot6/lvoTkuLo6IDEtPjItPjUsIDEtPjNcbiogKi9cbmltcG9ydCB7Y3JlYXRlQmluYXJ5VHJlZSwgVHJlZU5vZGV9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG52YXIgYmluYXJ5VHJlZVBhdGhzID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCk6IHN0cmluZ1tdIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHtsZWZ0LCByaWdodCwgdmFsfSA9IHJvb3Q7XG4gICAgaWYgKCEobGVmdCB8fCByaWdodCkpIHJldHVybiBbU3RyaW5nKHZhbCldO1xuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKGxlZnQpIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYmluYXJ5VHJlZVBhdGhzKGxlZnQpLm1hcCh2ID0+IHZhbCArIFwiLT5cIiArIHYpKTtcbiAgICBpZiAocmlnaHQpIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYmluYXJ5VHJlZVBhdGhzKHJpZ2h0KS5tYXAodiA9PiB2YWwgKyBcIi0+XCIgKyB2KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICog5pu05L2z55qE5pa55rOVXG4gKiDlt6fnlKgganMg5Y+v5Lul5Zyo5Ye95pWw5Lit5aOw5piO5Ye95pWwIOWwhue7k+aenOaUvuWcqOmAkuW9kuWkluWxglxuICog6IqC57qm5LqGIOavj+asoemAkuW9kuWSjOW5tue7k+aenOeahOW8gOmUgFxuICogKi9cbnZhciBiaW5hcnlUcmVlUGF0aHMyID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKTogc3RyaW5nW10ge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gW107XG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuICAgIGdldFBhdGgocm9vdCwgU3RyaW5nKHJvb3QudmFsKSk7XG4gICAgcmV0dXJuIGFycjtcblxuICAgIGZ1bmN0aW9uIGdldFBhdGgocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIHN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuO1xuICAgICAgICBpZiAocm9vdC5sZWZ0KSB7XG4gICAgICAgICAgICBjb25zdCBzdHJfbGVmdCA9IHN0ciArICctPicgKyByb290LmxlZnQudmFsO1xuICAgICAgICAgICAgZ2V0UGF0aChyb290LmxlZnQsIHN0cl9sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm9vdC5yaWdodCkge1xuICAgICAgICAgICAgY29uc3Qgc3RyX3JpZ2h0ID0gc3RyICsgJy0+JyArIHJvb3QucmlnaHQudmFsO1xuICAgICAgICAgICAgZ2V0UGF0aChyb290LnJpZ2h0LCBzdHJfcmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcm9vdC5sZWZ0ICYmICFyb290LnJpZ2h0KSB7XG4gICAgICAgICAgICBhcnIucHVzaChTdHJpbmcoc3RyKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGJpbmFyeVRyZWVQYXRocyhjcmVhdGVCaW5hcnlUcmVlKFsxLCAyLCAzLCBudWxsLCA1XSkpLFxuICAgIFtcIjEtPjItPjVcIiwgXCIxLT4zXCJdLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgYmluYXJ5VHJlZVBhdGhzKG51bGwpLFxuICAgIFtdLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgYmluYXJ5VHJlZVBhdGhzMihjcmVhdGVCaW5hcnlUcmVlKFsxLCAyLCAzLCBudWxsLCA1XSkpLFxuICAgIFtcIjEtPjItPjVcIiwgXCIxLT4zXCJdLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgYmluYXJ5VHJlZVBhdGhzMihudWxsKSxcbiAgICBbXSxcbik7XG4iXX0=