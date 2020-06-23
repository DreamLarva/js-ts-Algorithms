"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellSortWithDynamicGaps = exports.shellSortWithStaticGaps = void 0;
function shellSortWithStaticGaps(arr) {
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
exports.shellSortWithStaticGaps = shellSortWithStaticGaps;
function shellSortWithDynamicGaps(arr) {
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
exports.shellSortWithDynamicGaps = shellSortWithDynamicGaps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGxTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3NoZWxsU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0tBV0s7OztBQUVMLFNBQWdCLHVCQUF1QixDQUFDLEdBQWE7SUFDbkQsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQix1QkFBdUI7SUFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0MscUJBQXFCO0lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLDhCQUE4QjtRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLGVBQWU7WUFDZixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsOENBQThDO1lBQzlDLDBHQUEwRztZQUMxRyxJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNmO0tBQ0Y7QUFDSCxDQUFDO0FBcEJELDBEQW9CQztBQUVELFNBQWdCLHdCQUF3QixDQUFDLEdBQWE7SUFDcEQsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVix1QkFBdUI7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNoQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDZjtJQUVELDJDQUEyQztJQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9DLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNmO1FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFwQkQsNERBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDluIzlsJTmjpLluo/nmoTmoLjlv4PnkIblv7XkuI7mj5LlhaXmjpLluo/kuI3lkIzvvIzlroPkvJrpppblhYjmr5TovoPot53nprvovoPov5znmoTlhYPntKDvvIxcbiAqIOiAjOmdnuebuOmCu+eahOWFg+e0oOOAguWSjOeugOWNleWcsOavlOi+g+ebuOmCu+WFg+e0oOebuOavlO+8jFxuICog5L2/55So6L+Z56eN5pa55qGI5Y+v5Lul5L2/56a75q2j56Gu5L2N572u5b6I6L+c55qE5YWD57Sg5pu05b+r5Zyw5Zue5Yiw5ZCI6YCC55qE5L2N572u44CCXG4gKiDlvZPlvIDlp4vnlKjov5nkuKrnrpfms5XpgY3ljobmlbDmja7pm4bml7bvvIzmiYDmnInlhYPntKDkuYvpl7TnmoTot53nprvkvJrkuI3mlq3lh4/lsI/vvIxcbiAqIOebtOWIsOWkhOeQhuWIsOaVsOaNrumbhueahOacq+Wwvu+8jOi/meaXtueul+azleavlOi+g+eahOWwseaYr+ebuOmCu+WFg+e0oOS6huOAglxuICpcbiAqIOW4jOWwlOaOkuW6j+eahOW3peS9nOWOn+eQhuaYr++8jOmAmui/h+WumuS5ieS4gOS4qumXtOmalOW6j+WIl+adpeihqOekuuWcqOaOkuW6j+i/h+eoi+S4rei/m+ihjOavlOi+g+eahOWFg+e0oOS5i+mXtOacieWkmui/nOeahOmXtOmalOOAglxuICog5oiR5Lus5Y+v5Lul5Yqo5oCB5a6a5LmJ6Ze06ZqU5bqP5YiX77yM5LiN6L+H5a+55LqO5aSn6YOo5YiG55qE5a6e6ZmF5bqU55So5Zy65pmv77yM566X5rOV6KaB55So5Yiw55qE6Ze06ZqU5bqP5YiX5Y+v5Lul5o+Q5YmN5a6a5aW944CCXG4gKiDmnIDkvbPnmoTpl7TpmpTluo/liJfmmK/vvJogNzAxLCAzMDEsIDEzMiwgNTcsIDIzLCAxMCwgNCwgMSDjgIJcbiAqIOacgOS9s+mXtOmalOeahOaOqOWIsOiuuuaWhyhodHRwOi8vc3VuLmFlaS5wb2xzbC5wbC9+bWNpdXJhL3B1Ymxpa2FjamUvc2hlbGxzb3J0LnBkZilcbiAqICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGVsbFNvcnRXaXRoU3RhdGljR2FwcyhhcnI6IG51bWJlcltdKSB7XG4gIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xuICAvLyDlrprkuYnpl7TpmpQg5b+F6aG75ZKM5LiL6Z2i55qE5pWw57uE5a+55bqUIOS7juWkp+WIsOWwj1xuICBsZXQgZ2FwcyA9IFs3MDEsIDMwMSwgMTMyLCA1NywgMjMsIDEwLCA0LCAxXTtcblxuICAvLyDpl7TpmpTmjInnhafmjpLluo/nmoTmr4/mrKHlj5bnlKjnmoTpl7TpmpTkuIDmrKHlh4/lsI9cbiAgZm9yIChsZXQgZyA9IDA7IGcgPCBnYXBzLmxlbmd0aDsgZysrKSB7XG4gICAgLy8g5a+55LqO5q+P5Liq6Ze06ZqU5YaFIOmhtemAkOa4kOWHj+WwjyDnm7TliLDov5vlhaUg5LiL5LiA5Liq5pu05bCP55qE6Ze06ZqUXG4gICAgZm9yIChsZXQgaSA9IGdhcHNbZ107IGkgPCBsZW47IGkrKykge1xuICAgICAgLy8g5YKo5a2Y5b2T5YmN6IqC54K55YeG5aSH5LmL5ZCO5o+S5YWlXG4gICAgICBsZXQgdGVtcCA9IGFycltpXTtcbiAgICAgIC8vIOebuOW9k+S6juWwhiDku45hcnJbal3lvIDlp4sg5oOz5YGaIOavj+mXtOmalGdhcHNbZ13nmoTlhYPntKAg57uE5oiQ55qE5pWw57uE6L+b6KGM5o+S5YWl5o6S5bqPXG4gICAgICAvLyBhcnJbaiAtIGdhcHNbZ11dPiB0ZW1wIOiAjOS4jeaYr+WGjeavlOi+gyDkuKTkuKrpl7TpmpTkuYvpl7TnmoTlhYPntKAg5piv5Zug5Li6IOWcqGnlgLzmm7TlsI/nmoTml7blgJnlt7Lnu4/mr5TovoPov4fkuoYg5omA5Lul5Y+q6KaB5q+UdGVtcOWSjOS4iuS4gOasoemXtOmalOeahOWFg+e0oOeahOWkp+Wwj+WwseiDveWIpOaWreaYr+S4jeaYr+imgeWvueW9k+WJjWnlkozlvZPliY3pl7TpmpTov5vooYzmj5LlhaXmjpLluo9cbiAgICAgIGxldCBqO1xuICAgICAgZm9yIChqID0gaTsgaiA+PSBnYXBzW2ddICYmIGFycltqIC0gZ2Fwc1tnXV0gPiB0ZW1wOyBqIC09IGdhcHNbZ10pIHtcbiAgICAgICAgYXJyW2pdID0gYXJyW2ogLSBnYXBzW2ddXTtcbiAgICAgIH1cbiAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGVsbFNvcnRXaXRoRHluYW1pY0dhcHMoYXJyOiBudW1iZXJbXSkge1xuICBjb25zdCBOID0gYXJyLmxlbmd0aDtcbiAgbGV0IGggPSAxO1xuICAvLyDliqjmgIHnlJ/miJAgc2hlbGxTb3J0IOacgOS9s+eahOmXtOmalFxuICB3aGlsZSAoaCA8IE4gLyAzKSB7XG4gICAgaCA9IDMgKiBoICsgMTtcbiAgfVxuXG4gIC8vIOi/meenjeWKnuazleavlCDlkJHlkI7otYvlgLzmnIDlkI7mm7TmlrDliLDmnIDliY3pnaLnmoTkvY3nva4g5q+U5LiN5YGc5Lqk5o2i5Lik5Liq5YWD57Sg55qE5L2N572u55qE6YCf5bqm5b+r55qE5aSaXG4gIHdoaWxlIChoID49IDEpIHtcbiAgICBmb3IgKGxldCBpID0gaDsgaSA8IE47IGkrKykge1xuICAgICAgbGV0IHRlbXAgPSBhcnJbaV07XG4gICAgICBsZXQgajtcbiAgICAgIGZvciAoaiA9IGk7IGogPj0gaCAmJiBhcnJbaiAtIGhdID4gdGVtcDsgaiAtPSBoKSB7XG4gICAgICAgIGFycltqXSA9IGFycltqIC0gaF07XG4gICAgICB9XG4gICAgICBhcnJbal0gPSB0ZW1wO1xuICAgIH1cbiAgICBoID0gKGggLSAxKSAvIDM7XG4gIH1cbn1cbiJdfQ==