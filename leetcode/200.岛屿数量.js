"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function (grid) {
  // 深度优先
  // 遍历整个二维数组
  let lands = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1") {
        // 如果有 1 则有一个陆地
        lands++;
        // 然后将所有与它相邻的 1 都置为 0
        setWater(x, y);
      }
    }
  }
  return lands;
  function setWater(x, y) {
    if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length) return;
    if (grid[y][x] === "0") return;
    grid[y][x] = "0";
    // 上
    setWater(x, y - 1);
    // 右
    setWater(x + 1, y);
    // 下
    setWater(x, y + 1);
    // 左
    setWater(x - 1, y);
  }
};
var numIslands2 = function (grid) {
  // 广度优先优先
  // 遍历整个二维数组
  let lands = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1") {
        // 如果有 1 则有一个陆地
        lands++;
        // 然后将所有与它相邻的 1 都置为 0
        setWater(x, y);
      }
    }
  }
  return lands;
  function setWater(x, y) {
    const list = [[x, y]];
    while (list.length) {
      const [x, y] = list.shift();
      if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length) continue;
      if (grid[y][x] === "0") continue;
      grid[y][x] = "0";
      // 上
      list.push([x, y - 1]);
      // 右
      list.push([x + 1, y]);
      // 下
      list.push([x, y + 1]);
      // 左
      list.push([x - 1, y]);
    }
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(
  numIslands1([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);
assert_1.default.strictEqual(
  numIslands1([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ]),
  1
);
assert_1.default.strictEqual(
  numIslands2([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);
assert_1.default.strictEqual(
  numIslands2([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ]),
  1
);
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite();
const sample = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
suite
  .add("dfs", function () {
    numIslands1(sample);
  })
  .add("bfs", function () {
    numIslands2(sample);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAwLuWym+Wxv+aVsOmHjy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAwLuWym+Wxv+aVsOmHjy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQXdCQTs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLElBQW1CO0lBQzdDLE9BQU87SUFDUCxXQUFXO0lBQ1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUN0QixlQUFlO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLHFCQUFxQjtnQkFDckIsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztJQUViLFNBQVMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDdEUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJO1FBQ0osUUFBUSxDQUFD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QUcsQ0FBQztJQUN6QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLENBQUM7QUFDRixLQUFLO0tBQ0YsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNWLFdBQVcsQ0FBQyxNQUF1QixDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNWLFdBQVcsQ0FBQyxNQUF1QixDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQXNCO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDZCxvRUFBb0U7QUFDdEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4queUsSAnMSfvvIjpmYblnLDvvInlkowgJzAn77yI5rC077yJ57uE5oiQ55qE55qE5LqM57u0572R5qC877yM6K6h566X5bKb5bG/55qE5pWw6YeP44CC5LiA5Liq5bKb6KKr5rC05YyF5Zu077yMXG7lubbkuJTlroPmmK/pgJrov4fmsLTlubPmlrnlkJHmiJblnoLnm7TmlrnlkJHkuIrnm7jpgrvnmoTpmYblnLDov57mjqXogIzmiJDnmoTjgILkvaDlj6/ku6XlgYforr7nvZHmoLznmoTlm5vkuKrovrnlnYfooqvmsLTljIXlm7TjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbjExMTEwXG4xMTAxMFxuMTEwMDBcbjAwMDAwXG5cbui+k+WHujogMVxu56S65L6LIDI6XG5cbui+k+WFpTpcbjExMDAwXG4xMTAwMFxuMDAxMDBcbjAwMDExXG5cbui+k+WHujogM1xuKiAqL1xudHlwZSBjaGFyYWN0ZXIgPSBcIjFcIiB8IFwiMFwiO1xuLyoqXG4gKiBAcGFyYW0ge2NoYXJhY3RlcltdW119IGdyaWRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG51bUlzbGFuZHMxID0gZnVuY3Rpb24gKGdyaWQ6IGNoYXJhY3RlcltdW10pIHtcbiAgLy8g5rex5bqm5LyY5YWIXG4gIC8vIOmBjeWOhuaVtOS4quS6jOe7tOaVsOe7hFxuICBsZXQgbGFuZHMgPSAwO1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IGdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChncmlkW3ldW3hdID09PSBcIjFcIikge1xuICAgICAgICAvLyDlpoLmnpzmnIkgMSDliJnmnInkuIDkuKrpmYblnLBcbiAgICAgICAgbGFuZHMrKztcbiAgICAgICAgLy8g54S25ZCO5bCG5omA5pyJ5LiO5a6D55u46YK755qEIDEg6YO9572u5Li6IDBcbiAgICAgICAgc2V0V2F0ZXIoeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhbmRzO1xuXG4gIGZ1bmN0aW9uIHNldFdhdGVyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHkgPj0gZ3JpZC5sZW5ndGggfHwgeCA+PSBncmlkW3ldLmxlbmd0aCkgcmV0dXJuO1xuICAgIGlmIChncmlkW3ldW3hdID09PSBcIjBcIikgcmV0dXJuO1xuICAgIGdyaWRbeV1beF0gPSBcIjBcIjtcbiAgICAvLyDkuIpcbiAgICBzZXRXYXRlcih4LCB5IC0gMSk7XG4gICAgLy8g5Y+zXG4gICAgc2V0V2F0ZXIoeCArIDEsIHkpO1xuICAgIC8vIOS4i1xuICAgIHNldFdhdGVyKHgsIHkgKyAxKTtcbiAgICAvLyDlt6ZcbiAgICBzZXRXYXRlcih4IC0gMSwgeSk7XG4gIH1cbn07XG5cbnZhciBudW1Jc2xhbmRzMiA9IGZ1bmN0aW9uIChncmlkOiBjaGFyYWN0ZXJbXVtdKSB7XG4gIC8vIOW5v+W6puS8mOWFiOS8mOWFiFxuICAvLyDpgY3ljobmlbTkuKrkuoznu7TmlbDnu4RcbiAgbGV0IGxhbmRzID0gMDtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBncmlkW3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoZ3JpZFt5XVt4XSA9PT0gXCIxXCIpIHtcbiAgICAgICAgLy8g5aaC5p6c5pyJIDEg5YiZ5pyJ5LiA5Liq6ZmG5ZywXG4gICAgICAgIGxhbmRzKys7XG4gICAgICAgIC8vIOeEtuWQjuWwhuaJgOacieS4juWug+ebuOmCu+eahCAxIOmDvee9ruS4uiAwXG4gICAgICAgIHNldFdhdGVyKHgsIHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYW5kcztcblxuICBmdW5jdGlvbiBzZXRXYXRlcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGNvbnN0IGxpc3QgPSBbW3gsIHldXTtcbiAgICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGxpc3Quc2hpZnQoKSE7XG4gICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeSA+PSBncmlkLmxlbmd0aCB8fCB4ID49IGdyaWRbeV0ubGVuZ3RoKSBjb250aW51ZTtcbiAgICAgIGlmIChncmlkW3ldW3hdID09PSBcIjBcIikgY29udGludWU7XG4gICAgICBncmlkW3ldW3hdID0gXCIwXCI7XG4gICAgICAvLyDkuIpcbiAgICAgIGxpc3QucHVzaChbeCwgeSAtIDFdKTtcbiAgICAgIC8vIOWPs1xuICAgICAgbGlzdC5wdXNoKFt4ICsgMSwgeV0pO1xuICAgICAgLy8g5LiLXG4gICAgICBsaXN0LnB1c2goW3gsIHkgKyAxXSk7XG4gICAgICAvLyDlt6ZcbiAgICAgIGxpc3QucHVzaChbeCAtIDEsIHldKTtcbiAgICB9XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIG51bUlzbGFuZHMxKFtcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMFwiXSxcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIxXCIsIFwiMFwiXSxcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXSxcbiAgICBbXCIwXCIsIFwiMFwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXSxcbiAgXSksXG4gIDFcbik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgbnVtSXNsYW5kczEoW1xuICAgIFtcIjFcIiwgXCIxXCIsIFwiMVwiXSxcbiAgICBbXCIwXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgW1wiMVwiLCBcIjFcIiwgXCIxXCJdLFxuICBdKSxcbiAgMVxuKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBudW1Jc2xhbmRzMihbXG4gICAgW1wiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgW1wiMVwiLCBcIjFcIiwgXCIwXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgW1wiMVwiLCBcIjFcIiwgXCIwXCIsIFwiMFwiLCBcIjBcIl0sXG4gICAgW1wiMFwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiLCBcIjBcIl0sXG4gIF0pLFxuICAxXG4pO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIG51bUlzbGFuZHMyKFtcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIl0sXG4gICAgW1wiMFwiLCBcIjFcIiwgXCIwXCJdLFxuICAgIFtcIjFcIiwgXCIxXCIsIFwiMVwiXSxcbiAgXSksXG4gIDFcbik7XG5cbmltcG9ydCBCZW5jaG1hcmsgZnJvbSBcImJlbmNobWFya1wiO1xuXG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGUoKTtcbmNvbnN0IHNhbXBsZSA9IFtcbiAgW1wiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMVwiLCBcIjBcIl0sXG4gIFtcIjFcIiwgXCIxXCIsIFwiMFwiLCBcIjFcIiwgXCIwXCJdLFxuICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXSxcbiAgW1wiMFwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiLCBcIjBcIl0sXG5dO1xuc3VpdGVcbiAgLmFkZChcImRmc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbnVtSXNsYW5kczEoc2FtcGxlIGFzIGNoYXJhY3RlcltdW10pO1xuICB9KVxuICAuYWRkKFwiYmZzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBudW1Jc2xhbmRzMihzYW1wbGUgYXMgY2hhcmFjdGVyW11bXSk7XG4gIH0pXG4gIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICB9KVxuICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCAnbmFtZScpKTtcbiAgfSlcbiAgLy8gcnVuIGFzeW5jXG4gIC5ydW4oeyBhc3luYzogZmFsc2UgfSk7XG4iXX0=
