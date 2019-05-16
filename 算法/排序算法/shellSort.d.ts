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
export declare function shellSortWithStaticGaps(arr: number[]): void;
export declare function shellSortWithDynamicGaps(arr: number[]): void;
