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
    table = new Array(137);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pWj5YiXLee6v+aAp+aOouafpS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi5pWw5o2u57uT5p6EL+aVo+WIly3nur/mgKfmjqLmn6UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztLQVFLOztBQUVMLE1BQU0sU0FBUztJQUNiLEtBQUssR0FBYSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQyxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBWTtRQUNkLFNBQVM7UUFDVCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLEdBQUcsRUFBRSxDQUFDO2FBQ1A7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBYTtRQUNsQixTQUFTO1FBQ1QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2hCLGFBQWE7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLFNBQVM7UUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELGVBQWU7SUFDZixVQUFVLENBQUMsTUFBYztRQUN2QixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNQLE9BQU87SUFDUCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVU7Q0FDWCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOe6v+aAp+aOoua1i+azlematuWxnuS6juS4gOenjeabtOS4gOiIrOWMlueahOaVo+WIl+aKgOacr++8muW8gOaUvuWvu+WdgOaVo+WIl+OAglxuICog5b2T5Y+R55Sf56Kw5pKe5pe277yM57q/5oCn5o6i5rWL5rOV5qOA5p+l5pWj5YiX6KGo5Lit55qE5LiL5LiA5Liq5L2N572u5piv5ZCm5Li656m644CCXG4gKiDlpoLmnpzkuLrnqbrvvIzlsLHlsIbmlbDmja7lrZjlhaXor6XkvY3nva7vvJvlpoLmnpzkuI3kuLrnqbrvvIzliJnnu6fnu63mo4Dmn6XkuIvkuIDkuKrkvY3nva7vvIznm7TliLDmib7liLDkuIDkuKrnqbrnmoTkvY3nva7kuLrmraLjgIJcbiAqIOivpeaKgOacr+aYr+WfuuS6jui/meagt+S4gOS4quS6i+Wunu+8muavj+S4quaVo+WIl+ihqOmDveS8muacieW+iOWkmuepuueahOWNleWFg+agvO+8jOWPr+S7peS9v+eUqOWug+S7rOadpeWtmOWCqOaVsOaNruOAglxuICpcbiAqIOWmguaenOaVsOe7hOeahOWkp+Wwj+aYr+W+heWtmOWCqOaVsOaNruS4quaVsOeahCAxLjUg5YCN77yM6YKj5LmI5L2/55So5byA6ZO+5rOV77ybXG4gKiDlpoLmnpzmlbDnu4TnmoTlpKflsI/mmK/lvoXlrZjlgqjmlbDmja7nmoTkuKTlgI3lj4rkuKTlgI3ku6XkuIrml7bvvIzpgqPkuYjkvb/nlKjnur/mgKfmjqLmtYvms5VcbiAqICovXG5cbmNsYXNzIEhhc2hUYWJsZSB7XG4gIHRhYmxlOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgxMzcpO1xuXG4gIHNpbXBsZUhhc2goZGF0YTogc3RyaW5nKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsICUgdGhpcy50YWJsZS5sZW5ndGg7XG4gIH1cblxuICBwdXQoZGF0YTogc3RyaW5nKSB7XG4gICAgLy8g5YKo5a2Y5LiA5Liq5pWw5o2uXG4gICAgbGV0IHBvcyA9IHRoaXMuYmV0dGVySGFzaChkYXRhKTtcbiAgICBpZiAodGhpcy50YWJsZVtwb3NdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGFibGVbcG9zXSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICh0aGlzLnRhYmxlW3Bvc10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3MrKztcbiAgICAgIH1cbiAgICAgIHRoaXMudGFibGVbcG9zXSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzaCA9IHRoaXMuYmV0dGVySGFzaChrZXkpO1xuICAgIGlmIChoYXNoID4gLTEpIHtcbiAgICAgIGZvciAobGV0IGkgPSBoYXNoOyB0aGlzLnRhYmxlW2hhc2hdICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICBpZiAodGhpcy50YWJsZVtoYXNoXSA9PT0ga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudGFibGVbaGFzaF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHV0QXJyKGFycjogc3RyaW5nW10pIHtcbiAgICAvLyDlgqjlrZjlpJrkuKrmlbDmja5cbiAgICBhcnIuZm9yRWFjaCgodikgPT4ge1xuICAgICAgLy8g566t5aS05Ye95pWw57uR5a6a5LqG5L2c55So5Z+fXG4gICAgICB0aGlzLnB1dCh2KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dEaXN0cm8oKSB7XG4gICAgLy8g5omT5Y2w5omA5pyJ5pWw5o2uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy50YWJsZVtpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaSArIFwiIDogXCIgKyB0aGlzLnRhYmxlW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDpnI3nurPnrpfms5Ug5pu05aW955qE6Kej5Yaz56Kw5pKeXG4gIGJldHRlckhhc2goc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBIID0gMzE7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgdG90YWwgKz0gSCAqIHRvdGFsICsgc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHRvdGFsID0gdG90YWwgJSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICBpZiAodG90YWwgPCAwKSB7XG4gICAgICB0b3RhbCArPSB0aGlzLnRhYmxlLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHRvdGFsKTtcbiAgfVxufVxuXG5jb25zdCBUID0gbmV3IEhhc2hUYWJsZSgpO1xuVC5wdXRBcnIoW1xuICBcIkRhdmlkXCIsXG4gIFwiSmVubmlmZXJcIixcbiAgXCJEb25uaWVcIixcbiAgXCJEb25uaWVcIixcbiAgXCJSYXltb25kXCIsXG4gIFwiQ3ludGhpYVwiLFxuICBcIk1pa2VcIixcbiAgXCJDbGF5dG9uXCIsXG4gIFwiRGFubnlcIixcbiAgXCJKb25hdGhhblwiLFxuXSk7XG5ULnNob3dEaXN0cm8oKTtcblxuZXhwb3J0IHt9O1xuIl19