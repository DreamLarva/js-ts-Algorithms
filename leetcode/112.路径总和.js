"use strict";
/*
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root === null)
        return false;
    if (root.left === null && root.right === null) {
        return sum === root.val;
    }
    else {
        return hasPathSum(root.left, sum - root.val) ||
            hasPathSum(root.right, sum - root.val);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEyLui3r+W+hOaAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTEyLui3r+W+hOaAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7O0FBSUo7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBcUIsRUFBRSxHQUFXO0lBQ3pELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQzNDLE9BQU8sR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDM0I7U0FBTTtRQUNILE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDeEMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM5QztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozlj4nmoJHlkozkuIDkuKrnm67moIflkozvvIzliKTmlq3or6XmoJHkuK3mmK/lkKblrZjlnKjmoLnoioLngrnliLDlj7blrZDoioLngrnnmoTot6/lvoTvvIzov5nmnaHot6/lvoTkuIrmiYDmnInoioLngrnlgLznm7jliqDnrYnkuo7nm67moIflkozjgIJcblxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcblxu56S65L6LOlxu57uZ5a6a5aaC5LiL5LqM5Y+J5qCR77yM5Lul5Y+K55uu5qCH5ZKMIHN1bSA9IDIy77yMXG5cbiAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgIC8gXFxcbiAgICAgICAgICAgIDQgICA4XG4gICAgICAgICAgIC8gICAvIFxcXG4gICAgICAgICAgMTEgIDEzICA0XG4gICAgICAgICAvICBcXCAgICAgIFxcXG4gICAgICAgIDcgICAgMiAgICAgIDFcbui/lOWbniB0cnVlLCDlm6DkuLrlrZjlnKjnm67moIflkozkuLogMjIg55qE5qC56IqC54K55Yiw5Y+25a2Q6IqC54K555qE6Lev5b6EIDUtPjQtPjExLT4y44CCXG4qICovXG5cbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcGFyYW0ge251bWJlcn0gc3VtXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaGFzUGF0aFN1bSA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwsIHN1bTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsICYmIHJvb3QucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHN1bSA9PT0gcm9vdC52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhhc1BhdGhTdW0ocm9vdC5sZWZ0LCBzdW0gLSByb290LnZhbCkgfHxcbiAgICAgICAgICAgIGhhc1BhdGhTdW0ocm9vdC5yaWdodCwgc3VtIC0gcm9vdC52YWwpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7fVxuIl19