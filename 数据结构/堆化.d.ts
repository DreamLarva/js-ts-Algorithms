/**
 * 将无序数组堆化
 * 有两种算法
 * 1. SiftUp 算法  O(nlogn)
 * 2. SiftDown 算法   O(n)
 * */
export declare function heapifyWithSiftUp(A: number[]): number[];
export declare function siftUp(A: number[], k: number): void;
export declare function heapifyWithSiftDown(A: number[]): number[];
export declare function siftDown(A: number[], k: number): void;
/**
 * 用于验证数组 是不是一个堆
 * */
export declare function validHeap(arr: number[]): boolean;
