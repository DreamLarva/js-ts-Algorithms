declare abstract class Heap {
    data: number[];
    protected constructor(arr: number[]);
    /**
     * 堆的大小
     * */
    get size(): number;
    abstract siftDown(A: number[], k: number): void;
    abstract siftUp(A: number[], k: number): void;
    heapifyWithSiftDown(): number[];
    /**
     * 插入
     * 在堆的尾部添加一个新的元素，然后使用 shiftUp 来修复
     * */
    insert(value: number): void;
    /**
     * 移除并返回最大值（最大堆）或者最小值（最小堆）
     * 为了将这个节点删除后的空位填补上，需要将最后一个元素移到根节点的位置，
     * 然后使用 shiftDown 方法来修复堆
     * */
    remove(): number | undefined;
    /**
     * 移除并返回堆末尾的数据
     * */
    poll(): number | undefined;
    /**
     * 移除堆中任意节点
     * 当它与子节点比较位置不时无序时使用 shiftDown()，如果与父节点比较发现无序则使用 shiftUp()
     * */
    removeAtIndex(): void;
    /**
     * 将一个更小的值（最小堆）或者更大的值（最大堆）赋值给一个节点
     *
     * */
    replace(): void;
}
/**
 * 最小堆(小顶堆)
 * */
export declare class MinHeap extends Heap {
    constructor(arr: number[]);
    siftUp(A: number[], k: number): void;
    siftDown(A: number[], k: number): void;
}
/**
 * 最大堆(大顶堆)
 * */
export declare class MaxHeap extends Heap {
    constructor(arr: number[]);
    siftUp(A: number[], k: number): void;
    siftDown(A: number[], k: number): void;
}
export {};
