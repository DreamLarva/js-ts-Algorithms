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
assert_1.default.deepStrictEqual(levelOrder((0, BinaryTree_1.createBinaryTree)([1, 2, 3, 4, 5, 6])), [
    [1],
    [2, 3],
    [4, 5, 6],
]);
assert_1.default.deepStrictEqual(levelOrder((0, BinaryTree_1.createBinaryTree)([3, 9, 20, null, null, 15, 7])), [[3], [9, 20], [15, 7]]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyLuS6jOWPieagkeeahOWxguasoemBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAyLuS6jOWPieagkeeahOWxguasoemBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBYSxJQUF3QjtJQUNwRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixJQUFJLFdBQVcsR0FBa0IsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUV6QixPQUFPLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDeEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixXQUFXLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsTUFBTSxRQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFHLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0MsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsVUFBVSxDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWFtuaMieWxguasoemBjeWOhueahOiKgueCueWAvOOAgiDvvIjljbPpgJDlsYLlnLDvvIzku47lt6bliLDlj7Porr/pl67miYDmnInoioLngrnvvInjgIJcblxu5L6L5aaCOlxu57uZ5a6a5LqM5Y+J5qCROiBbMyw5LDIwLG51bGwsbnVsbCwxNSw3XSxcblxuICAgIDNcbiAgIC8gXFxcbiAgOSAgMjBcbiAgICAvICBcXFxuICAgMTUgICA3XG7ov5Tlm57lhbblsYLmrKHpgY3ljobnu5PmnpzvvJpcblxuW1xuICBbM10sXG4gIFs5LDIwXSxcbiAgWzE1LDddXG5dXG4qICovXG5pbXBvcnQgeyBUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG52YXIgbGV2ZWxPcmRlciA9IGZ1bmN0aW9uIDxUPihyb290OiBUcmVlTm9kZTxUPiB8IG51bGwpIHtcbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgY29uc3QgbGlzdF9jYWNoZSA9IFtyb290XTtcbiAgbGV0IGxpc3Rfb3V0cHV0OiBUcmVlTm9kZTxUPltdID0gW107XG4gIGNvbnN0IHJlc3VsdDogVFtdW10gPSBbXTtcblxuICB3aGlsZSAobGlzdF9jYWNoZS5sZW5ndGgpIHtcbiAgICBpZiAobGlzdF9vdXRwdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICBsaXN0X291dHB1dCA9IFsuLi5saXN0X2NhY2hlXTtcbiAgICAgIGxpc3RfY2FjaGUubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgY29uc3QgdGVtcF9hcnI6IFRbXSA9IFtdO1xuICAgIHdoaWxlIChsaXN0X291dHB1dC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBsaXN0X291dHB1dC5zaGlmdCgpITtcbiAgICAgIHRlbXBfYXJyLnB1c2gobm9kZS52YWwpO1xuICAgICAgbm9kZS5sZWZ0ICYmIGxpc3RfY2FjaGUucHVzaChub2RlLmxlZnQhKTtcbiAgICAgIG5vZGUucmlnaHQgJiYgbGlzdF9jYWNoZS5wdXNoKG5vZGUucmlnaHQhKTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2godGVtcF9hcnIpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGxldmVsT3JkZXIobnVsbCksIFtdKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwobGV2ZWxPcmRlcihjcmVhdGVCaW5hcnlUcmVlKFsxLCAyLCAzLCA0LCA1LCA2XSkpLCBbXG4gIFsxXSxcbiAgWzIsIDNdLFxuICBbNCwgNSwgNl0sXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGxldmVsT3JkZXIoY3JlYXRlQmluYXJ5VHJlZShbMywgOSwgMjAsIG51bGwsIG51bGwsIDE1LCA3XSkpLFxuICBbWzNdLCBbOSwgMjBdLCBbMTUsIDddXVxuKTtcbiJdfQ==