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
    if (headA === null || headB === null)
        return null;
    let listNodeA = headA, listNodeB = headB;
    // 第一个圈 先到达trail 的 连接到 另个链表上
    // 当两个都到达 第二圈的时候 正好抹平 链表 1 和 2 的差值
    // 第二圈如果没有交点 会同时到达 trail 拿到null
    while (listNodeA !== listNodeB) {
        listNodeA = listNodeA === null ? headB : listNodeA.next;
        listNodeB = listNodeB === null ? headA : listNodeB.next;
    }
    return listNodeA;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYwLuebuOS6pOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTYwLuebuOS6pOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7QUFJSjs7OztHQUlHO0FBQ0gsSUFBSSxtQkFBbUIsR0FBRyxVQUFVLEtBQWUsRUFBRSxLQUFlO0lBQ2hFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRWxELElBQUksU0FBUyxHQUFTLEtBQUssRUFBRSxTQUFTLEdBQVMsS0FBSyxDQUFDO0lBQ3JELDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLE9BQU8sU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUM1QixTQUFTLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3hELFNBQVMsR0FBRyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDM0Q7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUdyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nvJblhpnkuIDkuKrnqIvluo/vvIzmib7liLDkuKTkuKrljZXpk77ooajnm7jkuqTnmoTotbflp4voioLngrnjgIJcclxuXHJcbuWmguS4i+mdoueahOS4pOS4qumTvuihqO+8mlxyXG5cclxuXHJcblxyXG7lnKjoioLngrkgYzEg5byA5aeL55u45Lqk44CCXHJcblxyXG5cclxuXHJcbuekuuS+iyAx77yaXHJcblxyXG5cclxuXHJcbui+k+WFpe+8mmludGVyc2VjdFZhbCA9IDgsIGxpc3RBID0gWzQsMSw4LDQsNV0sIGxpc3RCID0gWzUsMCwxLDgsNCw1XSwgc2tpcEEgPSAyLCBza2lwQiA9IDNcclxu6L6T5Ye677yaUmVmZXJlbmNlIG9mIHRoZSBub2RlIHdpdGggdmFsdWUgPSA4XHJcbui+k+WFpeino+mHiu+8muebuOS6pOiKgueCueeahOWAvOS4uiA4IO+8iOazqOaEj++8jOWmguaenOS4pOS4quWIl+ihqOebuOS6pOWImeS4jeiDveS4uiAw77yJ44CC5LuO5ZCE6Ieq55qE6KGo5aS05byA5aeL566X6LW377yM6ZO+6KGoIEEg5Li6IFs0LDEsOCw0LDVd77yM6ZO+6KGoIEIg5Li6IFs1LDAsMSw4LDQsNV3jgILlnKggQSDkuK3vvIznm7jkuqToioLngrnliY3mnIkgMiDkuKroioLngrnvvJvlnKggQiDkuK3vvIznm7jkuqToioLngrnliY3mnIkgMyDkuKroioLngrnjgIJcclxuXHJcblxyXG7npLrkvosgMu+8mlxyXG5cclxuXHJcblxyXG7ovpPlhaXvvJppbnRlcnNlY3RWYWwgPSAyLCBsaXN0QSA9IFswLDksMSwyLDRdLCBsaXN0QiA9IFszLDIsNF0sIHNraXBBID0gMywgc2tpcEIgPSAxXHJcbui+k+WHuu+8mlJlZmVyZW5jZSBvZiB0aGUgbm9kZSB3aXRoIHZhbHVlID0gMlxyXG7ovpPlhaXop6Pph4rvvJrnm7jkuqToioLngrnnmoTlgLzkuLogMiDvvIjms6jmhI/vvIzlpoLmnpzkuKTkuKrliJfooajnm7jkuqTliJnkuI3og73kuLogMO+8ieOAguS7juWQhOiHqueahOihqOWktOW8gOWni+eul+i1t++8jOmTvuihqCBBIOS4uiBbMCw5LDEsMiw0Xe+8jOmTvuihqCBCIOS4uiBbMywyLDRd44CC5ZyoIEEg5Lit77yM55u45Lqk6IqC54K55YmN5pyJIDMg5Liq6IqC54K577yb5ZyoIEIg5Lit77yM55u45Lqk6IqC54K55YmN5pyJIDEg5Liq6IqC54K544CCXHJcblxyXG5cclxu56S65L6LIDPvvJpcclxuXHJcblxyXG5cclxu6L6T5YWl77yaaW50ZXJzZWN0VmFsID0gMCwgbGlzdEEgPSBbMiw2LDRdLCBsaXN0QiA9IFsxLDVdLCBza2lwQSA9IDMsIHNraXBCID0gMlxyXG7ovpPlh7rvvJpudWxsXHJcbui+k+WFpeino+mHiu+8muS7juWQhOiHqueahOihqOWktOW8gOWni+eul+i1t++8jOmTvuihqCBBIOS4uiBbMiw2LDRd77yM6ZO+6KGoIEIg5Li6IFsxLDVd44CC55Sx5LqO6L+Z5Lik5Liq6ZO+6KGo5LiN55u45Lqk77yM5omA5LulIGludGVyc2VjdFZhbCDlv4XpobvkuLogMO+8jOiAjCBza2lwQSDlkowgc2tpcEIg5Y+v5Lul5piv5Lu75oSP5YC844CCXHJcbuino+mHiu+8mui/meS4pOS4qumTvuihqOS4jeebuOS6pO+8jOWboOatpOi/lOWbniBudWxs44CCXHJcblxyXG5cclxu5rOo5oSP77yaXHJcblxyXG7lpoLmnpzkuKTkuKrpk77ooajmsqHmnInkuqTngrnvvIzov5Tlm54gbnVsbC5cclxu5Zyo6L+U5Zue57uT5p6c5ZCO77yM5Lik5Liq6ZO+6KGo5LuN6aG75L+d5oyB5Y6f5pyJ55qE57uT5p6E44CCXHJcbuWPr+WBh+WumuaVtOS4qumTvuihqOe7k+aehOS4reayoeacieW+queOr+OAglxyXG7nqIvluo/lsL3ph4/mu6HotrMgTyhuKSDml7bpl7TlpI3mnYLluqbvvIzkuJTku4XnlKggTygxKSDlhoXlrZjjgIJcclxuKiAqL1xyXG5cclxuaW1wb3J0IHtMaXN0Tm9kZX0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRBXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRCXHJcbiAqIEByZXR1cm4ge0xpc3ROb2RlIHwgbnVsbH1cclxuICovXHJcbnZhciBnZXRJbnRlcnNlY3Rpb25Ob2RlID0gZnVuY3Rpb24gKGhlYWRBOiBMaXN0Tm9kZSwgaGVhZEI6IExpc3ROb2RlKSB7XHJcbiAgICBpZiAoaGVhZEEgPT09IG51bGwgfHwgaGVhZEIgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgdHlwZSBOb2RlID0gTGlzdE5vZGUgfCBudWxsO1xyXG4gICAgbGV0IGxpc3ROb2RlQTogTm9kZSA9IGhlYWRBLCBsaXN0Tm9kZUI6IE5vZGUgPSBoZWFkQjtcclxuICAgIC8vIOesrOS4gOS4quWciCDlhYjliLDovr50cmFpbCDnmoQg6L+e5o6l5YiwIOWPpuS4qumTvuihqOS4ilxyXG4gICAgLy8g5b2T5Lik5Liq6YO95Yiw6L6+IOesrOS6jOWciOeahOaXtuWAmSDmraPlpb3mirnlubMg6ZO+6KGoIDEg5ZKMIDIg55qE5beu5YC8XHJcbiAgICAvLyDnrKzkuozlnIjlpoLmnpzmsqHmnInkuqTngrkg5Lya5ZCM5pe25Yiw6L6+IHRyYWlsIOaLv+WIsG51bGxcclxuICAgIHdoaWxlIChsaXN0Tm9kZUEgIT09IGxpc3ROb2RlQikge1xyXG4gICAgICAgIGxpc3ROb2RlQSA9IGxpc3ROb2RlQSA9PT0gbnVsbCA/IGhlYWRCIDogbGlzdE5vZGVBLm5leHQ7XHJcbiAgICAgICAgbGlzdE5vZGVCID0gbGlzdE5vZGVCID09PSBudWxsID8gaGVhZEEgOiBsaXN0Tm9kZUIubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdE5vZGVBO1xyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQge31cclxuIl19