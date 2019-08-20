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
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(postorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [3, 2, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBOEQ7QUFFOUQ7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3JELE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQTZCO1FBQ3ZDLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixrQkFBa0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57lroPnmoQg5ZCO5bqPwqDpgY3ljobjgIJcclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTogWzEsbnVsbCwyLDNdXHJcbiAgIDFcclxuICAgIFxcXHJcbiAgICAgMlxyXG4gICAgL1xyXG4gICAzXHJcblxyXG7ovpPlh7o6IFszLDIsMV1cclxu6L+b6Zi2OsKg6YCS5b2S566X5rOV5b6I566A5Y2V77yM5L2g5Y+v5Lul6YCa6L+H6L+t5Luj566X5rOV5a6M5oiQ5ZCX77yfXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9iaW5hcnktdHJlZS1wb3N0b3JkZXItdHJhdmVyc2FsXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbmltcG9ydCB7VHJlZU5vZGUsIGNyZWF0ZUJpbmFyeVRyZWV9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxudmFyIHBvc3RvcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+KSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgICBzdGVwKHJvb3QpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcChub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xyXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgc3RlcChub2RlLmxlZnQpO1xyXG4gICAgICAgIHN0ZXAobm9kZS5yaWdodCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBwb3N0b3JkZXJUcmF2ZXJzYWwoY3JlYXRlQmluYXJ5VHJlZShbMSwgbnVsbCwgMiwgM10pKSxcclxuICAgIFszLCAyLCAxXSxcclxuKTtcclxuIl19