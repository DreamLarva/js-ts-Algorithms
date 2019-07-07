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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTExLuS6jOWPieagkeeahOacgOWwj+a3seW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTExLuS6jOWPieagkeeahOacgOWwj+a3seW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUtKOzs7R0FHRztBQUVILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBcUI7SUFDMUMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDakIsT0FBTyxDQUFDLENBQUM7S0FDWjtTQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7U0FBTSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDdkIsR0FBRyxDQUFDLENBQUM7S0FDVDtBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOWPieagke+8jOaJvuWHuuWFtuacgOWwj+a3seW6puOAglxyXG5cclxu5pyA5bCP5rex5bqm5piv5LuO5qC56IqC54K55Yiw5pyA6L+R5Y+25a2Q6IqC54K555qE5pyA55+t6Lev5b6E5LiK55qE6IqC54K55pWw6YeP44CCXHJcblxyXG7or7TmmI46IOWPtuWtkOiKgueCueaYr+aMh+ayoeacieWtkOiKgueCueeahOiKgueCueOAglxyXG5cclxu56S65L6LOlxyXG5cclxu57uZ5a6a5LqM5Y+J5qCRIFszLDksMjAsbnVsbCxudWxsLDE1LDddLFxyXG5cclxuICAgIDNcclxuICAgLyBcXFxyXG4gIDkgIDIwXHJcbiAgICAvICBcXFxyXG4gICAxNSAgIDdcclxu6L+U5Zue5a6D55qE5pyA5bCP5rex5bqmICAyLlxyXG4qICovXHJcblxyXG5cclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxuXHJcbnZhciBtaW5EZXB0aCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiAwO1xyXG4gICAgY29uc3Qge2xlZnQsIHJpZ2h0fSA9IHJvb3Q7XHJcbiAgICBpZiAoIWxlZnQgJiYgIXJpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2UgaWYgKGxlZnQgJiYgIXJpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbkRlcHRoKHJvb3QubGVmdCkgKyAxO1xyXG4gICAgfSBlbHNlIGlmICghbGVmdCAmJiByaWdodCkge1xyXG4gICAgICAgIHJldHVybiBtaW5EZXB0aChyb290LnJpZ2h0KSArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihcclxuICAgICAgICAgICAgbWluRGVwdGgocm9vdC5sZWZ0KSxcclxuICAgICAgICAgICAgbWluRGVwdGgocm9vdC5yaWdodCksXHJcbiAgICAgICAgKSArIDE7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7fVxyXG4iXX0=