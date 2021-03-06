"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
    if (root === null)
        return true;
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
    if (node === null)
        return true;
    if (node.val <= num)
        return false;
    return isStepUpper(node.left, num) && isStepUpper(node.right, num);
}
// 该几点的所有子节点都小s于目标值
function isStepBelow(node, num) {
    if (node === null)
        return true;
    if (node.val >= num)
        return false;
    return isStepBelow(node.left, num) && isStepBelow(node.right, num);
}
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([])), true);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([1, 1])), false);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([2, 1, 3])), true);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([5, 3, 7, 2, 4, 6, 8])), true);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([5, 3, 7, 2, 10, 6, 8])), false);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([5, 1, 4, null, null, 3, 6])), false);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([10, 5, 15, null, null, 6, 20])), false);
assert_1.default.strictEqual(isValidBST(BinaryTree_1.createBinaryTree([3, null, 30, 10, null, null, 15, null, 45])), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTgu6aqM6K+B5LqM5Y+J5pCc57Si5qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85OC7pqozor4Hkuozlj4nmkJzntKLmoJEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQkk7QUFDSixtREFBZ0U7QUFDaEUsb0RBQThDO0FBRTlDOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBNkI7SUFDdEQ7O1NBRUs7SUFDTCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztJQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDYixXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekU7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDZCxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUU7SUFFRCxPQUFPLFdBQVcsSUFBSSxZQUFZLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUYsa0JBQWtCO0FBQ2xCLFNBQVMsV0FBVyxDQUFDLElBQTZCLEVBQUUsR0FBVztJQUM3RCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0IsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNsQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFFRCxtQkFBbUI7QUFDbkIsU0FBUyxXQUFXLENBQUMsSUFBNkIsRUFBRSxHQUFXO0lBQzdELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2xDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUVELGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNELGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsVUFBVSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxLQUFLLENBQ04sQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNoQixVQUFVLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzVELEtBQUssQ0FDTixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLFVBQVUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN6RSxLQUFLLENBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzliKTmlq3lhbbmmK/lkKbmmK/kuIDkuKrmnInmlYjnmoTkuozlj4nmkJzntKLmoJHjgIJcblxu5YGH6K6+5LiA5Liq5LqM5Y+J5pCc57Si5qCR5YW35pyJ5aaC5LiL54m55b6B77yaXG5cbuiKgueCueeahOW3puWtkOagkeWPquWMheWQq+Wwj+S6juW9k+WJjeiKgueCueeahOaVsOOAglxu6IqC54K555qE5Y+z5a2Q5qCR5Y+q5YyF5ZCr5aSn5LqO5b2T5YmN6IqC54K555qE5pWw44CCXG7miYDmnInlt6blrZDmoJHlkozlj7PlrZDmoJHoh6rouqvlv4XpobvkuZ/mmK/kuozlj4nmkJzntKLmoJHjgIJcbuekuuS+iyAxOlxuXG7ovpPlhaU6XG4gICAgMlxuICAgLyBcXFxuICAxICAgM1xu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOlxuICAgIDVcbiAgIC8gXFxcbiAgMSAgIDRcbiAgICAgLyBcXFxuICAgIDMgICA2XG7ovpPlh7o6IGZhbHNlXG7op6Pph4o6IOi+k+WFpeS4ujogWzUsMSw0LG51bGwsbnVsbCwzLDZd44CCXG4gICAgIOagueiKgueCueeahOWAvOS4uiA1IO+8jOS9huaYr+WFtuWPs+WtkOiKgueCueWAvOS4uiA0IOOAglxuKiAqL1xuaW1wb3J0IHsgY3JlYXRlQmluYXJ5VHJlZSwgVHJlZU5vZGUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5pbXBvcnQgYXNzZXJ0LCB7IG5vdERlZXBFcXVhbCB9IGZyb20gXCJhc3NlcnRcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNWYWxpZEJTVCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCk6IGJvb2xlYW4ge1xuICAvKipcbiAgICog5rOo5oSPIOWtkOagkeaYryDmiYDmnInlrZDoioLngrkg5aaC5p6c5pivIOmalOS4gOWxguW9k+eEtuS5n+eul+WVilxuICAgKiAqL1xuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGxldCBsZWZ0X3Jlc3VsdCA9IHRydWU7XG4gIGxldCByaWdodF9yZXN1bHQgPSB0cnVlO1xuICBpZiAocm9vdC5sZWZ0KSB7XG4gICAgbGVmdF9yZXN1bHQgPSBpc1N0ZXBCZWxvdyhyb290LmxlZnQsIHJvb3QudmFsKSAmJiBpc1ZhbGlkQlNUKHJvb3QubGVmdCk7XG4gIH1cblxuICBpZiAocm9vdC5yaWdodCkge1xuICAgIHJpZ2h0X3Jlc3VsdCA9IGlzU3RlcFVwcGVyKHJvb3QucmlnaHQsIHJvb3QudmFsKSAmJiBpc1ZhbGlkQlNUKHJvb3QucmlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlZnRfcmVzdWx0ICYmIHJpZ2h0X3Jlc3VsdDtcbn07XG5cbi8vIOivpeiKgueCueeahOaJgOacieWtkOiKgueCuemDveWkp+S6juebruagh+WAvFxuZnVuY3Rpb24gaXNTdGVwVXBwZXIobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIG51bTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKG5vZGUudmFsIDw9IG51bSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNTdGVwVXBwZXIobm9kZS5sZWZ0LCBudW0pICYmIGlzU3RlcFVwcGVyKG5vZGUucmlnaHQsIG51bSk7XG59XG5cbi8vIOivpeWHoOeCueeahOaJgOacieWtkOiKgueCuemDveWwj3Pkuo7nm67moIflgLxcbmZ1bmN0aW9uIGlzU3RlcEJlbG93KG5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsLCBudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGlmIChub2RlLnZhbCA+PSBudW0pIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzU3RlcEJlbG93KG5vZGUubGVmdCwgbnVtKSAmJiBpc1N0ZXBCZWxvdyhub2RlLnJpZ2h0LCBudW0pO1xufVxuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZEJTVChjcmVhdGVCaW5hcnlUcmVlKFtdKSksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbMSwgMV0pKSwgZmFsc2UpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbMiwgMSwgM10pKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZEJTVChjcmVhdGVCaW5hcnlUcmVlKFs1LCAzLCA3LCAyLCA0LCA2LCA4XSkpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc1ZhbGlkQlNUKGNyZWF0ZUJpbmFyeVRyZWUoWzUsIDMsIDcsIDIsIDEwLCA2LCA4XSkpLCBmYWxzZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbNSwgMSwgNCwgbnVsbCwgbnVsbCwgMywgNl0pKSxcbiAgZmFsc2Vcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbMTAsIDUsIDE1LCBudWxsLCBudWxsLCA2LCAyMF0pKSxcbiAgZmFsc2Vcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzVmFsaWRCU1QoY3JlYXRlQmluYXJ5VHJlZShbMywgbnVsbCwgMzAsIDEwLCBudWxsLCBudWxsLCAxNSwgbnVsbCwgNDVdKSksXG4gIGZhbHNlXG4pO1xuIl19