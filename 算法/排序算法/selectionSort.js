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
        (0, util_1.swap)(arr, outer, min);
    }
}
exports.default = selectionSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9zZWxlY3Rpb25Tb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBQzlCLE9BQU87QUFDUCxrRUFBa0U7QUFDbEUsU0FBd0IsYUFBYSxDQUFDLEdBQWE7SUFDakQsSUFBSSxHQUFHLENBQUM7SUFDUixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQzdDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDckQsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ2I7U0FDRjtRQUNELElBQUEsV0FBSSxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdkI7QUFDSCxDQUFDO0FBWkQsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzd2FwIH0gZnJvbSBcIi4vdXRpbFwiO1xuLy8g6YCJ5oup5o6S5bqPXG4vLyDku47lpLTlvIDlp4ss5bCG5pWw57uE55qE56ys5LiA5Liq5YWD57Sg5ZKM5YW25LuW5YWD57Sg6L+b6KGM5a+55q+ULOajgOafpeWujOaJgOacieWFg+e0oOWQjizlsIbmnIDlsI/nmoTlhYPntKDmlL7liLDmlbDnu4TnrKzkuIDkuKrnmoTkvY3nva4s54S25ZCO566X5rOV5Lya5LuO56ys5LqM5Liq5L2N572u57un57utXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGFycjogbnVtYmVyW10pIHtcbiAgbGV0IG1pbjtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yIChsZXQgb3V0ZXIgPSAwOyBvdXRlciA8PSBsZW4gLSAyOyArK291dGVyKSB7XG4gICAgbWluID0gb3V0ZXI7XG4gICAgZm9yIChsZXQgaW5uZXIgPSBvdXRlciArIDE7IGlubmVyIDw9IGxlbiAtIDE7ICsraW5uZXIpIHtcbiAgICAgIGlmIChhcnJbaW5uZXJdIDwgYXJyW21pbl0pIHtcbiAgICAgICAgbWluID0gaW5uZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHN3YXAoYXJyLCBvdXRlciwgbWluKTtcbiAgfVxufVxuIl19