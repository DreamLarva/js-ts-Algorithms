/**
 * 双向链表
 * */
declare class DoubleLinkedListNode<T = any> {
    val: T;
    prev: null | DoubleLinkedListNode<T>;
    next: null | DoubleLinkedListNode<T>;
    child: null | DoubleLinkedListNode<T>;
    constructor(val: T);
    toString(): T[];
    toArray(): T[];
}
/**
 * @param arr 链表内容
 * */
declare function createDoubleLinkedList<T>(arr: T[]): DoubleLinkedListNode<T>;
export { createDoubleLinkedList, DoubleLinkedListNode };
