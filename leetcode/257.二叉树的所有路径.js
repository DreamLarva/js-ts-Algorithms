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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFDaEUsb0RBQTRCO0FBRTVCOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDbkQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLElBQUk7UUFDTixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxLQUFLO1FBQ1AsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7O0tBSUs7QUFDTCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsSUFBNkI7SUFDNUQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLEdBQUcsQ0FBQztJQUVYLFNBQVMsT0FBTyxDQUFDLElBQTZCLEVBQUUsR0FBVztRQUN6RCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsTUFBTSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM1RSxTQUFTO0lBQ1QsTUFBTTtDQUNQLENBQUMsQ0FBQztBQUNILGdCQUFNLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDN0UsU0FBUztJQUNULE1BQU07Q0FDUCxDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57miYDmnInku47moLnoioLngrnliLDlj7blrZDoioLngrnnmoTot6/lvoTjgIJcblxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6XG5cbiAgIDFcbiAvICAgXFxcbjIgICAgIDNcbiBcXFxuICA1XG5cbui+k+WHujogW1wiMS0+Mi0+NVwiLCBcIjEtPjNcIl1cblxu6Kej6YeKOiDmiYDmnInmoLnoioLngrnliLDlj7blrZDoioLngrnnmoTot6/lvoTkuLo6IDEtPjItPjUsIDEtPjNcbiogKi9cbmltcG9ydCB7IGNyZWF0ZUJpbmFyeVRyZWUsIFRyZWVOb2RlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBiaW5hcnlUcmVlUGF0aHMgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGUgfCBudWxsKTogc3RyaW5nW10ge1xuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuICBjb25zdCB7IGxlZnQsIHJpZ2h0LCB2YWwgfSA9IHJvb3Q7XG4gIGlmICghKGxlZnQgfHwgcmlnaHQpKSByZXR1cm4gW1N0cmluZyh2YWwpXTtcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgaWYgKGxlZnQpXG4gICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChiaW5hcnlUcmVlUGF0aHMobGVmdCkubWFwKCh2KSA9PiB2YWwgKyBcIi0+XCIgKyB2KSk7XG4gIGlmIChyaWdodClcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGJpbmFyeVRyZWVQYXRocyhyaWdodCkubWFwKCh2KSA9PiB2YWwgKyBcIi0+XCIgKyB2KSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIOabtOS9s+eahOaWueazlVxuICog5ben55SoIGpzIOWPr+S7peWcqOWHveaVsOS4reWjsOaYjuWHveaVsCDlsIbnu5PmnpzmlL7lnKjpgJLlvZLlpJblsYJcbiAqIOiKgue6puS6hiDmr4/mrKHpgJLlvZLlkozlubbnu5PmnpznmoTlvIDplIBcbiAqICovXG52YXIgYmluYXJ5VHJlZVBhdGhzMiA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCk6IHN0cmluZ1tdIHtcbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuICBnZXRQYXRoKHJvb3QsIFN0cmluZyhyb290LnZhbCkpO1xuICByZXR1cm4gYXJyO1xuXG4gIGZ1bmN0aW9uIGdldFBhdGgocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIHN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgaWYgKHJvb3QubGVmdCkge1xuICAgICAgY29uc3Qgc3RyX2xlZnQgPSBzdHIgKyBcIi0+XCIgKyByb290LmxlZnQudmFsO1xuICAgICAgZ2V0UGF0aChyb290LmxlZnQsIHN0cl9sZWZ0KTtcbiAgICB9XG4gICAgaWYgKHJvb3QucmlnaHQpIHtcbiAgICAgIGNvbnN0IHN0cl9yaWdodCA9IHN0ciArIFwiLT5cIiArIHJvb3QucmlnaHQudmFsO1xuICAgICAgZ2V0UGF0aChyb290LnJpZ2h0LCBzdHJfcmlnaHQpO1xuICAgIH1cbiAgICBpZiAoIXJvb3QubGVmdCAmJiAhcm9vdC5yaWdodCkge1xuICAgICAgYXJyLnB1c2goU3RyaW5nKHN0cikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChiaW5hcnlUcmVlUGF0aHMoY3JlYXRlQmluYXJ5VHJlZShbMSwgMiwgMywgbnVsbCwgNV0pKSwgW1xuICBcIjEtPjItPjVcIixcbiAgXCIxLT4zXCIsXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYmluYXJ5VHJlZVBhdGhzKG51bGwpLCBbXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGJpbmFyeVRyZWVQYXRoczIoY3JlYXRlQmluYXJ5VHJlZShbMSwgMiwgMywgbnVsbCwgNV0pKSwgW1xuICBcIjEtPjItPjVcIixcbiAgXCIxLT4zXCIsXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYmluYXJ5VHJlZVBhdGhzMihudWxsKSwgW10pO1xuIl19