"use strict";
/*
编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：



在节点 c1 开始相交。



示例 1：



输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。


示例 2：



输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。


示例 3：



输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。


注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode | null}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let listNodeA = headA,
    listNodeB = headB;
  // 第一个圈 先到达trail 的 连接到 另个链表上
  // 当两个都到达 第二圈的时候 正好抹平 链表 1 和 2 的差值
  // 第二圈如果没有交点 会同时到达 trail 拿到null
  while (listNodeA !== listNodeB) {
    listNodeA = listNodeA === null ? headB : listNodeA.next;
    listNodeB = listNodeB === null ? headA : listNodeB.next;
  }
  return listNodeA;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYwLuebuOS6pOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTYwLuebuOS6pOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7QUFJSjs7OztHQUlHO0FBQ0gsSUFBSSxtQkFBbUIsR0FBRyxVQUFVLEtBQWUsRUFBRSxLQUFlO0lBQ2hFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRWxELElBQUksU0FBUyxHQUFTLEtBQUssRUFBRSxTQUFTLEdBQVMsS0FBSyxDQUFDO0lBQ3JELDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLE9BQU8sU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUM1QixTQUFTLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3hELFNBQVMsR0FBRyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDM0Q7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUdyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57yW5YaZ5LiA5Liq56iL5bqP77yM5om+5Yiw5Lik5Liq5Y2V6ZO+6KGo55u45Lqk55qE6LW35aeL6IqC54K544CCXG5cbuWmguS4i+mdoueahOS4pOS4qumTvuihqO+8mlxuXG5cblxu5Zyo6IqC54K5IGMxIOW8gOWni+ebuOS6pOOAglxuXG5cblxu56S65L6LIDHvvJpcblxuXG5cbui+k+WFpe+8mmludGVyc2VjdFZhbCA9IDgsIGxpc3RBID0gWzQsMSw4LDQsNV0sIGxpc3RCID0gWzUsMCwxLDgsNCw1XSwgc2tpcEEgPSAyLCBza2lwQiA9IDNcbui+k+WHuu+8mlJlZmVyZW5jZSBvZiB0aGUgbm9kZSB3aXRoIHZhbHVlID0gOFxu6L6T5YWl6Kej6YeK77ya55u45Lqk6IqC54K555qE5YC85Li6IDgg77yI5rOo5oSP77yM5aaC5p6c5Lik5Liq5YiX6KGo55u45Lqk5YiZ5LiN6IO95Li6IDDvvInjgILku47lkIToh6rnmoTooajlpLTlvIDlp4vnrpfotbfvvIzpk77ooaggQSDkuLogWzQsMSw4LDQsNV3vvIzpk77ooaggQiDkuLogWzUsMCwxLDgsNCw1XeOAguWcqCBBIOS4re+8jOebuOS6pOiKgueCueWJjeaciSAyIOS4quiKgueCue+8m+WcqCBCIOS4re+8jOebuOS6pOiKgueCueWJjeaciSAzIOS4quiKgueCueOAglxuXG5cbuekuuS+iyAy77yaXG5cblxuXG7ovpPlhaXvvJppbnRlcnNlY3RWYWwgPSAyLCBsaXN0QSA9IFswLDksMSwyLDRdLCBsaXN0QiA9IFszLDIsNF0sIHNraXBBID0gMywgc2tpcEIgPSAxXG7ovpPlh7rvvJpSZWZlcmVuY2Ugb2YgdGhlIG5vZGUgd2l0aCB2YWx1ZSA9IDJcbui+k+WFpeino+mHiu+8muebuOS6pOiKgueCueeahOWAvOS4uiAyIO+8iOazqOaEj++8jOWmguaenOS4pOS4quWIl+ihqOebuOS6pOWImeS4jeiDveS4uiAw77yJ44CC5LuO5ZCE6Ieq55qE6KGo5aS05byA5aeL566X6LW377yM6ZO+6KGoIEEg5Li6IFswLDksMSwyLDRd77yM6ZO+6KGoIEIg5Li6IFszLDIsNF3jgILlnKggQSDkuK3vvIznm7jkuqToioLngrnliY3mnIkgMyDkuKroioLngrnvvJvlnKggQiDkuK3vvIznm7jkuqToioLngrnliY3mnIkgMSDkuKroioLngrnjgIJcblxuXG7npLrkvosgM++8mlxuXG5cblxu6L6T5YWl77yaaW50ZXJzZWN0VmFsID0gMCwgbGlzdEEgPSBbMiw2LDRdLCBsaXN0QiA9IFsxLDVdLCBza2lwQSA9IDMsIHNraXBCID0gMlxu6L6T5Ye677yabnVsbFxu6L6T5YWl6Kej6YeK77ya5LuO5ZCE6Ieq55qE6KGo5aS05byA5aeL566X6LW377yM6ZO+6KGoIEEg5Li6IFsyLDYsNF3vvIzpk77ooaggQiDkuLogWzEsNV3jgILnlLHkuo7ov5nkuKTkuKrpk77ooajkuI3nm7jkuqTvvIzmiYDku6UgaW50ZXJzZWN0VmFsIOW/hemhu+S4uiAw77yM6ICMIHNraXBBIOWSjCBza2lwQiDlj6/ku6XmmK/ku7vmhI/lgLzjgIJcbuino+mHiu+8mui/meS4pOS4qumTvuihqOS4jeebuOS6pO+8jOWboOatpOi/lOWbniBudWxs44CCXG5cblxu5rOo5oSP77yaXG5cbuWmguaenOS4pOS4qumTvuihqOayoeacieS6pOeCue+8jOi/lOWbniBudWxsLlxu5Zyo6L+U5Zue57uT5p6c5ZCO77yM5Lik5Liq6ZO+6KGo5LuN6aG75L+d5oyB5Y6f5pyJ55qE57uT5p6E44CCXG7lj6/lgYflrprmlbTkuKrpk77ooajnu5PmnoTkuK3msqHmnInlvqrnjq/jgIJcbueoi+W6j+WwvemHj+a7oei2syBPKG4pIOaXtumXtOWkjeadguW6pu+8jOS4lOS7heeUqCBPKDEpIOWGheWtmOOAglxuKiAqL1xuXG5pbXBvcnQge0xpc3ROb2RlfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZEFcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRCXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZSB8IG51bGx9XG4gKi9cbnZhciBnZXRJbnRlcnNlY3Rpb25Ob2RlID0gZnVuY3Rpb24gKGhlYWRBOiBMaXN0Tm9kZSwgaGVhZEI6IExpc3ROb2RlKSB7XG4gICAgaWYgKGhlYWRBID09PSBudWxsIHx8IGhlYWRCID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICB0eXBlIE5vZGUgPSBMaXN0Tm9kZSB8IG51bGw7XG4gICAgbGV0IGxpc3ROb2RlQTogTm9kZSA9IGhlYWRBLCBsaXN0Tm9kZUI6IE5vZGUgPSBoZWFkQjtcbiAgICAvLyDnrKzkuIDkuKrlnIgg5YWI5Yiw6L6+dHJhaWwg55qEIOi/nuaOpeWIsCDlj6bkuKrpk77ooajkuIpcbiAgICAvLyDlvZPkuKTkuKrpg73liLDovr4g56ys5LqM5ZyI55qE5pe25YCZIOato+WlveaKueW5syDpk77ooaggMSDlkowgMiDnmoTlt67lgLxcbiAgICAvLyDnrKzkuozlnIjlpoLmnpzmsqHmnInkuqTngrkg5Lya5ZCM5pe25Yiw6L6+IHRyYWlsIOaLv+WIsG51bGxcbiAgICB3aGlsZSAobGlzdE5vZGVBICE9PSBsaXN0Tm9kZUIpIHtcbiAgICAgICAgbGlzdE5vZGVBID0gbGlzdE5vZGVBID09PSBudWxsID8gaGVhZEIgOiBsaXN0Tm9kZUEubmV4dDtcbiAgICAgICAgbGlzdE5vZGVCID0gbGlzdE5vZGVCID09PSBudWxsID8gaGVhZEEgOiBsaXN0Tm9kZUIubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdE5vZGVBO1xuXG5cbn07XG5cbmV4cG9ydCB7fVxuIl19
