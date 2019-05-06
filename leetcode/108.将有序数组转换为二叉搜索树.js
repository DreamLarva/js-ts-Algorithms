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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBS1YsWUFBWSxHQUFPO1FBSG5CLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzNDLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyx3QkFBd0IsQ0FBQyxJQUFjLEVBQUUsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO0lBQ25FLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELFlBQVk7SUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsYUFBYTtTQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QztTQUFNO1FBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzVCLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyRTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5bCG5LiA5Liq5oyJ54Wn5Y2H5bqP5o6S5YiX55qE5pyJ5bqP5pWw57uE77yM6L2s5o2i5Li65LiA5qO16auY5bqm5bmz6KGh5LqM5Y+J5pCc57Si5qCR44CCXG5cbuacrOmimOS4re+8jOS4gOS4qumrmOW6puW5s+ihoeS6jOWPieagkeaYr+aMh+S4gOS4quS6jOWPieagkeavj+S4quiKgueCuSDnmoTlt6blj7PkuKTkuKrlrZDmoJHnmoTpq5jluqblt67nmoTnu53lr7nlgLzkuI3otoXov4cgMeOAglxuXG7npLrkvos6XG5cbue7meWumuacieW6j+aVsOe7hDogWy0xMCwtMywwLDUsOV0sXG5cbuS4gOS4quWPr+iDveeahOetlOahiOaYr++8mlswLC0zLDksLTEwLG51bGwsNV3vvIzlroPlj6/ku6XooajnpLrkuIvpnaLov5nkuKrpq5jluqblubPooaHkuozlj4nmkJzntKLmoJHvvJpcblxuICAgICAgMFxuICAgICAvIFxcXG4gICAtMyAgIDlcbiAgIC8gICAvXG4gLTEwICA1XG4qL1xuXG5jbGFzcyBUcmVlTm9kZTxUPiB7XG4gICAgdmFsOiBUIHwgdm9pZDtcbiAgICBsZWZ0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuICAgIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodmFsPzogVCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7VHJlZU5vZGV9XG4gKi9cbnZhciBzb3J0ZWRBcnJheVRvQlNUID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zKTtcbn07XG5cbmZ1bmN0aW9uIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zOiBudW1iZXJbXSwgbm9kZSA9IG5ldyBUcmVlTm9kZSgpKSB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBbXSBbMV0gW11cbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgbm9kZS52YWwgPSBudW1zWzBdO1xuICAgIH1cbiAgICAvLyBbXSBbMV0gWzFdXG4gICAgZWxzZSBpZiAobnVtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbm9kZS52YWwgPSBudW1zWzBdO1xuICAgICAgICBub2RlLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKG51bXNbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1lZGlhbkluZGV4ID0gTWF0aC5mbG9vcihudW1zLmxlbmd0aCAvIDIpO1xuICAgICAgICBub2RlLnZhbCA9IG51bXNbbWVkaWFuSW5kZXhdO1xuICAgICAgICBub2RlLmxlZnQgPSBuZXcgVHJlZU5vZGUoKTtcbiAgICAgICAgcmVjdXJzaW9uU29ydGVkQXJyYXlUb0JTKG51bXMuc2xpY2UoMCwgbWVkaWFuSW5kZXgpLCBub2RlLmxlZnQpO1xuICAgICAgICBub2RlLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKCk7XG4gICAgICAgIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zLnNsaWNlKG1lZGlhbkluZGV4ICsgMSksIG5vZGUucmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQge307XG4iXX0=