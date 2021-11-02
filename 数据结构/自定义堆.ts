import assert from "assert";
import { validHeap } from "./堆化";

// 有 compare 方法的堆,
class CustomHeap {
  constructor(
    public data: number[] = [],
    // 决定是否是 交换 父子节点
    private compare: (father: number, son: number) => boolean
  ) {
    // 初始化 堆化
    this.heapifyWithSiftDown();
  }

  /**
   * 堆的大小
   * */
  get size() {
    return this.data.length;
  }

  siftUp(A: number[], k: number): void {
    while (k != 0) {
      // 找到父节点
      const father = Math.floor((k - 1) / 2);
      if (this.compare(A[father], A[k])) {
        break;
      }
      // 反之 那么 交换两个节点
      [A[k], A[father]] = [A[father], A[k]];

      // 现在 现在新加入的节点 现在在 原来的父节点上
      k = father;
    }
  }

  siftDown(A: number[], k: number): void {
    while (k * 2 + 1 < A.length) {
      let son = k * 2 + 1;

      // 与其两个儿子中较小的,或者较大的 一个比较
      if (k * 2 + 2 < A.length && !this.compare(A[son], A[k * 2 + 2])) {
        son = k * 2 + 2;
      }

      if (this.compare(A[k], A[son])) {
        break;
      }
      [A[son], A[k]] = [A[k], A[son]];
      // 交换后再与新的儿子比较并交换，直至没有儿子。
      k = son;
    }
  }

  heapifyWithSiftDown() {
    const A = this.data;
    // 初始选择最接近叶子的一个父结点
    for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
      this.siftDown(A, i);
    }

    return A;
  }

  /**
   * 插入
   * 在堆的尾部添加一个新的元素，然后使用 shiftUp 来修复
   * */
  insert(value: number) {
    this.data.push(value);
    this.siftUp(this.data, this.size - 1);
  }

  /**
   * 移除并返回最大值（最大堆）或者最小值（最小堆）
   * 为了将这个节点删除后的空位填补上，需要将最后一个元素移到根节点的位置，
   * 然后使用 shiftDown 方法来修复堆
   * */
  remove() {
    const result = this.data.shift();
    this.heapifyWithSiftDown();
    return result;
  }

  /**
   * 移除并返回堆末尾的数据
   * */
  poll() {
    return this.data.pop();
  }

  /**
   * 移除堆中任意节点
   * 当它与子节点比较位置不时无序时使用 shiftDown()，如果与父节点比较发现无序则使用 shiftUp()
   * */
  removeAtIndex() {}

  /**
   * 将一个更小的值（最小堆）或者更大的值（最大堆）赋值给一个节点
   *
   * */
  replace() {}
}

{
  const minHeap = new CustomHeap(
    [2, 3, 1, 3, 4, 5, 1, 3, 6, 7, 8, 9, 54, 5, 7, 3, 2, 1, 2, 41, 5, 7],
    (a, b) => a < b
  );
  assert.ok(validHeap(minHeap.data));
  minHeap.insert(0);
  minHeap.insert(99);
  assert.ok(validHeap(minHeap.data));
}
{
  const maxHeap = new CustomHeap(
    [2, 3, 1, 3, 4, 5, 1, 3, 6, 7, 8, 9, 54, 5, 7, 3, 2, 1, 2, 41, 5, 7],
    (a, b) => a > b
  );
  assert.ok(validHeap(maxHeap.data));
  maxHeap.insert(0);
  maxHeap.insert(99);
  assert.ok(validHeap(maxHeap.data));
}
