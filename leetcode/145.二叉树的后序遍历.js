"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3ZEOztTQUVLO0lBQ0wsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVYLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxJQUFJLENBQUMsSUFBNkI7UUFDekMsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixTQUFTLG9CQUFvQixDQUFDLElBQXNCO0lBQ2xEOzs7Ozs7U0FNSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBdUIsRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO0tBQ2xFO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM1RSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsb0JBQW9CLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWug+eahCDlkI7luo/CoOmBjeWOhuOAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsbnVsbCwyLDNdXG4gICAxXG4gICAgXFxcbiAgICAgMlxuICAgIC9cbiAgIDNcblxu6L6T5Ye6OiBbMywyLDFdXG7ov5vpmLY6wqDpgJLlvZLnrpfms5XlvojnroDljZXvvIzkvaDlj6/ku6XpgJrov4fov63ku6Pnrpfms5XlrozmiJDlkJfvvJ9cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2JpbmFyeS10cmVlLXBvc3RvcmRlci10cmF2ZXJzYWxcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IHsgVHJlZU5vZGUsIGNyZWF0ZUJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBwb3N0b3JkZXJUcmF2ZXJzYWwgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPikge1xuICAvKipcbiAgICog5q2j5bi45L2/55So6YCS5b2SXG4gICAqICovXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgc3RlcChyb290KTtcblxuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIHN0ZXAobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHN0ZXAobm9kZS5sZWZ0KTtcbiAgICBzdGVwKG5vZGUucmlnaHQpO1xuICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcG9zdG9yZGVyVHJhdmVyc2FsXzEocm9vdDogVHJlZU5vZGU8bnVtYmVyPikge1xuICAvKipcbiAgICog5L2/55So6L+t5LujXG4gICAqIOS9v+eUqOi/reS7o+eJiOacrOeahOa3seW6puS8mOWFiCDlppnllYpcbiAgICog5ZCO57ut6YGN5Y6G55qEIOasoeW6j+aYryDlt6blrZDmoJEg5Y+z5a2Q5qCRIOagueiKgueCuVxuICAgKiDnjrDlnKjmt7HluqbkvJjlhYjnmoQg5qyh5bqP5pivIOagueiKgueCuSDlj7PlrZDmoJEg5bem5a2Q5qCRXG4gICAqIOaJgOS7pemAhuW6j+i+k+WHuiDkuLrpnIDopoHnmoTnu5PmnpxcbiAgICogKi9cbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBzdGFjazogVHJlZU5vZGU8bnVtYmVyPltdID0gW107XG4gIHN0YWNrLnB1c2gocm9vdCk7XG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBjb25zdCBub2RlID0gc3RhY2sucG9wKCkhO1xuICAgIHJlc3VsdC51bnNoaWZ0KG5vZGUudmFsKTsgLy8g6YCG5bqPIOi+k+WHuuWAvCDmiYDku6Xpg73ku47lpLTpg6jmjqjlhaVcbiAgICBpZiAobm9kZS5sZWZ0KSBzdGFjay5wdXNoKG5vZGUubGVmdCk7XG4gICAgaWYgKG5vZGUucmlnaHQpIHN0YWNrLnB1c2gobm9kZS5yaWdodCk7IC8vIOeUseS6juS9v+eUqOeahOaYr+agiCDmiYDku6XkvJrkvJjlhYjmn6Xor6Ig5Y+z5a2Q5qCR55qE5YaF5a65XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwb3N0b3JkZXJUcmF2ZXJzYWwoY3JlYXRlQmluYXJ5VHJlZShbMSwgbnVsbCwgMiwgM10pKSwgW1xuICAzLFxuICAyLFxuICAxLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBwb3N0b3JkZXJUcmF2ZXJzYWxfMShjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLFxuICBbMywgMiwgMV1cbik7XG4iXX0=