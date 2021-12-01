"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qSort3 = exports.qSort2 = exports.medianOfThree = exports.qSort1 = exports.qSort = void 0;
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
        (0, util_1.swap)(arr, mid, high);
    }
    if (arr[low] > arr[high]) {
        // 目标: arr[low] <= arr[high]
        (0, util_1.swap)(arr, low, high);
    }
    if (arr[mid] > arr[low]) {
        // 目标: arr[low] >= arr[mid]
        (0, util_1.swap)(arr, mid, low);
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
        return (0, insertionSort_1.default)(list);
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
        return (0, insertionSort_1.default)(list);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3F1aWNrU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBOEI7QUFDOUIsb0VBQTRDO0FBRTVDOzs7Ozs7S0FNSztBQUNMLFNBQWdCLEtBQUssQ0FBQyxJQUFjO0lBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLDZDQUE2QztJQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QsNERBQTREO0lBQzVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQWxCRCxzQkFrQkM7QUFFRDs7Ozs7S0FLSztBQUVMLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFFeEMsU0FBZ0IsTUFBTSxDQUFDLElBQWM7SUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lB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RUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBekJELHdCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN3YXAgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgaW5zZXJ0aW9uU29ydCBmcm9tIFwiLi9pbnNlcnRpb25Tb3J0XCI7XG5cbi8qKlxuICog5b+r6YCf5o6S5bqPXG4gKiDlroPmmK/kuIDnp43liIbogIzmsrvkuYvnmoTnrpfms5XvvIzpgJrov4fpgJLlvZLnmoTmlrnlvI/lsIbmlbDmja7kvp3mrKHliIbop6PkuLrljIXlkKvovoPlsI/lhYPntKDlkozovoPlpKflhYPntKDnmoTkuI3lkIzlrZDluo/liJfjgIJcbiAqIOivpeeul+azleS4jeaWremHjeWkjei/meS4quatpemqpOebtOWIsOaJgOacieaVsOaNrumDveaYr+acieW6j+eahOOAglxuICog6L+Z5Liq566X5rOV6aaW5YWI6KaB5Zyo5YiX6KGo5Lit6YCJ5oup5LiA5Liq5YWD57Sg5L2c5Li65Z+65YeG5YC877yIcGl2b3TvvInjgIJcbiAqIOaVsOaNruaOkuW6j+WbtOe7leWfuuWHhuWAvOi/m+ihjO+8jOWwhuWIl+ihqOS4reWwj+S6juWfuuWHhuWAvOeahOWFg+e0oOenu+WIsOaVsOe7hOeahOW6lemDqO+8jOWwhuWkp+S6juWfuuWHhuWAvOeahOWFg+e0oOenu+WIsOaVsOe7hOeahOmhtumDqOOAglxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBxU29ydChsaXN0OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGxlc3NlciA9IFtdO1xuICBjb25zdCBncmVhdGVyID0gW107XG4gIGNvbnN0IHBpdm90ID0gbGlzdFswXTtcblxuICAvLyDku47nrKzkuIDkuKrlhYPntKDlvIDlp4sg5Zug5Li656ys5LiA5Liq5YC85Li65Z+65YeG5YC8IOWmguaenOWPquWJqeWfuuWHhuWAvCjpgJLlvZLnmoTmnIDmnKvliJnkuI3kvJrov5vov5nkuKrlvqrnjq8pXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaXN0W2ldIDwgcGl2b3QpIHtcbiAgICAgIGxlc3Nlci5wdXNoKGxpc3RbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmVhdGVyLnB1c2gobGlzdFtpXSk7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKHFTb3J0KGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydChncmVhdGVyKSkpO1xuICByZXR1cm4gcVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKTtcbn1cblxuLyoqXG4gKiDlv6vpgJ/mjpLluo/mnInlvojlpKfnmoTkvJjljJbnqbrpl7RcbiAqIDEu5Y+W55qE5Z+65YeG5YC86LaK5o6l6L+RIOaVsOe7hOaJgOacieWFg+e0oOeahOS4reS9jeaVsCDmjpLluo/nmoTmiJDnhp/otorlsJEo5LiJ5pWw5Y+W5LitKVxuICogMi7lv6vpgJ/mjpLluo/lubbkuI3nqLPlrpog5Zyo5YiG5Ymy55qE5pWw57uE55qE5YWD57Sg55qE5Liq5pWw5bCP5LqOMTDnmoTmg4XlhrXkuIvlj6/ku6Xph4fnlKjmj5LlhaXmjpLluo8o56iz5a6aKSDmnaXlh4/lsJHmjpLluo/nmoTmrKHmlbBcbiAqIDMu5a+55LqO6YCS5b2S5Y+v5bey5L2/55So5bC+6LCD5LyY5YyWKGVzNilcbiAqICovXG5cbi8vIOS4ieaVsOWPluS4rShtZWRpYW4tb2YtdGhyZWUpXG4vLyDpgInlj5bnrKzkuIDkuKrlhYPntKAg5pyA5ZCO5LiA5Liq5YWD57SgIOWSjOS4remXtOeahOWFg+e0oCDpgInmi6nlhbbkuK0g55qE5Lit5L2N5pWwIOS9nOS4uuWfuuWHhuWAvFxuXG5leHBvcnQgZnVuY3Rpb24gcVNvcnQxKGxpc3Q6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgbGVzc2VyID0gW107XG4gIGNvbnN0IGdyZWF0ZXIgPSBbXTtcbiAgbWVkaWFuT2ZUaHJlZShsaXN0KTtcbiAgY29uc3QgcGl2b3QgPSBsaXN0WzBdO1xuXG4gIC8vIOS7juesrOS4gOS4quWFg+e0oOW8gOWniyDlm6DkuLrnrKzkuIDkuKrlgLzkuLrln7rlh4blgLwg5aaC5p6c5Y+q5Ymp5Z+65YeG5YC8KOmAkuW9kueahOacgOacq+WImeS4jeS8mui/m+i/meS4quW+queOrylcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpc3RbaV0gPCBwaXZvdCkge1xuICAgICAgbGVzc2VyLnB1c2gobGlzdFtpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcbiAgICB9XG4gIH1cbiAgLy8gICAgICAgIGNvbnNvbGUubG9nKHFTb3J0KGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydChncmVhdGVyKSkpO1xuICByZXR1cm4gcVNvcnQxKGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydDEoZ3JlYXRlcikpO1xufVxuXG4vLyDkuInmlbDlj5bkuK1cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYW5PZlRocmVlKGFycjogbnVtYmVyW10pIHtcbiAgY29uc3QgaGlnaCA9IGFyci5sZW5ndGggLSAxLFxuICAgIGxvdyA9IDAsXG4gICAgbWlkID0gKGxvdyArIChoaWdoIC0gbG93KSkgPj4gMTtcblxuICAvLyB0cyDlj4jnq4vlip/kuoZcbiAgLy8g5L2/55So5LiJ5pWw5Y+W5Lit5rOV6YCJ5oup5p6i6L20XG4gIGlmIChhcnJbMF0gPiBhcnJbaGlnaF0pIHtcbiAgICAvLyDnm67moIc6IGFyclttaWRdIDw9IGFycltoaWdoXVxuICAgIHN3YXAoYXJyLCBtaWQsIGhpZ2gpO1xuICB9XG4gIGlmIChhcnJbbG93XSA+IGFycltoaWdoXSkge1xuICAgIC8vIOebruaghzogYXJyW2xvd10gPD0gYXJyW2hpZ2hdXG4gICAgc3dhcChhcnIsIGxvdywgaGlnaCk7XG4gIH1cbiAgaWYgKGFyclttaWRdID4gYXJyW2xvd10pIHtcbiAgICAvLyDnm67moIc6IGFycltsb3ddID49IGFyclttaWRdXG4gICAgc3dhcChhcnIsIG1pZCwgbG93KTtcbiAgfVxufVxuXG4vLyDlvZPlvoXmjpLluo/nmoTmlbDnu4TnmoTplb/luqY8PTEwIOWwseaYr+eUqOaPkuWFpeaOkuW6j1xuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0MihsaXN0OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGxlc3NlciA9IFtdO1xuICBjb25zdCBncmVhdGVyID0gW107XG4gIG1lZGlhbk9mVGhyZWUobGlzdCk7XG4gIGNvbnN0IHBpdm90ID0gbGlzdFswXTtcblxuICBpZiAobGlzdC5sZW5ndGggPD0gMTApIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChsaXN0KTtcbiAgfVxuXG4gIC8vIOS7juesrOS4gOS4quWFg+e0oOW8gOWniyDlm6DkuLrnrKzkuIDkuKrlgLzkuLrln7rlh4blgLwg5aaC5p6c5Y+q5Ymp5Z+65YeG5YC8KOmAkuW9kueahOacgOacq+WImeS4jeS8mui/m+i/meS4quW+queOrylcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpc3RbaV0gPCBwaXZvdCkge1xuICAgICAgbGVzc2VyLnB1c2gobGlzdFtpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XG4gIHJldHVybiBxU29ydDIobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0MihncmVhdGVyKSk7XG59XG5cbi8vIOiBmumbhuebuOWQjOWFg+e0oCDlsLHmmK/lnKjliJLliIbnmoTml7blgJnlnKjliIblh7rkuIDkuKrkuI7ln7rlh4blgLznm7jlkIznmoTlgLznmoTmlbDnu4Qo5a+55LqO5pyJ5aSn6YeP55u45ZCM55qE5YWD57Sg55qE5pWw57uEIOaPkOWNh+W+iOWkpylcbmV4cG9ydCBmdW5jdGlvbiBxU29ydDMobGlzdDogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBsZXNzZXIgPSBbXTtcbiAgY29uc3QgZ3JlYXRlciA9IFtdO1xuICBtZWRpYW5PZlRocmVlKGxpc3QpO1xuICBjb25zdCBwaXZvdCA9IFtsaXN0WzBdXTtcblxuICBpZiAobGlzdC5sZW5ndGggPD0gMTApIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChsaXN0KTtcbiAgfVxuXG4gIC8vIOS7juesrOS4gOS4quWFg+e0oOW8gOWniyDlm6DkuLrnrKzkuIDkuKrlgLzkuLrln7rlh4blgLwg5aaC5p6c5Y+q5Ymp5Z+65YeG5YC8KOmAkuW9kueahOacgOacq+WImeS4jeS8mui/m+i/meS4quW+queOrylcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpc3RbaV0gPT09IHBpdm90WzBdKSB7XG4gICAgICBwaXZvdC5wdXNoKGxpc3RbaV0pO1xuICAgIH0gZWxzZSBpZiAobGlzdFtpXSA8IHBpdm90WzBdKSB7XG4gICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JlYXRlci5wdXNoKGxpc3RbaV0pO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpKTtcbiAgcmV0dXJuIHFTb3J0MyhsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQzKGdyZWF0ZXIpKTtcbn1cbiJdfQ==