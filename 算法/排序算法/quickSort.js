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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3F1aWNrU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBOEI7QUFDOUIsb0VBQTRDO0FBRTVDOzs7Ozs7S0FNSztBQUNMLFNBQWdCLEtBQUssQ0FBQyxJQUFjO0lBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLDZDQUE2QztJQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QsNERBQTREO0lBQzVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQWxCRCxzQkFrQkM7QUFFRDs7Ozs7S0FLSztBQUVMLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFFeEMsU0FBZ0IsTUFBTSxDQUFDLElBQWM7SUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lB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Q0FBQyxDQUFDO0FBQ3ZELENBQUM7QUF6QkQsd0JBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3dhcCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBpbnNlcnRpb25Tb3J0IGZyb20gXCIuL2luc2VydGlvblNvcnRcIjtcblxuLyoqXG4gKiDlv6vpgJ/mjpLluo9cbiAqIOWug+aYr+S4gOenjeWIhuiAjOayu+S5i+eahOeul+azle+8jOmAmui/h+mAkuW9kueahOaWueW8j+WwhuaVsOaNruS+neasoeWIhuino+S4uuWMheWQq+i+g+Wwj+WFg+e0oOWSjOi+g+Wkp+WFg+e0oOeahOS4jeWQjOWtkOW6j+WIl+OAglxuICog6K+l566X5rOV5LiN5pat6YeN5aSN6L+Z5Liq5q2l6aqk55u05Yiw5omA5pyJ5pWw5o2u6YO95piv5pyJ5bqP55qE44CCXG4gKiDov5nkuKrnrpfms5XpppblhYjopoHlnKjliJfooajkuK3pgInmi6nkuIDkuKrlhYPntKDkvZzkuLrln7rlh4blgLzvvIhwaXZvdO+8ieOAglxuICog5pWw5o2u5o6S5bqP5Zu057uV5Z+65YeG5YC86L+b6KGM77yM5bCG5YiX6KGo5Lit5bCP5LqO5Z+65YeG5YC855qE5YWD57Sg56e75Yiw5pWw57uE55qE5bqV6YOo77yM5bCG5aSn5LqO5Z+65YeG5YC855qE5YWD57Sg56e75Yiw5pWw57uE55qE6aG26YOo44CCXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0KGxpc3Q6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgbGVzc2VyID0gW107XG4gIGNvbnN0IGdyZWF0ZXIgPSBbXTtcbiAgY29uc3QgcGl2b3QgPSBsaXN0WzBdO1xuXG4gIC8vIOS7juesrOS4gOS4quWFg+e0oOW8gOWniyDlm6DkuLrnrKzkuIDkuKrlgLzkuLrln7rlh4blgLwg5aaC5p6c5Y+q5Ymp5Z+65YeG5YC8KOmAkuW9kueahOacgOacq+WImeS4jeS8mui/m+i/meS4quW+queOrylcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpc3RbaV0gPCBwaXZvdCkge1xuICAgICAgbGVzc2VyLnB1c2gobGlzdFtpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyZWF0ZXIucHVzaChsaXN0W2ldKTtcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XG4gIHJldHVybiBxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpO1xufVxuXG4vKipcbiAqIOW/q+mAn+aOkuW6j+acieW+iOWkp+eahOS8mOWMluepuumXtFxuICogMS7lj5bnmoTln7rlh4blgLzotormjqXov5Eg5pWw57uE5omA5pyJ5YWD57Sg55qE5Lit5L2N5pWwIOaOkuW6j+eahOaIkOeGn+i2iuWwkSjkuInmlbDlj5bkuK0pXG4gKiAyLuW/q+mAn+aOkuW6j+W5tuS4jeeos+WumiDlnKjliIblibLnmoTmlbDnu4TnmoTlhYPntKDnmoTkuKrmlbDlsI/kuo4xMOeahOaDheWGteS4i+WPr+S7pemHh+eUqOaPkuWFpeaOkuW6jyjnqLPlrpopIOadpeWHj+WwkeaOkuW6j+eahOasoeaVsFxuICogMy7lr7nkuo7pgJLlvZLlj6/lt7Lkvb/nlKjlsL7osIPkvJjljJYoZXM2KVxuICogKi9cblxuLy8g5LiJ5pWw5Y+W5LitKG1lZGlhbi1vZi10aHJlZSlcbi8vIOmAieWPluesrOS4gOS4quWFg+e0oCDmnIDlkI7kuIDkuKrlhYPntKAg5ZKM5Lit6Ze055qE5YWD57SgIOmAieaLqeWFtuS4rSDnmoTkuK3kvY3mlbAg5L2c5Li65Z+65YeG5YC8XG5cbmV4cG9ydCBmdW5jdGlvbiBxU29ydDEobGlzdDogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBsZXNzZXIgPSBbXTtcbiAgY29uc3QgZ3JlYXRlciA9IFtdO1xuICBtZWRpYW5PZlRocmVlKGxpc3QpO1xuICBjb25zdCBwaXZvdCA9IGxpc3RbMF07XG5cbiAgLy8g5LuO56ys5LiA5Liq5YWD57Sg5byA5aeLIOWboOS4uuesrOS4gOS4quWAvOS4uuWfuuWHhuWAvCDlpoLmnpzlj6rlianln7rlh4blgLwo6YCS5b2S55qE5pyA5pyr5YiZ5LiN5Lya6L+b6L+Z5Liq5b6q546vKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobGlzdFtpXSA8IHBpdm90KSB7XG4gICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JlYXRlci5wdXNoKGxpc3RbaV0pO1xuICAgIH1cbiAgfVxuICAvLyAgICAgICAgY29uc29sZS5sb2cocVNvcnQobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0KGdyZWF0ZXIpKSk7XG4gIHJldHVybiBxU29ydDEobGVzc2VyKS5jb25jYXQocGl2b3QsIHFTb3J0MShncmVhdGVyKSk7XG59XG5cbi8vIOS4ieaVsOWPluS4rVxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhbk9mVGhyZWUoYXJyOiBudW1iZXJbXSkge1xuICBjb25zdCBoaWdoID0gYXJyLmxlbmd0aCAtIDEsXG4gICAgbG93ID0gMCxcbiAgICBtaWQgPSAobG93ICsgKGhpZ2ggLSBsb3cpKSA+PiAxO1xuXG4gIC8vIHRzIOWPiOeri+WKn+S6hlxuICAvLyDkvb/nlKjkuInmlbDlj5bkuK3ms5XpgInmi6nmnqLovbRcbiAgaWYgKGFyclswXSA+IGFycltoaWdoXSkge1xuICAgIC8vIOebruaghzogYXJyW21pZF0gPD0gYXJyW2hpZ2hdXG4gICAgc3dhcChhcnIsIG1pZCwgaGlnaCk7XG4gIH1cbiAgaWYgKGFycltsb3ddID4gYXJyW2hpZ2hdKSB7XG4gICAgLy8g55uu5qCHOiBhcnJbbG93XSA8PSBhcnJbaGlnaF1cbiAgICBzd2FwKGFyciwgbG93LCBoaWdoKTtcbiAgfVxuICBpZiAoYXJyW21pZF0gPiBhcnJbbG93XSkge1xuICAgIC8vIOebruaghzogYXJyW2xvd10gPj0gYXJyW21pZF1cbiAgICBzd2FwKGFyciwgbWlkLCBsb3cpO1xuICB9XG59XG5cbi8vIOW9k+W+heaOkuW6j+eahOaVsOe7hOeahOmVv+W6pjw9MTAg5bCx5piv55So5o+S5YWl5o6S5bqPXG5leHBvcnQgZnVuY3Rpb24gcVNvcnQyKGxpc3Q6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgbGVzc2VyID0gW107XG4gIGNvbnN0IGdyZWF0ZXIgPSBbXTtcbiAgbWVkaWFuT2ZUaHJlZShsaXN0KTtcbiAgY29uc3QgcGl2b3QgPSBsaXN0WzBdO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA8PSAxMCkge1xuICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KGxpc3QpO1xuICB9XG5cbiAgLy8g5LuO56ys5LiA5Liq5YWD57Sg5byA5aeLIOWboOS4uuesrOS4gOS4quWAvOS4uuWfuuWHhuWAvCDlpoLmnpzlj6rlianln7rlh4blgLwo6YCS5b2S55qE5pyA5pyr5YiZ5LiN5Lya6L+b6L+Z5Liq5b6q546vKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobGlzdFtpXSA8IHBpdm90KSB7XG4gICAgICBsZXNzZXIucHVzaChsaXN0W2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JlYXRlci5wdXNoKGxpc3RbaV0pO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhxU29ydChsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQoZ3JlYXRlcikpKTtcbiAgcmV0dXJuIHFTb3J0MihsZXNzZXIpLmNvbmNhdChwaXZvdCwgcVNvcnQyKGdyZWF0ZXIpKTtcbn1cblxuLy8g6IGa6ZuG55u45ZCM5YWD57SgIOWwseaYr+WcqOWIkuWIhueahOaXtuWAmeWcqOWIhuWHuuS4gOS4quS4juWfuuWHhuWAvOebuOWQjOeahOWAvOeahOaVsOe7hCjlr7nkuo7mnInlpKfph4/nm7jlkIznmoTlhYPntKDnmoTmlbDnu4Qg5o+Q5Y2H5b6I5aSnKVxuZXhwb3J0IGZ1bmN0aW9uIHFTb3J0MyhsaXN0OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGxlc3NlciA9IFtdO1xuICBjb25zdCBncmVhdGVyID0gW107XG4gIG1lZGlhbk9mVGhyZWUobGlzdCk7XG4gIGNvbnN0IHBpdm90ID0gW2xpc3RbMF1dO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA8PSAxMCkge1xuICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KGxpc3QpO1xuICB9XG5cbiAgLy8g5LuO56ys5LiA5Liq5YWD57Sg5byA5aeLIOWboOS4uuesrOS4gOS4quWAvOS4uuWfuuWHhuWAvCDlpoLmnpzlj6rlianln7rlh4blgLwo6YCS5b2S55qE5pyA5pyr5YiZ5LiN5Lya6L+b6L+Z5Liq5b6q546vKVxuICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobGlzdFtpXSA9PT0gcGl2b3RbMF0pIHtcbiAgICAgIHBpdm90LnB1c2gobGlzdFtpXSk7XG4gICAgfSBlbHNlIGlmIChsaXN0W2ldIDwgcGl2b3RbMF0pIHtcbiAgICAgIGxlc3Nlci5wdXNoKGxpc3RbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmVhdGVyLnB1c2gobGlzdFtpXSk7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKHFTb3J0KGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydChncmVhdGVyKSkpO1xuICByZXR1cm4gcVNvcnQzKGxlc3NlcikuY29uY2F0KHBpdm90LCBxU29ydDMoZ3JlYXRlcikpO1xufVxuIl19