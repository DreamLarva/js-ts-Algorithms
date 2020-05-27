"use strict";
/*
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return recursionSortedArrayToBS(nums);
};
function recursionSortedArrayToBS(nums, node = new TreeNode()) {
    if (nums.length === 0) {
        return null;
    }
    // [] [1] []
    if (nums.length === 1) {
        node.val = nums[0];
    }
    // [] [1] [1]
    else if (nums.length === 2) {
        node.val = nums[0];
        node.right = new TreeNode(nums[1]);
    }
    else {
        const medianIndex = Math.floor(nums.length / 2);
        node.val = nums[medianIndex];
        node.left = new TreeNode();
        recursionSortedArrayToBS(nums.slice(0, medianIndex), node.left);
        node.right = new TreeNode();
        recursionSortedArrayToBS(nums.slice(medianIndex + 1), node.right);
    }
    return node;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBS1osWUFBWSxHQUFPO1FBSG5CLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzdDLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsU0FBUyx3QkFBd0IsQ0FBQyxJQUFjLEVBQUUsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO0lBQ3JFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELFlBQVk7SUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsYUFBYTtTQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzVCLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWwhuS4gOS4quaMieeFp+WNh+W6j+aOkuWIl+eahOacieW6j+aVsOe7hO+8jOi9rOaNouS4uuS4gOajtemrmOW6puW5s+ihoeS6jOWPieaQnOe0ouagkeOAglxyXG5cclxu5pys6aKY5Lit77yM5LiA5Liq6auY5bqm5bmz6KGh5LqM5Y+J5qCR5piv5oyH5LiA5Liq5LqM5Y+J5qCR5q+P5Liq6IqC54K5IOeahOW3puWPs+S4pOS4quWtkOagkeeahOmrmOW6puW3rueahOe7neWvueWAvOS4jei2hei/hyAx44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7nu5nlrprmnInluo/mlbDnu4Q6IFstMTAsLTMsMCw1LDldLFxyXG5cclxu5LiA5Liq5Y+v6IO955qE562U5qGI5piv77yaWzAsLTMsOSwtMTAsbnVsbCw1Xe+8jOWug+WPr+S7peihqOekuuS4i+mdoui/meS4qumrmOW6puW5s+ihoeS6jOWPieaQnOe0ouagke+8mlxyXG5cclxuICAgICAgMFxyXG4gICAgIC8gXFxcclxuICAgLTMgICA5XHJcbiAgIC8gICAvXHJcbiAtMTAgIDVcclxuKi9cclxuXHJcbmNsYXNzIFRyZWVOb2RlPFQ+IHtcclxuICB2YWw6IFQgfCB2b2lkO1xyXG4gIGxlZnQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcbiAgcmlnaHQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZhbD86IFQpIHtcclxuICAgIHRoaXMudmFsID0gdmFsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7VHJlZU5vZGV9XHJcbiAqL1xyXG52YXIgc29ydGVkQXJyYXlUb0JTVCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gIHJldHVybiByZWN1cnNpb25Tb3J0ZWRBcnJheVRvQlMobnVtcyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWN1cnNpb25Tb3J0ZWRBcnJheVRvQlMobnVtczogbnVtYmVyW10sIG5vZGUgPSBuZXcgVHJlZU5vZGUoKSkge1xyXG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIC8vIFtdIFsxXSBbXVxyXG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgbm9kZS52YWwgPSBudW1zWzBdO1xyXG4gIH1cclxuICAvLyBbXSBbMV0gWzFdXHJcbiAgZWxzZSBpZiAobnVtcy5sZW5ndGggPT09IDIpIHtcclxuICAgIG5vZGUudmFsID0gbnVtc1swXTtcclxuICAgIG5vZGUucmlnaHQgPSBuZXcgVHJlZU5vZGUobnVtc1sxXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG1lZGlhbkluZGV4ID0gTWF0aC5mbG9vcihudW1zLmxlbmd0aCAvIDIpO1xyXG4gICAgbm9kZS52YWwgPSBudW1zW21lZGlhbkluZGV4XTtcclxuICAgIG5vZGUubGVmdCA9IG5ldyBUcmVlTm9kZSgpO1xyXG4gICAgcmVjdXJzaW9uU29ydGVkQXJyYXlUb0JTKG51bXMuc2xpY2UoMCwgbWVkaWFuSW5kZXgpLCBub2RlLmxlZnQpO1xyXG4gICAgbm9kZS5yaWdodCA9IG5ldyBUcmVlTm9kZSgpO1xyXG4gICAgcmVjdXJzaW9uU29ydGVkQXJyYXlUb0JTKG51bXMuc2xpY2UobWVkaWFuSW5kZXggKyAxKSwgbm9kZS5yaWdodCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=