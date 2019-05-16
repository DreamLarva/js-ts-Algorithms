"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const insertionSort_1 = __importDefault(require("./insertionSort"));
/**
 * 快速排序
 * 它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。
 * 该算法不断重复这个步骤直到所有数据都是有序的。
 * 这个算法首先要在列表中选择一个元素作为基准值（pivot）。
 * 数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。
 * */
function qSort(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    const pivot = list[0];
    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        }
        else {
            greater.push(list[i]);
        }
    }
    // console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort(lesser).concat(pivot, qSort(greater));
}
exports.qSort = qSort;
/**
 * 快速排序有很大的优化空间
 * 1.取的基准值越接近 数组所有元素的中位数 排序的成熟越少(三数取中)
 * 2.快速排序并不稳定 在分割的数组的元素的个数小于10的情况下可以采用插入排序(稳定) 来减少排序的次数
 * 3.对于递归可已使用尾调优化(es6)
 * */
// 三数取中(median-of-three)
// 选取第一个元素 最后一个元素 和中间的元素 选择其中 的中位数 作为基准值
function qSort1(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = list[0];
    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        }
        else {
            greater.push(list[i]);
        }
    }
    //        console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort1(lesser).concat(pivot, qSort1(greater));
}
exports.qSort1 = qSort1;
// 三数取中
function medianOfThree(arr) {
    const high = arr.length - 1, low = 0, mid = (low + (high - low)) >> 1;
    // ts 又立功了
    // 使用三数取中法选择枢轴
    if (arr[0] > arr[high]) {
        // 目标: arr[mid] <= arr[high]
        util_1.swap(arr, mid, high);
    }
    if (arr[low] > arr[high]) {
        // 目标: arr[low] <= arr[high]
        util_1.swap(arr, low, high);
    }
    if (arr[mid] > arr[low]) {
        // 目标: arr[low] >= arr[mid]
        util_1.swap(arr, mid, low);
    }
}
exports.medianOfThree = medianOfThree;
// 当待排序的数组的长度<=10 就是用插入排序
function qSort2(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = list[0];
    if (list.length <= 10) {
        return insertionSort_1.default(list);
    }
    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        }
        else {
            greater.push(list[i]);
        }
    }
    // console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort2(lesser).concat(pivot, qSort2(greater));
}
exports.qSort2 = qSort2;
// 聚集相同元素 就是在划分的时候在分出一个与基准值相同的值的数组(对于有大量相同的元素的数组 提升很大)
function qSort3(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = [list[0]];
    if (list.length <= 10) {
        return insertionSort_1.default(list);
    }
    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] === pivot[0]) {
            pivot.push(list[i]);
        }
        else if (list[i] < pivot[0]) {
            lesser.push(list[i]);
        }
        else {
            greater.push(list[i]);
        }
    }
    // console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort3(lesser).concat(pivot, qSort3(greater));
}
exports.qSort3 = qSort3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3F1aWNrU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUE0QjtBQUM1QixvRUFBNEM7QUFFNUM7Ozs7OztLQU1LO0FBQ0wsU0FBZ0IsS0FBSyxDQUFDLElBQWM7SUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsNkNBQTZDO0lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0o7SUFDRCw0REFBNEQ7SUFDNUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBbEJELHNCQWtCQztBQUVEOzs7OztLQUtLO0FBRUwsd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUV4QyxTQUFnQixNQUFNLENBQUMsSUFBYztJQUNqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsNkNBQTZDO0lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0o7SUFDRCxtRUFBbUU7SUFDbkUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBbkJELHdCQW1CQztBQUVELE9BQU87QUFDUCxTQUFnQixhQUFhLENBQUMsR0FBYTtJQUN2QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdkIsR0FBRyxHQUFHLENBQUMsRUFDUCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsVUFBVTtJQUNWLGNBQWM7SUFDZCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEIsNEJBQTRCO1FBQzVCLFdBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RCLDRCQUE0QjtRQUM1QixXQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QjtJQUNELElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQiwyQkFBMkI7UUFDM0IsV0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBbkJELHNDQW1CQztBQUVELHlCQUF5QjtBQUN6QixTQUFnQixNQUFNLENBQUMsSUFBYztJQUNqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtRQUNuQixPQUFPLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7SUFFRCw2Q0FBNkM7SUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7S0FDSjtJQUNELDREQUE0RDtJQUM1RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUF2QkQsd0JBdUJDO0FBRUQsc0RBQXNEO0FBQ3RELFNBQWdCLE1BQU0sQ0FBQyxJQUFjO0lBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtRQUNuQixPQUFPLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7SUFFRCw2Q0FBNkM7SUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtLQUNKO0lBQ0QsNERBQTREO0lBQzVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQXpCRCx3QkF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N3YXB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IGluc2VydGlvblNvcnQgZnJvbSBcIi4vaW5zZXJ0aW9uU29ydFwiO1xyXG5cclxuLyoqXHJcbiAqIOW/q+mAn+aOkuW6j1xyXG4gKiDlroPmmK/kuIDnp43liIbogIzmsrvkuYvnmoTnrpfms5XvvIzpgJrov4fpgJLlvZLnmoTmlrnlvI/lsIbmlbDmja7kvp3mrKHliIbop6PkuLrljIXlkKvovoPlsI/lhYPntKDlkozovoPlpKflhYPntKDnmoTkuI3lkIzlrZDluo/liJfjgIJcclxuICog6K+l566X5rOV5LiN5pat6YeN5aSN6L+Z5Liq5q2l6aqk55u05Yiw5omA5pyJ5pWw5o2u6YO95piv5pyJ5bqP55qE44CCXHJcbiAqIOi/meS4queul+azlemmluWFiOimgeWcqOWIl+ihqOS4remAieaLqeS4gOS4quWFg+e0oOS9nOS4uuWfuuWHhuWAvO+8iHBpdm9077yJ44CCXHJcbiAqIOaVsOaNruaOkuW6j+WbtOe7leWfuuWHhuWAvOi/m+ihjO+8jOWwhuWIl+ihqOS4reWwj+S6juWfuuWHhuWAvOeahOWFg+e0oOenu+WIsOaVsOe7hOeahOW6lemDqO+8jOWwhuWkp+S6juWfuuWHhuWAvOeahOWFg+e0oOenu+WIsOaVsOe7hOeahOmhtumDqOOAglxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcVNvcnQobGlzdDogbnVtYmVyW10pOiBudW1iZXJbXSB7XHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZXNzZXIgPSBbXTtcclxuICAgIGNvbnN0IGdyZWF0ZXIgPSBbXTtcclxuICAgIGNvbnN0IHBpdm90ID0gbGlzdFswXTtcclxuXHJcbiAgICAvLyDku47nrKzkuIDkuKrlhYPntKDlvIDlp4sg5Zug5Li656ys5LiA5Liq5YC85Li65Z+65YeG5YC8IOWmguaenOWPquWJqeWfuuWHhuWAvCjpgJLlvZLnmoTmnIDmnKvliJnkuI3kvJrov5vov5nkuKrlvqrnjq8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobGlzdFtpXSA8IHBpdm90KSB7XHJcbiAgICAgICAgICAgIGxlc3Nlci5wdXNoKGxpc3RbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpKTtcclxuICAgIHJldHVybiBxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpO1xyXG59XHJcblxyXG4vKipcclxuICog5b+r6YCf5o6S5bqP5pyJ5b6I5aSn55qE5LyY5YyW56m66Ze0XHJcbiAqIDEu5Y+W55qE5Z+65YeG5YC86LaK5o6l6L+RIOaVsOe7hOaJgOacieWFg+e0oOeahOS4reS9jeaVsCDmjpLluo/nmoTmiJDnhp/otorlsJEo5LiJ5pWw5Y+W5LitKVxyXG4gKiAyLuW/q+mAn+aOkuW6j+W5tuS4jeeos+WumiDlnKjliIblibLnmoTmlbDnu4TnmoTlhYPntKDnmoTkuKrmlbDlsI/kuo4xMOeahOaDheWGteS4i+WPr+S7pemHh+eUqOaPkuWFpeaOkuW6jyjnqLPlrpopIOadpeWHj+WwkeaOkuW6j+eahOasoeaVsFxyXG4gKiAzLuWvueS6jumAkuW9kuWPr+W3suS9v+eUqOWwvuiwg+S8mOWMlihlczYpXHJcbiAqICovXHJcblxyXG4vLyDkuInmlbDlj5bkuK0obWVkaWFuLW9mLXRocmVlKVxyXG4vLyDpgInlj5bnrKzkuIDkuKrlhYPntKAg5pyA5ZCO5LiA5Liq5YWD57SgIOWSjOS4remXtOeahOWFg+e0oCDpgInmi6nlhbbkuK0g55qE5Lit5L2N5pWwIOS9nOS4uuWfuuWHhuWAvFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0MShsaXN0OiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxlc3NlciA9IFtdO1xyXG4gICAgY29uc3QgZ3JlYXRlciA9IFtdO1xyXG4gICAgbWVkaWFuT2ZUaHJlZShsaXN0KTtcclxuICAgIGNvbnN0IHBpdm90ID0gbGlzdFswXTtcclxuXHJcbiAgICAvLyDku47nrKzkuIDkuKrlhYPntKDlvIDlp4sg5Zug5Li656ys5LiA5Liq5YC85Li65Z+65YeG5YC8IOWmguaenOWPquWJqeWfuuWHhuWAvCjpgJLlvZLnmoTmnIDmnKvliJnkuI3kvJrov5vov5nkuKrlvqrnjq8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobGlzdFtpXSA8IHBpdm90KSB7XHJcbiAgICAgICAgICAgIGxlc3Nlci5wdXNoKGxpc3RbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAgICAgICAgY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XHJcbiAgICByZXR1cm4gcVNvcnQxKGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydDEoZ3JlYXRlcikpO1xyXG59XHJcblxyXG4vLyDkuInmlbDlj5bkuK1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhbk9mVGhyZWUoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgY29uc3QgaGlnaCA9IGFyci5sZW5ndGggLSAxLFxyXG4gICAgICAgIGxvdyA9IDAsXHJcbiAgICAgICAgbWlkID0gKGxvdyArIChoaWdoIC0gbG93KSkgPj4gMTtcclxuXHJcbiAgICAvLyB0cyDlj4jnq4vlip/kuoZcclxuICAgIC8vIOS9v+eUqOS4ieaVsOWPluS4reazlemAieaLqeaeoui9tFxyXG4gICAgaWYgKGFyclswXSA+IGFycltoaWdoXSkge1xyXG4gICAgICAgIC8vIOebruaghzogYXJyW21pZF0gPD0gYXJyW2hpZ2hdXHJcbiAgICAgICAgc3dhcChhcnIsIG1pZCwgaGlnaCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyW2xvd10gPiBhcnJbaGlnaF0pIHtcclxuICAgICAgICAvLyDnm67moIc6IGFycltsb3ddIDw9IGFycltoaWdoXVxyXG4gICAgICAgIHN3YXAoYXJyLCBsb3csIGhpZ2gpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyclttaWRdID4gYXJyW2xvd10pIHtcclxuICAgICAgICAvLyDnm67moIc6IGFycltsb3ddID49IGFyclttaWRdXHJcbiAgICAgICAgc3dhcChhcnIsIG1pZCwgbG93KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8g5b2T5b6F5o6S5bqP55qE5pWw57uE55qE6ZW/5bqmPD0xMCDlsLHmmK/nlKjmj5LlhaXmjpLluo9cclxuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0MihsaXN0OiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxlc3NlciA9IFtdO1xyXG4gICAgY29uc3QgZ3JlYXRlciA9IFtdO1xyXG4gICAgbWVkaWFuT2ZUaHJlZShsaXN0KTtcclxuICAgIGNvbnN0IHBpdm90ID0gbGlzdFswXTtcclxuXHJcbiAgICBpZiAobGlzdC5sZW5ndGggPD0gMTApIHtcclxuICAgICAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDku47nrKzkuIDkuKrlhYPntKDlvIDlp4sg5Zug5Li656ys5LiA5Liq5YC85Li65Z+65YeG5YC8IOWmguaenOWPquWJqeWfuuWHhuWAvCjpgJLlvZLnmoTmnIDmnKvliJnkuI3kvJrov5vov5nkuKrlvqrnjq8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobGlzdFtpXSA8IHBpdm90KSB7XHJcbiAgICAgICAgICAgIGxlc3Nlci5wdXNoKGxpc3RbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpKTtcclxuICAgIHJldHVybiBxU29ydDIobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0MihncmVhdGVyKSk7XHJcbn1cclxuXHJcbi8vIOiBmumbhuebuOWQjOWFg+e0oCDlsLHmmK/lnKjliJLliIbnmoTml7blgJnlnKjliIblh7rkuIDkuKrkuI7ln7rlh4blgLznm7jlkIznmoTlgLznmoTmlbDnu4Qo5a+55LqO5pyJ5aSn6YeP55u45ZCM55qE5YWD57Sg55qE5pWw57uEIOaPkOWNh+W+iOWkpylcclxuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0MyhsaXN0OiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxlc3NlciA9IFtdO1xyXG4gICAgY29uc3QgZ3JlYXRlciA9IFtdO1xyXG4gICAgbWVkaWFuT2ZUaHJlZShsaXN0KTtcclxuICAgIGNvbnN0IHBpdm90ID0gW2xpc3RbMF1dO1xyXG5cclxuICAgIGlmIChsaXN0Lmxlbmd0aCA8PSAxMCkge1xyXG4gICAgICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS7juesrOS4gOS4quWFg+e0oOW8gOWniyDlm6DkuLrnrKzkuIDkuKrlgLzkuLrln7rlh4blgLwg5aaC5p6c5Y+q5Ymp5Z+65YeG5YC8KOmAkuW9kueahOacgOacq+WImeS4jeS8mui/m+i/meS4quW+queOrylcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsaXN0W2ldID09PSBwaXZvdFswXSkge1xyXG4gICAgICAgICAgICBwaXZvdC5wdXNoKGxpc3RbaV0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdFtpXSA8IHBpdm90WzBdKSB7XHJcbiAgICAgICAgICAgIGxlc3Nlci5wdXNoKGxpc3RbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpKTtcclxuICAgIHJldHVybiBxU29ydDMobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0MyhncmVhdGVyKSk7XHJcbn1cclxuIl19