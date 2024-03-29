"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
function last(arr) {
  return arr[arr.length - 1];
}
function minPathSum(grid) {
  /**
   * 注意只能 往下 或者 右走那就很好办了
   * 动态规划 只要看之前 目标点左方 上方 的点的状态就行了
   * */
  const map = Array.from({ length: grid.length }).map(
    () => new Array(grid[0].length)
  );
  map[0][0] = grid[0][0];
  // 先处理第一行
  for (let i = 1; i < grid[0].length; i++) {
    map[0][i] = map[0][i - 1] + grid[0][i];
  }
  // 处理第一列
  for (let i = 1; i < grid.length; i++) {
    map[i][0] = map[i - 1][0] + grid[i][0];
  }
  // 处理剩余
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      map[i][j] = Math.min(map[i - 1][j], map[i][j - 1]) + grid[i][j];
    }
  }
  // return _.last(_.last(map))!;
  return last(last(map));
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
  7
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQu5pyA5bCP6Lev5b6E5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82NC7mnIDlsI/ot6/lvoTlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFrQkEsU0FBUyxJQUFJLENBQUksR0FBUTtJQUN2QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFDRCxTQUFTLFVBQVUsQ0FBQyxJQUFnQjtJQUNoQzs7O1NBR0s7SUFDTCxNQUFNLEdBQUcsR0FBZSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDM0QsR0FBRyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDO0lBRUYsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixTQUFTO0lBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsUUFBUTtJQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUVELE9BQU87SUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7S0FDSjtJQUVELCtCQUErQjtJQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUNoQixVQUFVLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuNjQuIOacgOWwj+i3r+W+hOWSjFxu57uZ5a6a5LiA5Liq5YyF5ZCr6Z2e6LSf5pW05pWw55qEIG0geCBuIOe9keagvO+8jOivt+aJvuWHuuS4gOadoeS7juW3puS4iuinkuWIsOWPs+S4i+inkueahOi3r+W+hO+8jOS9v+W+l+i3r+W+hOS4iueahOaVsOWtl+aAu+WSjOS4uuacgOWwj+OAglxuXG7or7TmmI7vvJrmr4/mrKHlj6rog73lkJHkuIvmiJbogIXlkJHlj7Pnp7vliqjkuIDmraXjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6XG5bXG4gIFsxLDMsMV0sXG4gIFsxLDUsMV0sXG4gIFs0LDIsMV1cbl1cbui+k+WHujogN1xu6Kej6YeKOiDlm6DkuLrot6/lvoQgMeKGkjPihpIx4oaSMeKGkjEg55qE5oC75ZKM5pyA5bCP44CCXG4qICovXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5mdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuZnVuY3Rpb24gbWluUGF0aFN1bShncmlkOiBudW1iZXJbXVtdKTogbnVtYmVyIHtcbiAgICAvKipcbiAgICAgKiDms6jmhI/lj6rog70g5b6A5LiLIOaIluiAhSDlj7PotbDpgqPlsLHlvojlpb3lip7kuoZcbiAgICAgKiDliqjmgIHop4TliJIg5Y+q6KaB55yL5LmL5YmNIOebruagh+eCueW3puaWuSDkuIrmlrkg55qE54K555qE54q25oCB5bCx6KGM5LqGXG4gICAgICogKi9cbiAgICBjb25zdCBtYXA6IG51bWJlcltdW10gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBncmlkLmxlbmd0aCB9KS5tYXAoXG4gICAgICAgICgpID0+IG5ldyBBcnJheShncmlkWzBdLmxlbmd0aClcbiAgICApO1xuXG4gICAgbWFwWzBdWzBdID0gZ3JpZFswXVswXTtcbiAgICAvLyDlhYjlpITnkIbnrKzkuIDooYxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGdyaWRbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFwWzBdW2ldID0gbWFwWzBdW2kgLSAxXSArIGdyaWRbMF1baV07XG4gICAgfVxuXG4gICAgLy8g5aSE55CG56ys5LiA5YiXXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcFtpXVswXSA9IG1hcFtpIC0gMV1bMF0gKyBncmlkW2ldWzBdO1xuICAgIH1cblxuICAgIC8vIOWkhOeQhuWJqeS9mVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGdyaWRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG1hcFtpXVtqXSA9IE1hdGgubWluKG1hcFtpIC0gMV1bal0sIG1hcFtpXVtqIC0gMV0pICsgZ3JpZFtpXVtqXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBfLmxhc3QoXy5sYXN0KG1hcCkpITtcbiAgICByZXR1cm4gbGFzdChsYXN0KG1hcCkpO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgbWluUGF0aFN1bShbXG4gICAgWzEsIDMsIDFdLFxuICAgIFsxLCA1LCAxXSxcbiAgICBbNCwgMiwgMV0sXG4gIF0pLFxuICA3XG4pO1xuIl19
