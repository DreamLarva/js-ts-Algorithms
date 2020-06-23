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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBS1osWUFBWSxHQUFPO1FBSG5CLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzdDLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsU0FBUyx3QkFBd0IsQ0FBQyxJQUFjLEVBQUUsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO0lBQ3JFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELFlBQVk7SUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsYUFBYTtTQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzVCLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lsIbkuIDkuKrmjInnhafljYfluo/mjpLliJfnmoTmnInluo/mlbDnu4TvvIzovazmjaLkuLrkuIDmo7Xpq5jluqblubPooaHkuozlj4nmkJzntKLmoJHjgIJcblxu5pys6aKY5Lit77yM5LiA5Liq6auY5bqm5bmz6KGh5LqM5Y+J5qCR5piv5oyH5LiA5Liq5LqM5Y+J5qCR5q+P5Liq6IqC54K5IOeahOW3puWPs+S4pOS4quWtkOagkeeahOmrmOW6puW3rueahOe7neWvueWAvOS4jei2hei/hyAx44CCXG5cbuekuuS+izpcblxu57uZ5a6a5pyJ5bqP5pWw57uEOiBbLTEwLC0zLDAsNSw5XSxcblxu5LiA5Liq5Y+v6IO955qE562U5qGI5piv77yaWzAsLTMsOSwtMTAsbnVsbCw1Xe+8jOWug+WPr+S7peihqOekuuS4i+mdoui/meS4qumrmOW6puW5s+ihoeS6jOWPieaQnOe0ouagke+8mlxuXG4gICAgICAwXG4gICAgIC8gXFxcbiAgIC0zICAgOVxuICAgLyAgIC9cbiAtMTAgIDVcbiovXG5cbmNsYXNzIFRyZWVOb2RlPFQ+IHtcbiAgdmFsOiBUIHwgdm9pZDtcbiAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcbiAgcmlnaHQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IodmFsPzogVCkge1xuICAgIHRoaXMudmFsID0gdmFsO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7VHJlZU5vZGV9XG4gKi9cbnZhciBzb3J0ZWRBcnJheVRvQlNUID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIHJldHVybiByZWN1cnNpb25Tb3J0ZWRBcnJheVRvQlMobnVtcyk7XG59O1xuXG5mdW5jdGlvbiByZWN1cnNpb25Tb3J0ZWRBcnJheVRvQlMobnVtczogbnVtYmVyW10sIG5vZGUgPSBuZXcgVHJlZU5vZGUoKSkge1xuICBpZiAobnVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBbXSBbMV0gW11cbiAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgbm9kZS52YWwgPSBudW1zWzBdO1xuICB9XG4gIC8vIFtdIFsxXSBbMV1cbiAgZWxzZSBpZiAobnVtcy5sZW5ndGggPT09IDIpIHtcbiAgICBub2RlLnZhbCA9IG51bXNbMF07XG4gICAgbm9kZS5yaWdodCA9IG5ldyBUcmVlTm9kZShudW1zWzFdKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZWRpYW5JbmRleCA9IE1hdGguZmxvb3IobnVtcy5sZW5ndGggLyAyKTtcbiAgICBub2RlLnZhbCA9IG51bXNbbWVkaWFuSW5kZXhdO1xuICAgIG5vZGUubGVmdCA9IG5ldyBUcmVlTm9kZSgpO1xuICAgIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zLnNsaWNlKDAsIG1lZGlhbkluZGV4KSwgbm9kZS5sZWZ0KTtcbiAgICBub2RlLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKCk7XG4gICAgcmVjdXJzaW9uU29ydGVkQXJyYXlUb0JTKG51bXMuc2xpY2UobWVkaWFuSW5kZXggKyAxKSwgbm9kZS5yaWdodCk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IHt9O1xuIl19