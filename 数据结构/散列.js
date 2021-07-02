"use strict";
/**
 * 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。
 * 也可称为散列表 或者 哈希表
 * 散列使用的数据结构叫做散列表。
 * 在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却效率低下，比如查找一组数据中的最大值和最小值。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 散列表是基于数组进行设计的。
 * 数组的长度是预先设定的，如有需要，可以随时增加。
 * 所有元素根据和该元素对应的键，保存在数组的特定位置，该键和我们前面讲到的字典中的键是类似的概念。
 * 使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是 0 到散列表的长度。
 * 理想情况下，散列函数会将每个键值映射为一个唯一的数组索引。
 * 然而，键的数量是无限的，数组的长度是有限的（理论上，在 JavaScript 中是这样），
 * 一个更现实的目标是让散列函数尽量将键均匀地映射到数组中。
 * 即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为碰撞（collision）。
 * 要确定的最后一个问题是：散列表中的数组究竟应该有多大？这是编写散列函数时必须要考虑的。
 * 对数组大小常见的限制是：数组长度应该是一个质数。
 * */
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
        const pos = this.betterHash(data);
        this.table[pos] = data;
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
    putArr(arr) {
        // 储存多个数据
        arr.forEach((v) => {
            // 箭头函数绑定了作用域
            const pos = this.betterHash(v);
            this.table[pos] = v;
            // console.log(pos, v);
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
}
const T = new HashTable();
T.putArr([
    "David",
    "Jennifer",
    "Donnie",
    "Raymond",
    "Cynthia",
    "Mike",
    "Clayton",
    "Danny",
    "Jonathan",
]);
T.showDistro();
console.log("-----------");
/**
 * 如果用散列来存储数据
 * 那么每个数据就必须要要一个主键 来作为key
 * */
class HashTableData {
    table = new Array(137);
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
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
    // 储存一个数据
    put(key, data) {
        const pos = this.betterHash(key);
        this.table[pos] = data;
    }
    get(key) {
        return this.table[this.betterHash(key)];
    }
    // 打印所有数据
    showDistro() {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + " : " + JSON.stringify(this.table[i]));
            }
        }
    }
}
const TD = new HashTableData();
const data = { key: "123", value: "abc" };
TD.put(data.key, data);
TD.showDistro();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pWj5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5pWj5YiXLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7S0FLSzs7QUFFTDs7Ozs7Ozs7Ozs7S0FXSztBQUVMLE1BQU0sU0FBUztJQUNiLEtBQUssR0FBYSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQyxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBWTtRQUNkLFNBQVM7UUFDVCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlO0lBQ2YsVUFBVSxDQUFDLE1BQWM7UUFDdkIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUNELEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFN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QUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsU0FBUztJQUNULFVBQVU7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7U0FDRjtJQUNILENBQUM7Q0FDRjtBQUVELE1BQU0sRUFBRSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFDL0IsTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmlaPliJfmmK/kuIDnp43luLjnlKjnmoTmlbDmja7lrZjlgqjmioDmnK/vvIzmlaPliJflkI7nmoTmlbDmja7lj6/ku6Xlv6vpgJ/lnLDmj5LlhaXmiJblj5bnlKjjgIJcbiAqIOS5n+WPr+ensOS4uuaVo+WIl+ihqCDmiJbogIUg5ZOI5biM6KGoXG4gKiDmlaPliJfkvb/nlKjnmoTmlbDmja7nu5PmnoTlj6vlgZrmlaPliJfooajjgIJcbiAqIOWcqOaVo+WIl+ihqOS4iuaPkuWFpeOAgeWIoOmZpOWSjOWPlueUqOaVsOaNrumDvemdnuW4uOW/q++8jOS9huaYr+WvueS6juafpeaJvuaTjeS9nOadpeivtOWNtOaViOeOh+S9juS4i++8jOavlOWmguafpeaJvuS4gOe7hOaVsOaNruS4reeahOacgOWkp+WAvOWSjOacgOWwj+WAvOOAglxuICogKi9cblxuLyoqXG4gKiDmlaPliJfooajmmK/ln7rkuo7mlbDnu4Tov5vooYzorr7orqHnmoTjgIJcbiAqIOaVsOe7hOeahOmVv+W6puaYr+mihOWFiOiuvuWumueahO+8jOWmguaciemcgOimge+8jOWPr+S7pemaj+aXtuWinuWKoOOAglxuICog5omA5pyJ5YWD57Sg5qC55o2u5ZKM6K+l5YWD57Sg5a+55bqU55qE6ZSu77yM5L+d5a2Y5Zyo5pWw57uE55qE54m55a6a5L2N572u77yM6K+l6ZSu5ZKM5oiR5Lus5YmN6Z2i6K6y5Yiw55qE5a2X5YW45Lit55qE6ZSu5piv57G75Ly855qE5qaC5b+144CCXG4gKiDkvb/nlKjmlaPliJfooajlrZjlgqjmlbDmja7ml7bvvIzpgJrov4fkuIDkuKrmlaPliJflh73mlbDlsIbplK7mmKDlsITkuLrkuIDkuKrmlbDlrZfvvIzov5nkuKrmlbDlrZfnmoTojIPlm7TmmK8gMCDliLDmlaPliJfooajnmoTplb/luqbjgIJcbiAqIOeQhuaDs+aDheWGteS4i++8jOaVo+WIl+WHveaVsOS8muWwhuavj+S4qumUruWAvOaYoOWwhOS4uuS4gOS4quWUr+S4gOeahOaVsOe7hOe0ouW8leOAglxuICog54S26ICM77yM6ZSu55qE5pWw6YeP5piv5peg6ZmQ55qE77yM5pWw57uE55qE6ZW/5bqm5piv5pyJ6ZmQ55qE77yI55CG6K665LiK77yM5ZyoIEphdmFTY3JpcHQg5Lit5piv6L+Z5qC377yJ77yMXG4gKiDkuIDkuKrmm7TnjrDlrp7nmoTnm67moIfmmK/orqnmlaPliJflh73mlbDlsL3ph4/lsIbplK7lnYfljIDlnLDmmKDlsITliLDmlbDnu4TkuK3jgIJcbiAqIOWNs+S9v+S9v+eUqOS4gOS4qumrmOaViOeahOaVo+WIl+WHveaVsO+8jOS7jeeEtuWtmOWcqOWwhuS4pOS4qumUruaYoOWwhOaIkOWQjOS4gOS4quWAvOeahOWPr+iDve+8jOi/meenjeeOsOixoeensOS4uueisOaSnu+8iGNvbGxpc2lvbu+8ieOAglxuICog6KaB56Gu5a6a55qE5pyA5ZCO5LiA5Liq6Zeu6aKY5piv77ya5pWj5YiX6KGo5Lit55qE5pWw57uE56m256uf5bqU6K+l5pyJ5aSa5aSn77yf6L+Z5piv57yW5YaZ5pWj5YiX5Ye95pWw5pe25b+F6aG76KaB6ICD6JmR55qE44CCXG4gKiDlr7nmlbDnu4TlpKflsI/luLjop4HnmoTpmZDliLbmmK/vvJrmlbDnu4Tplb/luqblupTor6XmmK/kuIDkuKrotKjmlbDjgIJcbiAqICovXG5cbmNsYXNzIEhhc2hUYWJsZSB7XG4gIHRhYmxlOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgxMzcpO1xuXG4gIHNpbXBsZUhhc2goZGF0YTogc3RyaW5nKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsICUgdGhpcy50YWJsZS5sZW5ndGg7XG4gIH1cblxuICBwdXQoZGF0YTogc3RyaW5nKSB7XG4gICAgLy8g5YKo5a2Y5LiA5Liq5pWw5o2uXG4gICAgY29uc3QgcG9zID0gdGhpcy5iZXR0ZXJIYXNoKGRhdGEpO1xuICAgIHRoaXMudGFibGVbcG9zXSA9IGRhdGE7XG4gIH1cblxuICAvLyDpnI3nurPnrpfms5Ug5pu05aW955qE6Kej5Yaz56Kw5pKeXG4gIGJldHRlckhhc2goc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBIID0gMzE7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgdG90YWwgKz0gSCAqIHRvdGFsICsgc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHRvdGFsID0gdG90YWwgJSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICBpZiAodG90YWwgPCAwKSB7XG4gICAgICB0b3RhbCArPSB0aGlzLnRhYmxlLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHRvdGFsKTtcbiAgfVxuXG4gIHB1dEFycihhcnI6IHN0cmluZ1tdKSB7XG4gICAgLy8g5YKo5a2Y5aSa5Liq5pWw5o2uXG4gICAgYXJyLmZvckVhY2goKHYpID0+IHtcbiAgICAgIC8vIOeureWktOWHveaVsOe7keWumuS6huS9nOeUqOWfn1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5iZXR0ZXJIYXNoKHYpO1xuICAgICAgdGhpcy50YWJsZVtwb3NdID0gdjtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBvcywgdik7XG4gICAgfSk7XG4gIH1cblxuICBzaG93RGlzdHJvKCkge1xuICAgIC8vIOaJk+WNsOaJgOacieaVsOaNrlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMudGFibGVbaV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkgKyBcIiA6IFwiICsgdGhpcy50YWJsZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFQgPSBuZXcgSGFzaFRhYmxlKCk7XG5ULnB1dEFycihbXG4gIFwiRGF2aWRcIixcbiAgXCJKZW5uaWZlclwiLFxuICBcIkRvbm5pZVwiLFxuICBcIlJheW1vbmRcIixcbiAgXCJDeW50aGlhXCIsXG4gIFwiTWlrZVwiLFxuICBcIkNsYXl0b25cIixcbiAgXCJEYW5ueVwiLFxuICBcIkpvbmF0aGFuXCIsXG5dKTtcblQuc2hvd0Rpc3RybygpO1xuY29uc29sZS5sb2coXCItLS0tLS0tLS0tLVwiKTtcblxuLyoqXG4gKiDlpoLmnpznlKjmlaPliJfmnaXlrZjlgqjmlbDmja5cbiAqIOmCo+S5iOavj+S4quaVsOaNruWwseW/hemhu+imgeimgeS4gOS4quS4u+mUriDmnaXkvZzkuLprZXlcbiAqICovXG5jbGFzcyBIYXNoVGFibGVEYXRhPFQgPSBhbnk+IHtcbiAgdGFibGU6IFRbXSA9IG5ldyBBcnJheSgxMzcpO1xuXG4gIHNpbXBsZUhhc2goZGF0YTogc3RyaW5nKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsICUgdGhpcy50YWJsZS5sZW5ndGg7XG4gIH1cblxuICAvLyDpnI3nurPnrpfms5Ug5pu05aW955qE6Kej5Yaz56Kw5pKeXG4gIGJldHRlckhhc2goc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBIID0gMzE7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgdG90YWwgKz0gSCAqIHRvdGFsICsgc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHRvdGFsID0gdG90YWwgJSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICBpZiAodG90YWwgPCAwKSB7XG4gICAgICB0b3RhbCArPSB0aGlzLnRhYmxlLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHRvdGFsKTtcbiAgfVxuXG4gIC8vIOWCqOWtmOS4gOS4quaVsOaNrlxuICBwdXQoa2V5OiBzdHJpbmcsIGRhdGE6IFQpIHtcbiAgICBjb25zdCBwb3MgPSB0aGlzLmJldHRlckhhc2goa2V5KTtcbiAgICB0aGlzLnRhYmxlW3Bvc10gPSBkYXRhO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVbdGhpcy5iZXR0ZXJIYXNoKGtleSldO1xuICB9XG5cbiAgLy8g5omT5Y2w5omA5pyJ5pWw5o2uXG4gIHNob3dEaXN0cm8oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy50YWJsZVtpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaSArIFwiIDogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRhYmxlW2ldKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFREID0gbmV3IEhhc2hUYWJsZURhdGEoKTtcbmNvbnN0IGRhdGEgPSB7IGtleTogXCIxMjNcIiwgdmFsdWU6IFwiYWJjXCIgfTtcblRELnB1dChkYXRhLmtleSwgZGF0YSk7XG5URC5zaG93RGlzdHJvKCk7XG5cbmV4cG9ydCB7fTtcbiJdfQ==