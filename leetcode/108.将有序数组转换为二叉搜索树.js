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
  val;
  left = null;
  right = null;
  constructor(val) {
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
function recursionSortedArrayToBS(nums, parentNode = new TreeNode()) {
  if (nums.length === 0) {
    return null;
  }
  // [] [1] []
  if (nums.length === 1) {
    parentNode.val = nums[0];
  }
  // [] [1] [1]
  else if (nums.length === 2) {
    parentNode.val = nums[0];
    parentNode.right = new TreeNode(nums[1]);
  } else {
    const medianIndex = Math.floor(nums.length / 2);
    // 设置中间的节点
    parentNode.val = nums[medianIndex];
    // 分配左子树
    parentNode.left = new TreeNode();
    recursionSortedArrayToBS(nums.slice(0, medianIndex), parentNode.left);
    // 分配右子树
    parentNode.right = new TreeNode();
    recursionSortedArrayToBS(nums.slice(medianIndex + 1), parentNode.right);
  }
  return parentNode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA4LuWwhuacieW6j+aVsOe7hOi9rOaNouS4uuS6jOWPieaQnOe0ouagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBQ1osR0FBRyxDQUFXO0lBQ2QsSUFBSSxHQUF1QixJQUFJLENBQUM7SUFDaEMsS0FBSyxHQUF1QixJQUFJLENBQUM7SUFFakMsWUFBWSxHQUFPO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzdDLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsU0FBUyx3QkFBd0IsQ0FBQyxJQUFjLEVBQUUsVUFBVSxHQUFHLElBQUksUUFBUSxFQUFFO0lBQzNFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELFlBQVk7SUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsYUFBYTtTQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDMUIsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQztTQUFNO1FBQ0wsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELFVBQVU7UUFDVixVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxRQUFRO1FBQ1IsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxRQUFRO1FBQ1IsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6RTtJQUVELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5bCG5LiA5Liq5oyJ54Wn5Y2H5bqP5o6S5YiX55qE5pyJ5bqP5pWw57uE77yM6L2s5o2i5Li65LiA5qO16auY5bqm5bmz6KGh5LqM5Y+J5pCc57Si5qCR44CCXG5cbuacrOmimOS4re+8jOS4gOS4qumrmOW6puW5s+ihoeS6jOWPieagkeaYr+aMh+S4gOS4quS6jOWPieagkeavj+S4quiKgueCuSDnmoTlt6blj7PkuKTkuKrlrZDmoJHnmoTpq5jluqblt67nmoTnu53lr7nlgLzkuI3otoXov4cgMeOAglxuXG7npLrkvos6XG5cbue7meWumuacieW6j+aVsOe7hDogWy0xMCwtMywwLDUsOV0sXG5cbuS4gOS4quWPr+iDveeahOetlOahiOaYr++8mlswLC0zLDksLTEwLG51bGwsNV3vvIzlroPlj6/ku6XooajnpLrkuIvpnaLov5nkuKrpq5jluqblubPooaHkuozlj4nmkJzntKLmoJHvvJpcblxuICAgICAgMFxuICAgICAvIFxcXG4gICAtMyAgIDlcbiAgIC8gICAvXG4gLTEwICA1XG4qL1xuXG5jbGFzcyBUcmVlTm9kZTxUPiB7XG4gIHZhbDogVCB8IHZvaWQ7XG4gIGxlZnQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XG4gIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHZhbD86IFQpIHtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge1RyZWVOb2RlfVxuICovXG52YXIgc29ydGVkQXJyYXlUb0JTVCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICByZXR1cm4gcmVjdXJzaW9uU29ydGVkQXJyYXlUb0JTKG51bXMpO1xufTtcblxuZnVuY3Rpb24gcmVjdXJzaW9uU29ydGVkQXJyYXlUb0JTKG51bXM6IG51bWJlcltdLCBwYXJlbnROb2RlID0gbmV3IFRyZWVOb2RlKCkpIHtcbiAgaWYgKG51bXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gW10gWzFdIFtdXG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgIHBhcmVudE5vZGUudmFsID0gbnVtc1swXTtcbiAgfVxuICAvLyBbXSBbMV0gWzFdXG4gIGVsc2UgaWYgKG51bXMubGVuZ3RoID09PSAyKSB7XG4gICAgcGFyZW50Tm9kZS52YWwgPSBudW1zWzBdO1xuICAgIHBhcmVudE5vZGUucmlnaHQgPSBuZXcgVHJlZU5vZGUobnVtc1sxXSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVkaWFuSW5kZXggPSBNYXRoLmZsb29yKG51bXMubGVuZ3RoIC8gMik7XG4gICAgLy8g6K6+572u5Lit6Ze055qE6IqC54K5XG4gICAgcGFyZW50Tm9kZS52YWwgPSBudW1zW21lZGlhbkluZGV4XTtcbiAgICAvLyDliIbphY3lt6blrZDmoJFcbiAgICBwYXJlbnROb2RlLmxlZnQgPSBuZXcgVHJlZU5vZGUoKTtcbiAgICByZWN1cnNpb25Tb3J0ZWRBcnJheVRvQlMobnVtcy5zbGljZSgwLCBtZWRpYW5JbmRleCksIHBhcmVudE5vZGUubGVmdCk7XG4gICAgLy8g5YiG6YWN5Y+z5a2Q5qCRXG4gICAgcGFyZW50Tm9kZS5yaWdodCA9IG5ldyBUcmVlTm9kZSgpO1xuICAgIHJlY3Vyc2lvblNvcnRlZEFycmF5VG9CUyhudW1zLnNsaWNlKG1lZGlhbkluZGV4ICsgMSksIHBhcmVudE5vZGUucmlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==
