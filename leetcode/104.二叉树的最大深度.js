"use strict";
/*
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
*/
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root === null ? 0 :
        Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA0LuS6jOWPieagkeeahOacgOWkp+a3seW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA0LuS6jOWPieagkeeahOacgOWkp+a3seW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBS1YsWUFBWSxHQUFNO1FBSGxCLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQUVEOzs7R0FHRztBQUNILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBMEI7SUFDL0MsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDM0IsQ0FBQztBQUNWLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOWPieagke+8jOaJvuWHuuWFtuacgOWkp+a3seW6puOAglxyXG5cclxu5LqM5Y+J5qCR55qE5rex5bqm5Li65qC56IqC54K55Yiw5pyA6L+c5Y+25a2Q6IqC54K555qE5pyA6ZW/6Lev5b6E5LiK55qE6IqC54K55pWw44CCXHJcblxyXG7or7TmmI46IOWPtuWtkOiKgueCueaYr+aMh+ayoeacieWtkOiKgueCueeahOiKgueCueOAglxyXG5cclxu56S65L6L77yaXHJcbue7meWumuS6jOWPieagkSBbMyw5LDIwLG51bGwsbnVsbCwxNSw3Xe+8jFxyXG5cclxuICAgIDNcclxuICAgLyBcXFxyXG4gIDkgIDIwXHJcbiAgICAvICBcXFxyXG4gICAxNSAgIDdcclxu6L+U5Zue5a6D55qE5pyA5aSn5rex5bqmIDMg44CCXHJcbiovXHJcblxyXG5jbGFzcyBUcmVlTm9kZTxUPiB7XHJcbiAgICB2YWw6IFQ7XHJcbiAgICBsZWZ0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xyXG4gICAgcmlnaHQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsOiBUKSB7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBtYXhEZXB0aCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxhbnk+IHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcm9vdCA9PT0gbnVsbCA/IDAgOlxyXG4gICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgICBtYXhEZXB0aChyb290LmxlZnQpICsgMSxcclxuICAgICAgICAgICAgbWF4RGVwdGgocm9vdC5yaWdodCkgKyAxLFxyXG4gICAgICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==