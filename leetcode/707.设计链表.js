"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。
假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，
则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 

示例：

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
 

提示：

所有值都在 [1, 1000] 之内。
操作次数将在  [1, 1000] 之内。
请不要使用内置的 LinkedList 库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * Initialize your data structure here.
 */
class MyLinkedList {
    constructor() {
        /**
         * 没说不能用数组就不能怪我了
         * */
        this.data = [];
    }
    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) {
        return this.data[index] == null ? -1 : this.data[index];
    }
    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.data.unshift(val);
    }
    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.data.push(val);
    }
    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0)
            return this.addAtHead(val);
        if (index > this.data.length)
            return;
        this.data.splice(index, 0, val);
    }
    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.data.length)
            return;
        this.data.splice(index, 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA3LuiuvuiuoemTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA3LuiuvuiuoemTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQWxCO1FBQ0U7O2FBRUs7UUFDTCxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBa0R0QixDQUFDO0lBaERDOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsS0FBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxVQUFVLENBQUMsS0FBYSxFQUFFLEdBQVc7UUFDbkMsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7orr7orqHpk77ooajnmoTlrp7njrDjgILmgqjlj6/ku6XpgInmi6nkvb/nlKjljZXpk77ooajmiJblj4zpk77ooajjgILljZXpk77ooajkuK3nmoToioLngrnlupTor6XlhbfmnInkuKTkuKrlsZ7mgKfvvJp2YWzCoOWSjMKgbmV4dOOAgnZhbMKg5piv5b2T5YmN6IqC54K555qE5YC877yMbmV4dMKgXG7mmK/mjIflkJHkuIvkuIDkuKroioLngrnnmoTmjIfpkogv5byV55So44CC5aaC5p6c6KaB5L2/55So5Y+M5ZCR6ZO+6KGo77yM5YiZ6L+Y6ZyA6KaB5LiA5Liq5bGe5oCnwqBwcmV2wqDku6XmjIfnpLrpk77ooajkuK3nmoTkuIrkuIDkuKroioLngrnjgIJcbuWBh+iuvumTvuihqOS4reeahOaJgOacieiKgueCuemDveaYryAwLWluZGV4IOeahOOAglxuXG7lnKjpk77ooajnsbvkuK3lrp7njrDov5nkupvlip/og73vvJpcblxuZ2V0KGluZGV4Ke+8muiOt+WPlumTvuihqOS4reesrMKgaW5kZXjCoOS4quiKgueCueeahOWAvOOAguWmguaenOe0ouW8leaXoOaViO+8jOWImei/lOWbni0x44CCXG5hZGRBdEhlYWQodmFsKe+8muWcqOmTvuihqOeahOesrOS4gOS4quWFg+e0oOS5i+WJjea3u+WKoOS4gOS4quWAvOS4usKgdmFswqDnmoToioLngrnjgILmj5LlhaXlkI7vvIzmlrDoioLngrnlsIbmiJDkuLrpk77ooajnmoTnrKzkuIDkuKroioLngrnjgIJcbmFkZEF0VGFpbCh2YWwp77ya5bCG5YC85Li6wqB2YWwg55qE6IqC54K56L+95Yqg5Yiw6ZO+6KGo55qE5pyA5ZCO5LiA5Liq5YWD57Sg44CCXG5hZGRBdEluZGV4KGluZGV4LHZhbCnvvJrlnKjpk77ooajkuK3nmoTnrKzCoGluZGV4wqDkuKroioLngrnkuYvliY3mt7vliqDlgLzkuLrCoHZhbMKgIOeahOiKgueCueOAguWmguaenMKgaW5kZXjCoOetieS6jumTvuihqOeahOmVv+W6pu+8jFxu5YiZ6K+l6IqC54K55bCG6ZmE5Yqg5Yiw6ZO+6KGo55qE5pyr5bC+44CC5aaC5p6cIGluZGV4IOWkp+S6jumTvuihqOmVv+W6pu+8jOWImeS4jeS8muaPkuWFpeiKgueCueOAglxuZGVsZXRlQXRJbmRleChpbmRleCnvvJrlpoLmnpzntKLlvJXCoGluZGV4IOacieaViO+8jOWImeWIoOmZpOmTvuihqOS4reeahOesrMKgaW5kZXgg5Liq6IqC54K544CCXG7CoFxuXG7npLrkvovvvJpcblxuTXlMaW5rZWRMaXN0IGxpbmtlZExpc3QgPSBuZXcgTXlMaW5rZWRMaXN0KCk7XG5saW5rZWRMaXN0LmFkZEF0SGVhZCgxKTtcbmxpbmtlZExpc3QuYWRkQXRUYWlsKDMpO1xubGlua2VkTGlzdC5hZGRBdEluZGV4KDEsMik7ICAgLy/pk77ooajlj5jkuLoxLT4gMi0+IDNcbmxpbmtlZExpc3QuZ2V0KDEpOyAgICAgICAgICAgIC8v6L+U5ZueMlxubGlua2VkTGlzdC5kZWxldGVBdEluZGV4KDEpOyAgLy/njrDlnKjpk77ooajmmK8xLT4gM1xubGlua2VkTGlzdC5nZXQoMSk7ICAgICAgICAgICAgLy/ov5Tlm54zXG7CoFxuXG7mj5DnpLrvvJpcblxu5omA5pyJ5YC86YO95ZyowqBbMSwgMTAwMF3CoOS5i+WGheOAglxu5pON5L2c5qyh5pWw5bCG5ZyowqDCoFsxLCAxMDAwXcKg5LmL5YaF44CCXG7or7fkuI3opoHkvb/nlKjlhoXnva7nmoQgTGlua2VkTGlzdCDlupPjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2Rlc2lnbi1saW5rZWQtbGlzdFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeUxpbmtlZExpc3Qge1xuICAvKipcbiAgICog5rKh6K+05LiN6IO955So5pWw57uE5bCx5LiN6IO95oCq5oiR5LqGXG4gICAqICovXG4gIGRhdGE6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIGluZGV4LXRoIG5vZGUgaW4gdGhlIGxpbmtlZCBsaXN0LiBJZiB0aGUgaW5kZXggaXMgaW52YWxpZCwgcmV0dXJuIC0xLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XSA9PSBudWxsID8gLTEgOiB0aGlzLmRhdGFbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5vZGUgb2YgdmFsdWUgdmFsIGJlZm9yZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgbGlua2VkIGxpc3QuIEFmdGVyIHRoZSBpbnNlcnRpb24sIHRoZSBuZXcgbm9kZSB3aWxsIGJlIHRoZSBmaXJzdCBub2RlIG9mIHRoZSBsaW5rZWQgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYWRkQXRIZWFkKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRhLnVuc2hpZnQodmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgYSBub2RlIG9mIHZhbHVlIHZhbCB0byB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsaW5rZWQgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYWRkQXRUYWlsKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRhLnB1c2godmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBub2RlIG9mIHZhbHVlIHZhbCBiZWZvcmUgdGhlIGluZGV4LXRoIG5vZGUgaW4gdGhlIGxpbmtlZCBsaXN0LiBJZiBpbmRleCBlcXVhbHMgdG8gdGhlIGxlbmd0aCBvZiBsaW5rZWQgbGlzdCwgdGhlIG5vZGUgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIGxpbmtlZCBsaXN0LiBJZiBpbmRleCBpcyBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCwgdGhlIG5vZGUgd2lsbCBub3QgYmUgaW5zZXJ0ZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBhZGRBdEluZGV4KGluZGV4OiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHRoaXMuYWRkQXRIZWFkKHZhbCk7XG4gICAgaWYgKGluZGV4ID4gdGhpcy5kYXRhLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBpbmRleC10aCBub2RlIGluIHRoZSBsaW5rZWQgbGlzdCwgaWYgdGhlIGluZGV4IGlzIHZhbGlkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGRlbGV0ZUF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5kYXRhLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbi8qKlxuICogWW91ciBNeUxpbmtlZExpc3Qgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlMaW5rZWRMaXN0KClcbiAqIHZhciBwYXJhbV8xID0gb2JqLmdldChpbmRleClcbiAqIG9iai5hZGRBdEhlYWQodmFsKVxuICogb2JqLmFkZEF0VGFpbCh2YWwpXG4gKiBvYmouYWRkQXRJbmRleChpbmRleCx2YWwpXG4gKiBvYmouZGVsZXRlQXRJbmRleChpbmRleClcbiAqL1xuXG5leHBvcnQge307XG4iXX0=