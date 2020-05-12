"use strict";
/*
[101] 对称二叉树

https://leetcode-cn.com/problems/symmetric-tree/description/

Tags: algorithms bloomberg linkedin microsoft breadth-first-search depth-first-search tree

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (45.59%)
* Total Accepted: 25.5K
* Total Submissions: 56K
* Testcase Example: '[1,2,2,3,4,4,3]'

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

1
/ \
2 2
/ \ / \
3 4 4 3


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

1
/ \
2 2
\ \
3 3


说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

*/
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) {
    return true;
  }
  return recursion(root.left, root.right);
};
function recursion(left, right) {
  if (left == null || right == null) {
    return left == null && right == null;
  }
  return (
    left.val === right.val &&
    recursion(left.left, right.right) &&
    recursion(left.right, right.left)
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLuWvueensOS6jOWPieagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAxLuWvueensOS6jOWPieagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVDRTs7QUFFRixNQUFNLFFBQVE7SUFLVixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUE2QjtJQUNyRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsSUFBNkIsRUFBRSxLQUE4QjtJQUM1RSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUMvQixPQUFPLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQztLQUN4QztJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRztRQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcblsxMDFdIOWvueensOS6jOWPieagkVxuXG5odHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zeW1tZXRyaWMtdHJlZS9kZXNjcmlwdGlvbi9cblxuVGFnczogYWxnb3JpdGhtcyBibG9vbWJlcmcgbGlua2VkaW4gbWljcm9zb2Z0IGJyZWFkdGgtZmlyc3Qtc2VhcmNoIGRlcHRoLWZpcnN0LXNlYXJjaCB0cmVlXG5cbkxhbmdzOiBjIGNwcCBjc2hhcnAgZ29sYW5nIGphdmEgamF2YXNjcmlwdCBrb3RsaW4gcGhwIHB5dGhvbiBweXRob24zIHJ1YnkgcnVzdCBzY2FsYSBzd2lmdFxuXG4qIGFsZ29yaXRobXNcbiogRWFzeSAoNDUuNTklKVxuKiBUb3RhbCBBY2NlcHRlZDogMjUuNUtcbiogVG90YWwgU3VibWlzc2lvbnM6IDU2S1xuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnWzEsMiwyLDMsNCw0LDNdJ1xuXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzmo4Dmn6XlroPmmK/lkKbmmK/plZzlg4/lr7nnp7DnmoTjgIJcblxu5L6L5aaC77yM5LqM5Y+J5qCRIFsxLDIsMiwzLDQsNCwzXSDmmK/lr7nnp7DnmoTjgIJcblxuMVxuLyBcXFxuMiAyXG4vIFxcIC8gXFxcbjMgNCA0IDNcblxuXG7kvYbmmK/kuIvpnaLov5nkuKogWzEsMiwyLG51bGwsMyxudWxsLDNdIOWImeS4jeaYr+mVnOWDj+WvueensOeahDpcblxuMVxuLyBcXFxuMiAyXG5cXCBcXFxuMyAzXG5cblxu6K+05piOOlxuXG7lpoLmnpzkvaDlj6/ku6Xov5DnlKjpgJLlvZLlkozov63ku6PkuKTnp43mlrnms5Xop6PlhrPov5nkuKrpl67popjvvIzkvJrlvojliqDliIbjgIJcblxuKi9cblxuY2xhc3MgVHJlZU5vZGU8VD4ge1xuICAgIHZhbDogVDtcbiAgICBsZWZ0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuICAgIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodmFsOiBUKSB7XG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNTeW1tZXRyaWMgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpIHtcbiAgICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdXJzaW9uKHJvb3QubGVmdCwgcm9vdC5yaWdodCk7XG59O1xuXG5mdW5jdGlvbiByZWN1cnNpb24obGVmdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIHJpZ2h0OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGlmIChsZWZ0ID09IG51bGwgfHwgcmlnaHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0LnZhbCA9PT0gcmlnaHQudmFsICYmXG4gICAgICAgIHJlY3Vyc2lvbihsZWZ0LmxlZnQsIHJpZ2h0LnJpZ2h0KSAmJlxuICAgICAgICByZWN1cnNpb24obGVmdC5yaWdodCwgcmlnaHQubGVmdCk7XG59XG5cblxuXG5leHBvcnQge307XG4iXX0=
