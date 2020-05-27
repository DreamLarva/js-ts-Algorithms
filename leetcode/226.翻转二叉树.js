"use strict";
/*
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null)
        return root;
    const { left, right } = root;
    if (left || root) {
        root.left = invertTree(right);
        root.right = invertTree(left);
    }
    return root;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI2Lue/u+i9rOS6jOWPieagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI2Lue/u+i9rOS6jOWPieagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOztBQUlKOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBcUI7SUFDOUMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQy9CLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzdCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57+76L2s5LiA5qO15LqM5Y+J5qCR44CCXHJcblxyXG7npLrkvovvvJpcclxuXHJcbui+k+WFpe+8mlxyXG5cclxuICAgICA0XHJcbiAgIC8gICBcXFxyXG4gIDIgICAgIDdcclxuIC8gXFwgICAvIFxcXHJcbjEgICAzIDYgICA5XHJcbui+k+WHuu+8mlxyXG5cclxuICAgICA0XHJcbiAgIC8gICBcXFxyXG4gIDcgICAgIDJcclxuIC8gXFwgICAvIFxcXHJcbjkgICA2IDMgICAxXHJcbuWkh+azqDpcclxu6L+Z5Liq6Zeu6aKY5piv5Y+X5YiwIE1heCBIb3dlbGwg55qEIOWOn+mXrumimCDlkK/lj5HnmoQg77yaXHJcblxyXG7osLfmrYzvvJrmiJHku6w5MO+8heeahOW3peeoi+W4iOS9v+eUqOaCqOe8luWGmeeahOi9r+S7tihIb21lYnJldynvvIzkvYbmmK/mgqjljbTml6Dms5XlnKjpnaLor5Xml7blnKjnmb3mnb/kuIrlhpnlh7rnv7vovazkuozlj4nmoJHov5npgZPpopjvvIzov5nlpKrns5/ns5XkuobjgIJcclxuKiAqL1xyXG5cclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxyXG4gKiBAcmV0dXJuIHtUcmVlTm9kZX1cclxuICovXHJcbnZhciBpbnZlcnRUcmVlID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCkge1xyXG4gIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gcm9vdDtcclxuICBjb25zdCB7IGxlZnQsIHJpZ2h0IH0gPSByb290O1xyXG4gIGlmIChsZWZ0IHx8IHJvb3QpIHtcclxuICAgIHJvb3QubGVmdCA9IGludmVydFRyZWUocmlnaHQpO1xyXG4gICAgcm9vdC5yaWdodCA9IGludmVydFRyZWUobGVmdCk7XHJcbiAgfVxyXG4gIHJldHVybiByb290O1xyXG59O1xyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=