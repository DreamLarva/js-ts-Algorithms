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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTExLuS6jOWPieagkeeahOacgOWwj+a3seW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTExLuS6jOWPieagkeeahOacgOWwj+a3seW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUlKOzs7R0FHRztBQUVILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBcUI7SUFDNUMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzdCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDbkIsT0FBTyxDQUFDLENBQUM7S0FDVjtTQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7U0FBTSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pDO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hFO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOaJvuWHuuWFtuacgOWwj+a3seW6puOAglxuXG7mnIDlsI/mt7HluqbmmK/ku47moLnoioLngrnliLDmnIDov5Hlj7blrZDoioLngrnnmoTmnIDnn63ot6/lvoTkuIrnmoToioLngrnmlbDph4/jgIJcblxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcblxu56S65L6LOlxuXG7nu5nlrprkuozlj4nmoJEgWzMsOSwyMCxudWxsLG51bGwsMTUsN10sXG5cbiAgICAzXG4gICAvIFxcXG4gIDkgIDIwXG4gICAgLyAgXFxcbiAgIDE1ICAgN1xu6L+U5Zue5a6D55qE5pyA5bCP5rex5bqmICAyLlxuKiAqL1xuXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxudmFyIG1pbkRlcHRoID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCk6IG51bWJlciB7XG4gIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gMDtcbiAgY29uc3QgeyBsZWZ0LCByaWdodCB9ID0gcm9vdDtcbiAgaWYgKCFsZWZ0ICYmICFyaWdodCkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGxlZnQgJiYgIXJpZ2h0KSB7XG4gICAgcmV0dXJuIG1pbkRlcHRoKHJvb3QubGVmdCkgKyAxO1xuICB9IGVsc2UgaWYgKCFsZWZ0ICYmIHJpZ2h0KSB7XG4gICAgcmV0dXJuIG1pbkRlcHRoKHJvb3QucmlnaHQpICsgMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5taW4obWluRGVwdGgocm9vdC5sZWZ0KSwgbWluRGVwdGgocm9vdC5yaWdodCkpICsgMTtcbiAgfVxufTtcbmV4cG9ydCB7fTtcbiJdfQ==