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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9idWJibGVTb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBRTVCLE9BQU87QUFDUCxrQ0FBa0M7QUFDbEMsU0FBd0IsVUFBVSxDQUFDLEdBQWE7SUFDNUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQixTQUFTO0lBQ1QsS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN2QyxTQUFTO1FBQ1QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDN0MsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDN0IsV0FBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFYRCw2QkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3dhcH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuLy8g5YaS5rOh5o6S5bqPXHJcbi8vIOavj+asoeebuOmCu+eahOWDj+S4quWFg+e0oOavlOi+gyjlpoLmnpzpnaDliY3nmoTlhYPntKA+6Z2g5ZCO55qE5YWD57Sg5bCx5Lqk5o2i5L2N572uKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWJibGVTb3J0KGFycjogbnVtYmVyW10pIHtcclxuICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgLy8g5aSW5bGC5LuO5ZCO5b6A5YmNXHJcbiAgICBmb3IgKGxldCBvdXRlciA9IGxlbjsgb3V0ZXIgPj0gMjsgLS1vdXRlcikge1xyXG4gICAgICAgIC8vIOWGheWxguS7juWJjeW+gOWQjlxyXG4gICAgICAgIGZvciAobGV0IGlubmVyID0gMDsgaW5uZXIgPD0gb3V0ZXIgLSAxOyArK2lubmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJbaW5uZXJdID4gYXJyW2lubmVyICsgMV0pIHtcclxuICAgICAgICAgICAgICAgIHN3YXAoYXJyLCBpbm5lciwgaW5uZXIgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19