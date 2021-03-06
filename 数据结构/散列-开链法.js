"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 散列表的呈现是一个二维数组
 * 发生碰撞的内容依次推入对应的数组中
 *
 * 如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
 * 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法
 * */
class HashTable {
    table = new Array(137);
    // 储存一个数据
    put(data) {
        const pos = this.betterHash(data);
        if (this.table[pos]) {
            this.table[pos].push(data);
        }
        else {
            this.table[pos] = [data];
        }
    }
    // 储存多个数据
    putArr(arr) {
        arr.forEach((v) => {
            // 箭头函数绑定了作用域
            this.put(v);
        });
    }
    // 打印所有数据
    showDistro() {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                this.table[i].forEach((value) => {
                    console.log(i + " : " + value);
                });
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
    get(key) {
        const pos = this.betterHash(key);
        if (!this.table[pos]) {
            return false;
        }
        else if (this.table[pos].length === 1) {
            return this.table[pos];
        }
        else {
            return this.table[pos].filter((v) => v === key) || false;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pWj5YiXLeW8gOmTvuazlS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi5pWw5o2u57uT5p6EL+aVo+WIly3lvIDpk77ms5UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0tBTUs7QUFDTCxNQUFNLFNBQVM7SUFDYixLQUFLLEdBQWUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkMsU0FBUztJQUNULEdBQUcsQ0FBQyxJQUFZO1FBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxTQUFTO0lBQ1QsTUFBTSxDQUFDLEdBQWE7UUFDbEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2hCLGFBQWE7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztJQUNULFVBQVU7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZUFBZTtJQUNmLFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ1AsT0FBTztJQUNQLFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsVUFBVTtDQUNYLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5pWj5YiX6KGo55qE5ZGI546w5piv5LiA5Liq5LqM57u05pWw57uEXG4gKiDlj5HnlJ/norDmkp7nmoTlhoXlrrnkvp3mrKHmjqjlhaXlr7nlupTnmoTmlbDnu4TkuK1cbiAqXG4gKiDlpoLmnpzmlbDnu4TnmoTlpKflsI/mmK/lvoXlrZjlgqjmlbDmja7kuKrmlbDnmoQgMS41IOWAje+8jOmCo+S5iOS9v+eUqOW8gOmTvuazle+8m1xuICog5aaC5p6c5pWw57uE55qE5aSn5bCP5piv5b6F5a2Y5YKo5pWw5o2u55qE5Lik5YCN5Y+K5Lik5YCN5Lul5LiK5pe277yM6YKj5LmI5L2/55So57q/5oCn5o6i5rWL5rOVXG4gKiAqL1xuY2xhc3MgSGFzaFRhYmxlIHtcbiAgdGFibGU6IHN0cmluZ1tdW10gPSBuZXcgQXJyYXkoMTM3KTtcblxuICAvLyDlgqjlrZjkuIDkuKrmlbDmja5cbiAgcHV0KGRhdGE6IHN0cmluZykge1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuYmV0dGVySGFzaChkYXRhKTtcbiAgICBpZiAodGhpcy50YWJsZVtwb3NdKSB7XG4gICAgICB0aGlzLnRhYmxlW3Bvc10ucHVzaChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZVtwb3NdID0gW2RhdGFdO1xuICAgIH1cbiAgfVxuXG4gIC8vIOWCqOWtmOWkmuS4quaVsOaNrlxuICBwdXRBcnIoYXJyOiBzdHJpbmdbXSkge1xuICAgIGFyci5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAvLyDnrq3lpLTlh73mlbDnu5HlrprkuobkvZznlKjln59cbiAgICAgIHRoaXMucHV0KHYpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g5omT5Y2w5omA5pyJ5pWw5o2uXG4gIHNob3dEaXN0cm8oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy50YWJsZVtpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50YWJsZVtpXS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGkgKyBcIiA6IFwiICsgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDpnI3nurPnrpfms5Ug5pu05aW955qE6Kej5Yaz56Kw5pKeXG4gIGJldHRlckhhc2goc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBIID0gMzE7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgdG90YWwgKz0gSCAqIHRvdGFsICsgc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHRvdGFsID0gdG90YWwgJSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICBpZiAodG90YWwgPCAwKSB7XG4gICAgICB0b3RhbCArPSB0aGlzLnRhYmxlLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHRvdGFsKTtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuYmV0dGVySGFzaChrZXkpO1xuICAgIGlmICghdGhpcy50YWJsZVtwb3NdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlW3Bvc10ubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy50YWJsZVtwb3NdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50YWJsZVtwb3NdLmZpbHRlcigodikgPT4gdiA9PT0ga2V5KSB8fCBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgVCA9IG5ldyBIYXNoVGFibGUoKTtcblQucHV0QXJyKFtcbiAgXCJEYXZpZFwiLFxuICBcIkplbm5pZmVyXCIsXG4gIFwiRG9ubmllXCIsXG4gIFwiRG9ubmllXCIsXG4gIFwiUmF5bW9uZFwiLFxuICBcIkN5bnRoaWFcIixcbiAgXCJNaWtlXCIsXG4gIFwiQ2xheXRvblwiLFxuICBcIkRhbm55XCIsXG4gIFwiSm9uYXRoYW5cIixcbl0pO1xuVC5zaG93RGlzdHJvKCk7XG5cbmV4cG9ydCB7fTtcbiJdfQ==