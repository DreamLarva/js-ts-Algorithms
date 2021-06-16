function binarySearch(arr: number[]): number {
  const l = arr.length;
  let left = 0;
  let right = l - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (/*判断落在右边*/) {
      left = mid + 1;
    } else if (/*判断落在左边*/) {
      right = mid;
    }
  }

  return left;
}
