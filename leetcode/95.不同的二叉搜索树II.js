"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。

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
    if (n === 0)
        return [];
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
assert_1.default.deepStrictEqual(generateTrees(3), [
    [1, null, 2, null, 3],
    [1, null, 3, 2],
    [2, 1, 3],
    [3, 1, null, null, 2],
    [3, 2, null, 1],
].map((param) => BinaryTree_1.createBinaryTree(param)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUu5LiN5ZCM55qE5LqM5Y+J5pCc57Si5qCRSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk1LuS4jeWQjOeahOS6jOWPieaQnOe0ouagkUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIsT0FBTyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVCLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ2hELE1BQU0sU0FBUyxHQUF3QixFQUFFLENBQUM7UUFDMUMsOENBQThDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxXQUFXO1lBQ1gsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsVUFBVTtZQUNWLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9DLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUMxQixLQUFLLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRTtvQkFDM0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEI7SUFDRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyw2QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsCBu77yM55Sf5oiQ5omA5pyJ55SxIDEgLi4uIG4g5Li66IqC54K55omA57uE5oiQ55qE5LqM5Y+J5pCc57Si5qCR44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiAzXG7ovpPlh7o6XG5bXG4gIFsxLG51bGwsMywyXSxcbiAgWzMsMixudWxsLDFdLFxuICBbMywxLG51bGwsbnVsbCwyXSxcbiAgWzIsMSwzXSxcbiAgWzEsbnVsbCwyLG51bGwsM11cbl1cbuino+mHijpcbuS7peS4iueahOi+k+WHuuWvueW6lOS7peS4iyA1IOenjeS4jeWQjOe7k+aehOeahOS6jOWPieaQnOe0ouagke+8mlxuXG4gICAxICAgICAgICAgMyAgICAgMyAgICAgIDIgICAgICAxXG4gICAgXFwgICAgICAgLyAgICAgLyAgICAgIC8gXFwgICAgICBcXFxuICAgICAzICAgICAyICAgICAxICAgICAgMSAgIDMgICAgICAyXG4gICAgLyAgICAgLyAgICAgICBcXCAgICAgICAgICAgICAgICAgXFxcbiAgIDIgICAgIDEgICAgICAgICAyICAgICAgICAgICAgICAgICAzXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy91bmlxdWUtYmluYXJ5LXNlYXJjaC10cmVlcy1paVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQgeyBUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7VHJlZU5vZGVbXX1cbiAqL1xudmFyIGdlbmVyYXRlVHJlZXMgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIGlmIChuID09PSAwKSByZXR1cm4gW107XG4gIHJldHVybiBnZW5lcmF0ZV90cmVlcygxLCBuKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZV90cmVlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFsbF90cmVlczogKFRyZWVOb2RlIHwgbnVsbClbXSA9IFtdO1xuICAgIC8vIOW9k+WHuueOsCBzdGFydCA+IGVuZCDnmoQg5oOF5Ya16KGo56S6IOi/memHjCDmsqHmnInoioLngrkg5L2G5piv5a2Q5qCR5LiK5Y+q6IO95oyCbnVsbFxuICAgIC8vIOi/meenjeaDheWGteS4iyDlj6bkuIDkuKrlrZDmoJHkuIDlrpog6I635Y+W5LqGIOWFqOmDqOeahOWJqeS9meiKgueCuXNcbiAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgIGFsbF90cmVlcy5wdXNoKG51bGwpO1xuICAgICAgcmV0dXJuIGFsbF90cmVlcztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIC8vIOmAkuW9kueUn+aIkCDlt6blrZDmoJFcbiAgICAgIGNvbnN0IGxlZnRfdHJlZXMgPSBnZW5lcmF0ZV90cmVlcyhzdGFydCwgaSAtIDEpO1xuICAgICAgLy8g6YCS5b2S55Sf5oiQ5Y+z5a2Q5qCRXG4gICAgICBjb25zdCByaWdodF90cmVlcyA9IGdlbmVyYXRlX3RyZWVzKGkgKyAxLCBlbmQpO1xuXG4gICAgICBmb3IgKGNvbnN0IGwgb2YgbGVmdF90cmVlcykge1xuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgcmlnaHRfdHJlZXMpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50X3RyZWUgPSBuZXcgVHJlZU5vZGUoaSk7XG4gICAgICAgICAgY3VycmVudF90cmVlLmxlZnQgPSBsO1xuICAgICAgICAgIGN1cnJlbnRfdHJlZS5yaWdodCA9IHI7XG4gICAgICAgICAgYWxsX3RyZWVzLnB1c2goY3VycmVudF90cmVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsX3RyZWVzO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZ2VuZXJhdGVUcmVlcygzKSxcbiAgW1xuICAgIFsxLCBudWxsLCAyLCBudWxsLCAzXSxcbiAgICBbMSwgbnVsbCwgMywgMl0sXG4gICAgWzIsIDEsIDNdLFxuICAgIFszLCAxLCBudWxsLCBudWxsLCAyXSxcbiAgICBbMywgMiwgbnVsbCwgMV0sXG4gIF0ubWFwKChwYXJhbSkgPT4gY3JlYXRlQmluYXJ5VHJlZShwYXJhbSkpXG4pO1xuIl19