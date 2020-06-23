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
        while (inner > 0 && arr[inner - 1] >= temp) {
            arr[inner] = arr[inner - 1];
            inner--;
        }
        arr[inner] = temp;
    }
    return arr;
}
exports.default = insertionSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0aW9uU29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi566X5rOVL+aOkuW6j+eul+azlS9pbnNlcnRpb25Tb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTztBQUNQLHlHQUF5RztBQUN6RyxTQUF3QixhQUFhLENBQUMsR0FBYTtJQUNqRCxJQUFJLElBQUksRUFBRSxLQUFLLENBQUM7SUFDaEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3hDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLCtCQUErQjtRQUMvQixxREFBcUQ7UUFDckQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ25CO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBZkQsZ0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmj5LlhaXmjpLluo9cbi8vIOaPkuWFpeaOkuW6j+acieS4pOS4quW+queOr+OAguWkluW+queOr+WwhuaVsOe7hOWFg+e0oOaMqOS4quenu+WKqO+8jOiAjOWGheW+queOr+WImeWvueWkluW+queOr+S4remAieS4reeahOWFg+e0oOWPiuWug+WQjumdoueahOmCo+S4quWFg+e0oOi/m+ihjOavlOi+g+OAguWmguaenOWkluW+queOr+S4remAieS4reeahOWFg+e0oOavlOWGheW+queOr+S4remAieS4reeahOWFg+e0oOWwj++8jOmCo+S5iOaVsOe7hOWFg+e0oOS8muWQkeWPs+enu+WKqO+8jOS4uuWGheW+queOr+S4reeahOi/meS4quWFg+e0oOiFvuWHuuS9jee9ri5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydGlvblNvcnQoYXJyOiBudW1iZXJbXSkge1xuICBsZXQgdGVtcCwgaW5uZXI7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAobGV0IG91dGVyID0gMTsgb3V0ZXIgPCBsZW47ICsrb3V0ZXIpIHtcbiAgICB0ZW1wID0gYXJyW291dGVyXTtcbiAgICBpbm5lciA9IG91dGVyO1xuICAgIC8vIOWGheWxgiBpbm5lciA9IDDooajnpLrlt7Lnu4/ljLnphY3liLDkuobmlbDnu4TmnIDlt6bovrnnmoTlhYPntKBcbiAgICAvLyDlpoLmnpxhcnJbaW5uZXIgLSAxXSA8IHRlbXAg6Ieq5bex55qEaW5kZXgrKyDov5nkuKrkvY3nva7orqnnu5nlpJblsYLmraPlnKjljLnphY3nmoTlhYPntKBcbiAgICB3aGlsZSAoaW5uZXIgPiAwICYmIGFycltpbm5lciAtIDFdID49IHRlbXApIHtcbiAgICAgIGFycltpbm5lcl0gPSBhcnJbaW5uZXIgLSAxXTtcbiAgICAgIGlubmVyLS07XG4gICAgfVxuICAgIGFycltpbm5lcl0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG4iXX0=