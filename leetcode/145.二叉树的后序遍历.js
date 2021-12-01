"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    /**
     * 正常使用递归
     * */
    const result = [];
    step(root);
    return result;
    function step(node) {
        if (node === null)
            return;
        step(node.left);
        step(node.right);
        result.push(node.val);
    }
};
function postorderTraversal_1(root) {
    /**
     * 使用迭代
     * 使用迭代版本的深度优先 妙啊
     * 后续遍历的 次序是 左子树 右子树 根节点
     * 现在深度优先的 次序是 根节点 右子树 左子树
     * 所以逆序输出 为需要的结果
     * */
    const result = [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val); // 逆序 输出值 所以都从头部推入
        if (node.left)
            stack.push(node.left);
        if (node.right)
            stack.push(node.right); // 由于使用的是栈 所以会优先查询 右子树的内容
    }
    return result;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(postorderTraversal((0, BinaryTree_1.createBinaryTree)([1, null, 2, 3])), [
    3,
    2,
    1,
]);
assert_1.default.deepStrictEqual(postorderTraversal_1((0, BinaryTree_1.createBinaryTree)([1, null, 2, 3])), [3, 2, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3ZEOztTQUVLO0lBQ0wsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVYLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxJQUFJLENBQUMsSUFBNkI7UUFDekMsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixTQUFTLG9CQUFvQixDQUFDLElBQXNCO0lBQ2xEOzs7Ozs7U0FNSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBdUIsRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO0tBQ2xFO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzVFLENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILGdCQUFNLENBQUMsZUFBZSxDQUNwQixvQkFBb0IsQ0FBQyxJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57lroPnmoQg5ZCO5bqPIOmBjeWOhuOAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsbnVsbCwyLDNdXG4gICAxXG4gICAgXFxcbiAgICAgMlxuICAgIC9cbiAgIDNcblxu6L6T5Ye6OiBbMywyLDFdXG7ov5vpmLY6IOmAkuW9kueul+azleW+iOeugOWNle+8jOS9oOWPr+S7pemAmui/h+i/reS7o+eul+azleWujOaIkOWQl++8n1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYmluYXJ5LXRyZWUtcG9zdG9yZGVyLXRyYXZlcnNhbFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQgeyBUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIHBvc3RvcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+KSB7XG4gIC8qKlxuICAgKiDmraPluLjkvb/nlKjpgJLlvZJcbiAgICogKi9cbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBzdGVwKHJvb3QpO1xuXG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gc3RlcChub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgc3RlcChub2RlLmxlZnQpO1xuICAgIHN0ZXAobm9kZS5yaWdodCk7XG4gICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwb3N0b3JkZXJUcmF2ZXJzYWxfMShyb290OiBUcmVlTm9kZTxudW1iZXI+KSB7XG4gIC8qKlxuICAgKiDkvb/nlKjov63ku6NcbiAgICog5L2/55So6L+t5Luj54mI5pys55qE5rex5bqm5LyY5YWIIOWmmeWVilxuICAgKiDlkI7nu63pgY3ljobnmoQg5qyh5bqP5pivIOW3puWtkOagkSDlj7PlrZDmoJEg5qC56IqC54K5XG4gICAqIOeOsOWcqOa3seW6puS8mOWFiOeahCDmrKHluo/mmK8g5qC56IqC54K5IOWPs+WtkOagkSDlt6blrZDmoJFcbiAgICog5omA5Lul6YCG5bqP6L6T5Ye6IOS4uumcgOimgeeahOe7k+aenFxuICAgKiAqL1xuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHN0YWNrOiBUcmVlTm9kZTxudW1iZXI+W10gPSBbXTtcbiAgc3RhY2sucHVzaChyb290KTtcbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgcmVzdWx0LnVuc2hpZnQobm9kZS52YWwpOyAvLyDpgIbluo8g6L6T5Ye65YC8IOaJgOS7pemDveS7juWktOmDqOaOqOWFpVxuICAgIGlmIChub2RlLmxlZnQpIHN0YWNrLnB1c2gobm9kZS5sZWZ0KTtcbiAgICBpZiAobm9kZS5yaWdodCkgc3RhY2sucHVzaChub2RlLnJpZ2h0KTsgLy8g55Sx5LqO5L2/55So55qE5piv5qCIIOaJgOS7peS8muS8mOWFiOafpeivoiDlj7PlrZDmoJHnmoTlhoXlrrlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBvc3RvcmRlclRyYXZlcnNhbChjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLCBbXG4gIDMsXG4gIDIsXG4gIDEsXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIHBvc3RvcmRlclRyYXZlcnNhbF8xKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksXG4gIFszLCAyLCAxXVxuKTtcbiJdfQ==