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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGxTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL3NoZWxsU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0tBV0s7OztBQUVMLFNBQWdCLHVCQUF1QixDQUFDLEdBQWE7SUFDakQsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQix1QkFBdUI7SUFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0MscUJBQXFCO0lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLDhCQUE4QjtRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLGVBQWU7WUFDZixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsOENBQThDO1lBQzlDLDBHQUEwRztZQUMxRyxJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9ELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUVqQjtLQUVKO0FBQ0wsQ0FBQztBQXRCRCwwREFzQkM7QUFHRCxTQUFnQix3QkFBd0IsQ0FBQyxHQUFhO0lBQ2xELE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsdUJBQXVCO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDZCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7SUFFRCwyQ0FBMkM7SUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLENBQUM7WUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QjtZQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0FBQ0wsQ0FBQztBQXBCRCw0REFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5biM5bCU5o6S5bqP55qE5qC45b+D55CG5b+15LiO5o+S5YWl5o6S5bqP5LiN5ZCM77yM5a6D5Lya6aaW5YWI5q+U6L6D6Led56a76L6D6L+c55qE5YWD57Sg77yMXHJcbiAqIOiAjOmdnuebuOmCu+eahOWFg+e0oOOAguWSjOeugOWNleWcsOavlOi+g+ebuOmCu+WFg+e0oOebuOavlO+8jFxyXG4gKiDkvb/nlKjov5nnp43mlrnmoYjlj6/ku6Xkvb/nprvmraPnoa7kvY3nva7lvojov5znmoTlhYPntKDmm7Tlv6vlnLDlm57liLDlkIjpgILnmoTkvY3nva7jgIJcclxuICog5b2T5byA5aeL55So6L+Z5Liq566X5rOV6YGN5Y6G5pWw5o2u6ZuG5pe277yM5omA5pyJ5YWD57Sg5LmL6Ze055qE6Led56a75Lya5LiN5pat5YeP5bCP77yMXHJcbiAqIOebtOWIsOWkhOeQhuWIsOaVsOaNrumbhueahOacq+Wwvu+8jOi/meaXtueul+azleavlOi+g+eahOWwseaYr+ebuOmCu+WFg+e0oOS6huOAglxyXG4gKlxyXG4gKiDluIzlsJTmjpLluo/nmoTlt6XkvZzljp/nkIbmmK/vvIzpgJrov4flrprkuYnkuIDkuKrpl7TpmpTluo/liJfmnaXooajnpLrlnKjmjpLluo/ov4fnqIvkuK3ov5vooYzmr5TovoPnmoTlhYPntKDkuYvpl7TmnInlpJrov5znmoTpl7TpmpTjgIJcclxuICog5oiR5Lus5Y+v5Lul5Yqo5oCB5a6a5LmJ6Ze06ZqU5bqP5YiX77yM5LiN6L+H5a+55LqO5aSn6YOo5YiG55qE5a6e6ZmF5bqU55So5Zy65pmv77yM566X5rOV6KaB55So5Yiw55qE6Ze06ZqU5bqP5YiX5Y+v5Lul5o+Q5YmN5a6a5aW944CCXHJcbiAqIOacgOS9s+eahOmXtOmalOW6j+WIl+aYr++8miA3MDEsIDMwMSwgMTMyLCA1NywgMjMsIDEwLCA0LCAxIOOAglxyXG4gKiDmnIDkvbPpl7TpmpTnmoTmjqjliLDorrrmlocoaHR0cDovL3N1bi5hZWkucG9sc2wucGwvfm1jaXVyYS9wdWJsaWthY2plL3NoZWxsc29ydC5wZGYpXHJcbiAqICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hlbGxTb3J0V2l0aFN0YXRpY0dhcHMoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgbGV0IGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgICAvLyDlrprkuYnpl7TpmpQg5b+F6aG75ZKM5LiL6Z2i55qE5pWw57uE5a+55bqUIOS7juWkp+WIsOWwj1xyXG4gICAgbGV0IGdhcHMgPSBbNzAxLCAzMDEsIDEzMiwgNTcsIDIzLCAxMCwgNCwgMV07XHJcblxyXG4gICAgLy8g6Ze06ZqU5oyJ54Wn5o6S5bqP55qE5q+P5qyh5Y+W55So55qE6Ze06ZqU5LiA5qyh5YeP5bCPXHJcbiAgICBmb3IgKGxldCBnID0gMDsgZyA8IGdhcHMubGVuZ3RoOyBnKyspIHtcclxuICAgICAgICAvLyDlr7nkuo7mr4/kuKrpl7TpmpTlhoUg6aG16YCQ5riQ5YeP5bCPIOebtOWIsOi/m+WFpSDkuIvkuIDkuKrmm7TlsI/nmoTpl7TpmpRcclxuICAgICAgICBmb3IgKGxldCBpID0gZ2Fwc1tnXTsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIOWCqOWtmOW9k+WJjeiKgueCueWHhuWkh+S5i+WQjuaPkuWFpVxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGFycltpXTtcclxuICAgICAgICAgICAgLy8g55u45b2T5LqO5bCGIOS7jmFycltqXeW8gOWniyDmg7PlgZog5q+P6Ze06ZqUZ2Fwc1tnXeeahOWFg+e0oCDnu4TmiJDnmoTmlbDnu4Tov5vooYzmj5LlhaXmjpLluo9cclxuICAgICAgICAgICAgLy8gYXJyW2ogLSBnYXBzW2ddXT4gdGVtcCDogIzkuI3mmK/lho3mr5TovoMg5Lik5Liq6Ze06ZqU5LmL6Ze055qE5YWD57SgIOaYr+WboOS4uiDlnKhp5YC85pu05bCP55qE5pe25YCZ5bey57uP5q+U6L6D6L+H5LqGIOaJgOS7peWPquimgeavlHRlbXDlkozkuIrkuIDmrKHpl7TpmpTnmoTlhYPntKDnmoTlpKflsI/lsLHog73liKTmlq3mmK/kuI3mmK/opoHlr7nlvZPliY1p5ZKM5b2T5YmN6Ze06ZqU6L+b6KGM5o+S5YWl5o6S5bqPXHJcbiAgICAgICAgICAgIGxldCBqO1xyXG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqID49IGdhcHNbZ10gJiYgYXJyW2ogLSBnYXBzW2ddXSA+IHRlbXA7IGogLT0gZ2Fwc1tnXSkge1xyXG4gICAgICAgICAgICAgICAgYXJyW2pdID0gYXJyW2ogLSBnYXBzW2ddXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoZWxsU29ydFdpdGhEeW5hbWljR2FwcyhhcnI6IG51bWJlcltdKSB7XHJcbiAgICBjb25zdCBOID0gYXJyLmxlbmd0aDtcclxuICAgIGxldCBoID0gMTtcclxuICAgIC8vIOWKqOaAgeeUn+aIkCBzaGVsbFNvcnQg5pyA5L2z55qE6Ze06ZqUXHJcbiAgICB3aGlsZSAoaCA8IE4gLyAzKSB7XHJcbiAgICAgICAgaCA9IDMgKiBoICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5nnp43lip7ms5Xmr5Qg5ZCR5ZCO6LWL5YC85pyA5ZCO5pu05paw5Yiw5pyA5YmN6Z2i55qE5L2N572uIOavlOS4jeWBnOS6pOaNouS4pOS4quWFg+e0oOeahOS9jee9rueahOmAn+W6puW/q+eahOWkmlxyXG4gICAgd2hpbGUgKGggPj0gMSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBoOyBpIDwgTjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXJyW2ldO1xyXG4gICAgICAgICAgICBsZXQgajtcclxuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA+PSBoICYmIGFycltqIC0gaF0gPiB0ZW1wOyBqIC09IGgpIHtcclxuICAgICAgICAgICAgICAgIGFycltqXSA9IGFycltqIC0gaF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaCA9IChoIC0gMSkgLyAzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==