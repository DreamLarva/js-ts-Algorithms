"use strict";
/*
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  /**
   * 递归
   * */
  if (root === null) return [];
  const result = [];
  step(root);
  return result;
  function step(node) {
    result.push(node.val);
    if (node.left) step(node.left);
    if (node.right) step(node.right);
  }
};
var preorderTraversal_1 = function (root) {
  /**
   * 迭代
   * */
  if (root === null) return [];
  const result = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    // 优先 查询 当前节点 和 左子树
    while (node) {
      stack.push(node);
      result.push(node.val);
      node = node.left;
    }
    // 没有左子树的时候 就获取上一个分支的右子树
    node = stack.pop();
    node = node.right;
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  preorderTraversal((0, BinaryTree_1.createBinaryTree)([1, null, 2, 3])),
  [1, 2, 3]
);
assert_1.default.deepStrictEqual(
  preorderTraversal_1((0, BinaryTree_1.createBinaryTree)([1, null, 2, 3])),
  [1, 2, 3]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTs7Ozs7QUFFSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQTZCO0lBQzdEOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQXNCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLG1CQUFtQixHQUFHLFVBQVUsSUFBNkI7SUFDL0Q7O1NBRUs7SUFDTCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sS0FBSyxHQUF1QixFQUFFLENBQUM7SUFDckMsSUFBSSxJQUFJLEdBQTRCLElBQUksQ0FBQztJQUN6QyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzNCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksRUFBRTtZQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzNFLENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILGdCQUFNLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDN0UsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWug+eahCDliY3luo8g6YGN5Y6G44CCXG5cbiDnpLrkvos6XG5cbui+k+WFpTogWzEsbnVsbCwyLDNdXG4gICAxXG4gICAgXFxcbiAgICAgMlxuICAgIC9cbiAgIDNcblxu6L6T5Ye6OiBbMSwyLDNdXG7ov5vpmLY6IOmAkuW9kueul+azleW+iOeugOWNle+8jOS9oOWPr+S7pemAmui/h+i/reS7o+eul+azleWujOaIkOWQl++8n1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYmluYXJ5LXRyZWUtcHJlb3JkZXItdHJhdmVyc2FsXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuaW1wb3J0IHsgVHJlZU5vZGUsIGNyZWF0ZUJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZXxudWxsfSByb290XG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIHByZW9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKSB7XG4gIC8qKlxuICAgKiDpgJLlvZJcbiAgICogKi9cbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBzdGVwKHJvb3QpO1xuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIHN0ZXAobm9kZTogVHJlZU5vZGU8bnVtYmVyPikge1xuICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcbiAgICBpZiAobm9kZS5sZWZ0KSBzdGVwKG5vZGUubGVmdCk7XG4gICAgaWYgKG5vZGUucmlnaHQpIHN0ZXAobm9kZS5yaWdodCk7XG4gIH1cbn07XG5cbnZhciBwcmVvcmRlclRyYXZlcnNhbF8xID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKSB7XG4gIC8qKlxuICAgKiDov63ku6NcbiAgICogKi9cbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBzdGFjazogVHJlZU5vZGU8bnVtYmVyPltdID0gW107XG4gIGxldCBub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCA9IHJvb3Q7XG4gIHdoaWxlIChub2RlIHx8IHN0YWNrLmxlbmd0aCkge1xuICAgIC8vIOS8mOWFiCDmn6Xor6Ig5b2T5YmN6IqC54K5IOWSjCDlt6blrZDmoJFcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgc3RhY2sucHVzaChub2RlKTtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcbiAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgfVxuICAgIC8vIOayoeacieW3puWtkOagkeeahOaXtuWAmSDlsLHojrflj5bkuIrkuIDkuKrliIbmlK/nmoTlj7PlrZDmoJFcbiAgICBub2RlID0gc3RhY2sucG9wKCkhO1xuICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwcmVvcmRlclRyYXZlcnNhbChjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLCBbXG4gIDEsXG4gIDIsXG4gIDMsXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocHJlb3JkZXJUcmF2ZXJzYWxfMShjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLCBbXG4gIDEsXG4gIDIsXG4gIDMsXG5dKTtcbiJdfQ==
