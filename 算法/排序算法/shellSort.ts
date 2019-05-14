/**
 * 希尔排序的核心理念与插入排序不同，它会首先比较距离较远的元素，
 * 而非相邻的元素。和简单地比较相邻元素相比，
 * 使用这种方案可以使离正确位置很远的元素更快地回到合适的位置。
 * 当开始用这个算法遍历数据集时，所有元素之间的距离会不断减小，
 * 直到处理到数据集的末尾，这时算法比较的就是相邻元素了。
 *
 * 希尔排序的工作原理是，通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。
 * 我们可以动态定义间隔序列，不过对于大部分的实际应用场景，算法要用到的间隔序列可以提前定好。
 * 最佳的间隔序列是： 701, 301, 132, 57, 23, 10, 4, 1 。
 * 最佳间隔的推到论文(http://sun.aei.polsl.pl/~mciura/publikacje/shellsort.pdf)
 * */

export function shellSortWithStaticGaps(arr: number[]) {
    let len = arr.length;
    // 定义间隔 必须和下面的数组对应 从大到小
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

    // 间隔按照排序的每次取用的间隔一次减小
    for (let g = 0; g < gaps.length; g++) {
        // 对于每个间隔内 页逐渐减小 直到进入 下一个更小的间隔
        for (let i = gaps[g]; i < len; i++) {
            // 储存当前节点准备之后插入
            let temp = arr[i];
            // 相当于将 从arr[j]开始 想做 每间隔gaps[g]的元素 组成的数组进行插入排序
            // arr[j - gaps[g]]> temp 而不是再比较 两个间隔之间的元素 是因为 在i值更小的时候已经比较过了 所以只要比temp和上一次间隔的元素的大小就能判断是不是要对当前i和当前间隔进行插入排序
            let j;
            for (j = i; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]];
            }
            arr[j] = temp;

        }

    }
}


export function shellSortWithDynamicGaps(arr: number[]) {
    const N = arr.length;
    let h = 1;
    // 动态生成 shellSort 最佳的间隔
    while (h < N / 3) {
        h = 3 * h + 1;
    }

    // 这种办法比 向后赋值最后更新到最前面的位置 比不停交换两个元素的位置的速度快的多
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= h && arr[j - h] > temp; j -= h) {
                arr[j] = arr[j - h];
            }
            arr[j] = temp;
        }
        h = (h - 1) / 3;
    }
}
