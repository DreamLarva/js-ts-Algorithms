"use strict";
/*
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root === null)
        return false;
    if (root.left === null && root.right === null) {
        return sum === root.val;
    }
    else {
        return (hasPathSum(root.left, sum - root.val) ||
            hasPathSum(root.right, sum - root.val));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEyLui3r+W+hOaAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTEyLui3r+W+hOaAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7O0FBSUo7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBcUIsRUFBRSxHQUFXO0lBQzNELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQzdDLE9BQU8sR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDekI7U0FBTTtRQUNMLE9BQU8sQ0FDTCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUN2QyxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR5ZKM5LiA5Liq55uu5qCH5ZKM77yM5Yik5pat6K+l5qCR5Lit5piv5ZCm5a2Y5Zyo5qC56IqC54K55Yiw5Y+25a2Q6IqC54K555qE6Lev5b6E77yM6L+Z5p2h6Lev5b6E5LiK5omA5pyJ6IqC54K55YC855u45Yqg562J5LqO55uu5qCH5ZKM44CCXG5cbuivtOaYjjog5Y+25a2Q6IqC54K55piv5oyH5rKh5pyJ5a2Q6IqC54K555qE6IqC54K544CCXG5cbuekuuS+izpcbue7meWumuWmguS4i+S6jOWPieagke+8jOS7peWPiuebruagh+WSjCBzdW0gPSAyMu+8jFxuXG4gICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAvIFxcXG4gICAgICAgICAgICA0ICAgOFxuICAgICAgICAgICAvICAgLyBcXFxuICAgICAgICAgIDExICAxMyAgNFxuICAgICAgICAgLyAgXFwgICAgICBcXFxuICAgICAgICA3ICAgIDIgICAgICAxXG7ov5Tlm54gdHJ1ZSwg5Zug5Li65a2Y5Zyo55uu5qCH5ZKM5Li6IDIyIOeahOagueiKgueCueWIsOWPtuWtkOiKgueCueeahOi3r+W+hCA1LT40LT4xMS0+MuOAglxuKiAqL1xuXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcGFyYW0ge251bWJlcn0gc3VtXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaGFzUGF0aFN1bSA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwsIHN1bTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChyb290LmxlZnQgPT09IG51bGwgJiYgcm9vdC5yaWdodCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBzdW0gPT09IHJvb3QudmFsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBoYXNQYXRoU3VtKHJvb3QubGVmdCwgc3VtIC0gcm9vdC52YWwpIHx8XG4gICAgICBoYXNQYXRoU3VtKHJvb3QucmlnaHQsIHN1bSAtIHJvb3QudmFsKVxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==