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
assert_1.default.deepStrictEqual(inorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [1, 3, 2]);
assert_1.default.deepStrictEqual(inorderTraversal_1(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [1, 3, 2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQu5LqM5Y+J5qCR55qE5Lit5bqP6YGN5Y6GLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85NC7kuozlj4nmoJHnmoTkuK3luo/pgY3ljoYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJOzs7OztBQUVKLG1EQUE4RDtBQUU5RDs7O0dBR0c7QUFDSCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsSUFBc0I7SUFDbkQsS0FBSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQTZCO1FBQ3ZDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLElBQUksa0JBQWtCLEdBQUcsVUFBVSxJQUFzQjtJQUNyRCxJQUFJLElBQUksSUFBSSxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDNUIsS0FBSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLEdBQUcsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM3QyxNQUFNLEtBQUssR0FBdUIsRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFNBQVM7U0FDWjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFWixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtLQUNKO0lBR0QsT0FBTyxNQUFNLENBQUM7QUFHbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNaLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5a6D55qE5Lit5bqPIOmBjeWOhuOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiBbMSxudWxsLDIsM11cclxuICAgMVxyXG4gICAgXFxcclxuICAgICAyXHJcbiAgICAvXHJcbiAgIDNcclxuXHJcbui+k+WHujogWzEsMywyXVxyXG7ov5vpmLY6IOmAkuW9kueul+azleW+iOeugOWNle+8jOS9oOWPr+S7pemAmui/h+i/reS7o+eul+azleWujOaIkOWQl++8n1xyXG4qICovXHJcblxyXG5pbXBvcnQge1RyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxyXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICovXHJcbnZhciBpbm9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4pIHtcclxuICAgIC8vIOmAkuW9klxyXG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgc3RlcChyb290KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcChub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHN0ZXAobm9kZS5sZWZ0KTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xyXG4gICAgICAgICAgICBzdGVwKG5vZGUucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBpbm9yZGVyVHJhdmVyc2FsXzEgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPikge1xyXG4gICAgaWYgKHJvb3QgPT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gICAgLy8g6L+t5LujXHJcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBzZXQ6IFNldDxUcmVlTm9kZTxudW1iZXI+PiA9IG5ldyBTZXQoKTtcclxuICAgIGNvbnN0IHN0YWNrOiBUcmVlTm9kZTxudW1iZXI+W10gPSBbXTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobm9kZS5sZWZ0ICYmICFzZXQuaGFzKG5vZGUubGVmdCkpIHtcclxuICAgICAgICAgICAgc3RhY2sucHVzaChub2RlLmxlZnQpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcclxuICAgICAgICBzZXQuYWRkKG5vZGUpO1xyXG4gICAgICAgIHN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5yaWdodCAmJiAhc2V0Lmhhcyhub2RlLnJpZ2h0KSkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgaW5vcmRlclRyYXZlcnNhbChjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLFxyXG4gICAgWzEsIDMsIDJdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgaW5vcmRlclRyYXZlcnNhbF8xKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksXHJcbiAgICBbMSwgMywgMl0sXHJcbik7XHJcbiJdfQ==