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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYwLuebuOS6pOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTYwLuebuOS6pOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7QUFJSjs7OztHQUlHO0FBQ0gsSUFBSSxtQkFBbUIsR0FBRyxVQUFVLEtBQWUsRUFBRSxLQUFlO0lBQ2xFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRWxELElBQUksU0FBUyxHQUFTLEtBQUssRUFDekIsU0FBUyxHQUFTLEtBQUssQ0FBQztJQUMxQiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixPQUFPLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDOUIsU0FBUyxHQUFHLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN4RCxTQUFTLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQ3pEO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue8luWGmeS4gOS4queoi+W6j++8jOaJvuWIsOS4pOS4quWNlemTvuihqOebuOS6pOeahOi1t+Wni+iKgueCueOAglxuXG7lpoLkuIvpnaLnmoTkuKTkuKrpk77ooajvvJpcblxuXG5cbuWcqOiKgueCuSBjMSDlvIDlp4vnm7jkuqTjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cblxuXG7ovpPlhaXvvJppbnRlcnNlY3RWYWwgPSA4LCBsaXN0QSA9IFs0LDEsOCw0LDVdLCBsaXN0QiA9IFs1LDAsMSw4LDQsNV0sIHNraXBBID0gMiwgc2tpcEIgPSAzXG7ovpPlh7rvvJpSZWZlcmVuY2Ugb2YgdGhlIG5vZGUgd2l0aCB2YWx1ZSA9IDhcbui+k+WFpeino+mHiu+8muebuOS6pOiKgueCueeahOWAvOS4uiA4IO+8iOazqOaEj++8jOWmguaenOS4pOS4quWIl+ihqOebuOS6pOWImeS4jeiDveS4uiAw77yJ44CC5LuO5ZCE6Ieq55qE6KGo5aS05byA5aeL566X6LW377yM6ZO+6KGoIEEg5Li6IFs0LDEsOCw0LDVd77yM6ZO+6KGoIEIg5Li6IFs1LDAsMSw4LDQsNV3jgILlnKggQSDkuK3vvIznm7jkuqToioLngrnliY3mnIkgMiDkuKroioLngrnvvJvlnKggQiDkuK3vvIznm7jkuqToioLngrnliY3mnIkgMyDkuKroioLngrnjgIJcblxuXG7npLrkvosgMu+8mlxuXG5cblxu6L6T5YWl77yaaW50ZXJzZWN0VmFsID0gMiwgbGlzdEEgPSBbMCw5LDEsMiw0XSwgbGlzdEIgPSBbMywyLDRdLCBza2lwQSA9IDMsIHNraXBCID0gMVxu6L6T5Ye677yaUmVmZXJlbmNlIG9mIHRoZSBub2RlIHdpdGggdmFsdWUgPSAyXG7ovpPlhaXop6Pph4rvvJrnm7jkuqToioLngrnnmoTlgLzkuLogMiDvvIjms6jmhI/vvIzlpoLmnpzkuKTkuKrliJfooajnm7jkuqTliJnkuI3og73kuLogMO+8ieOAguS7juWQhOiHqueahOihqOWktOW8gOWni+eul+i1t++8jOmTvuihqCBBIOS4uiBbMCw5LDEsMiw0Xe+8jOmTvuihqCBCIOS4uiBbMywyLDRd44CC5ZyoIEEg5Lit77yM55u45Lqk6IqC54K55YmN5pyJIDMg5Liq6IqC54K577yb5ZyoIEIg5Lit77yM55u45Lqk6IqC54K55YmN5pyJIDEg5Liq6IqC54K544CCXG5cblxu56S65L6LIDPvvJpcblxuXG5cbui+k+WFpe+8mmludGVyc2VjdFZhbCA9IDAsIGxpc3RBID0gWzIsNiw0XSwgbGlzdEIgPSBbMSw1XSwgc2tpcEEgPSAzLCBza2lwQiA9IDJcbui+k+WHuu+8mm51bGxcbui+k+WFpeino+mHiu+8muS7juWQhOiHqueahOihqOWktOW8gOWni+eul+i1t++8jOmTvuihqCBBIOS4uiBbMiw2LDRd77yM6ZO+6KGoIEIg5Li6IFsxLDVd44CC55Sx5LqO6L+Z5Lik5Liq6ZO+6KGo5LiN55u45Lqk77yM5omA5LulIGludGVyc2VjdFZhbCDlv4XpobvkuLogMO+8jOiAjCBza2lwQSDlkowgc2tpcEIg5Y+v5Lul5piv5Lu75oSP5YC844CCXG7op6Pph4rvvJrov5nkuKTkuKrpk77ooajkuI3nm7jkuqTvvIzlm6DmraTov5Tlm54gbnVsbOOAglxuXG5cbuazqOaEj++8mlxuXG7lpoLmnpzkuKTkuKrpk77ooajmsqHmnInkuqTngrnvvIzov5Tlm54gbnVsbC5cbuWcqOi/lOWbnue7k+aenOWQju+8jOS4pOS4qumTvuihqOS7jemhu+S/neaMgeWOn+acieeahOe7k+aehOOAglxu5Y+v5YGH5a6a5pW05Liq6ZO+6KGo57uT5p6E5Lit5rKh5pyJ5b6q546v44CCXG7nqIvluo/lsL3ph4/mu6HotrMgTyhuKSDml7bpl7TlpI3mnYLluqbvvIzkuJTku4XnlKggTygxKSDlhoXlrZjjgIJcbiogKi9cblxuaW1wb3J0IHsgTGlzdE5vZGUgfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZEFcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRCXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZSB8IG51bGx9XG4gKi9cbnZhciBnZXRJbnRlcnNlY3Rpb25Ob2RlID0gZnVuY3Rpb24gKGhlYWRBOiBMaXN0Tm9kZSwgaGVhZEI6IExpc3ROb2RlKSB7XG4gIGlmIChoZWFkQSA9PT0gbnVsbCB8fCBoZWFkQiA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gIHR5cGUgTm9kZSA9IExpc3ROb2RlIHwgbnVsbDtcbiAgbGV0IGxpc3ROb2RlQTogTm9kZSA9IGhlYWRBLFxuICAgIGxpc3ROb2RlQjogTm9kZSA9IGhlYWRCO1xuICAvLyDnrKzkuIDkuKrlnIgg5YWI5Yiw6L6+dHJhaWwg55qEIOi/nuaOpeWIsCDlj6bkuKrpk77ooajkuIpcbiAgLy8g5b2T5Lik5Liq6YO95Yiw6L6+IOesrOS6jOWciOeahOaXtuWAmSDmraPlpb3mirnlubMg6ZO+6KGoIDEg5ZKMIDIg55qE5beu5YC8XG4gIC8vIOesrOS6jOWciOWmguaenOayoeacieS6pOeCuSDkvJrlkIzml7bliLDovr4gdHJhaWwg5ou/5YiwbnVsbFxuICB3aGlsZSAobGlzdE5vZGVBICE9PSBsaXN0Tm9kZUIpIHtcbiAgICBsaXN0Tm9kZUEgPSBsaXN0Tm9kZUEgPT09IG51bGwgPyBoZWFkQiA6IGxpc3ROb2RlQS5uZXh0O1xuICAgIGxpc3ROb2RlQiA9IGxpc3ROb2RlQiA9PT0gbnVsbCA/IGhlYWRBIDogbGlzdE5vZGVCLm5leHQ7XG4gIH1cblxuICByZXR1cm4gbGlzdE5vZGVBO1xufTtcblxuZXhwb3J0IHt9O1xuIl19