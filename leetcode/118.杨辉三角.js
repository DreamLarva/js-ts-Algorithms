"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
* */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  const a1 = [1];
  if (numRows === 1) return [a1];
  const a2 = [1, 1];
  if (numRows === 2) return [a1, a2];
  const result = [a1, a2];
  for (let i = numRows - 2; i > 0; i--) {
    const lastArr = last(result);
    const temp = [];
    for (let j = 1; j < lastArr.length; j++) {
      temp.push(lastArr[j - 1] + lastArr[j]);
    }
    result.push([1, ...temp, 1]);
  }
  return result;
};
function last(arr) {
  return arr[arr.length - 1];
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(generate(5), [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE4LuadqOi+ieS4ieinki5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTE4LuadqOi+ieS4ieinki50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLE9BQWU7SUFDdEMsSUFBSSxPQUFPLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixJQUFJLE9BQU8sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLElBQUksT0FBTyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRW5DLE1BQU0sTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsU0FBUyxJQUFJLENBQUksR0FBUTtJQUN2QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpnZ7otJ/mlbTmlbAgbnVtUm93c++8jOeUn+aIkOadqOi+ieS4ieinkueahOWJjSBudW1Sb3dzIOihjOOAglxuXG5cblxu5Zyo5p2o6L6J5LiJ6KeS5Lit77yM5q+P5Liq5pWw5piv5a6D5bem5LiK5pa55ZKM5Y+z5LiK5pa555qE5pWw55qE5ZKM44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiA1XG7ovpPlh7o6XG5bXG4gICAgIFsxXSxcbiAgICBbMSwxXSxcbiAgIFsxLDIsMV0sXG4gIFsxLDMsMywxXSxcbiBbMSw0LDYsNCwxXVxuXVxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtUm93c1xuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xudmFyIGdlbmVyYXRlID0gZnVuY3Rpb24gKG51bVJvd3M6IG51bWJlcikge1xuICBpZiAobnVtUm93cyA9PT0gMCkgcmV0dXJuIFtdO1xuICBjb25zdCBhMSA9IFsxXTtcbiAgaWYgKG51bVJvd3MgPT09IDEpIHJldHVybiBbYTFdO1xuICBjb25zdCBhMiA9IFsxLCAxXTtcbiAgaWYgKG51bVJvd3MgPT09IDIpIHJldHVybiBbYTEsIGEyXTtcblxuICBjb25zdCByZXN1bHQgPSBbYTEsIGEyXTtcbiAgZm9yIChsZXQgaSA9IG51bVJvd3MgLSAyOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgbGFzdEFyciA9IGxhc3QocmVzdWx0KTtcbiAgICBjb25zdCB0ZW1wOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAxOyBqIDwgbGFzdEFyci5sZW5ndGg7IGorKykge1xuICAgICAgdGVtcC5wdXNoKGxhc3RBcnJbaiAtIDFdICsgbGFzdEFycltqXSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKFsxLCAuLi50ZW1wLCAxXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIGxhc3Q8VD4oYXJyOiBUW10pIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChnZW5lcmF0ZSg1KSwgW1xuICBbMV0sXG4gIFsxLCAxXSxcbiAgWzEsIDIsIDFdLFxuICBbMSwgMywgMywgMV0sXG4gIFsxLCA0LCA2LCA0LCAxXSxcbl0pO1xuIl19
