"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。

示例:

输入: 3
输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释:
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  return generate_trees(1, n);
  function generate_trees(start, end) {
    const all_trees = [];
    // 当出现 start > end 的 情况表示 这里 没有节点 但是子树上只能挂null
    // 这种情况下 另一个子树一定 获取了 全部的剩余节点s
    if (start > end) {
      all_trees.push(null);
      return all_trees;
    }
    for (let i = start; i <= end; i++) {
      // 递归生成 左子树
      const left_trees = generate_trees(start, i - 1);
      // 递归生成右子树
      const right_trees = generate_trees(i + 1, end);
      for (const l of left_trees) {
        for (const r of right_trees) {
          const current_tree = new BinaryTree_1.TreeNode(i);
          current_tree.left = l;
          current_tree.right = r;
          all_trees.push(current_tree);
        }
      }
    }
    return all_trees;
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  generateTrees(3),
  [
    [1, null, 2, null, 3],
    [1, null, 3, 2],
    [2, 1, 3],
    [3, 1, null, null, 2],
    [3, 2, null, 1],
  ].map((param) => BinaryTree_1.createBinaryTree(param))
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUu5LiN5ZCM55qE5LqM5Y+J5pCc57Si5qCRSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk1LuS4jeWQjOeahOS6jOWPieaQnOe0ouagkUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0osbURBQThEO0FBRTlEOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIsT0FBTyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVCLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQzlDLE1BQU0sU0FBUyxHQUF3QixFQUFFLENBQUM7UUFDMUMsOENBQThDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixXQUFXO1lBQ1gsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsVUFBVTtZQUNWLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9DLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUN4QixLQUFLLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRTtvQkFDekIsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7U0FDSjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFHRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEI7SUFDSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ2xCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsNkJBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbTmlbAgbu+8jOeUn+aIkOaJgOacieeUsSAxIC4uLsKgbiDkuLroioLngrnmiYDnu4TmiJDnmoTkuozlj4nmkJzntKLmoJHjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IDNcbui+k+WHujpcbltcbsKgIFsxLG51bGwsMywyXSxcbsKgIFszLDIsbnVsbCwxXSxcbsKgIFszLDEsbnVsbCxudWxsLDJdLFxuwqAgWzIsMSwzXSxcbsKgIFsxLG51bGwsMixudWxsLDNdXG5dXG7op6Pph4o6XG7ku6XkuIrnmoTovpPlh7rlr7nlupTku6XkuIsgNSDnp43kuI3lkIznu5PmnoTnmoTkuozlj4nmkJzntKLmoJHvvJpcblxuICAgMSAgICAgICAgIDMgICAgIDMgICAgICAyICAgICAgMVxuICAgIFxcICAgICAgIC8gICAgIC8gICAgICAvIFxcICAgICAgXFxcbiAgICAgMyAgICAgMiAgICAgMSAgICAgIDEgICAzICAgICAgMlxuICAgIC8gICAgIC8gICAgICAgXFwgICAgICAgICAgICAgICAgIFxcXG4gICAyICAgICAxICAgICAgICAgMiAgICAgICAgICAgICAgICAgM1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvdW5pcXVlLWJpbmFyeS1zZWFyY2gtdHJlZXMtaWlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IHtUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtUcmVlTm9kZVtdfVxuICovXG52YXIgZ2VuZXJhdGVUcmVlcyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgICBpZiAobiA9PT0gMCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBnZW5lcmF0ZV90cmVlcygxLCBuKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlX3RyZWVzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFsbF90cmVlczogKFRyZWVOb2RlIHwgbnVsbClbXSA9IFtdO1xuICAgICAgICAvLyDlvZPlh7rnjrAgc3RhcnQgPiBlbmQg55qEIOaDheWGteihqOekuiDov5nph4wg5rKh5pyJ6IqC54K5IOS9huaYr+WtkOagkeS4iuWPquiDveaMgm51bGxcbiAgICAgICAgLy8g6L+Z56eN5oOF5Ya15LiLIOWPpuS4gOS4quWtkOagkeS4gOWumiDojrflj5bkuoYg5YWo6YOo55qE5Ymp5L2Z6IqC54K5c1xuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIGFsbF90cmVlcy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIGFsbF90cmVlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgLy8g6YCS5b2S55Sf5oiQIOW3puWtkOagkVxuICAgICAgICAgICAgY29uc3QgbGVmdF90cmVlcyA9IGdlbmVyYXRlX3RyZWVzKHN0YXJ0LCBpIC0gMSk7XG4gICAgICAgICAgICAvLyDpgJLlvZLnlJ/miJDlj7PlrZDmoJFcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0X3RyZWVzID0gZ2VuZXJhdGVfdHJlZXMoaSArIDEsIGVuZCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbCBvZiBsZWZ0X3RyZWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHJpZ2h0X3RyZWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfdHJlZSA9IG5ldyBUcmVlTm9kZShpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF90cmVlLmxlZnQgPSBsO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RyZWUucmlnaHQgPSByO1xuICAgICAgICAgICAgICAgICAgICBhbGxfdHJlZXMucHVzaChjdXJyZW50X3RyZWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsX3RyZWVzO1xuICAgIH1cbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZ2VuZXJhdGVUcmVlcygzKSxcbiAgICBbXG4gICAgICAgIFsxLCBudWxsLCAyLCBudWxsLCAzXSxcbiAgICAgICAgWzEsIG51bGwsIDMsIDJdLFxuICAgICAgICBbMiwgMSwgM10sXG4gICAgICAgIFszLCAxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgICAgWzMsIDIsIG51bGwsIDFdLFxuICAgIF0ubWFwKHBhcmFtID0+IGNyZWF0ZUJpbmFyeVRyZWUocGFyYW0pKSxcbik7XG4iXX0=
