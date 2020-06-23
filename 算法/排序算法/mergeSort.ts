/**
 * 归并排序
 * 把一系列排好序的子序列合并成一个大的完整有序序列。
 * 从理论上讲，这个算法很容易实现。我们需要两个排好序的子数组，
 * 然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组。
 *
 * 问题:在实际情况中，归并排序还有一些问题，当我们用这个算法对一个很大的数据集进行排序时，
 * 我们需要相当大的空间来合并存储两个子数组.
 * */

export default function mergeSort(arr: number[]) {
  if (arr.length < 2) {
    return;
  }
  let step = 1;
  let left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(
  arr: number[],
  startLeft: number,
  stopLeft: number,
  startRight: number,
  stopRight: number
) {
  const rightArr = new Array(stopRight - startRight + 1);
  const leftArr = new Array(stopLeft - startLeft + 1);
  let _startRight = startRight;
  for (let i = 0; i < rightArr.length - 1; ++i) {
    rightArr[i] = arr[_startRight];
    ++_startRight;
  }
  let _startLeft = startLeft;
  for (let i = 0; i < leftArr.length - 1; i++) {
    leftArr[i] = arr[_startLeft];
    ++_startLeft;
  }

  // 设置哨兵值 为了 在 left 和 right 长度不相等的时候 依然排序不出问题 因为短的没有值了 长的值 都应按次序插入
  rightArr[rightArr.length - 1] = Infinity; // 哨兵值
  leftArr[leftArr.length - 1] = Infinity; // 哨兵值

  // m 和 n 相当于左右数组的指针
  let m = 0,
    n = 0;

  // 两个各自已经*排序好*的数组 组合进行排序 只比较共 左数组的length+ 右数组的length次
  // 并且左右数组(必定相邻)的区间 在结果arr数组中排序
  for (let k = startLeft; k < stopRight; k++) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
}
