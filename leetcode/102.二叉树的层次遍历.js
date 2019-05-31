"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
* */
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null)
        return [];
    const list_cache = [root];
    let list_output = [];
    const result = [];
    while (list_cache.length) {
        if (list_output.length === 0) {
            list_output = [...list_cache];
            list_cache.length = 0;
        }
        const temp_arr = [];
        while (list_output.length) {
            const node = list_output.shift();
            temp_arr.push(node.val);
            node.left && list_cache.push(node.left);
            node.right && list_cache.push(node.right);
        }
        result.push(temp_arr);
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(levelOrder(null), []);
assert_1.default.deepStrictEqual(levelOrder(BinaryTree_1.createBinaryTree([1, 2, 3, 4, 5, 6])), [
    [1],
    [2, 3],
    [4, 5, 6],
]);
assert_1.default.deepStrictEqual(levelOrder(BinaryTree_1.createBinaryTree([3, 9, 20, null, null, 15, 7])), [
    [3],
    [9, 20],
    [15, 7],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyLuS6jOWPieagkeeahOWxguasoemBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAyLuS6jOWPieagkeeahOWxguasoemBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBOEQ7QUFFOUQ7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBYSxJQUF3QjtJQUNsRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixJQUFJLFdBQVcsR0FBa0IsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUV6QixPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixXQUFXLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsTUFBTSxRQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN2QixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFHLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUNoQixFQUFFLENBQ0wsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixVQUFVLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEQ7SUFDSSxDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDWixDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzRDtJQUNJLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWFtuaMieWxguasoemBjeWOhueahOiKgueCueWAvOOAgiDvvIjljbPpgJDlsYLlnLDvvIzku47lt6bliLDlj7Porr/pl67miYDmnInoioLngrnvvInjgIJcblxu5L6L5aaCOlxu57uZ5a6a5LqM5Y+J5qCROiBbMyw5LDIwLG51bGwsbnVsbCwxNSw3XSxcblxuICAgIDNcbiAgIC8gXFxcbiAgOSAgMjBcbiAgICAvICBcXFxuICAgMTUgICA3XG7ov5Tlm57lhbblsYLmrKHpgY3ljobnu5PmnpzvvJpcblxuW1xuICBbM10sXG4gIFs5LDIwXSxcbiAgWzE1LDddXG5dXG4qICovXG5pbXBvcnQge1RyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xudmFyIGxldmVsT3JkZXIgPSBmdW5jdGlvbiA8VD4ocm9vdDogVHJlZU5vZGU8VD4gfCBudWxsKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgICBjb25zdCBsaXN0X2NhY2hlID0gW3Jvb3RdO1xuICAgIGxldCBsaXN0X291dHB1dDogVHJlZU5vZGU8VD5bXSA9IFtdO1xuICAgIGNvbnN0IHJlc3VsdDogVFtdW10gPSBbXTtcblxuICAgIHdoaWxlIChsaXN0X2NhY2hlLmxlbmd0aCkge1xuICAgICAgICBpZiAobGlzdF9vdXRwdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsaXN0X291dHB1dCA9IFsuLi5saXN0X2NhY2hlXTtcbiAgICAgICAgICAgIGxpc3RfY2FjaGUubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wX2FycjogVFtdID0gW107XG4gICAgICAgIHdoaWxlIChsaXN0X291dHB1dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBsaXN0X291dHB1dC5zaGlmdCgpITtcbiAgICAgICAgICAgIHRlbXBfYXJyLnB1c2gobm9kZS52YWwpO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ICYmIGxpc3RfY2FjaGUucHVzaChub2RlLmxlZnQhKTtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgJiYgbGlzdF9jYWNoZS5wdXNoKG5vZGUucmlnaHQhKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaCh0ZW1wX2Fycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGxldmVsT3JkZXIobnVsbCksXG4gICAgW10sXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBsZXZlbE9yZGVyKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIDQsIDUsIDZdKSksXG4gICAgW1xuICAgICAgICBbMV0sXG4gICAgICAgIFsyLCAzXSxcbiAgICAgICAgWzQsIDUsIDZdLFxuICAgIF0sXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBsZXZlbE9yZGVyKGNyZWF0ZUJpbmFyeVRyZWUoWzMsIDksIDIwLCBudWxsLCBudWxsLCAxNSwgN10pKSxcbiAgICBbXG4gICAgICAgIFszXSxcbiAgICAgICAgWzksIDIwXSxcbiAgICAgICAgWzE1LCA3XSxcbiAgICBdLFxuKTtcbiJdfQ==