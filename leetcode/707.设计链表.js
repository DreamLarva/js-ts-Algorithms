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
    ;
    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.data.unshift(val);
    }
    ;
    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.data.push(val);
    }
    ;
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
    ;
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
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA3LuiuvuiuoemTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA3LuiuvuiuoemTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQWxCO1FBQ0k7O2FBRUs7UUFDTCxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBbUR4QixDQUFDO0lBakRHOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsS0FBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDSCxVQUFVLENBQUMsS0FBYSxFQUFFLEdBQVc7UUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLEtBQWE7UUFDdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQztDQUVMIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuiuvuiuoemTvuihqOeahOWunueOsOOAguaCqOWPr+S7pemAieaLqeS9v+eUqOWNlemTvuihqOaIluWPjOmTvuihqOOAguWNlemTvuihqOS4reeahOiKgueCueW6lOivpeWFt+acieS4pOS4quWxnuaAp++8mnZhbMKg5ZKMwqBuZXh044CCdmFswqDmmK/lvZPliY3oioLngrnnmoTlgLzvvIxuZXh0wqBcbuaYr+aMh+WQkeS4i+S4gOS4quiKgueCueeahOaMh+mSiC/lvJXnlKjjgILlpoLmnpzopoHkvb/nlKjlj4zlkJHpk77ooajvvIzliJnov5jpnIDopoHkuIDkuKrlsZ7mgKfCoHByZXbCoOS7peaMh+ekuumTvuihqOS4reeahOS4iuS4gOS4quiKgueCueOAglxu5YGH6K6+6ZO+6KGo5Lit55qE5omA5pyJ6IqC54K56YO95pivIDAtaW5kZXgg55qE44CCXG5cbuWcqOmTvuihqOexu+S4reWunueOsOi/meS6m+WKn+iDve+8mlxuXG5nZXQoaW5kZXgp77ya6I635Y+W6ZO+6KGo5Lit56yswqBpbmRleMKg5Liq6IqC54K555qE5YC844CC5aaC5p6c57Si5byV5peg5pWI77yM5YiZ6L+U5ZueLTHjgIJcbmFkZEF0SGVhZCh2YWwp77ya5Zyo6ZO+6KGo55qE56ys5LiA5Liq5YWD57Sg5LmL5YmN5re75Yqg5LiA5Liq5YC85Li6wqB2YWzCoOeahOiKgueCueOAguaPkuWFpeWQju+8jOaWsOiKgueCueWwhuaIkOS4uumTvuihqOeahOesrOS4gOS4quiKgueCueOAglxuYWRkQXRUYWlsKHZhbCnvvJrlsIblgLzkuLrCoHZhbCDnmoToioLngrnov73liqDliLDpk77ooajnmoTmnIDlkI7kuIDkuKrlhYPntKDjgIJcbmFkZEF0SW5kZXgoaW5kZXgsdmFsKe+8muWcqOmTvuihqOS4reeahOesrMKgaW5kZXjCoOS4quiKgueCueS5i+WJjea3u+WKoOWAvOS4usKgdmFswqAg55qE6IqC54K544CC5aaC5p6cwqBpbmRleMKg562J5LqO6ZO+6KGo55qE6ZW/5bqm77yMXG7liJnor6XoioLngrnlsIbpmYTliqDliLDpk77ooajnmoTmnKvlsL7jgILlpoLmnpwgaW5kZXgg5aSn5LqO6ZO+6KGo6ZW/5bqm77yM5YiZ5LiN5Lya5o+S5YWl6IqC54K544CCXG5kZWxldGVBdEluZGV4KGluZGV4Ke+8muWmguaenOe0ouW8lcKgaW5kZXgg5pyJ5pWI77yM5YiZ5Yig6Zmk6ZO+6KGo5Lit55qE56yswqBpbmRleCDkuKroioLngrnjgIJcbsKgXG5cbuekuuS+i++8mlxuXG5NeUxpbmtlZExpc3QgbGlua2VkTGlzdCA9IG5ldyBNeUxpbmtlZExpc3QoKTtcbmxpbmtlZExpc3QuYWRkQXRIZWFkKDEpO1xubGlua2VkTGlzdC5hZGRBdFRhaWwoMyk7XG5saW5rZWRMaXN0LmFkZEF0SW5kZXgoMSwyKTsgICAvL+mTvuihqOWPmOS4ujEtPiAyLT4gM1xubGlua2VkTGlzdC5nZXQoMSk7ICAgICAgICAgICAgLy/ov5Tlm54yXG5saW5rZWRMaXN0LmRlbGV0ZUF0SW5kZXgoMSk7ICAvL+eOsOWcqOmTvuihqOaYrzEtPiAzXG5saW5rZWRMaXN0LmdldCgxKTsgICAgICAgICAgICAvL+i/lOWbnjNcbsKgXG5cbuaPkOekuu+8mlxuXG7miYDmnInlgLzpg73lnKjCoFsxLCAxMDAwXcKg5LmL5YaF44CCXG7mk43kvZzmrKHmlbDlsIblnKjCoMKgWzEsIDEwMDBdwqDkuYvlhoXjgIJcbuivt+S4jeimgeS9v+eUqOWGhee9rueahCBMaW5rZWRMaXN0IOW6k+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWxpbmtlZC1saXN0XG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKi9cbmNsYXNzIE15TGlua2VkTGlzdCB7XG4gICAgLyoqXG4gICAgICog5rKh6K+05LiN6IO955So5pWw57uE5bCx5LiN6IO95oCq5oiR5LqGXG4gICAgICogKi9cbiAgICBkYXRhOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QuIElmIHRoZSBpbmRleCBpcyBpbnZhbGlkLCByZXR1cm4gLTEuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdID09IG51bGwgPyAtMSA6IHRoaXMuZGF0YVtpbmRleF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5vZGUgb2YgdmFsdWUgdmFsIGJlZm9yZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgbGlua2VkIGxpc3QuIEFmdGVyIHRoZSBpbnNlcnRpb24sIHRoZSBuZXcgbm9kZSB3aWxsIGJlIHRoZSBmaXJzdCBub2RlIG9mIHRoZSBsaW5rZWQgbGlzdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRBdEhlYWQodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhLnVuc2hpZnQodmFsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGEgbm9kZSBvZiB2YWx1ZSB2YWwgdG8gdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbGlua2VkIGxpc3QuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgYWRkQXRUYWlsKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHZhbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5vZGUgb2YgdmFsdWUgdmFsIGJlZm9yZSB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QuIElmIGluZGV4IGVxdWFscyB0byB0aGUgbGVuZ3RoIG9mIGxpbmtlZCBsaXN0LCB0aGUgbm9kZSB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgbGlua2VkIGxpc3QuIElmIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoLCB0aGUgbm9kZSB3aWxsIG5vdCBiZSBpbnNlcnRlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRBdEluZGV4KGluZGV4OiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiB0aGlzLmFkZEF0SGVhZCh2YWwpO1xuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLmRhdGEubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIHZhbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QsIGlmIHRoZSBpbmRleCBpcyB2YWxpZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGRlbGV0ZUF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuZGF0YS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxufVxuXG4vKipcbiAqIFlvdXIgTXlMaW5rZWRMaXN0IG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IE15TGlua2VkTGlzdCgpXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5nZXQoaW5kZXgpXG4gKiBvYmouYWRkQXRIZWFkKHZhbClcbiAqIG9iai5hZGRBdFRhaWwodmFsKVxuICogb2JqLmFkZEF0SW5kZXgoaW5kZXgsdmFsKVxuICogb2JqLmRlbGV0ZUF0SW5kZXgoaW5kZXgpXG4gKi9cblxuZXhwb3J0IHt9O1xuIl19