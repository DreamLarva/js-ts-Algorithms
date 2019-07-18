"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
    if (n === 0)
        return [];
    return generate_trees(1, n);
    function generate_trees(start, end) {
        const all_trees = [];
        // 当出现 start > end 的 情况表示 这里 没有节点 但是子树上只能挂null
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
                    const current_tree = new TreeNode(i);
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
].map(param => BinaryTree_1.createBinaryTree(param)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUu5LiN5ZCM55qE5LqM5Y+J5pCc57Si5qCRSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk1LuS4jeWQjOeahOS6jOWPieaQnOe0ouagkUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0osbURBQThEO0FBRTlEOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIsT0FBTyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVCLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQzlDLE1BQU0sU0FBUyxHQUF3QixFQUFFLENBQUM7UUFDMUMsOENBQThDO1FBQzlDLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLFdBQVc7WUFDWCxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxVQUFVO1lBQ1YsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFL0MsS0FBSyxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQ3hCLEtBQUssTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFO29CQUN6QixNQUFNLFlBQVksR0FBRyxJQUFJLHFCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtTQUNKO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNoQjtJQUNJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDbEIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyw2QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsCBu77yM55Sf5oiQ5omA5pyJ55SxIDEgLi4uwqBuIOS4uuiKgueCueaJgOe7hOaIkOeahOS6jOWPieaQnOe0ouagkeOAglxuXG7npLrkvos6XG5cbui+k+WFpTogM1xu6L6T5Ye6OlxuW1xuwqAgWzEsbnVsbCwzLDJdLFxuwqAgWzMsMixudWxsLDFdLFxuwqAgWzMsMSxudWxsLG51bGwsMl0sXG7CoCBbMiwxLDNdLFxuwqAgWzEsbnVsbCwyLG51bGwsM11cbl1cbuino+mHijpcbuS7peS4iueahOi+k+WHuuWvueW6lOS7peS4iyA1IOenjeS4jeWQjOe7k+aehOeahOS6jOWPieaQnOe0ouagke+8mlxuXG4gICAxICAgICAgICAgMyAgICAgMyAgICAgIDIgICAgICAxXG4gICAgXFwgICAgICAgLyAgICAgLyAgICAgIC8gXFwgICAgICBcXFxuICAgICAzICAgICAyICAgICAxICAgICAgMSAgIDMgICAgICAyXG4gICAgLyAgICAgLyAgICAgICBcXCAgICAgICAgICAgICAgICAgXFxcbiAgIDIgICAgIDEgICAgICAgICAyICAgICAgICAgICAgICAgICAzXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy91bmlxdWUtYmluYXJ5LXNlYXJjaC10cmVlcy1paVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQge1RyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge1RyZWVOb2RlW119XG4gKi9cbnZhciBnZW5lcmF0ZVRyZWVzID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuICAgIGlmIChuID09PSAwKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGdlbmVyYXRlX3RyZWVzKDEsIG4pO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVfdHJlZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYWxsX3RyZWVzOiAoVHJlZU5vZGUgfCBudWxsKVtdID0gW107XG4gICAgICAgIC8vIOW9k+WHuueOsCBzdGFydCA+IGVuZCDnmoQg5oOF5Ya16KGo56S6IOi/memHjCDmsqHmnInoioLngrkg5L2G5piv5a2Q5qCR5LiK5Y+q6IO95oyCbnVsbFxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIGFsbF90cmVlcy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIGFsbF90cmVlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgLy8g6YCS5b2S55Sf5oiQIOW3puWtkOagkVxuICAgICAgICAgICAgY29uc3QgbGVmdF90cmVlcyA9IGdlbmVyYXRlX3RyZWVzKHN0YXJ0LCBpIC0gMSk7XG4gICAgICAgICAgICAvLyDpgJLlvZLnlJ/miJDlj7PlrZDmoJFcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0X3RyZWVzID0gZ2VuZXJhdGVfdHJlZXMoaSArIDEsIGVuZCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbCBvZiBsZWZ0X3RyZWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHJpZ2h0X3RyZWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfdHJlZSA9IG5ldyBUcmVlTm9kZShpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF90cmVlLmxlZnQgPSBsO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RyZWUucmlnaHQgPSByO1xuICAgICAgICAgICAgICAgICAgICBhbGxfdHJlZXMucHVzaChjdXJyZW50X3RyZWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsX3RyZWVzO1xuICAgIH1cbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZ2VuZXJhdGVUcmVlcygzKSxcbiAgICBbXG4gICAgICAgIFsxLCBudWxsLCAyLCBudWxsLCAzXSxcbiAgICAgICAgWzEsIG51bGwsIDMsIDJdLFxuICAgICAgICBbMiwgMSwgM10sXG4gICAgICAgIFszLCAxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgICAgWzMsIDIsIG51bGwsIDFdLFxuICAgIF0ubWFwKHBhcmFtID0+IGNyZWF0ZUJpbmFyeVRyZWUocGFyYW0pKSxcbik7XG4iXX0=
