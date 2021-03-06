"use strict";
/*
给定一 N * M 的场地
W代表水洼 W相邻8个方向的W算作一个水洼
计算有多少个水洼
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 输入
const N = 10;
const M = 12;
const field = [
    ["W", ".", ".", ".", ".", ".", ".", ".", ".", "W", "W", "."],
    [".", "W", "W", "W", ".", ".", ".", ".", ".", "W", "W", "W"],
    [".", ".", ".", ".", "W", "W", ".", ".", ".", "W", "W", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "W", "W", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "W", ".", "."],
    [".", ".", "W", ".", ".", ".", ".", ".", ".", "W", ".", "."],
    [".", "W", ".", "W", ".", ".", ".", ".", ".", "W", "W", "."],
    ["W", ".", "W", ".", "W", ".", ".", ".", ".", ".", "W", "."],
    [".", "W", ".", "W", ".", ".", ".", ".", ".", ".", "W", "."],
    [".", ".", "W", ".", ".", ".", ".", ".", ".", ".", "W", "."],
];
function dfs(x, y) {
    field[x][y] = ".";
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            const nx = x + dx, ny = y + dy;
            if (0 <= nx && nx < N && 0 <= ny && ny < M && field[nx][ny] === 'W') {
                dfs(nx, ny);
            }
        }
    }
}
function solve() {
    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (field[i][j] === 'W') {
                dfs(i, j);
                res++;
            }
        }
    }
    return res;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(solve(), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5rex5bqm5LyY5YWI5pCc57SiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmjJHmiJjnqIvluo/orr7orqHnq57otZsv5rex5bqm5LyY5YWI5pCc57SiL+a3seW6puS8mOWFiOaQnOe0oi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7SUFJSTs7Ozs7QUFHSixLQUFLO0FBQ0wsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2IsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBR2IsTUFBTSxLQUFLLEdBQVU7SUFDakIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUMvRCxDQUFDO0FBRUYsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDN0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsQixLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDN0IsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQ2IsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ2pFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDZjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBRUQsU0FBUyxLQUFLO0lBQ1YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDckIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDVixHQUFHLEVBQUUsQ0FBQzthQUNUO1NBQ0o7S0FDSjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUdELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIAgTiAqIE0g55qE5Zy65ZywXG5X5Luj6KGo5rC05rS8IFfnm7jpgrs45Liq5pa55ZCR55qEV+eul+S9nOS4gOS4quawtOa0vFxu6K6h566X5pyJ5aSa5bCR5Liq5rC05rS8XG4qICovXG5cblxuLy8g6L6T5YWlXG5jb25zdCBOID0gMTA7XG5jb25zdCBNID0gMTI7XG5cbnR5cGUgZmllbGQgPSAoXCIuXCIgfCBcIldcIilbXVtdXG5jb25zdCBmaWVsZDogZmllbGQgPSBbXG4gICAgW1wiV1wiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiV1wiLCBcIldcIiwgXCIuXCJdLFxuICAgIFtcIi5cIiwgXCJXXCIsIFwiV1wiLCBcIldcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIldcIiwgXCJXXCIsIFwiV1wiXSxcbiAgICBbXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiV1wiLCBcIldcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCJXXCIsIFwiV1wiLCBcIi5cIl0sXG4gICAgW1wiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiV1wiLCBcIldcIiwgXCIuXCJdLFxuICAgIFtcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIldcIiwgXCIuXCIsIFwiLlwiXSxcbiAgICBbXCIuXCIsIFwiLlwiLCBcIldcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCJXXCIsIFwiLlwiLCBcIi5cIl0sXG4gICAgW1wiLlwiLCBcIldcIiwgXCIuXCIsIFwiV1wiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiV1wiLCBcIldcIiwgXCIuXCJdLFxuICAgIFtcIldcIiwgXCIuXCIsIFwiV1wiLCBcIi5cIiwgXCJXXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCJXXCIsIFwiLlwiXSxcbiAgICBbXCIuXCIsIFwiV1wiLCBcIi5cIiwgXCJXXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiV1wiLCBcIi5cIl0sXG4gICAgW1wiLlwiLCBcIi5cIiwgXCJXXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIldcIiwgXCIuXCJdLFxuXTtcblxuZnVuY3Rpb24gZGZzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgZmllbGRbeF1beV0gPSBcIi5cIjtcbiAgICBmb3IgKGxldCBkeCA9IC0xOyBkeCA8PSAxOyBkeCsrKSB7XG4gICAgICAgIGZvciAobGV0IGR5ID0gLTE7IGR5IDw9IDE7IGR5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCArIGR4LFxuICAgICAgICAgICAgICAgIG55ID0geSArIGR5O1xuICAgICAgICAgICAgaWYgKDAgPD0gbnggJiYgbnggPCBOICYmIDAgPD0gbnkgJiYgbnkgPCBNICYmIGZpZWxkW254XVtueV0gPT09ICdXJykge1xuICAgICAgICAgICAgICAgIGRmcyhueCwgbnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb2x2ZSgpIHtcbiAgICBsZXQgcmVzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE07IGorKykge1xuICAgICAgICAgICAgaWYgKGZpZWxkW2ldW2pdID09PSAnVycpIHtcbiAgICAgICAgICAgICAgICBkZnMoaSwgaik7XG4gICAgICAgICAgICAgICAgcmVzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHNvbHZlKCksIDMpO1xuIl19