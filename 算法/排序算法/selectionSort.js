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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9zZWxlY3Rpb25Tb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBQzlCLE9BQU87QUFDUCxrRUFBa0U7QUFDbEUsU0FBd0IsYUFBYSxDQUFDLEdBQWE7SUFDakQsSUFBSSxHQUFHLENBQUM7SUFDUixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQzdDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDckQsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ2I7U0FDRjtRQUNELFdBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQVpELGdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3dhcCB9IGZyb20gXCIuL3V0aWxcIjtcbi8vIOmAieaLqeaOkuW6j1xuLy8g5LuO5aS05byA5aeLLOWwhuaVsOe7hOeahOesrOS4gOS4quWFg+e0oOWSjOWFtuS7luWFg+e0oOi/m+ihjOWvueavlCzmo4Dmn6XlrozmiYDmnInlhYPntKDlkI4s5bCG5pyA5bCP55qE5YWD57Sg5pS+5Yiw5pWw57uE56ys5LiA5Liq55qE5L2N572uLOeEtuWQjueul+azleS8muS7juesrOS6jOS4quS9jee9rue7p+e7rVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VsZWN0aW9uU29ydChhcnI6IG51bWJlcltdKSB7XG4gIGxldCBtaW47XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAobGV0IG91dGVyID0gMDsgb3V0ZXIgPD0gbGVuIC0gMjsgKytvdXRlcikge1xuICAgIG1pbiA9IG91dGVyO1xuICAgIGZvciAobGV0IGlubmVyID0gb3V0ZXIgKyAxOyBpbm5lciA8PSBsZW4gLSAxOyArK2lubmVyKSB7XG4gICAgICBpZiAoYXJyW2lubmVyXSA8IGFyclttaW5dKSB7XG4gICAgICAgIG1pbiA9IGlubmVyO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2FwKGFyciwgb3V0ZXIsIG1pbik7XG4gIH1cbn1cbiJdfQ==