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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3F1aWNrU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsb0VBQTRDO0FBRTVDOzs7Ozs7S0FNSztBQUNMLFNBQWdCLEtBQUssQ0FBQyxJQUFjO0lBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLDZDQUE2QztJQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtLQUNKO0lBQ0QsNERBQTREO0lBQzVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQWxCRCxzQkFrQkM7QUFFRDs7Ozs7S0FLSztBQUVMLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFFeEMsU0FBZ0IsTUFBTSxDQUFDLElBQWM7SUFDakMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLEVBQUUsQ0FBQztLQUNiO0lB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Q0FBQyxDQUFDO0FBQ3pELENBQUM7QUF6QkQsd0JBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzd2FwfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCBpbnNlcnRpb25Tb3J0IGZyb20gXCIuL2luc2VydGlvblNvcnRcIjtcclxuXHJcbi8qKlxyXG4gKiDlv6vpgJ/mjpLluo9cclxuICog5a6D5piv5LiA56eN5YiG6ICM5rK75LmL55qE566X5rOV77yM6YCa6L+H6YCS5b2S55qE5pa55byP5bCG5pWw5o2u5L6d5qyh5YiG6Kej5Li65YyF5ZCr6L6D5bCP5YWD57Sg5ZKM6L6D5aSn5YWD57Sg55qE5LiN5ZCM5a2Q5bqP5YiX44CCXHJcbiAqIOivpeeul+azleS4jeaWremHjeWkjei/meS4quatpemqpOebtOWIsOaJgOacieaVsOaNrumDveaYr+acieW6j+eahOOAglxyXG4gKiDov5nkuKrnrpfms5XpppblhYjopoHlnKjliJfooajkuK3pgInmi6nkuIDkuKrlhYPntKDkvZzkuLrln7rlh4blgLzvvIhwaXZvdO+8ieOAglxyXG4gKiDmlbDmja7mjpLluo/lm7Tnu5Xln7rlh4blgLzov5vooYzvvIzlsIbliJfooajkuK3lsI/kuo7ln7rlh4blgLznmoTlhYPntKDnp7vliLDmlbDnu4TnmoTlupXpg6jvvIzlsIblpKfkuo7ln7rlh4blgLznmoTlhYPntKDnp7vliLDmlbDnu4TnmoTpobbpg6jjgIJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0KGxpc3Q6IG51bWJlcltdKTogbnVtYmVyW10ge1xyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGVzc2VyID0gW107XHJcbiAgICBjb25zdCBncmVhdGVyID0gW107XHJcbiAgICBjb25zdCBwaXZvdCA9IGxpc3RbMF07XHJcblxyXG4gICAgLy8g5LuO56ys5LiA5Liq5YWD57Sg5byA5aeLIOWboOS4uuesrOS4gOS4quWAvOS4uuWfuuWHhuWAvCDlpoLmnpzlj6rlianln7rlh4blgLwo6YCS5b2S55qE5pyA5pyr5YiZ5LiN5Lya6L+b6L+Z5Liq5b6q546vKVxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxpc3RbaV0gPCBwaXZvdCkge1xyXG4gICAgICAgICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmVhdGVyLnB1c2gobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XHJcbiAgICByZXR1cm4gcVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOW/q+mAn+aOkuW6j+acieW+iOWkp+eahOS8mOWMluepuumXtFxyXG4gKiAxLuWPlueahOWfuuWHhuWAvOi2iuaOpei/kSDmlbDnu4TmiYDmnInlhYPntKDnmoTkuK3kvY3mlbAg5o6S5bqP55qE5oiQ54af6LaK5bCRKOS4ieaVsOWPluS4rSlcclxuICogMi7lv6vpgJ/mjpLluo/lubbkuI3nqLPlrpog5Zyo5YiG5Ymy55qE5pWw57uE55qE5YWD57Sg55qE5Liq5pWw5bCP5LqOMTDnmoTmg4XlhrXkuIvlj6/ku6Xph4fnlKjmj5LlhaXmjpLluo8o56iz5a6aKSDmnaXlh4/lsJHmjpLluo/nmoTmrKHmlbBcclxuICogMy7lr7nkuo7pgJLlvZLlj6/lt7Lkvb/nlKjlsL7osIPkvJjljJYoZXM2KVxyXG4gKiAqL1xyXG5cclxuLy8g5LiJ5pWw5Y+W5LitKG1lZGlhbi1vZi10aHJlZSlcclxuLy8g6YCJ5Y+W56ys5LiA5Liq5YWD57SgIOacgOWQjuS4gOS4quWFg+e0oCDlkozkuK3pl7TnmoTlhYPntKAg6YCJ5oup5YW25LitIOeahOS4reS9jeaVsCDkvZzkuLrln7rlh4blgLxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxU29ydDEobGlzdDogbnVtYmVyW10pOiBudW1iZXJbXSB7XHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZXNzZXIgPSBbXTtcclxuICAgIGNvbnN0IGdyZWF0ZXIgPSBbXTtcclxuICAgIG1lZGlhbk9mVGhyZWUobGlzdCk7XHJcbiAgICBjb25zdCBwaXZvdCA9IGxpc3RbMF07XHJcblxyXG4gICAgLy8g5LuO56ys5LiA5Liq5YWD57Sg5byA5aeLIOWboOS4uuesrOS4gOS4quWAvOS4uuWfuuWHhuWAvCDlpoLmnpzlj6rlianln7rlh4blgLwo6YCS5b2S55qE5pyA5pyr5YiZ5LiN5Lya6L+b6L+Z5Liq5b6q546vKVxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxpc3RbaV0gPCBwaXZvdCkge1xyXG4gICAgICAgICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmVhdGVyLnB1c2gobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKHFTb3J0KGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydChncmVhdGVyKSkpO1xyXG4gICAgcmV0dXJuIHFTb3J0MShsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQxKGdyZWF0ZXIpKTtcclxufVxyXG5cclxuLy8g5LiJ5pWw5Y+W5LitXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYW5PZlRocmVlKGFycjogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IGhpZ2ggPSBhcnIubGVuZ3RoIC0gMSxcclxuICAgICAgICBsb3cgPSAwLFxyXG4gICAgICAgIG1pZCA9IChsb3cgKyAoaGlnaCAtIGxvdykpID4+IDE7XHJcblxyXG4gICAgLy8gdHMg5Y+I56uL5Yqf5LqGXHJcbiAgICAvLyDkvb/nlKjkuInmlbDlj5bkuK3ms5XpgInmi6nmnqLovbRcclxuICAgIGlmIChhcnJbMF0gPiBhcnJbaGlnaF0pIHtcclxuICAgICAgICAvLyDnm67moIc6IGFyclttaWRdIDw9IGFycltoaWdoXVxyXG4gICAgICAgIHN3YXAoYXJyLCBtaWQsIGhpZ2gpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFycltsb3ddID4gYXJyW2hpZ2hdKSB7XHJcbiAgICAgICAgLy8g55uu5qCHOiBhcnJbbG93XSA8PSBhcnJbaGlnaF1cclxuICAgICAgICBzd2FwKGFyciwgbG93LCBoaWdoKTtcclxuICAgIH1cclxuICAgIGlmIChhcnJbbWlkXSA+IGFycltsb3ddKSB7XHJcbiAgICAgICAgLy8g55uu5qCHOiBhcnJbbG93XSA+PSBhcnJbbWlkXVxyXG4gICAgICAgIHN3YXAoYXJyLCBtaWQsIGxvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOW9k+W+heaOkuW6j+eahOaVsOe7hOeahOmVv+W6pjw9MTAg5bCx5piv55So5o+S5YWl5o6S5bqPXHJcbmV4cG9ydCBmdW5jdGlvbiBxU29ydDIobGlzdDogbnVtYmVyW10pOiBudW1iZXJbXSB7XHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZXNzZXIgPSBbXTtcclxuICAgIGNvbnN0IGdyZWF0ZXIgPSBbXTtcclxuICAgIG1lZGlhbk9mVGhyZWUobGlzdCk7XHJcbiAgICBjb25zdCBwaXZvdCA9IGxpc3RbMF07XHJcblxyXG4gICAgaWYgKGxpc3QubGVuZ3RoIDw9IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc2VydGlvblNvcnQobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LuO56ys5LiA5Liq5YWD57Sg5byA5aeLIOWboOS4uuesrOS4gOS4quWAvOS4uuWfuuWHhuWAvCDlpoLmnpzlj6rlianln7rlh4blgLwo6YCS5b2S55qE5pyA5pyr5YiZ5LiN5Lya6L+b6L+Z5Liq5b6q546vKVxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxpc3RbaV0gPCBwaXZvdCkge1xyXG4gICAgICAgICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmVhdGVyLnB1c2gobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XHJcbiAgICByZXR1cm4gcVNvcnQyKGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydDIoZ3JlYXRlcikpO1xyXG59XHJcblxyXG4vLyDogZrpm4bnm7jlkIzlhYPntKAg5bCx5piv5Zyo5YiS5YiG55qE5pe25YCZ5Zyo5YiG5Ye65LiA5Liq5LiO5Z+65YeG5YC855u45ZCM55qE5YC855qE5pWw57uEKOWvueS6juacieWkp+mHj+ebuOWQjOeahOWFg+e0oOeahOaVsOe7hCDmj5DljYflvojlpKcpXHJcbmV4cG9ydCBmdW5jdGlvbiBxU29ydDMobGlzdDogbnVtYmVyW10pOiBudW1iZXJbXSB7XHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZXNzZXIgPSBbXTtcclxuICAgIGNvbnN0IGdyZWF0ZXIgPSBbXTtcclxuICAgIG1lZGlhbk9mVGhyZWUobGlzdCk7XHJcbiAgICBjb25zdCBwaXZvdCA9IFtsaXN0WzBdXTtcclxuXHJcbiAgICBpZiAobGlzdC5sZW5ndGggPD0gMTApIHtcclxuICAgICAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDku47nrKzkuIDkuKrlhYPntKDlvIDlp4sg5Zug5Li656ys5LiA5Liq5YC85Li65Z+65YeG5YC8IOWmguaenOWPquWJqeWfuuWHhuWAvCjpgJLlvZLnmoTmnIDmnKvliJnkuI3kvJrov5vov5nkuKrlvqrnjq8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobGlzdFtpXSA9PT0gcGl2b3RbMF0pIHtcclxuICAgICAgICAgICAgcGl2b3QucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RbaV0gPCBwaXZvdFswXSkge1xyXG4gICAgICAgICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmVhdGVyLnB1c2gobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XHJcbiAgICByZXR1cm4gcVNvcnQzKGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydDMoZ3JlYXRlcikpO1xyXG59XHJcbiJdfQ==