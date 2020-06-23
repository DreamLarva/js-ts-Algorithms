"use strict";
/*
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // 递归
    const result = [];
    step(root);
    return result;
    function step(node) {
        if (node) {
            step(node.left);
            result.push(node.val);
            step(node.right);
        }
    }
};
/**
 * 精彩 迭代
 * */
var inorderTraversal_1 = function (root) {
    if (root == null)
        return [];
    // 迭代
    const result = [];
    const set = new Set();
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack[stack.length - 1];
        if (node.left && !set.has(node.left)) {
            stack.push(node.left);
            continue;
        }
        result.push(node.val);
        set.add(node);
        stack.pop();
        if (node.right && !set.has(node.right)) {
            stack.push(node.right);
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(inorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [
    1,
    3,
    2,
]);
assert_1.default.deepStrictEqual(inorderTraversal_1(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [
    1,
    3,
    2,
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQu5LqM5Y+J5qCR55qE5Lit5bqP6YGN5Y6GLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85NC7kuozlj4nmoJHnmoTkuK3luo/pgY3ljoYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJOzs7OztBQUVKLG1EQUFnRTtBQUVoRTs7O0dBR0c7QUFDSCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsSUFBc0I7SUFDckQsS0FBSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQTZCO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3ZELElBQUksSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM1QixLQUFLO0lBQ0wsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sR0FBRyxHQUEwQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sS0FBSyxHQUF1QixFQUFFLENBQUM7SUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsU0FBUztTQUNWO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDMUUsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDNUUsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWug+eahOS4reW6jyDpgY3ljobjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IFsxLG51bGwsMiwzXVxuICAgMVxuICAgIFxcXG4gICAgIDJcbiAgICAvXG4gICAzXG5cbui+k+WHujogWzEsMywyXVxu6L+b6Zi2OiDpgJLlvZLnrpfms5XlvojnroDljZXvvIzkvaDlj6/ku6XpgJrov4fov63ku6Pnrpfms5XlrozmiJDlkJfvvJ9cbiogKi9cblxuaW1wb3J0IHsgVHJlZU5vZGUsIGNyZWF0ZUJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBpbm9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4pIHtcbiAgLy8g6YCS5b2SXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgc3RlcChyb290KTtcbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBzdGVwKG5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKSB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHN0ZXAobm9kZS5sZWZ0KTtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcbiAgICAgIHN0ZXAobm9kZS5yaWdodCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIOeyvuW9qSDov63ku6NcbiAqICovXG52YXIgaW5vcmRlclRyYXZlcnNhbF8xID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4pIHtcbiAgaWYgKHJvb3QgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAvLyDov63ku6NcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBzZXQ6IFNldDxUcmVlTm9kZTxudW1iZXI+PiA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc3RhY2s6IFRyZWVOb2RlPG51bWJlcj5bXSA9IFtdO1xuICBzdGFjay5wdXNoKHJvb3QpO1xuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBjb25zdCBub2RlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgaWYgKG5vZGUubGVmdCAmJiAhc2V0Lmhhcyhub2RlLmxlZnQpKSB7XG4gICAgICBzdGFjay5wdXNoKG5vZGUubGVmdCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChub2RlLnZhbCk7XG4gICAgc2V0LmFkZChub2RlKTtcbiAgICBzdGFjay5wb3AoKTtcblxuICAgIGlmIChub2RlLnJpZ2h0ICYmICFzZXQuaGFzKG5vZGUucmlnaHQpKSB7XG4gICAgICBzdGFjay5wdXNoKG5vZGUucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbm9yZGVyVHJhdmVyc2FsKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksIFtcbiAgMSxcbiAgMyxcbiAgMixcbl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbm9yZGVyVHJhdmVyc2FsXzEoY3JlYXRlQmluYXJ5VHJlZShbMSwgbnVsbCwgMiwgM10pKSwgW1xuICAxLFxuICAzLFxuICAyLFxuXSk7XG4iXX0=