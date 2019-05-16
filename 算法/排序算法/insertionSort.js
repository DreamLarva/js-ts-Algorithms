"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 插入排序
// 插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置.
function insertionSort(arr) {
    let temp, inner;
    const len = arr.length;
    for (let outer = 1; outer < len; ++outer) {
        temp = arr[outer];
        inner = outer;
        // 内层 inner = 0表示已经匹配到了数组最左边的元素
        // 如果arr[inner - 1] < temp 自己的index++ 这个位置让给外层正在匹配的元素
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            inner--;
        }
        arr[inner] = temp;
    }
    return arr;
}
exports.default = insertionSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0aW9uU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9pbnNlcnRpb25Tb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTztBQUNQLHlHQUF5RztBQUN6RyxTQUF3QixhQUFhLENBQUMsR0FBYTtJQUMvQyxJQUFJLElBQUksRUFBRSxLQUFLLENBQUM7SUFDaEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3RDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLCtCQUErQjtRQUMvQixxREFBcUQ7UUFDckQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNyQjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWZELGdDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5o+S5YWl5o6S5bqPXHJcbi8vIOaPkuWFpeaOkuW6j+acieS4pOS4quW+queOr+OAguWkluW+queOr+WwhuaVsOe7hOWFg+e0oOaMqOS4quenu+WKqO+8jOiAjOWGheW+queOr+WImeWvueWkluW+queOr+S4remAieS4reeahOWFg+e0oOWPiuWug+WQjumdoueahOmCo+S4quWFg+e0oOi/m+ihjOavlOi+g+OAguWmguaenOWkluW+queOr+S4remAieS4reeahOWFg+e0oOavlOWGheW+queOr+S4remAieS4reeahOWFg+e0oOWwj++8jOmCo+S5iOaVsOe7hOWFg+e0oOS8muWQkeWPs+enu+WKqO+8jOS4uuWGheW+queOr+S4reeahOi/meS4quWFg+e0oOiFvuWHuuS9jee9ri5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zZXJ0aW9uU29ydChhcnI6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgdGVtcCwgaW5uZXI7XHJcbiAgICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgb3V0ZXIgPSAxOyBvdXRlciA8IGxlbjsgKytvdXRlcikge1xyXG4gICAgICAgIHRlbXAgPSBhcnJbb3V0ZXJdO1xyXG4gICAgICAgIGlubmVyID0gb3V0ZXI7XHJcbiAgICAgICAgLy8g5YaF5bGCIGlubmVyID0gMOihqOekuuW3sue7j+WMuemFjeWIsOS6huaVsOe7hOacgOW3pui+ueeahOWFg+e0oFxyXG4gICAgICAgIC8vIOWmguaenGFycltpbm5lciAtIDFdIDwgdGVtcCDoh6rlt7HnmoRpbmRleCsrIOi/meS4quS9jee9ruiuqee7meWkluWxguato+WcqOWMuemFjeeahOWFg+e0oFxyXG4gICAgICAgIHdoaWxlIChpbm5lciA+IDAgJiYgKGFycltpbm5lciAtIDFdID49IHRlbXApKSB7XHJcbiAgICAgICAgICAgIGFycltpbm5lcl0gPSBhcnJbaW5uZXIgLSAxXTtcclxuICAgICAgICAgICAgaW5uZXItLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyW2lubmVyXSA9IHRlbXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcbiJdfQ==