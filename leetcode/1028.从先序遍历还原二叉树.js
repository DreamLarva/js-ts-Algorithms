"use strict";
/*
1028. 从先序遍历还原二叉树
我们从二叉树的根节点 root 开始进行深度优先搜索。

在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），然后输出该节点的值。（如果节点的深度为 D，则其直接子节点的深度为 D + 1。根节点的深度为 0）。

如果节点只有一个子节点，那么保证该子节点为左子节点。

给出遍历输出 S，还原树并返回其根节点 root。



示例 1：



输入："1-2--3--4-5--6--7"
输出：[1,2,5,3,4,6,7]
示例 2：



输入："1-2--3---4-5--6---7"
输出：[1,2,5,3,null,6,null,4,null,7]
示例 3：



输入："1-401--349---90--88"
输出：[1,401,null,349,88,90]


提示：

原始树中的节点数介于 1 和 1000 之间。
每个节点的值介于 1 和 10 ^ 9 之间。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("../util/BinaryTree");
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
/**
 * 老夫就是要递归
 * */
function recoverFromPreorder(S) {
    const rootNode = new BinaryTree_1.TreeNode(parseInt(S));
    const [left, right] = getLeftRight(S, 1);
    step(rootNode, left, right, 1);
    return rootNode;
    function step(node, left, right, level = 1) {
        if (left == null) {
            node.left = null;
        }
        else {
            const leftNodeValue = getVal(left);
            const [subLeft, subRight] = getLeftRight(left, level + 1);
            const leftNode = new BinaryTree_1.TreeNode(Number(leftNodeValue));
            node.left = leftNode;
            step(leftNode, subLeft, subRight, level + 1);
        }
        if (right == null) {
            node.right = null;
        }
        else {
            const rightNodeValue = getVal(right);
            const [subLeft, subRight] = getLeftRight(right, level + 1);
            const rightNode = new BinaryTree_1.TreeNode(Number(rightNodeValue));
            node.right = rightNode;
            step(rightNode, subLeft, subRight, level + 1);
        }
    }
}
/**
 * 获取当前层级的值
 * */
function getVal(str) {
    const data = str.match(/^-*(\d+)/);
    return data === null || data === void 0 ? void 0 : data[1];
}
/**
 * 获取目标层级的 左子树 和 右子树
 * */
function getLeftRight(str, level) {
    var _a;
    const reg = new RegExp(`(-{${level}}\\d+)(-{${level + 1},}\\d+)*`, "g");
    return (_a = str.match(reg)) !== null && _a !== void 0 ? _a : [];
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual((_a = recoverFromPreorder("1-2--3--4-5--6--7")) === null || _a === void 0 ? void 0 : _a.levelTraversal(), [1, 2, 5, 3, 4, 6, 7]);
assert_1.default.deepStrictEqual((_b = recoverFromPreorder("1-2--3---4-5--6---7")) === null || _b === void 0 ? void 0 : _b.levelTraversal(), [1, 2, 5, 3, null, 6, null, 4, null, 7].filter((v) => v != null));
assert_1.default.deepStrictEqual((_c = recoverFromPreorder("1-401--349---90--88")) === null || _c === void 0 ? void 0 : _c.levelTraversal(), [1, 401, null, 349, 88, 90].filter((v) => v != null));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyOC7ku47lhYjluo/pgY3ljobov5jljp/kuozlj4nmoJEuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMjgu5LuO5YWI5bqP6YGN5Y6G6L+Y5Y6f5LqM5Y+J5qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0NJOzs7Ozs7QUFFSixtREFBOEM7QUFFOUMsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLGlGQUFpRjtBQUNqRiw4Q0FBOEM7QUFDOUMsb0RBQW9EO0FBQ3BELHVEQUF1RDtBQUN2RCxNQUFNO0FBQ04sSUFBSTtBQUVKOztLQUVLO0FBQ0wsU0FBUyxtQkFBbUIsQ0FBQyxDQUFTO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLElBQUkscUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9CLE9BQU8sUUFBUSxDQUFDO0lBQ2hCLFNBQVMsSUFBSSxDQUNYLElBQWMsRUFDZCxJQUFtQixFQUNuQixLQUFvQixFQUNwQixLQUFLLEdBQUcsQ0FBQztRQUVULElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7YUFBTTtZQUNMLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRDs7S0FFSztBQUNMLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDekIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxPQUFPLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRyxDQUFDLEVBQUU7QUFDbkIsQ0FBQztBQUVEOztLQUVLO0FBQ0wsU0FBUyxZQUFZLENBQUMsR0FBVyxFQUFFLEtBQWE7O0lBQzlDLE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxZQUFZLEtBQUssR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4RSxhQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1DQUFJLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsZUFBZSxPQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQywwQ0FBRSxjQUFjLElBQ3hELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3RCLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsT0FDcEIsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsMENBQUUsY0FBYyxJQUMxRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNqRSxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLE9BQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLDBDQUFFLGNBQWMsSUFDMUQsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjEwMjguIOS7juWFiOW6j+mBjeWOhui/mOWOn+S6jOWPieagkVxu5oiR5Lus5LuO5LqM5Y+J5qCR55qE5qC56IqC54K5IHJvb3Qg5byA5aeL6L+b6KGM5rex5bqm5LyY5YWI5pCc57Si44CCXG5cbuWcqOmBjeWOhuS4reeahOavj+S4quiKgueCueWkhO+8jOaIkeS7rOi+k+WHuiBEIOadoeefreWIkue6v++8iOWFtuS4rSBEIOaYr+ivpeiKgueCueeahOa3seW6pu+8ie+8jOeEtuWQjui+k+WHuuivpeiKgueCueeahOWAvOOAgu+8iOWmguaenOiKgueCueeahOa3seW6puS4uiBE77yM5YiZ5YW255u05o6l5a2Q6IqC54K555qE5rex5bqm5Li6IEQgKyAx44CC5qC56IqC54K555qE5rex5bqm5Li6IDDvvInjgIJcblxu5aaC5p6c6IqC54K55Y+q5pyJ5LiA5Liq5a2Q6IqC54K577yM6YKj5LmI5L+d6K+B6K+l5a2Q6IqC54K55Li65bem5a2Q6IqC54K544CCXG5cbue7meWHuumBjeWOhui+k+WHuiBT77yM6L+Y5Y6f5qCR5bm26L+U5Zue5YW25qC56IqC54K5IHJvb3TjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cblxuXG7ovpPlhaXvvJpcIjEtMi0tMy0tNC01LS02LS03XCJcbui+k+WHuu+8mlsxLDIsNSwzLDQsNiw3XVxu56S65L6LIDLvvJpcblxuXG5cbui+k+WFpe+8mlwiMS0yLS0zLS0tNC01LS02LS0tN1wiXG7ovpPlh7rvvJpbMSwyLDUsMyxudWxsLDYsbnVsbCw0LG51bGwsN11cbuekuuS+iyAz77yaXG5cblxuXG7ovpPlhaXvvJpcIjEtNDAxLS0zNDktLS05MC0tODhcIlxu6L6T5Ye677yaWzEsNDAxLG51bGwsMzQ5LDg4LDkwXVxuXG5cbuaPkOekuu+8mlxuXG7ljp/lp4vmoJHkuK3nmoToioLngrnmlbDku4vkuo4gMSDlkowgMTAwMCDkuYvpl7TjgIJcbuavj+S4quiKgueCueeahOWAvOS7i+S6jiAxIOWSjCAxMCBeIDkg5LmL6Ze044CCXG4qICovXG5cbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuXG4vLyBjbGFzcyBUcmVlTm9kZSB7XG4vLyAgIHZhbDogbnVtYmVyO1xuLy8gICBsZWZ0OiBUcmVlTm9kZSB8IG51bGw7XG4vLyAgIHJpZ2h0OiBUcmVlTm9kZSB8IG51bGw7XG4vLyAgIGNvbnN0cnVjdG9yKHZhbD86IG51bWJlciwgbGVmdD86IFRyZWVOb2RlIHwgbnVsbCwgcmlnaHQ/OiBUcmVlTm9kZSB8IG51bGwpIHtcbi8vICAgICB0aGlzLnZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gMCA6IHZhbDtcbi8vICAgICB0aGlzLmxlZnQgPSBsZWZ0ID09PSB1bmRlZmluZWQgPyBudWxsIDogbGVmdDtcbi8vICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiByaWdodDtcbi8vICAgfVxuLy8gfVxuXG4vKipcbiAqIOiAgeWkq+WwseaYr+imgemAkuW9klxuICogKi9cbmZ1bmN0aW9uIHJlY292ZXJGcm9tUHJlb3JkZXIoUzogc3RyaW5nKTogVHJlZU5vZGUgfCBudWxsIHtcbiAgY29uc3Qgcm9vdE5vZGUgPSBuZXcgVHJlZU5vZGUocGFyc2VJbnQoUykpO1xuICBjb25zdCBbbGVmdCwgcmlnaHRdID0gZ2V0TGVmdFJpZ2h0KFMsIDEpO1xuICBzdGVwKHJvb3ROb2RlLCBsZWZ0LCByaWdodCwgMSk7XG5cbiAgcmV0dXJuIHJvb3ROb2RlO1xuICBmdW5jdGlvbiBzdGVwKFxuICAgIG5vZGU6IFRyZWVOb2RlLFxuICAgIGxlZnQ6IHN0cmluZyB8IHZvaWQsXG4gICAgcmlnaHQ6IHN0cmluZyB8IHZvaWQsXG4gICAgbGV2ZWwgPSAxXG4gICkge1xuICAgIGlmIChsZWZ0ID09IG51bGwpIHtcbiAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnROb2RlVmFsdWUgPSBnZXRWYWwobGVmdCkhO1xuICAgICAgY29uc3QgW3N1YkxlZnQsIHN1YlJpZ2h0XSA9IGdldExlZnRSaWdodChsZWZ0LCBsZXZlbCArIDEpO1xuICAgICAgY29uc3QgbGVmdE5vZGUgPSBuZXcgVHJlZU5vZGUoTnVtYmVyKGxlZnROb2RlVmFsdWUpKTtcbiAgICAgIG5vZGUubGVmdCA9IGxlZnROb2RlO1xuICAgICAgc3RlcChsZWZ0Tm9kZSwgc3ViTGVmdCwgc3ViUmlnaHQsIGxldmVsICsgMSk7XG4gICAgfVxuICAgIGlmIChyaWdodCA9PSBudWxsKSB7XG4gICAgICBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmlnaHROb2RlVmFsdWUgPSBnZXRWYWwocmlnaHQpITtcbiAgICAgIGNvbnN0IFtzdWJMZWZ0LCBzdWJSaWdodF0gPSBnZXRMZWZ0UmlnaHQocmlnaHQsIGxldmVsICsgMSk7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSBuZXcgVHJlZU5vZGUoTnVtYmVyKHJpZ2h0Tm9kZVZhbHVlKSk7XG4gICAgICBub2RlLnJpZ2h0ID0gcmlnaHROb2RlO1xuICAgICAgc3RlcChyaWdodE5vZGUsIHN1YkxlZnQsIHN1YlJpZ2h0LCBsZXZlbCArIDEpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluW9k+WJjeWxgue6p+eahOWAvFxuICogKi9cbmZ1bmN0aW9uIGdldFZhbChzdHI6IHN0cmluZykge1xuICBjb25zdCBkYXRhID0gc3RyLm1hdGNoKC9eLSooXFxkKykvKTtcbiAgcmV0dXJuIGRhdGE/LlsxXTtcbn1cblxuLyoqXG4gKiDojrflj5bnm67moIflsYLnuqfnmoQg5bem5a2Q5qCRIOWSjCDlj7PlrZDmoJFcbiAqICovXG5mdW5jdGlvbiBnZXRMZWZ0UmlnaHQoc3RyOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpIHtcbiAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgKC17JHtsZXZlbH19XFxcXGQrKSgteyR7bGV2ZWwgKyAxfSx9XFxcXGQrKSpgLCBcImdcIik7XG4gIHJldHVybiBzdHIubWF0Y2gocmVnKSA/PyBbXTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByZWNvdmVyRnJvbVByZW9yZGVyKFwiMS0yLS0zLS00LTUtLTYtLTdcIik/LmxldmVsVHJhdmVyc2FsKCksXG4gIFsxLCAyLCA1LCAzLCA0LCA2LCA3XVxuKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVjb3ZlckZyb21QcmVvcmRlcihcIjEtMi0tMy0tLTQtNS0tNi0tLTdcIik/LmxldmVsVHJhdmVyc2FsKCksXG4gIFsxLCAyLCA1LCAzLCBudWxsLCA2LCBudWxsLCA0LCBudWxsLCA3XS5maWx0ZXIoKHYpID0+IHYgIT0gbnVsbClcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByZWNvdmVyRnJvbVByZW9yZGVyKFwiMS00MDEtLTM0OS0tLTkwLS04OFwiKT8ubGV2ZWxUcmF2ZXJzYWwoKSxcbiAgWzEsIDQwMSwgbnVsbCwgMzQ5LCA4OCwgOTBdLmZpbHRlcigodikgPT4gdiAhPSBudWxsKVxuKTtcbiJdfQ==