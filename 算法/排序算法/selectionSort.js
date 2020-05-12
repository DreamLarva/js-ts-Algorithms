"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
// 选择排序
// 从头开始,将数组的第一个元素和其他元素进行对比,检查完所有元素后,将最小的元素放到数组第一个的位置,然后算法会从第二个位置继续
function selectionSort(arr) {
    let min;
    const len = arr.length;
    for (let outer = 0; outer <= len - 2; ++outer) {
        min = outer;
        for (let inner = outer + 1; inner <= len - 1; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        util_1.swap(arr, outer, min);
    }
}
exports.default = selectionSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9zZWxlY3Rpb25Tb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBQzVCLE9BQU87QUFDUCxrRUFBa0U7QUFDbEUsU0FBd0IsYUFBYSxDQUFDLEdBQWE7SUFDL0MsSUFBSSxHQUFHLENBQUM7SUFDUixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQzNDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDbkQsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ2Y7U0FDSjtRQUNELFdBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQVpELGdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzd2FwfSBmcm9tIFwiLi91dGlsXCI7XHJcbi8vIOmAieaLqeaOkuW6j1xyXG4vLyDku47lpLTlvIDlp4ss5bCG5pWw57uE55qE56ys5LiA5Liq5YWD57Sg5ZKM5YW25LuW5YWD57Sg6L+b6KGM5a+55q+ULOajgOafpeWujOaJgOacieWFg+e0oOWQjizlsIbmnIDlsI/nmoTlhYPntKDmlL7liLDmlbDnu4TnrKzkuIDkuKrnmoTkvY3nva4s54S25ZCO566X5rOV5Lya5LuO56ys5LqM5Liq5L2N572u57un57utXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdGlvblNvcnQoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgbGV0IG1pbjtcclxuICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBvdXRlciA9IDA7IG91dGVyIDw9IGxlbiAtIDI7ICsrb3V0ZXIpIHtcclxuICAgICAgICBtaW4gPSBvdXRlcjtcclxuICAgICAgICBmb3IgKGxldCBpbm5lciA9IG91dGVyICsgMTsgaW5uZXIgPD0gbGVuIC0gMTsgKytpbm5lcikge1xyXG4gICAgICAgICAgICBpZiAoYXJyW2lubmVyXSA8IGFyclttaW5dKSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gPSBpbm5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2FwKGFyciwgb3V0ZXIsIG1pbik7XHJcbiAgICB9XHJcbn1cclxuIl19