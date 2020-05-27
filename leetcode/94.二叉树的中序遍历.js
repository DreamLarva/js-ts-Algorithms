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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQu5LqM5Y+J5qCR55qE5Lit5bqP6YGN5Y6GLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85NC7kuozlj4nmoJHnmoTkuK3luo/pgY3ljoYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJOzs7OztBQUVKLG1EQUFnRTtBQUVoRTs7O0dBR0c7QUFDSCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsSUFBc0I7SUFDckQsS0FBSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQTZCO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3ZELElBQUksSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM1QixLQUFLO0lBQ0wsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sR0FBRyxHQUEwQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sS0FBSyxHQUF1QixFQUFFLENBQUM7SUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsU0FBUztTQUNWO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDMUUsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDNUUsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5a6D55qE5Lit5bqPIOmBjeWOhuOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiBbMSxudWxsLDIsM11cclxuICAgMVxyXG4gICAgXFxcclxuICAgICAyXHJcbiAgICAvXHJcbiAgIDNcclxuXHJcbui+k+WHujogWzEsMywyXVxyXG7ov5vpmLY6IOmAkuW9kueul+azleW+iOeugOWNle+8jOS9oOWPr+S7pemAmui/h+i/reS7o+eul+azleWujOaIkOWQl++8n1xyXG4qICovXHJcblxyXG5pbXBvcnQgeyBUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxudmFyIGlub3JkZXJUcmF2ZXJzYWwgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPikge1xyXG4gIC8vIOmAkuW9klxyXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcclxuICBzdGVwKHJvb3QpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcblxyXG4gIGZ1bmN0aW9uIHN0ZXAobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpIHtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIHN0ZXAobm9kZS5sZWZ0KTtcclxuICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xyXG4gICAgICBzdGVwKG5vZGUucmlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiDnsr7lvakg6L+t5LujXHJcbiAqICovXHJcbnZhciBpbm9yZGVyVHJhdmVyc2FsXzEgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPikge1xyXG4gIGlmIChyb290ID09IG51bGwpIHJldHVybiBbXTtcclxuICAvLyDov63ku6NcclxuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgY29uc3Qgc2V0OiBTZXQ8VHJlZU5vZGU8bnVtYmVyPj4gPSBuZXcgU2V0KCk7XHJcbiAgY29uc3Qgc3RhY2s6IFRyZWVOb2RlPG51bWJlcj5bXSA9IFtdO1xyXG4gIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgIGlmIChub2RlLmxlZnQgJiYgIXNldC5oYXMobm9kZS5sZWZ0KSkge1xyXG4gICAgICBzdGFjay5wdXNoKG5vZGUubGVmdCk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcclxuICAgIHNldC5hZGQobm9kZSk7XHJcbiAgICBzdGFjay5wb3AoKTtcclxuXHJcbiAgICBpZiAobm9kZS5yaWdodCAmJiAhc2V0Lmhhcyhub2RlLnJpZ2h0KSkge1xyXG4gICAgICBzdGFjay5wdXNoKG5vZGUucmlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbm9yZGVyVHJhdmVyc2FsKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksIFtcclxuICAxLFxyXG4gIDMsXHJcbiAgMixcclxuXSk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoaW5vcmRlclRyYXZlcnNhbF8xKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksIFtcclxuICAxLFxyXG4gIDMsXHJcbiAgMixcclxuXSk7XHJcbiJdfQ==