"use strict";
/**
 * 线性探测法隶属于一种更一般化的散列技术：开放寻址散列。
 * 当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。
 * 如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。
 * 该技术是基于这样一个事实：每个散列表都会有很多空的单元格，可以使用它们来存储数据。
 *
 * 如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
 * 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法
 * */
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    put(data) {
        // 储存一个数据
        let pos = this.betterHash(data);
        if (this.table[pos] === undefined) {
            this.table[pos] = data;
        }
        else {
            while (this.table[pos] !== undefined) {
                pos++;
            }
            this.table[pos] = data;
        }
    }
    get(key) {
        const hash = this.betterHash(key);
        if (hash > -1) {
            for (let i = hash; this.table[hash] !== undefined; i++) {
                if (this.table[hash] === key) {
                    return this.table[hash];
                }
            }
        }
        return false;
    }
    putArr(arr) {
        // 储存多个数据
        arr.forEach((v) => {
            // 箭头函数绑定了作用域
            this.put(v);
        });
    }
    showDistro() {
        // 打印所有数据
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + " : " + this.table[i]);
            }
        }
    }
    // 霍纳算法 更好的解决碰撞
    betterHash(string) {
        const H = 31;
        let total = 0;
        for (let i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return Math.floor(total);
    }
}
const T = new HashTable();
T.putArr([
    "David",
    "Jennifer",
    "Donnie",
    "Donnie",
    "Raymond",
    "Cynthia",
    "Mike",
    "Clayton",
    "Danny",
    "Jonathan",
]);
T.showDistro();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pWj5YiXLee6v+aAp+aOouafpS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi5pWw5o2u57uT5p6EL+aVo+WIly3nur/mgKfmjqLmn6UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztLQVFLOztBQUVMLE1BQU0sU0FBUztJQUFmO1FBQ0UsVUFBSyxHQUFhLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBaUVuQyxDQUFDO0lBL0RDLFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsU0FBUztRQUNULElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFhO1FBQ2xCLFNBQVM7UUFDVCxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsYUFBYTtZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ1IsU0FBUztRQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZUFBZTtJQUNmLFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ1AsT0FBTztJQUNQLFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsVUFBVTtDQUNYLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog57q/5oCn5o6i5rWL5rOV6Zq25bGe5LqO5LiA56eN5pu05LiA6Iis5YyW55qE5pWj5YiX5oqA5pyv77ya5byA5pS+5a+75Z2A5pWj5YiX44CCXG4gKiDlvZPlj5HnlJ/norDmkp7ml7bvvIznur/mgKfmjqLmtYvms5Xmo4Dmn6XmlaPliJfooajkuK3nmoTkuIvkuIDkuKrkvY3nva7mmK/lkKbkuLrnqbrjgIJcbiAqIOWmguaenOS4uuepuu+8jOWwseWwhuaVsOaNruWtmOWFpeivpeS9jee9ru+8m+WmguaenOS4jeS4uuepuu+8jOWImee7p+e7reajgOafpeS4i+S4gOS4quS9jee9ru+8jOebtOWIsOaJvuWIsOS4gOS4quepuueahOS9jee9ruS4uuatouOAglxuICog6K+l5oqA5pyv5piv5Z+65LqO6L+Z5qC35LiA5Liq5LqL5a6e77ya5q+P5Liq5pWj5YiX6KGo6YO95Lya5pyJ5b6I5aSa56m655qE5Y2V5YWD5qC877yM5Y+v5Lul5L2/55So5a6D5Lus5p2l5a2Y5YKo5pWw5o2u44CCXG4gKlxuICog5aaC5p6c5pWw57uE55qE5aSn5bCP5piv5b6F5a2Y5YKo5pWw5o2u5Liq5pWw55qEIDEuNSDlgI3vvIzpgqPkuYjkvb/nlKjlvIDpk77ms5XvvJtcbiAqIOWmguaenOaVsOe7hOeahOWkp+Wwj+aYr+W+heWtmOWCqOaVsOaNrueahOS4pOWAjeWPiuS4pOWAjeS7peS4iuaXtu+8jOmCo+S5iOS9v+eUqOe6v+aAp+aOoua1i+azlVxuICogKi9cblxuY2xhc3MgSGFzaFRhYmxlIHtcbiAgdGFibGU6IHN0cmluZ1tdID0gbmV3IEFycmF5KDEzNyk7XG5cbiAgc2ltcGxlSGFzaChkYXRhOiBzdHJpbmcpIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWwgKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWwgJSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgfVxuXG4gIHB1dChkYXRhOiBzdHJpbmcpIHtcbiAgICAvLyDlgqjlrZjkuIDkuKrmlbDmja5cbiAgICBsZXQgcG9zID0gdGhpcy5iZXR0ZXJIYXNoKGRhdGEpO1xuICAgIGlmICh0aGlzLnRhYmxlW3Bvc10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50YWJsZVtwb3NdID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHRoaXMudGFibGVbcG9zXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJsZVtwb3NdID0gZGF0YTtcbiAgICB9XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNoID0gdGhpcy5iZXR0ZXJIYXNoKGtleSk7XG4gICAgaWYgKGhhc2ggPiAtMSkge1xuICAgICAgZm9yIChsZXQgaSA9IGhhc2g7IHRoaXMudGFibGVbaGFzaF0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYmxlW2hhc2hdID09PSBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZVtoYXNoXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdXRBcnIoYXJyOiBzdHJpbmdbXSkge1xuICAgIC8vIOWCqOWtmOWkmuS4quaVsOaNrlxuICAgIGFyci5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAvLyDnrq3lpLTlh73mlbDnu5HlrprkuobkvZznlKjln59cbiAgICAgIHRoaXMucHV0KHYpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0Rpc3RybygpIHtcbiAgICAvLyDmiZPljbDmiYDmnInmlbDmja5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFibGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICh0aGlzLnRhYmxlW2ldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpICsgXCIgOiBcIiArIHRoaXMudGFibGVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOmcjee6s+eul+azlSDmm7Tlpb3nmoTop6PlhrPnorDmkp5cbiAgYmV0dGVySGFzaChzdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IEggPSAzMTtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICB0b3RhbCArPSBIICogdG90YWwgKyBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgdG90YWwgPSB0b3RhbCAlIHRoaXMudGFibGUubGVuZ3RoO1xuICAgIGlmICh0b3RhbCA8IDApIHtcbiAgICAgIHRvdGFsICs9IHRoaXMudGFibGUubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodG90YWwpO1xuICB9XG59XG5cbmNvbnN0IFQgPSBuZXcgSGFzaFRhYmxlKCk7XG5ULnB1dEFycihbXG4gIFwiRGF2aWRcIixcbiAgXCJKZW5uaWZlclwiLFxuICBcIkRvbm5pZVwiLFxuICBcIkRvbm5pZVwiLFxuICBcIlJheW1vbmRcIixcbiAgXCJDeW50aGlhXCIsXG4gIFwiTWlrZVwiLFxuICBcIkNsYXl0b25cIixcbiAgXCJEYW5ueVwiLFxuICBcIkpvbmF0aGFuXCIsXG5dKTtcblQuc2hvd0Rpc3RybygpO1xuXG5leHBvcnQge307XG4iXX0=