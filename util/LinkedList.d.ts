declare class ListNode<T> {
    val: T;
    next: null | ListNode<T>;
    constructor(val: T);
    toString(): T[];
    toArray(): T[];
}
declare function createLinkedList<T>(arr: T[]): ListNode<T>;
export { createLinkedList, ListNode, };
