"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
// 冒泡排序
// 每次相邻的像个元素比较(如果靠前的元素>靠后的元素就交换位置)
function bubbleSort(arr) {
    let len = arr.length;
    // 外层从后往前
    for (let outer = len; outer >= 2; --outer) {
        // 内层从前往后
        for (let inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                util_1.swap(arr, inner, inner + 1);
            }
        }
    }
}
exports.default = bubbleSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9idWJibGVTb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBRTlCLE9BQU87QUFDUCxrQ0FBa0M7QUFDbEMsU0FBd0IsVUFBVSxDQUFDLEdBQWE7SUFDOUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQixTQUFTO0lBQ1QsS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN6QyxTQUFTO1FBQ1QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDL0MsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsV0FBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFYRCw2QkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN3YXAgfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8vIOWGkuazoeaOkuW6j1xuLy8g5q+P5qyh55u46YK755qE5YOP5Liq5YWD57Sg5q+U6L6DKOWmguaenOmdoOWJjeeahOWFg+e0oD7pnaDlkI7nmoTlhYPntKDlsLHkuqTmjaLkvY3nva4pXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWJibGVTb3J0KGFycjogbnVtYmVyW10pIHtcbiAgbGV0IGxlbiA9IGFyci5sZW5ndGg7XG4gIC8vIOWkluWxguS7juWQjuW+gOWJjVxuICBmb3IgKGxldCBvdXRlciA9IGxlbjsgb3V0ZXIgPj0gMjsgLS1vdXRlcikge1xuICAgIC8vIOWGheWxguS7juWJjeW+gOWQjlxuICAgIGZvciAobGV0IGlubmVyID0gMDsgaW5uZXIgPD0gb3V0ZXIgLSAxOyArK2lubmVyKSB7XG4gICAgICBpZiAoYXJyW2lubmVyXSA+IGFycltpbm5lciArIDFdKSB7XG4gICAgICAgIHN3YXAoYXJyLCBpbm5lciwgaW5uZXIgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==