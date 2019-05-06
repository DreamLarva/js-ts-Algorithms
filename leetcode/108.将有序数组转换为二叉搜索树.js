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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBS1YsWUFBWSxHQUFPO1FBSG5CLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzNDLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyx3QkFBd0IsQ0FBQyxJQUFjLEVBQUUsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO0lBQ25FLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELFlBQVk7SUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsYUFBYTtTQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QztTQUFNO1FBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzVCLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyRTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7lsIbkuIDkuKrmjInnhafljYfluo/mjpLliJfnmoTmnInluo/mlbDnu4TvvIzovazmjaLkuLrkuIDmo7Xpq5jluqblubPooaHkuozlj4nmkJzntKLmoJHjgIJcclxuXHJcbuacrOmimOS4re+8jOS4gOS4qumrmOW6puW5s+ihoeS6jOWPieagkeaYr+aMh+S4gOS4quS6jOWPieagkeavj+S4quiKgueCuSDnmoTlt6blj7PkuKTkuKrlrZDmoJHnmoTpq5jluqblt67nmoTnu53lr7nlgLzkuI3otoXov4cgMeOAglxyXG5cclxu56S65L6LOlxyXG5cclxu57uZ5a6a5pyJ5bqP5pWw57uEOiBbLTEwLC0zLDAsNSw5XSxcclxuXHJcbuS4gOS4quWPr+iDveeahOetlOahiOaYr++8mlswLC0zLDksLTEwLG51bGwsNV3vvIzlroPlj6/ku6XooajnpLrkuIvpnaLov5nkuKrpq5jluqblubPooaHkuozlj4nmkJzntKLmoJHvvJpcclxuXHJcbiAgICAgIDBcclxuICAgICAvIFxcXHJcbiAgIC0zICAgOVxyXG4gICAvICAgL1xyXG4gLTEwICA1XHJcbiovXHJcblxyXG5jbGFzcyBUcmVlTm9kZTxUPiB7XHJcbiAgICB2YWw6IFQgfCB2b2lkO1xyXG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcclxuICAgIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbD86IFQpIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7VHJlZU5vZGV9XHJcbiAqL1xyXG52YXIgc29ydGVkQXJyYXlUb0JTVCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgcmV0dXJuIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zOiBudW1iZXJbXSwgbm9kZSA9IG5ldyBUcmVlTm9kZSgpKSB7XHJcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIFtdIFsxXSBbXVxyXG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbm9kZS52YWwgPSBudW1zWzBdO1xyXG4gICAgfVxyXG4gICAgLy8gW10gWzFdIFsxXVxyXG4gICAgZWxzZSBpZiAobnVtcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBub2RlLnZhbCA9IG51bXNbMF07XHJcbiAgICAgICAgbm9kZS5yaWdodCA9IG5ldyBUcmVlTm9kZShudW1zWzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVkaWFuSW5kZXggPSBNYXRoLmZsb29yKG51bXMubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgbm9kZS52YWwgPSBudW1zW21lZGlhbkluZGV4XTtcclxuICAgICAgICBub2RlLmxlZnQgPSBuZXcgVHJlZU5vZGUoKTtcclxuICAgICAgICByZWN1cnNpb25Tb3J0ZWRBcnJheVRvQlMobnVtcy5zbGljZSgwLCBtZWRpYW5JbmRleCksIG5vZGUubGVmdCk7XHJcbiAgICAgICAgbm9kZS5yaWdodCA9IG5ldyBUcmVlTm9kZSgpO1xyXG4gICAgICAgIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zLnNsaWNlKG1lZGlhbkluZGV4ICsgMSksIG5vZGUucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==