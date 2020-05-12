"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
* */
const BinaryTree_1 = require("../util/BinaryTree");
const assert_1 = __importDefault(require("assert"));
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  /**
   * 注意 子树是 所有子节点 如果是 隔一层当然也算啊
   * */
  if (root === null) return true;
  let left_result = true;
  let right_result = true;
  if (root.left) {
    left_result = isStepBelow(root.left, root.val) && isValidBST(root.left);
  }
  if (root.right) {
    right_result = isStepUpper(root.right, root.val) && isValidBST(root.right);
  }
  return left_result && right_result;
};
// 该节点的所有子节点都大于目标值
function isStepUpper(node, num) {
  if (node === null) return true;
  if (node.val <= num) return false;
  return isStepUpper(node.left, num) && isStepUpper(node.right, num);
}
// 该几点的所有子节点都小s于目标值
function isStepBelow(node, num) {
  if (node === null) return true;
  if (node.val >= num) return false;
  return isStepBelow(node.left, num) && isStepBelow(node.right, num);
}
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([])),
  true
);
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([1, 1])),
  false
);
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([2, 1, 3])),
  true
);
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([5, 3, 7, 2, 4, 6, 8])),
  true
);
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([5, 3, 7, 2, 10, 6, 8])),
  false
);
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([5, 1, 4, null, null, 3, 6])),
  false
);
assert_1.default.strictEqual(
  isValidBST(BinaryTree_1.createBinaryTree([10, 5, 15, null, null, 6, 20])),
  false
);
assert_1.default.strictEqual(
  isValidBST(
    BinaryTree_1.createBinaryTree([3, null, 30, 10, null, null, 15, null, 45])
  ),
  false
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTgu6aqM6K+B5LqM5Y+J5pCc57Si5qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85OC7pqozor4Hkuozlj4nmkJzntKLmoJEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQkk7QUFDSixtREFBOEQ7QUFDOUQsb0RBQTRDO0FBRTVDOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBNkI7SUFDcEQ7O1NBRUs7SUFDTCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztJQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDWCxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0U7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDWixZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUU7SUFFRCxPQUFPLFdBQVcsSUFBSSxZQUFZLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWtCO0FBQ2xCLFNBQVMsV0FBVyxDQUFDLElBQTZCLEVBQUUsR0FBVztJQUMzRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0IsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNsQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFFRCxtQkFBbUI7QUFDbkIsU0FBUyxXQUFXLENBQUMsSUFBNkIsRUFBRSxHQUFXO0lBQzNELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2xDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUVELGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNoQyxJQUFJLENBQ1AsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3BDLEtBQUssQ0FDUixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3ZDLElBQUksQ0FDUCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNuRCxJQUFJLENBQ1AsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDcEQsS0FBSyxDQUNSLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxVQUFVLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pELEtBQUssQ0FDUixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM1RCxLQUFLLENBQ1IsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN6RSxLQUFLLENBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOWPieagke+8jOWIpOaWreWFtuaYr+WQpuaYr+S4gOS4quacieaViOeahOS6jOWPieaQnOe0ouagkeOAglxyXG5cclxu5YGH6K6+5LiA5Liq5LqM5Y+J5pCc57Si5qCR5YW35pyJ5aaC5LiL54m55b6B77yaXHJcblxyXG7oioLngrnnmoTlt6blrZDmoJHlj6rljIXlkKvlsI/kuo7lvZPliY3oioLngrnnmoTmlbDjgIJcclxu6IqC54K555qE5Y+z5a2Q5qCR5Y+q5YyF5ZCr5aSn5LqO5b2T5YmN6IqC54K555qE5pWw44CCXHJcbuaJgOacieW3puWtkOagkeWSjOWPs+WtkOagkeiHqui6q+W/hemhu+S5n+aYr+S6jOWPieaQnOe0ouagkeOAglxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTpcclxuICAgIDJcclxuICAgLyBcXFxyXG4gIDEgICAzXHJcbui+k+WHujogdHJ1ZVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTpcclxuICAgIDVcclxuICAgLyBcXFxyXG4gIDEgICA0XHJcbiAgICAgLyBcXFxyXG4gICAgMyAgIDZcclxu6L6T5Ye6OiBmYWxzZVxyXG7op6Pph4o6IOi+k+WFpeS4ujogWzUsMSw0LG51bGwsbnVsbCwzLDZd44CCXHJcbiAgICAg5qC56IqC54K555qE5YC85Li6IDUg77yM5L2G5piv5YW25Y+z5a2Q6IqC54K55YC85Li6IDQg44CCXHJcbiogKi9cclxuaW1wb3J0IHtjcmVhdGVCaW5hcnlUcmVlLCBUcmVlTm9kZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5pbXBvcnQgYXNzZXJ0LCB7bm90RGVlcEVxdWFsfSBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzVmFsaWRCU1QgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIC8qKlxyXG4gICAgICog5rOo5oSPIOWtkOagkeaYryDmiYDmnInlrZDoioLngrkg5aaC5p6c5pivIOmalOS4gOWxguW9k+eEtuS5n+eul+WVilxyXG4gICAgICogKi9cclxuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgIGxldCBsZWZ0X3Jlc3VsdCA9IHRydWU7XHJcbiAgICBsZXQgcmlnaHRfcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGlmIChyb290LmxlZnQpIHtcclxuICAgICAgICBsZWZ0X3Jlc3VsdCA9IGlzU3RlcEJlbG93KHJvb3QubGVmdCwgcm9vdC52YWwpICYmIGlzVmFsaWRCU1Qocm9vdC5sZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm9vdC5yaWdodCkge1xyXG4gICAgICAgIHJpZ2h0X3Jlc3VsdCA9IGlzU3RlcFVwcGVyKHJvb3QucmlnaHQsIHJvb3QudmFsKSAmJiBpc1ZhbGlkQlNUKHJvb3QucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsZWZ0X3Jlc3VsdCAmJiByaWdodF9yZXN1bHQ7XHJcbn07XHJcblxyXG4vLyDor6XoioLngrnnmoTmiYDmnInlrZDoioLngrnpg73lpKfkuo7nm67moIflgLxcclxuZnVuY3Rpb24gaXNTdGVwVXBwZXIobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIG51bTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAobm9kZS52YWwgPD0gbnVtKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gaXNTdGVwVXBwZXIobm9kZS5sZWZ0LCBudW0pICYmIGlzU3RlcFVwcGVyKG5vZGUucmlnaHQsIG51bSk7XHJcbn1cclxuXHJcbi8vIOivpeWHoOeCueeahOaJgOacieWtkOiKgueCuemDveWwj3Pkuo7nm67moIflgLxcclxuZnVuY3Rpb24gaXNTdGVwQmVsb3cobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIG51bTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAobm9kZS52YWwgPj0gbnVtKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gaXNTdGVwQmVsb3cobm9kZS5sZWZ0LCBudW0pICYmIGlzU3RlcEJlbG93KG5vZGUucmlnaHQsIG51bSk7XHJcbn1cclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbXSkpLFxyXG4gICAgdHJ1ZSxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgaXNWYWxpZEJTVChjcmVhdGVCaW5hcnlUcmVlKFsxLCAxXSkpLFxyXG4gICAgZmFsc2UsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbMiwgMSwgM10pKSxcclxuICAgIHRydWUsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbNSwgMywgNywgMiwgNCwgNiwgOF0pKSxcclxuICAgIHRydWUsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbNSwgMywgNywgMiwgMTAsIDYsIDhdKSksXHJcbiAgICBmYWxzZSxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgaXNWYWxpZEJTVChjcmVhdGVCaW5hcnlUcmVlKFs1LCAxLCA0LCBudWxsLCBudWxsLCAzLCA2XSkpLFxyXG4gICAgZmFsc2UsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbMTAsIDUsIDE1LCBudWxsLCBudWxsLCA2LCAyMF0pKSxcclxuICAgIGZhbHNlLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpc1ZhbGlkQlNUKGNyZWF0ZUJpbmFyeVRyZWUoWzMsIG51bGwsIDMwLCAxMCwgbnVsbCwgbnVsbCwgMTUsIG51bGwsIDQ1XSkpLFxyXG4gICAgZmFsc2UsXHJcbik7XHJcbiJdfQ==
