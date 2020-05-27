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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA3LuiuvuiuoemTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA3LuiuvuiuoemTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQWxCO1FBQ0U7O2FBRUs7UUFDTCxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBa0R0QixDQUFDO0lBaERDOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsS0FBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxVQUFVLENBQUMsS0FBYSxFQUFFLEdBQVc7UUFDbkMsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuiuvuiuoemTvuihqOeahOWunueOsOOAguaCqOWPr+S7pemAieaLqeS9v+eUqOWNlemTvuihqOaIluWPjOmTvuihqOOAguWNlemTvuihqOS4reeahOiKgueCueW6lOivpeWFt+acieS4pOS4quWxnuaAp++8mnZhbMKg5ZKMwqBuZXh044CCdmFswqDmmK/lvZPliY3oioLngrnnmoTlgLzvvIxuZXh0wqBcclxu5piv5oyH5ZCR5LiL5LiA5Liq6IqC54K555qE5oyH6ZKIL+W8leeUqOOAguWmguaenOimgeS9v+eUqOWPjOWQkemTvuihqO+8jOWImei/mOmcgOimgeS4gOS4quWxnuaAp8KgcHJldsKg5Lul5oyH56S66ZO+6KGo5Lit55qE5LiK5LiA5Liq6IqC54K544CCXHJcbuWBh+iuvumTvuihqOS4reeahOaJgOacieiKgueCuemDveaYryAwLWluZGV4IOeahOOAglxyXG5cclxu5Zyo6ZO+6KGo57G75Lit5a6e546w6L+Z5Lqb5Yqf6IO977yaXHJcblxyXG5nZXQoaW5kZXgp77ya6I635Y+W6ZO+6KGo5Lit56yswqBpbmRleMKg5Liq6IqC54K555qE5YC844CC5aaC5p6c57Si5byV5peg5pWI77yM5YiZ6L+U5ZueLTHjgIJcclxuYWRkQXRIZWFkKHZhbCnvvJrlnKjpk77ooajnmoTnrKzkuIDkuKrlhYPntKDkuYvliY3mt7vliqDkuIDkuKrlgLzkuLrCoHZhbMKg55qE6IqC54K544CC5o+S5YWl5ZCO77yM5paw6IqC54K55bCG5oiQ5Li66ZO+6KGo55qE56ys5LiA5Liq6IqC54K544CCXHJcbmFkZEF0VGFpbCh2YWwp77ya5bCG5YC85Li6wqB2YWwg55qE6IqC54K56L+95Yqg5Yiw6ZO+6KGo55qE5pyA5ZCO5LiA5Liq5YWD57Sg44CCXHJcbmFkZEF0SW5kZXgoaW5kZXgsdmFsKe+8muWcqOmTvuihqOS4reeahOesrMKgaW5kZXjCoOS4quiKgueCueS5i+WJjea3u+WKoOWAvOS4usKgdmFswqAg55qE6IqC54K544CC5aaC5p6cwqBpbmRleMKg562J5LqO6ZO+6KGo55qE6ZW/5bqm77yMXHJcbuWImeivpeiKgueCueWwhumZhOWKoOWIsOmTvuihqOeahOacq+WwvuOAguWmguaenCBpbmRleCDlpKfkuo7pk77ooajplb/luqbvvIzliJnkuI3kvJrmj5LlhaXoioLngrnjgIJcclxuZGVsZXRlQXRJbmRleChpbmRleCnvvJrlpoLmnpzntKLlvJXCoGluZGV4IOacieaViO+8jOWImeWIoOmZpOmTvuihqOS4reeahOesrMKgaW5kZXgg5Liq6IqC54K544CCXHJcbsKgXHJcblxyXG7npLrkvovvvJpcclxuXHJcbk15TGlua2VkTGlzdCBsaW5rZWRMaXN0ID0gbmV3IE15TGlua2VkTGlzdCgpO1xyXG5saW5rZWRMaXN0LmFkZEF0SGVhZCgxKTtcclxubGlua2VkTGlzdC5hZGRBdFRhaWwoMyk7XHJcbmxpbmtlZExpc3QuYWRkQXRJbmRleCgxLDIpOyAgIC8v6ZO+6KGo5Y+Y5Li6MS0+IDItPiAzXHJcbmxpbmtlZExpc3QuZ2V0KDEpOyAgICAgICAgICAgIC8v6L+U5ZueMlxyXG5saW5rZWRMaXN0LmRlbGV0ZUF0SW5kZXgoMSk7ICAvL+eOsOWcqOmTvuihqOaYrzEtPiAzXHJcbmxpbmtlZExpc3QuZ2V0KDEpOyAgICAgICAgICAgIC8v6L+U5ZueM1xyXG7CoFxyXG5cclxu5o+Q56S677yaXHJcblxyXG7miYDmnInlgLzpg73lnKjCoFsxLCAxMDAwXcKg5LmL5YaF44CCXHJcbuaTjeS9nOasoeaVsOWwhuWcqMKgwqBbMSwgMTAwMF3CoOS5i+WGheOAglxyXG7or7fkuI3opoHkvb/nlKjlhoXnva7nmoQgTGlua2VkTGlzdCDlupPjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2Rlc2lnbi1saW5rZWQtbGlzdFxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXHJcbiAqL1xyXG5jbGFzcyBNeUxpbmtlZExpc3Qge1xyXG4gIC8qKlxyXG4gICAqIOayoeivtOS4jeiDveeUqOaVsOe7hOWwseS4jeiDveaAquaIkeS6hlxyXG4gICAqICovXHJcbiAgZGF0YTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QuIElmIHRoZSBpbmRleCBpcyBpbnZhbGlkLCByZXR1cm4gLTEuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XSA9PSBudWxsID8gLTEgOiB0aGlzLmRhdGFbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgbm9kZSBvZiB2YWx1ZSB2YWwgYmVmb3JlIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBsaW5rZWQgbGlzdC4gQWZ0ZXIgdGhlIGluc2VydGlvbiwgdGhlIG5ldyBub2RlIHdpbGwgYmUgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpbmtlZCBsaXN0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcclxuICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAqL1xyXG4gIGFkZEF0SGVhZCh2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5kYXRhLnVuc2hpZnQodmFsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCBhIG5vZGUgb2YgdmFsdWUgdmFsIHRvIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGxpbmtlZCBsaXN0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcclxuICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAqL1xyXG4gIGFkZEF0VGFpbCh2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5kYXRhLnB1c2godmFsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIG5vZGUgb2YgdmFsdWUgdmFsIGJlZm9yZSB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QuIElmIGluZGV4IGVxdWFscyB0byB0aGUgbGVuZ3RoIG9mIGxpbmtlZCBsaXN0LCB0aGUgbm9kZSB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgbGlua2VkIGxpc3QuIElmIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoLCB0aGUgbm9kZSB3aWxsIG5vdCBiZSBpbnNlcnRlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAgICogQHJldHVybiB7dm9pZH1cclxuICAgKi9cclxuICBhZGRBdEluZGV4KGluZGV4OiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gdGhpcy5hZGRBdEhlYWQodmFsKTtcclxuICAgIGlmIChpbmRleCA+IHRoaXMuZGF0YS5sZW5ndGgpIHJldHVybjtcclxuICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIHZhbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGUgdGhlIGluZGV4LXRoIG5vZGUgaW4gdGhlIGxpbmtlZCBsaXN0LCBpZiB0aGUgaW5kZXggaXMgdmFsaWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybiB7dm9pZH1cclxuICAgKi9cclxuICBkZWxldGVBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5kYXRhLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogWW91ciBNeUxpbmtlZExpc3Qgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcclxuICogdmFyIG9iaiA9IG5ldyBNeUxpbmtlZExpc3QoKVxyXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5nZXQoaW5kZXgpXHJcbiAqIG9iai5hZGRBdEhlYWQodmFsKVxyXG4gKiBvYmouYWRkQXRUYWlsKHZhbClcclxuICogb2JqLmFkZEF0SW5kZXgoaW5kZXgsdmFsKVxyXG4gKiBvYmouZGVsZXRlQXRJbmRleChpbmRleClcclxuICovXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==