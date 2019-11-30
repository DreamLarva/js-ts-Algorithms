"use strict";
/*
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null)
        return 0;
    const { left, right } = root;
    if (!left && !right) {
        return 1;
    }
    else if (left && !right) {
        return minDepth(root.left) + 1;
    }
    else if (!left && right) {
        return minDepth(root.right) + 1;
    }
    else {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTExLuS6jOWPieagkeeahOacgOWwj+a3seW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTExLuS6jOWPieagkeeahOacgOWwj+a3seW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUtKOzs7R0FHRztBQUVILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBcUI7SUFDMUMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDakIsT0FBTyxDQUFDLENBQUM7S0FDWjtTQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7U0FBTSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDdkIsR0FBRyxDQUFDLENBQUM7S0FDVDtBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzmib7lh7rlhbbmnIDlsI/mt7HluqbjgIJcblxu5pyA5bCP5rex5bqm5piv5LuO5qC56IqC54K55Yiw5pyA6L+R5Y+25a2Q6IqC54K555qE5pyA55+t6Lev5b6E5LiK55qE6IqC54K55pWw6YeP44CCXG5cbuivtOaYjjog5Y+25a2Q6IqC54K55piv5oyH5rKh5pyJ5a2Q6IqC54K555qE6IqC54K544CCXG5cbuekuuS+izpcblxu57uZ5a6a5LqM5Y+J5qCRIFszLDksMjAsbnVsbCxudWxsLDE1LDddLFxuXG4gICAgM1xuICAgLyBcXFxuICA5ICAyMFxuICAgIC8gIFxcXG4gICAxNSAgIDdcbui/lOWbnuWug+eahOacgOWwj+a3seW6piAgMi5cbiogKi9cblxuXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbnZhciBtaW5EZXB0aCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwpOiBudW1iZXIge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBjb25zdCB7bGVmdCwgcmlnaHR9ID0gcm9vdDtcbiAgICBpZiAoIWxlZnQgJiYgIXJpZ2h0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAobGVmdCAmJiAhcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIG1pbkRlcHRoKHJvb3QubGVmdCkgKyAxO1xuICAgIH0gZWxzZSBpZiAoIWxlZnQgJiYgcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIG1pbkRlcHRoKHJvb3QucmlnaHQpICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgICAgICBtaW5EZXB0aChyb290LmxlZnQpLFxuICAgICAgICAgICAgbWluRGVwdGgocm9vdC5yaWdodCksXG4gICAgICAgICkgKyAxO1xuICAgIH1cbn07XG5leHBvcnQge31cbiJdfQ==