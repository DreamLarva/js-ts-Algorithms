"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  if (root === null) return [];
  const { left, right, val } = root;
  if (!(left || right)) return [String(val)];
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
  if (root === null) return [];
  const arr = [];
  getPath(root, String(root.val));
  return arr;
  function getPath(root, str) {
    if (!root) return;
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
assert_1.default.deepStrictEqual(
  binaryTreePaths((0, BinaryTree_1.createBinaryTree)([1, 2, 3, null, 5])),
  ["1->2->5", "1->3"]
);
assert_1.default.deepStrictEqual(binaryTreePaths(null), []);
assert_1.default.deepStrictEqual(
  binaryTreePaths2((0, BinaryTree_1.createBinaryTree)([1, 2, 3, null, 5])),
  ["1->2->5", "1->3"]
);
assert_1.default.deepStrictEqual(binaryTreePaths2(null), []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFDaEUsb0RBQTRCO0FBRTVCOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDbkQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLElBQUk7UUFDTixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxLQUFLO1FBQ1AsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7O0tBSUs7QUFDTCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsSUFBNkI7SUFDNUQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUN6QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxPQUFPLEdBQUcsQ0FBQztJQUVYLFNBQVMsT0FBTyxDQUFDLElBQTZCLEVBQUUsR0FBVztRQUN6RCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsTUFBTSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzVFLFNBQVM7SUFDVCxNQUFNO0NBQ1AsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELGdCQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzdFLFNBQVM7SUFDVCxNQUFNO0NBQ1AsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5omA5pyJ5LuO5qC56IqC54K55Yiw5Y+25a2Q6IqC54K555qE6Lev5b6E44CCXG5cbuivtOaYjjog5Y+25a2Q6IqC54K55piv5oyH5rKh5pyJ5a2Q6IqC54K555qE6IqC54K544CCXG5cbuekuuS+izpcblxu6L6T5YWlOlxuXG4gICAxXG4gLyAgIFxcXG4yICAgICAzXG4gXFxcbiAgNVxuXG7ovpPlh7o6IFtcIjEtPjItPjVcIiwgXCIxLT4zXCJdXG5cbuino+mHijog5omA5pyJ5qC56IqC54K55Yiw5Y+25a2Q6IqC54K555qE6Lev5b6E5Li6OiAxLT4yLT41LCAxLT4zXG4qICovXG5pbXBvcnQgeyBjcmVhdGVCaW5hcnlUcmVlLCBUcmVlTm9kZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG52YXIgYmluYXJ5VHJlZVBhdGhzID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCk6IHN0cmluZ1tdIHtcbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgY29uc3QgeyBsZWZ0LCByaWdodCwgdmFsIH0gPSByb290O1xuICBpZiAoIShsZWZ0IHx8IHJpZ2h0KSkgcmV0dXJuIFtTdHJpbmcodmFsKV07XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGlmIChsZWZ0KVxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYmluYXJ5VHJlZVBhdGhzKGxlZnQpLm1hcCgodikgPT4gdmFsICsgXCItPlwiICsgdikpO1xuICBpZiAocmlnaHQpXG4gICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChiaW5hcnlUcmVlUGF0aHMocmlnaHQpLm1hcCgodikgPT4gdmFsICsgXCItPlwiICsgdikpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDmm7TkvbPnmoTmlrnms5VcbiAqIOW3p+eUqCBqcyDlj6/ku6XlnKjlh73mlbDkuK3lo7DmmI7lh73mlbAg5bCG57uT5p6c5pS+5Zyo6YCS5b2S5aSW5bGCXG4gKiDoioLnuqbkuoYg5q+P5qyh6YCS5b2S5ZKM5bm257uT5p6c55qE5byA6ZSAXG4gKiAqL1xudmFyIGJpbmFyeVRyZWVQYXRoczIgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpOiBzdHJpbmdbXSB7XG4gIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gW107XG4gIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcbiAgZ2V0UGF0aChyb290LCBTdHJpbmcocm9vdC52YWwpKTtcbiAgcmV0dXJuIGFycjtcblxuICBmdW5jdGlvbiBnZXRQYXRoKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsLCBzdHI6IHN0cmluZykge1xuICAgIGlmICghcm9vdCkgcmV0dXJuO1xuICAgIGlmIChyb290LmxlZnQpIHtcbiAgICAgIGNvbnN0IHN0cl9sZWZ0ID0gc3RyICsgXCItPlwiICsgcm9vdC5sZWZ0LnZhbDtcbiAgICAgIGdldFBhdGgocm9vdC5sZWZ0LCBzdHJfbGVmdCk7XG4gICAgfVxuICAgIGlmIChyb290LnJpZ2h0KSB7XG4gICAgICBjb25zdCBzdHJfcmlnaHQgPSBzdHIgKyBcIi0+XCIgKyByb290LnJpZ2h0LnZhbDtcbiAgICAgIGdldFBhdGgocm9vdC5yaWdodCwgc3RyX3JpZ2h0KTtcbiAgICB9XG4gICAgaWYgKCFyb290LmxlZnQgJiYgIXJvb3QucmlnaHQpIHtcbiAgICAgIGFyci5wdXNoKFN0cmluZyhzdHIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoYmluYXJ5VHJlZVBhdGhzKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIG51bGwsIDVdKSksIFtcbiAgXCIxLT4yLT41XCIsXG4gIFwiMS0+M1wiLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGJpbmFyeVRyZWVQYXRocyhudWxsKSwgW10pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChiaW5hcnlUcmVlUGF0aHMyKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIG51bGwsIDVdKSksIFtcbiAgXCIxLT4yLT41XCIsXG4gIFwiMS0+M1wiLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGJpbmFyeVRyZWVQYXRoczIobnVsbCksIFtdKTtcbiJdfQ==
