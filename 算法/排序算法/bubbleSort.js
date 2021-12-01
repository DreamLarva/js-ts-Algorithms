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
                (0, util_1.swap)(arr, inner, inner + 1);
            }
        }
    }
}
exports.default = bubbleSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9idWJibGVTb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBRTlCLE9BQU87QUFDUCxrQ0FBa0M7QUFDbEMsU0FBd0IsVUFBVSxDQUFDLEdBQWE7SUFDOUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQixTQUFTO0lBQ1QsS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN6QyxTQUFTO1FBQ1QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDL0MsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsSUFBQSxXQUFJLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDRjtLQUNGO0FBQ0gsQ0FBQztBQVhELDZCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3dhcCB9IGZyb20gXCIuL3V0aWxcIjtcblxuLy8g5YaS5rOh5o6S5bqPXG4vLyDmr4/mrKHnm7jpgrvnmoTlg4/kuKrlhYPntKDmr5TovoMo5aaC5p6c6Z2g5YmN55qE5YWD57SgPumdoOWQjueahOWFg+e0oOWwseS6pOaNouS9jee9rilcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyOiBudW1iZXJbXSkge1xuICBsZXQgbGVuID0gYXJyLmxlbmd0aDtcbiAgLy8g5aSW5bGC5LuO5ZCO5b6A5YmNXG4gIGZvciAobGV0IG91dGVyID0gbGVuOyBvdXRlciA+PSAyOyAtLW91dGVyKSB7XG4gICAgLy8g5YaF5bGC5LuO5YmN5b6A5ZCOXG4gICAgZm9yIChsZXQgaW5uZXIgPSAwOyBpbm5lciA8PSBvdXRlciAtIDE7ICsraW5uZXIpIHtcbiAgICAgIGlmIChhcnJbaW5uZXJdID4gYXJyW2lubmVyICsgMV0pIHtcbiAgICAgICAgc3dhcChhcnIsIGlubmVyLCBpbm5lciArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19