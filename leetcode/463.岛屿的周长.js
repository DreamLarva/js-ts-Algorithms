"use strict";
/*
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

 

示例 :

输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16

解释: 它的周长是下面图片中的 16 个黄色的边：
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function islandPerimeter(grid) {
    /**
     * 既然只有一个岛屿 且一定互相连接
     * 那么只要 遍历所有的 格子 如果是岛屿 且周围没有其他岛屿那么就计算周长即可
     * */
    let perimeter = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 1) {
                perimeter += getPerimeterOfBlock(grid, [x, y]);
            }
        }
    }
    return perimeter;
}
function getPerimeterOfBlock(grid, [x, y]) {
    let perimeter = 0;
    const max_y = grid.length - 1;
    const max_x = grid[0].length - 1;
    // 判断上侧
    if (y - 1 < 0 || grid[y - 1][x] === 0) {
        perimeter++;
    }
    // 左侧
    if (x - 1 < 0 || grid[y][x - 1] === 0) {
        perimeter++;
    }
    // 右侧
    if (x + 1 > max_x || grid[y][x + 1] === 0) {
        perimeter++;
    }
    // 下侧
    if (y + 1 > max_y || grid[y + 1][x] === 0) {
        perimeter++;
    }
    return perimeter;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
]), 16);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYzLuWym+Wxv+eahOWRqOmVvy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDYzLuWym+Wxv+eahOWRqOmVvy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOzs7OztBQUlKLFNBQVMsZUFBZSxDQUFDLElBQVU7SUFDakM7OztTQUdLO0lBQ0wsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsU0FBUyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLElBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQWE7SUFDekQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE9BQU87SUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLFNBQVMsRUFBRSxDQUFDO0tBQ2I7SUFFRCxLQUFLO0lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQyxTQUFTLEVBQUUsQ0FBQztLQUNiO0lBRUQsS0FBSztJQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekMsU0FBUyxFQUFFLENBQUM7S0FDYjtJQUVELEtBQUs7SUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pDLFNBQVMsRUFBRSxDQUFDO0tBQ2I7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNoQixlQUFlLENBQUM7SUFDZCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNiLENBQUMsRUFDRixFQUFFLENBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrljIXlkKsgMCDlkowgMSDnmoTkuoznu7TnvZHmoLzlnLDlm77vvIzlhbbkuK0gMSDooajnpLrpmYblnLDCoDAg6KGo56S65rC05Z+f44CCXG5cbue9keagvOS4reeahOagvOWtkOawtOW5s+WSjOWeguebtOaWueWQkeebuOi/nu+8iOWvueinkue6v+aWueWQkeS4jeebuOi/nu+8ieOAguaVtOS4que9keagvOiiq+awtOWujOWFqOWMheWbtO+8jOS9huWFtuS4reaBsOWlveacieS4gOS4quWym+Wxv++8iOaIluiAheivtO+8jOS4gOS4quaIluWkmuS4quihqOekuumZhuWcsOeahOagvOWtkOebuOi/nue7hOaIkOeahOWym+Wxv++8ieOAglxuXG7lspvlsb/kuK3msqHmnInigJzmuZbigJ3vvIjigJzmuZbigJ0g5oyH5rC05Z+f5Zyo5bKb5bG/5YaF6YOo5LiU5LiN5ZKM5bKb5bG/5ZGo5Zu055qE5rC055u46L+e77yJ44CC5qC85a2Q5piv6L656ZW/5Li6IDEg55qE5q2j5pa55b2i44CC572R5qC85Li66ZW/5pa55b2i77yM5LiU5a695bqm5ZKM6auY5bqm5Z2H5LiN6LaF6L+HIDEwMCDjgILorqHnrpfov5nkuKrlspvlsb/nmoTlkajplb/jgIJcblxuwqBcblxu56S65L6LIDpcblxu6L6T5YWlOlxuW1swLDEsMCwwXSxcbiBbMSwxLDEsMF0sXG4gWzAsMSwwLDBdLFxuIFsxLDEsMCwwXV1cblxu6L6T5Ye6OiAxNlxuXG7op6Pph4o6IOWug+eahOWRqOmVv+aYr+S4i+mdouWbvueJh+S4reeahCAxNiDkuKrpu4ToibLnmoTovrnvvJpcbiogKi9cblxudHlwZSBncmlkID0gKDAgfCAxKVtdW107XG50eXBlIGNvb3JkaW5hdGUgPSBbbnVtYmVyLCBudW1iZXJdO1xuZnVuY3Rpb24gaXNsYW5kUGVyaW1ldGVyKGdyaWQ6IGdyaWQpIHtcbiAgLyoqXG4gICAqIOaXoueEtuWPquacieS4gOS4quWym+WxvyDkuJTkuIDlrprkupLnm7jov57mjqVcbiAgICog6YKj5LmI5Y+q6KaBIOmBjeWOhuaJgOacieeahCDmoLzlrZAg5aaC5p6c5piv5bKb5bG/IOS4lOWRqOWbtOayoeacieWFtuS7luWym+Wxv+mCo+S5iOWwseiuoeeul+WRqOmVv+WNs+WPr1xuICAgKiAqL1xuICBsZXQgcGVyaW1ldGVyID0gMDtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBncmlkW3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoZ3JpZFt5XVt4XSA9PT0gMSkge1xuICAgICAgICBwZXJpbWV0ZXIgKz0gZ2V0UGVyaW1ldGVyT2ZCbG9jayhncmlkLCBbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGVyaW1ldGVyO1xufVxuXG5mdW5jdGlvbiBnZXRQZXJpbWV0ZXJPZkJsb2NrKGdyaWQ6IGdyaWQsIFt4LCB5XTogY29vcmRpbmF0ZSk6IG51bWJlciB7XG4gIGxldCBwZXJpbWV0ZXIgPSAwO1xuICBjb25zdCBtYXhfeSA9IGdyaWQubGVuZ3RoIC0gMTtcbiAgY29uc3QgbWF4X3ggPSBncmlkWzBdLmxlbmd0aCAtIDE7XG4gIC8vIOWIpOaWreS4iuS+p1xuICBpZiAoeSAtIDEgPCAwIHx8IGdyaWRbeSAtIDFdW3hdID09PSAwKSB7XG4gICAgcGVyaW1ldGVyKys7XG4gIH1cblxuICAvLyDlt6bkvqdcbiAgaWYgKHggLSAxIDwgMCB8fCBncmlkW3ldW3ggLSAxXSA9PT0gMCkge1xuICAgIHBlcmltZXRlcisrO1xuICB9XG5cbiAgLy8g5Y+z5L6nXG4gIGlmICh4ICsgMSA+IG1heF94IHx8IGdyaWRbeV1beCArIDFdID09PSAwKSB7XG4gICAgcGVyaW1ldGVyKys7XG4gIH1cblxuICAvLyDkuIvkvqdcbiAgaWYgKHkgKyAxID4gbWF4X3kgfHwgZ3JpZFt5ICsgMV1beF0gPT09IDApIHtcbiAgICBwZXJpbWV0ZXIrKztcbiAgfVxuXG4gIHJldHVybiBwZXJpbWV0ZXI7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzbGFuZFBlcmltZXRlcihbXG4gICAgWzAsIDEsIDAsIDBdLFxuICAgIFsxLCAxLCAxLCAwXSxcbiAgICBbMCwgMSwgMCwgMF0sXG4gICAgWzEsIDEsIDAsIDBdLFxuICBdKSxcbiAgMTZcbik7XG4iXX0=