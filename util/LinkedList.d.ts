declare class ListNode<T = any> {
    val: T;
    next: null | ListNode<T>;
    constructor(val: T);
    toString(): T[];
    toArray(): T[];
}
/**
 * @param arr 链表内容
 * @param cyclePosition 链表尾部连接的节点(索引从0开始)(成环)
 * */
declare function createLinkedList<T>(arr: T[], cyclePosition?: number): ListNode<T>;
export { createLinkedList, ListNode, };
