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
].map(param => BinaryTree_1.createBinaryTree(param)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUu5LiN5ZCM55qE5LqM5Y+J5pCc57Si5qCRSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk1LuS4jeWQjOeahOS6jOWPieaQnOe0ouagkUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0osbURBQThEO0FBRTlEOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIsT0FBTyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVCLFNBQVMsY0FBYyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQzlDLE1BQU0sU0FBUyxHQUF3QixFQUFFLENBQUM7UUFDMUMsOENBQThDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixXQUFXO1lBQ1gsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsVUFBVTtZQUNWLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9DLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUN4QixLQUFLLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRTtvQkFDekIsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7U0FDSjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFHRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEI7SUFDSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ2xCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsNkJBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quaVtOaVsCBu77yM55Sf5oiQ5omA5pyJ55SxIDEgLi4uwqBuIOS4uuiKgueCueaJgOe7hOaIkOeahOS6jOWPieaQnOe0ouagkeOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiAzXHJcbui+k+WHujpcclxuW1xyXG7CoCBbMSxudWxsLDMsMl0sXHJcbsKgIFszLDIsbnVsbCwxXSxcclxuwqAgWzMsMSxudWxsLG51bGwsMl0sXHJcbsKgIFsyLDEsM10sXHJcbsKgIFsxLG51bGwsMixudWxsLDNdXHJcbl1cclxu6Kej6YeKOlxyXG7ku6XkuIrnmoTovpPlh7rlr7nlupTku6XkuIsgNSDnp43kuI3lkIznu5PmnoTnmoTkuozlj4nmkJzntKLmoJHvvJpcclxuXHJcbiAgIDEgICAgICAgICAzICAgICAzICAgICAgMiAgICAgIDFcclxuICAgIFxcICAgICAgIC8gICAgIC8gICAgICAvIFxcICAgICAgXFxcclxuICAgICAzICAgICAyICAgICAxICAgICAgMSAgIDMgICAgICAyXHJcbiAgICAvICAgICAvICAgICAgIFxcICAgICAgICAgICAgICAgICBcXFxyXG4gICAyICAgICAxICAgICAgICAgMiAgICAgICAgICAgICAgICAgM1xyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvdW5pcXVlLWJpbmFyeS1zZWFyY2gtdHJlZXMtaWlcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHtUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge1RyZWVOb2RlW119XHJcbiAqL1xyXG52YXIgZ2VuZXJhdGVUcmVlcyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcclxuICAgIGlmIChuID09PSAwKSByZXR1cm4gW107XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVfdHJlZXMoMSwgbik7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVfdHJlZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBhbGxfdHJlZXM6IChUcmVlTm9kZSB8IG51bGwpW10gPSBbXTtcclxuICAgICAgICAvLyDlvZPlh7rnjrAgc3RhcnQgPiBlbmQg55qEIOaDheWGteihqOekuiDov5nph4wg5rKh5pyJ6IqC54K5IOS9huaYr+WtkOagkeS4iuWPquiDveaMgm51bGxcclxuICAgICAgICAvLyDov5nnp43mg4XlhrXkuIsg5Y+m5LiA5Liq5a2Q5qCR5LiA5a6aIOiOt+WPluS6hiDlhajpg6jnmoTliankvZnoioLngrlzXHJcbiAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XHJcbiAgICAgICAgICAgIGFsbF90cmVlcy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWxsX3RyZWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIOmAkuW9kueUn+aIkCDlt6blrZDmoJFcclxuICAgICAgICAgICAgY29uc3QgbGVmdF90cmVlcyA9IGdlbmVyYXRlX3RyZWVzKHN0YXJ0LCBpIC0gMSk7XHJcbiAgICAgICAgICAgIC8vIOmAkuW9kueUn+aIkOWPs+WtkOagkVxyXG4gICAgICAgICAgICBjb25zdCByaWdodF90cmVlcyA9IGdlbmVyYXRlX3RyZWVzKGkgKyAxLCBlbmQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBsIG9mIGxlZnRfdHJlZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiByaWdodF90cmVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfdHJlZSA9IG5ldyBUcmVlTm9kZShpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3RyZWUubGVmdCA9IGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF90cmVlLnJpZ2h0ID0gcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGxfdHJlZXMucHVzaChjdXJyZW50X3RyZWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxfdHJlZXM7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgZ2VuZXJhdGVUcmVlcygzKSxcclxuICAgIFtcclxuICAgICAgICBbMSwgbnVsbCwgMiwgbnVsbCwgM10sXHJcbiAgICAgICAgWzEsIG51bGwsIDMsIDJdLFxyXG4gICAgICAgIFsyLCAxLCAzXSxcclxuICAgICAgICBbMywgMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgICAgWzMsIDIsIG51bGwsIDFdLFxyXG4gICAgXS5tYXAocGFyYW0gPT4gY3JlYXRlQmluYXJ5VHJlZShwYXJhbSkpLFxyXG4pO1xyXG4iXX0=