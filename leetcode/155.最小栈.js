"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
*/
const lodash_1 = __importDefault(require("lodash"));
/**
 * initialize your data structure here.
 * 再建立一个最小值栈用户存储当前 最小值
 * 每次入栈 就比较最小值栈顶的值 如果 小于最小值则推入当前值
 * 每次出栈 最小值栈也出栈
 */
class MinStack {
  data = [];
  minData = [Infinity];
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.data.push(x);
    const min = Math.min(x, lodash_1.default.last(this.minData));
    this.minData.push(min);
  }
  /**
   * @return {void}
   */
  pop() {
    this.data.pop();
    this.minData.pop();
  }
  /**
   * @return {number}
   */
  top() {
    return this.data[this.data.length - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    return lodash_1.default.last(this.minData);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU1LuacgOWwj+agiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTU1LuacgOWwj+agiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRTtBQUNGLG9EQUF1QjtBQUN2Qjs7Ozs7R0FLRztBQUNILE1BQU0sUUFBUTtJQUNaLElBQUksR0FBYSxFQUFFLENBQUM7SUFDcEIsT0FBTyxHQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0I7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLENBQVM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxHQUFHO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7T0FFRztJQUNILEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7orr7orqHkuIDkuKrmlK/mjIEgcHVzaO+8jHBvcO+8jHRvcCDmk43kvZzvvIzlubbog73lnKjluLjmlbDml7bpl7TlhoXmo4DntKLliLDmnIDlsI/lhYPntKDnmoTmoIjjgIJcblxucHVzaCh4KSAtLSDlsIblhYPntKAgeCDmjqjlhaXmoIjkuK3jgIJcbnBvcCgpIC0tIOWIoOmZpOagiOmhtueahOWFg+e0oOOAglxudG9wKCkgLS0g6I635Y+W5qCI6aG25YWD57Sg44CCXG5nZXRNaW4oKSAtLSDmo4DntKLmoIjkuK3nmoTmnIDlsI/lhYPntKDjgIJcbuekuuS+izpcblxuTWluU3RhY2sgbWluU3RhY2sgPSBuZXcgTWluU3RhY2soKTtcbm1pblN0YWNrLnB1c2goLTIpO1xubWluU3RhY2sucHVzaCgwKTtcbm1pblN0YWNrLnB1c2goLTMpO1xubWluU3RhY2suZ2V0TWluKCk7ICAgLS0+IOi/lOWbniAtMy5cbm1pblN0YWNrLnBvcCgpO1xubWluU3RhY2sudG9wKCk7ICAgICAgLS0+IOi/lOWbniAwLlxubWluU3RhY2suZ2V0TWluKCk7ICAgLS0+IOi/lOWbniAtMi5cbiovXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG4vKipcbiAqIGluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICog5YaN5bu656uL5LiA5Liq5pyA5bCP5YC85qCI55So5oi35a2Y5YKo5b2T5YmNIOacgOWwj+WAvFxuICog5q+P5qyh5YWl5qCIIOWwseavlOi+g+acgOWwj+WAvOagiOmhtueahOWAvCDlpoLmnpwg5bCP5LqO5pyA5bCP5YC85YiZ5o6o5YWl5b2T5YmN5YC8XG4gKiDmr4/mrKHlh7rmoIgg5pyA5bCP5YC85qCI5Lmf5Ye65qCIXG4gKi9cbmNsYXNzIE1pblN0YWNrIHtcbiAgZGF0YTogbnVtYmVyW10gPSBbXTtcbiAgbWluRGF0YTogbnVtYmVyW10gPSBbSW5maW5pdHldO1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHB1c2goeDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRhLnB1c2goeCk7XG4gICAgY29uc3QgbWluID0gTWF0aC5taW4oeCwgXy5sYXN0KHRoaXMubWluRGF0YSkhKTtcbiAgICB0aGlzLm1pbkRhdGEucHVzaChtaW4pO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcG9wKCkge1xuICAgIHRoaXMuZGF0YS5wb3AoKTtcbiAgICB0aGlzLm1pbkRhdGEucG9wKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0TWluKCkge1xuICAgIHJldHVybiBfLmxhc3QodGhpcy5taW5EYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgTWluU3RhY2sgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTWluU3RhY2soKVxuICogb2JqLnB1c2goeClcbiAqIG9iai5wb3AoKVxuICogdmFyIHBhcmFtXzMgPSBvYmoudG9wKClcbiAqIHZhciBwYXJhbV80ID0gb2JqLmdldE1pbigpXG4gKi9cblxuZXhwb3J0IHt9O1xuIl19
