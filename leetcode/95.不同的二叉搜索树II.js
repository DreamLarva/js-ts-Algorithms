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
].map((param) => (0, BinaryTree_1.createBinaryTree)(param)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUu5LiN5ZCM55qE5LqM5Y+J5pCc57Si5qCRSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk1LuS4jeWQjOeahOS6jOWPieaQnOe0ouagkUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIsT0FBTyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVCLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ2hELE1BQU0sU0FBUyxHQUF3QixFQUFFLENBQUM7UUFDMUMsOENBQThDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxXQUFXO1lBQ1gsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsVUFBVTtZQUNWLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9DLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUMxQixLQUFLLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRTtvQkFDM0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEI7SUFDRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFBLDZCQUFnQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pW05pWwIG7vvIznlJ/miJDmiYDmnInnlLEgMSAuLi4gbiDkuLroioLngrnmiYDnu4TmiJDnmoTkuozlj4nmkJzntKLmoJHjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IDNcbui+k+WHujpcbltcbiAgWzEsbnVsbCwzLDJdLFxuICBbMywyLG51bGwsMV0sXG4gIFszLDEsbnVsbCxudWxsLDJdLFxuICBbMiwxLDNdLFxuICBbMSxudWxsLDIsbnVsbCwzXVxuXVxu6Kej6YeKOlxu5Lul5LiK55qE6L6T5Ye65a+55bqU5Lul5LiLIDUg56eN5LiN5ZCM57uT5p6E55qE5LqM5Y+J5pCc57Si5qCR77yaXG5cbiAgIDEgICAgICAgICAzICAgICAzICAgICAgMiAgICAgIDFcbiAgICBcXCAgICAgICAvICAgICAvICAgICAgLyBcXCAgICAgIFxcXG4gICAgIDMgICAgIDIgICAgIDEgICAgICAxICAgMyAgICAgIDJcbiAgICAvICAgICAvICAgICAgIFxcICAgICAgICAgICAgICAgICBcXFxuICAgMiAgICAgMSAgICAgICAgIDIgICAgICAgICAgICAgICAgIDNcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3VuaXF1ZS1iaW5hcnktc2VhcmNoLXRyZWVzLWlpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCB7IFRyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtUcmVlTm9kZVtdfVxuICovXG52YXIgZ2VuZXJhdGVUcmVlcyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgaWYgKG4gPT09IDApIHJldHVybiBbXTtcbiAgcmV0dXJuIGdlbmVyYXRlX3RyZWVzKDEsIG4pO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlX3RyZWVzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWxsX3RyZWVzOiAoVHJlZU5vZGUgfCBudWxsKVtdID0gW107XG4gICAgLy8g5b2T5Ye6546wIHN0YXJ0ID4gZW5kIOeahCDmg4XlhrXooajnpLog6L+Z6YeMIOayoeacieiKgueCuSDkvYbmmK/lrZDmoJHkuIrlj6rog73mjIJudWxsXG4gICAgLy8g6L+Z56eN5oOF5Ya15LiLIOWPpuS4gOS4quWtkOagkeS4gOWumiDojrflj5bkuoYg5YWo6YOo55qE5Ymp5L2Z6IqC54K5c1xuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgYWxsX3RyZWVzLnB1c2gobnVsbCk7XG4gICAgICByZXR1cm4gYWxsX3RyZWVzO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgLy8g6YCS5b2S55Sf5oiQIOW3puWtkOagkVxuICAgICAgY29uc3QgbGVmdF90cmVlcyA9IGdlbmVyYXRlX3RyZWVzKHN0YXJ0LCBpIC0gMSk7XG4gICAgICAvLyDpgJLlvZLnlJ/miJDlj7PlrZDmoJFcbiAgICAgIGNvbnN0IHJpZ2h0X3RyZWVzID0gZ2VuZXJhdGVfdHJlZXMoaSArIDEsIGVuZCk7XG5cbiAgICAgIGZvciAoY29uc3QgbCBvZiBsZWZ0X3RyZWVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgciBvZiByaWdodF90cmVlcykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRfdHJlZSA9IG5ldyBUcmVlTm9kZShpKTtcbiAgICAgICAgICBjdXJyZW50X3RyZWUubGVmdCA9IGw7XG4gICAgICAgICAgY3VycmVudF90cmVlLnJpZ2h0ID0gcjtcbiAgICAgICAgICBhbGxfdHJlZXMucHVzaChjdXJyZW50X3RyZWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbGxfdHJlZXM7XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBnZW5lcmF0ZVRyZWVzKDMpLFxuICBbXG4gICAgWzEsIG51bGwsIDIsIG51bGwsIDNdLFxuICAgIFsxLCBudWxsLCAzLCAyXSxcbiAgICBbMiwgMSwgM10sXG4gICAgWzMsIDEsIG51bGwsIG51bGwsIDJdLFxuICAgIFszLCAyLCBudWxsLCAxXSxcbiAgXS5tYXAoKHBhcmFtKSA9PiBjcmVhdGVCaW5hcnlUcmVlKHBhcmFtKSlcbik7XG4iXX0=