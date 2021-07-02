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
assert_1.default.deepStrictEqual(postorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [
    3,
    2,
    1,
]);
assert_1.default.deepStrictEqual(postorderTraversal_1(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [3, 2, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3ZEOztTQUVLO0lBQ0wsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVYLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxJQUFJLENBQUMsSUFBNkI7UUFDekMsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixTQUFTLG9CQUFvQixDQUFDLElBQXNCO0lBQ2xEOzs7Ozs7U0FNSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBdUIsRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO0tBQ2xFO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM1RSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsb0JBQW9CLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWug+eahCDlkI7luo8g6YGN5Y6G44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBbMSxudWxsLDIsM11cbiAgIDFcbiAgICBcXFxuICAgICAyXG4gICAgL1xuICAgM1xuXG7ovpPlh7o6IFszLDIsMV1cbui/m+mYtjog6YCS5b2S566X5rOV5b6I566A5Y2V77yM5L2g5Y+v5Lul6YCa6L+H6L+t5Luj566X5rOV5a6M5oiQ5ZCX77yfXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9iaW5hcnktdHJlZS1wb3N0b3JkZXItdHJhdmVyc2FsXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCB7IFRyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG52YXIgcG9zdG9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4pIHtcbiAgLyoqXG4gICAqIOato+W4uOS9v+eUqOmAkuW9klxuICAgKiAqL1xuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gIHN0ZXAocm9vdCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBzdGVwKG5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybjtcbiAgICBzdGVwKG5vZGUubGVmdCk7XG4gICAgc3RlcChub2RlLnJpZ2h0KTtcbiAgICByZXN1bHQucHVzaChub2RlLnZhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBvc3RvcmRlclRyYXZlcnNhbF8xKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4pIHtcbiAgLyoqXG4gICAqIOS9v+eUqOi/reS7o1xuICAgKiDkvb/nlKjov63ku6PniYjmnKznmoTmt7HluqbkvJjlhYgg5aaZ5ZWKXG4gICAqIOWQjue7remBjeWOhueahCDmrKHluo/mmK8g5bem5a2Q5qCRIOWPs+WtkOagkSDmoLnoioLngrlcbiAgICog546w5Zyo5rex5bqm5LyY5YWI55qEIOasoeW6j+aYryDmoLnoioLngrkg5Y+z5a2Q5qCRIOW3puWtkOagkVxuICAgKiDmiYDku6XpgIbluo/ovpPlh7og5Li66ZyA6KaB55qE57uT5p6cXG4gICAqICovXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgY29uc3Qgc3RhY2s6IFRyZWVOb2RlPG51bWJlcj5bXSA9IFtdO1xuICBzdGFjay5wdXNoKHJvb3QpO1xuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpITtcbiAgICByZXN1bHQudW5zaGlmdChub2RlLnZhbCk7IC8vIOmAhuW6jyDovpPlh7rlgLwg5omA5Lul6YO95LuO5aS06YOo5o6o5YWlXG4gICAgaWYgKG5vZGUubGVmdCkgc3RhY2sucHVzaChub2RlLmxlZnQpO1xuICAgIGlmIChub2RlLnJpZ2h0KSBzdGFjay5wdXNoKG5vZGUucmlnaHQpOyAvLyDnlLHkuo7kvb/nlKjnmoTmmK/moIgg5omA5Lul5Lya5LyY5YWI5p+l6K+iIOWPs+WtkOagkeeahOWGheWuuVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocG9zdG9yZGVyVHJhdmVyc2FsKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksIFtcbiAgMyxcbiAgMixcbiAgMSxcbl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcG9zdG9yZGVyVHJhdmVyc2FsXzEoY3JlYXRlQmluYXJ5VHJlZShbMSwgbnVsbCwgMiwgM10pKSxcbiAgWzMsIDIsIDFdXG4pO1xuIl19