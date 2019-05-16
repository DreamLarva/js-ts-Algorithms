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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGxTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3NoZWxsU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0tBV0s7O0FBRUwsU0FBZ0IsdUJBQXVCLENBQUMsR0FBYTtJQUNqRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3JCLHVCQUF1QjtJQUN2QixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QyxxQkFBcUI7SUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsOEJBQThCO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsZUFBZTtZQUNmLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQiw4Q0FBOEM7WUFDOUMsMEdBQTBHO1lBQzFHLElBQUksQ0FBQyxDQUFDO1lBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBRWpCO0tBRUo7QUFDTCxDQUFDO0FBdEJELDBEQXNCQztBQUdELFNBQWdCLHdCQUF3QixDQUFDLEdBQWE7SUFDbEQsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVix1QkFBdUI7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNkLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtJQUVELDJDQUEyQztJQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkI7QUFDTCxDQUFDO0FBcEJELDREQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDluIzlsJTmjpLluo/nmoTmoLjlv4PnkIblv7XkuI7mj5LlhaXmjpLluo/kuI3lkIzvvIzlroPkvJrpppblhYjmr5TovoPot53nprvovoPov5znmoTlhYPntKDvvIxcclxuICog6ICM6Z2e55u46YK755qE5YWD57Sg44CC5ZKM566A5Y2V5Zyw5q+U6L6D55u46YK75YWD57Sg55u45q+U77yMXHJcbiAqIOS9v+eUqOi/meenjeaWueahiOWPr+S7peS9v+emu+ato+ehruS9jee9ruW+iOi/nOeahOWFg+e0oOabtOW/q+WcsOWbnuWIsOWQiOmAgueahOS9jee9ruOAglxyXG4gKiDlvZPlvIDlp4vnlKjov5nkuKrnrpfms5XpgY3ljobmlbDmja7pm4bml7bvvIzmiYDmnInlhYPntKDkuYvpl7TnmoTot53nprvkvJrkuI3mlq3lh4/lsI/vvIxcclxuICog55u05Yiw5aSE55CG5Yiw5pWw5o2u6ZuG55qE5pyr5bC+77yM6L+Z5pe2566X5rOV5q+U6L6D55qE5bCx5piv55u46YK75YWD57Sg5LqG44CCXHJcbiAqXHJcbiAqIOW4jOWwlOaOkuW6j+eahOW3peS9nOWOn+eQhuaYr++8jOmAmui/h+WumuS5ieS4gOS4qumXtOmalOW6j+WIl+adpeihqOekuuWcqOaOkuW6j+i/h+eoi+S4rei/m+ihjOavlOi+g+eahOWFg+e0oOS5i+mXtOacieWkmui/nOeahOmXtOmalOOAglxyXG4gKiDmiJHku6zlj6/ku6XliqjmgIHlrprkuYnpl7TpmpTluo/liJfvvIzkuI3ov4flr7nkuo7lpKfpg6jliIbnmoTlrp7pmYXlupTnlKjlnLrmma/vvIznrpfms5XopoHnlKjliLDnmoTpl7TpmpTluo/liJflj6/ku6Xmj5DliY3lrprlpb3jgIJcclxuICog5pyA5L2z55qE6Ze06ZqU5bqP5YiX5piv77yaIDcwMSwgMzAxLCAxMzIsIDU3LCAyMywgMTAsIDQsIDEg44CCXHJcbiAqIOacgOS9s+mXtOmalOeahOaOqOWIsOiuuuaWhyhodHRwOi8vc3VuLmFlaS5wb2xzbC5wbC9+bWNpdXJhL3B1Ymxpa2FjamUvc2hlbGxzb3J0LnBkZilcclxuICogKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGVsbFNvcnRXaXRoU3RhdGljR2FwcyhhcnI6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgbGVuID0gYXJyLmxlbmd0aDtcclxuICAgIC8vIOWumuS5iemXtOmalCDlv4XpobvlkozkuIvpnaLnmoTmlbDnu4Tlr7nlupQg5LuO5aSn5Yiw5bCPXHJcbiAgICBsZXQgZ2FwcyA9IFs3MDEsIDMwMSwgMTMyLCA1NywgMjMsIDEwLCA0LCAxXTtcclxuXHJcbiAgICAvLyDpl7TpmpTmjInnhafmjpLluo/nmoTmr4/mrKHlj5bnlKjnmoTpl7TpmpTkuIDmrKHlh4/lsI9cclxuICAgIGZvciAobGV0IGcgPSAwOyBnIDwgZ2Fwcy5sZW5ndGg7IGcrKykge1xyXG4gICAgICAgIC8vIOWvueS6juavj+S4qumXtOmalOWGhSDpobXpgJDmuJDlh4/lsI8g55u05Yiw6L+b5YWlIOS4i+S4gOS4quabtOWwj+eahOmXtOmalFxyXG4gICAgICAgIGZvciAobGV0IGkgPSBnYXBzW2ddOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgLy8g5YKo5a2Y5b2T5YmN6IqC54K55YeG5aSH5LmL5ZCO5o+S5YWlXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXJyW2ldO1xyXG4gICAgICAgICAgICAvLyDnm7jlvZPkuo7lsIYg5LuOYXJyW2pd5byA5aeLIOaDs+WBmiDmr4/pl7TpmpRnYXBzW2dd55qE5YWD57SgIOe7hOaIkOeahOaVsOe7hOi/m+ihjOaPkuWFpeaOkuW6j1xyXG4gICAgICAgICAgICAvLyBhcnJbaiAtIGdhcHNbZ11dPiB0ZW1wIOiAjOS4jeaYr+WGjeavlOi+gyDkuKTkuKrpl7TpmpTkuYvpl7TnmoTlhYPntKAg5piv5Zug5Li6IOWcqGnlgLzmm7TlsI/nmoTml7blgJnlt7Lnu4/mr5TovoPov4fkuoYg5omA5Lul5Y+q6KaB5q+UdGVtcOWSjOS4iuS4gOasoemXtOmalOeahOWFg+e0oOeahOWkp+Wwj+WwseiDveWIpOaWreaYr+S4jeaYr+imgeWvueW9k+WJjWnlkozlvZPliY3pl7TpmpTov5vooYzmj5LlhaXmjpLluo9cclxuICAgICAgICAgICAgbGV0IGo7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPj0gZ2Fwc1tnXSAmJiBhcnJbaiAtIGdhcHNbZ11dID4gdGVtcDsgaiAtPSBnYXBzW2ddKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJbal0gPSBhcnJbaiAtIGdhcHNbZ11dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFycltqXSA9IHRlbXA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hlbGxTb3J0V2l0aER5bmFtaWNHYXBzKGFycjogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IE4gPSBhcnIubGVuZ3RoO1xyXG4gICAgbGV0IGggPSAxO1xyXG4gICAgLy8g5Yqo5oCB55Sf5oiQIHNoZWxsU29ydCDmnIDkvbPnmoTpl7TpmpRcclxuICAgIHdoaWxlIChoIDwgTiAvIDMpIHtcclxuICAgICAgICBoID0gMyAqIGggKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/meenjeWKnuazleavlCDlkJHlkI7otYvlgLzmnIDlkI7mm7TmlrDliLDmnIDliY3pnaLnmoTkvY3nva4g5q+U5LiN5YGc5Lqk5o2i5Lik5Liq5YWD57Sg55qE5L2N572u55qE6YCf5bqm5b+r55qE5aSaXHJcbiAgICB3aGlsZSAoaCA+PSAxKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGg7IGkgPCBOOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGxldCBqO1xyXG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqID49IGggJiYgYXJyW2ogLSBoXSA+IHRlbXA7IGogLT0gaCkge1xyXG4gICAgICAgICAgICAgICAgYXJyW2pdID0gYXJyW2ogLSBoXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoID0gKGggLSAxKSAvIDM7XHJcbiAgICB9XHJcbn1cclxuIl19