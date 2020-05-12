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
  binaryTreePaths(BinaryTree_1.createBinaryTree([1, 2, 3, null, 5])),
  ["1->2->5", "1->3"]
);
assert_1.default.deepStrictEqual(binaryTreePaths(null), []);
assert_1.default.deepStrictEqual(
  binaryTreePaths2(BinaryTree_1.createBinaryTree([1, 2, 3, null, 5])),
  ["1->2->5", "1->3"]
);
assert_1.default.deepStrictEqual(binaryTreePaths2(null), []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU3LuS6jOWPieagkeeahOaJgOaciei3r+W+hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBOEQ7QUFDOUQsb0RBQTRCO0FBRTVCOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDakQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQztJQUNoQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLElBQUk7UUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLElBQUksS0FBSztRQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY7Ozs7S0FJSztBQUNMLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUE2QjtJQUMxRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sR0FBRyxDQUFDO0lBRVgsU0FBUyxPQUFPLENBQUMsSUFBNkIsRUFBRSxHQUFXO1FBQ3ZELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxNQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osTUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtJQUNMLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZUFBZSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckQsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQ3RCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUNyQixFQUFFLENBQ0wsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3RELENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUN0QixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0QixFQUFFLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuaJgOacieS7juagueiKgueCueWIsOWPtuWtkOiKgueCueeahOi3r+W+hOOAglxyXG5cclxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTpcclxuXHJcbiAgIDFcclxuIC8gICBcXFxyXG4yICAgICAzXHJcbiBcXFxyXG4gIDVcclxuXHJcbui+k+WHujogW1wiMS0+Mi0+NVwiLCBcIjEtPjNcIl1cclxuXHJcbuino+mHijog5omA5pyJ5qC56IqC54K55Yiw5Y+25a2Q6IqC54K555qE6Lev5b6E5Li6OiAxLT4yLT41LCAxLT4zXHJcbiogKi9cclxuaW1wb3J0IHtjcmVhdGVCaW5hcnlUcmVlLCBUcmVlTm9kZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XHJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxyXG4gKi9cclxudmFyIGJpbmFyeVRyZWVQYXRocyA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3Qge2xlZnQsIHJpZ2h0LCB2YWx9ID0gcm9vdDtcclxuICAgIGlmICghKGxlZnQgfHwgcmlnaHQpKSByZXR1cm4gW1N0cmluZyh2YWwpXTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobGVmdCkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChiaW5hcnlUcmVlUGF0aHMobGVmdCkubWFwKHYgPT4gdmFsICsgXCItPlwiICsgdikpO1xyXG4gICAgaWYgKHJpZ2h0KSByZXN1bHQgPSByZXN1bHQuY29uY2F0KGJpbmFyeVRyZWVQYXRocyhyaWdodCkubWFwKHYgPT4gdmFsICsgXCItPlwiICsgdikpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDmm7TkvbPnmoTmlrnms5VcclxuICog5ben55SoIGpzIOWPr+S7peWcqOWHveaVsOS4reWjsOaYjuWHveaVsCDlsIbnu5PmnpzmlL7lnKjpgJLlvZLlpJblsYJcclxuICog6IqC57qm5LqGIOavj+asoemAkuW9kuWSjOW5tue7k+aenOeahOW8gOmUgFxyXG4gKiAqL1xyXG52YXIgYmluYXJ5VHJlZVBhdGhzMiA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCk6IHN0cmluZ1tdIHtcclxuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICBnZXRQYXRoKHJvb3QsIFN0cmluZyhyb290LnZhbCkpO1xyXG4gICAgcmV0dXJuIGFycjtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYXRoKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsLCBzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb290LmxlZnQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyX2xlZnQgPSBzdHIgKyAnLT4nICsgcm9vdC5sZWZ0LnZhbDtcclxuICAgICAgICAgICAgZ2V0UGF0aChyb290LmxlZnQsIHN0cl9sZWZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvb3QucmlnaHQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyX3JpZ2h0ID0gc3RyICsgJy0+JyArIHJvb3QucmlnaHQudmFsO1xyXG4gICAgICAgICAgICBnZXRQYXRoKHJvb3QucmlnaHQsIHN0cl9yaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm9vdC5sZWZ0ICYmICFyb290LnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKFN0cmluZyhzdHIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBiaW5hcnlUcmVlUGF0aHMoY3JlYXRlQmluYXJ5VHJlZShbMSwgMiwgMywgbnVsbCwgNV0pKSxcclxuICAgIFtcIjEtPjItPjVcIiwgXCIxLT4zXCJdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgYmluYXJ5VHJlZVBhdGhzKG51bGwpLFxyXG4gICAgW10sXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBiaW5hcnlUcmVlUGF0aHMyKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIG51bGwsIDVdKSksXHJcbiAgICBbXCIxLT4yLT41XCIsIFwiMS0+M1wiXSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIGJpbmFyeVRyZWVQYXRoczIobnVsbCksXHJcbiAgICBbXSxcclxuKTtcclxuIl19
