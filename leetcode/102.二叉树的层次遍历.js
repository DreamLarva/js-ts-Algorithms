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
assert_1.default.deepStrictEqual(levelOrder(BinaryTree_1.createBinaryTree([3, 9, 20, null, null, 15, 7])), [[3], [9, 20], [15, 7]]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyLuS6jOWPieagkeeahOWxguasoemBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAyLuS6jOWPieagkeeahOWxguasoemBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBYSxJQUF3QjtJQUNwRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixJQUFJLFdBQVcsR0FBa0IsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUV6QixPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDeEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixXQUFXLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsTUFBTSxRQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFHLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0MsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57lhbbmjInlsYLmrKHpgY3ljobnmoToioLngrnlgLzjgIIg77yI5Y2z6YCQ5bGC5Zyw77yM5LuO5bem5Yiw5Y+z6K6/6Zeu5omA5pyJ6IqC54K577yJ44CCXHJcblxyXG7kvovlpoI6XHJcbue7meWumuS6jOWPieagkTogWzMsOSwyMCxudWxsLG51bGwsMTUsN10sXHJcblxyXG4gICAgM1xyXG4gICAvIFxcXHJcbiAgOSAgMjBcclxuICAgIC8gIFxcXHJcbiAgIDE1ICAgN1xyXG7ov5Tlm57lhbblsYLmrKHpgY3ljobnu5PmnpzvvJpcclxuXHJcbltcclxuICBbM10sXHJcbiAgWzksMjBdLFxyXG4gIFsxNSw3XVxyXG5dXHJcbiogKi9cclxuaW1wb3J0IHsgVHJlZU5vZGUsIGNyZWF0ZUJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxyXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxyXG4gKi9cclxudmFyIGxldmVsT3JkZXIgPSBmdW5jdGlvbiA8VD4ocm9vdDogVHJlZU5vZGU8VD4gfCBudWxsKSB7XHJcbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcclxuICBjb25zdCBsaXN0X2NhY2hlID0gW3Jvb3RdO1xyXG4gIGxldCBsaXN0X291dHB1dDogVHJlZU5vZGU8VD5bXSA9IFtdO1xyXG4gIGNvbnN0IHJlc3VsdDogVFtdW10gPSBbXTtcclxuXHJcbiAgd2hpbGUgKGxpc3RfY2FjaGUubGVuZ3RoKSB7XHJcbiAgICBpZiAobGlzdF9vdXRwdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGxpc3Rfb3V0cHV0ID0gWy4uLmxpc3RfY2FjaGVdO1xyXG4gICAgICBsaXN0X2NhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZW1wX2FycjogVFtdID0gW107XHJcbiAgICB3aGlsZSAobGlzdF9vdXRwdXQubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBsaXN0X291dHB1dC5zaGlmdCgpITtcclxuICAgICAgdGVtcF9hcnIucHVzaChub2RlLnZhbCk7XHJcbiAgICAgIG5vZGUubGVmdCAmJiBsaXN0X2NhY2hlLnB1c2gobm9kZS5sZWZ0ISk7XHJcbiAgICAgIG5vZGUucmlnaHQgJiYgbGlzdF9jYWNoZS5wdXNoKG5vZGUucmlnaHQhKTtcclxuICAgIH1cclxuICAgIHJlc3VsdC5wdXNoKHRlbXBfYXJyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwobGV2ZWxPcmRlcihudWxsKSwgW10pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGxldmVsT3JkZXIoY3JlYXRlQmluYXJ5VHJlZShbMSwgMiwgMywgNCwgNSwgNl0pKSwgW1xyXG4gIFsxXSxcclxuICBbMiwgM10sXHJcbiAgWzQsIDUsIDZdLFxyXG5dKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICBsZXZlbE9yZGVyKGNyZWF0ZUJpbmFyeVRyZWUoWzMsIDksIDIwLCBudWxsLCBudWxsLCAxNSwgN10pKSxcclxuICBbWzNdLCBbOSwgMjBdLCBbMTUsIDddXVxyXG4pO1xyXG4iXX0=