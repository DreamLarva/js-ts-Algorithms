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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
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
    } else {
      const leftNodeValue = getVal(left);
      const [subLeft, subRight] = getLeftRight(left, level + 1);
      const leftNode = new BinaryTree_1.TreeNode(Number(leftNodeValue));
      node.left = leftNode;
      step(leftNode, subLeft, subRight, level + 1);
    }
    if (right == null) {
      node.right = null;
    } else {
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
  return data?.[1];
}
/**
 * 获取目标层级的 左子树 和 右子树
 * */
function getLeftRight(str, level) {
  const reg = new RegExp(`(-{${level}}\\d+)(-{${level + 1},}\\d+)*`, "g");
  return str.match(reg) ?? [];
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  recoverFromPreorder("1-2--3--4-5--6--7")?.levelTraversal(),
  [1, 2, 5, 3, 4, 6, 7]
);
assert_1.default.deepStrictEqual(
  recoverFromPreorder("1-2--3---4-5--6---7")?.levelTraversal(),
  [1, 2, 5, 3, null, 6, null, 4, null, 7].filter((v) => v != null)
);
assert_1.default.deepStrictEqual(
  recoverFromPreorder("1-401--349---90--88")?.levelTraversal(),
  [1, 401, null, 349, 88, 90].filter((v) => v != null)
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyOC7ku47lhYjluo/pgY3ljobov5jljp/kuozlj4nmoJEuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMjgu5LuO5YWI5bqP6YGN5Y6G6L+Y5Y6f5LqM5Y+J5qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0NJOzs7OztBQUVKLG1EQUE4QztBQUU5QyxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsaUZBQWlGO0FBQ2pGLDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsdURBQXVEO0FBQ3ZELE1BQU07QUFDTixJQUFJO0FBRUo7O0tBRUs7QUFDTCxTQUFTLG1CQUFtQixDQUFDLENBQVM7SUFDcEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0IsT0FBTyxRQUFRLENBQUM7SUFDaEIsU0FBUyxJQUFJLENBQ1gsSUFBYyxFQUNkLElBQW1CLEVBQ25CLEtBQW9CLEVBQ3BCLEtBQUssR0FBRyxDQUFDO1FBRVQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFFLENBQUM7WUFDcEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjthQUFNO1lBQ0wsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVEOztLQUVLO0FBQ0wsU0FBUyxNQUFNLENBQUMsR0FBVztJQUN6QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVEOztLQUVLO0FBQ0wsU0FBUyxZQUFZLENBQUMsR0FBVyxFQUFFLEtBQWE7SUFDOUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFlBQVksS0FBSyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsQ0FBQztBQUVELG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFDMUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDdEIsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNqRSxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsY0FBYyxFQUFFLEVBQzVELENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4xMDI4LiDku47lhYjluo/pgY3ljobov5jljp/kuozlj4nmoJFcbuaIkeS7rOS7juS6jOWPieagkeeahOagueiKgueCuSByb290IOW8gOWni+i/m+ihjOa3seW6puS8mOWFiOaQnOe0ouOAglxuXG7lnKjpgY3ljobkuK3nmoTmr4/kuKroioLngrnlpITvvIzmiJHku6zovpPlh7ogRCDmnaHnn63liJLnur/vvIjlhbbkuK0gRCDmmK/or6XoioLngrnnmoTmt7HluqbvvInvvIznhLblkI7ovpPlh7ror6XoioLngrnnmoTlgLzjgILvvIjlpoLmnpzoioLngrnnmoTmt7HluqbkuLogRO+8jOWImeWFtuebtOaOpeWtkOiKgueCueeahOa3seW6puS4uiBEICsgMeOAguagueiKgueCueeahOa3seW6puS4uiAw77yJ44CCXG5cbuWmguaenOiKgueCueWPquacieS4gOS4quWtkOiKgueCue+8jOmCo+S5iOS/neivgeivpeWtkOiKgueCueS4uuW3puWtkOiKgueCueOAglxuXG7nu5nlh7rpgY3ljobovpPlh7ogU++8jOi/mOWOn+agkeW5tui/lOWbnuWFtuagueiKgueCuSByb29044CCXG5cblxuXG7npLrkvosgMe+8mlxuXG5cblxu6L6T5YWl77yaXCIxLTItLTMtLTQtNS0tNi0tN1wiXG7ovpPlh7rvvJpbMSwyLDUsMyw0LDYsN11cbuekuuS+iyAy77yaXG5cblxuXG7ovpPlhaXvvJpcIjEtMi0tMy0tLTQtNS0tNi0tLTdcIlxu6L6T5Ye677yaWzEsMiw1LDMsbnVsbCw2LG51bGwsNCxudWxsLDddXG7npLrkvosgM++8mlxuXG5cblxu6L6T5YWl77yaXCIxLTQwMS0tMzQ5LS0tOTAtLTg4XCJcbui+k+WHuu+8mlsxLDQwMSxudWxsLDM0OSw4OCw5MF1cblxuXG7mj5DnpLrvvJpcblxu5Y6f5aeL5qCR5Lit55qE6IqC54K55pWw5LuL5LqOIDEg5ZKMIDEwMDAg5LmL6Ze044CCXG7mr4/kuKroioLngrnnmoTlgLzku4vkuo4gMSDlkowgMTAgXiA5IOS5i+mXtOOAglxuKiAqL1xuXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLy8gY2xhc3MgVHJlZU5vZGUge1xuLy8gICB2YWw6IG51bWJlcjtcbi8vICAgbGVmdDogVHJlZU5vZGUgfCBudWxsO1xuLy8gICByaWdodDogVHJlZU5vZGUgfCBudWxsO1xuLy8gICBjb25zdHJ1Y3Rvcih2YWw/OiBudW1iZXIsIGxlZnQ/OiBUcmVlTm9kZSB8IG51bGwsIHJpZ2h0PzogVHJlZU5vZGUgfCBudWxsKSB7XG4vLyAgICAgdGhpcy52YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IDAgOiB2YWw7XG4vLyAgICAgdGhpcy5sZWZ0ID0gbGVmdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGxlZnQ7XG4vLyAgICAgdGhpcy5yaWdodCA9IHJpZ2h0ID09PSB1bmRlZmluZWQgPyBudWxsIDogcmlnaHQ7XG4vLyAgIH1cbi8vIH1cblxuLyoqXG4gKiDogIHlpKvlsLHmmK/opoHpgJLlvZJcbiAqICovXG5mdW5jdGlvbiByZWNvdmVyRnJvbVByZW9yZGVyKFM6IHN0cmluZyk6IFRyZWVOb2RlIHwgbnVsbCB7XG4gIGNvbnN0IHJvb3ROb2RlID0gbmV3IFRyZWVOb2RlKHBhcnNlSW50KFMpKTtcbiAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IGdldExlZnRSaWdodChTLCAxKTtcbiAgc3RlcChyb290Tm9kZSwgbGVmdCwgcmlnaHQsIDEpO1xuXG4gIHJldHVybiByb290Tm9kZTtcbiAgZnVuY3Rpb24gc3RlcChcbiAgICBub2RlOiBUcmVlTm9kZSxcbiAgICBsZWZ0OiBzdHJpbmcgfCB2b2lkLFxuICAgIHJpZ2h0OiBzdHJpbmcgfCB2b2lkLFxuICAgIGxldmVsID0gMVxuICApIHtcbiAgICBpZiAobGVmdCA9PSBudWxsKSB7XG4gICAgICBub2RlLmxlZnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0Tm9kZVZhbHVlID0gZ2V0VmFsKGxlZnQpITtcbiAgICAgIGNvbnN0IFtzdWJMZWZ0LCBzdWJSaWdodF0gPSBnZXRMZWZ0UmlnaHQobGVmdCwgbGV2ZWwgKyAxKTtcbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbmV3IFRyZWVOb2RlKE51bWJlcihsZWZ0Tm9kZVZhbHVlKSk7XG4gICAgICBub2RlLmxlZnQgPSBsZWZ0Tm9kZTtcbiAgICAgIHN0ZXAobGVmdE5vZGUsIHN1YkxlZnQsIHN1YlJpZ2h0LCBsZXZlbCArIDEpO1xuICAgIH1cbiAgICBpZiAocmlnaHQgPT0gbnVsbCkge1xuICAgICAgbm9kZS5yaWdodCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZVZhbHVlID0gZ2V0VmFsKHJpZ2h0KSE7XG4gICAgICBjb25zdCBbc3ViTGVmdCwgc3ViUmlnaHRdID0gZ2V0TGVmdFJpZ2h0KHJpZ2h0LCBsZXZlbCArIDEpO1xuICAgICAgY29uc3QgcmlnaHROb2RlID0gbmV3IFRyZWVOb2RlKE51bWJlcihyaWdodE5vZGVWYWx1ZSkpO1xuICAgICAgbm9kZS5yaWdodCA9IHJpZ2h0Tm9kZTtcbiAgICAgIHN0ZXAocmlnaHROb2RlLCBzdWJMZWZ0LCBzdWJSaWdodCwgbGV2ZWwgKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5blvZPliY3lsYLnuqfnmoTlgLxcbiAqICovXG5mdW5jdGlvbiBnZXRWYWwoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0YSA9IHN0ci5tYXRjaCgvXi0qKFxcZCspLyk7XG4gIHJldHVybiBkYXRhPy5bMV07XG59XG5cbi8qKlxuICog6I635Y+W55uu5qCH5bGC57qn55qEIOW3puWtkOagkSDlkowg5Y+z5a2Q5qCRXG4gKiAqL1xuZnVuY3Rpb24gZ2V0TGVmdFJpZ2h0KHN0cjogc3RyaW5nLCBsZXZlbDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYCgteyR7bGV2ZWx9fVxcXFxkKykoLXske2xldmVsICsgMX0sfVxcXFxkKykqYCwgXCJnXCIpO1xuICByZXR1cm4gc3RyLm1hdGNoKHJlZykgPz8gW107XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVjb3ZlckZyb21QcmVvcmRlcihcIjEtMi0tMy0tNC01LS02LS03XCIpPy5sZXZlbFRyYXZlcnNhbCgpLFxuICBbMSwgMiwgNSwgMywgNCwgNiwgN11cbik7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIHJlY292ZXJGcm9tUHJlb3JkZXIoXCIxLTItLTMtLS00LTUtLTYtLS03XCIpPy5sZXZlbFRyYXZlcnNhbCgpLFxuICBbMSwgMiwgNSwgMywgbnVsbCwgNiwgbnVsbCwgNCwgbnVsbCwgN10uZmlsdGVyKCh2KSA9PiB2ICE9IG51bGwpXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVjb3ZlckZyb21QcmVvcmRlcihcIjEtNDAxLS0zNDktLS05MC0tODhcIik/LmxldmVsVHJhdmVyc2FsKCksXG4gIFsxLCA0MDEsIG51bGwsIDM0OSwgODgsIDkwXS5maWx0ZXIoKHYpID0+IHYgIT0gbnVsbClcbik7XG4iXX0=
