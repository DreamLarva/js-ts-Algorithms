"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
    constructor() {
        this.data = [];
        this.minData = [Infinity];
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU1LuacgOWwj+agiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTU1LuacgOWwj+agiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRTtBQUNGLG9EQUF1QjtBQUN2Qjs7Ozs7R0FLRztBQUNILE1BQU0sUUFBUTtJQUFkO1FBQ0UsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQTZCakMsQ0FBQztJQTVCQzs7O09BR0c7SUFDSCxJQUFJLENBQUMsQ0FBUztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7T0FFRztJQUNILEdBQUc7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNEOztPQUVHO0lBQ0gsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuiuvuiuoeS4gOS4quaUr+aMgSBwdXNo77yMcG9w77yMdG9wIOaTjeS9nO+8jOW5tuiDveWcqOW4uOaVsOaXtumXtOWGheajgOe0ouWIsOacgOWwj+WFg+e0oOeahOagiOOAglxuXG5wdXNoKHgpIC0tIOWwhuWFg+e0oCB4IOaOqOWFpeagiOS4reOAglxucG9wKCkgLS0g5Yig6Zmk5qCI6aG255qE5YWD57Sg44CCXG50b3AoKSAtLSDojrflj5bmoIjpobblhYPntKDjgIJcbmdldE1pbigpIC0tIOajgOe0ouagiOS4reeahOacgOWwj+WFg+e0oOOAglxu56S65L6LOlxuXG5NaW5TdGFjayBtaW5TdGFjayA9IG5ldyBNaW5TdGFjaygpO1xubWluU3RhY2sucHVzaCgtMik7XG5taW5TdGFjay5wdXNoKDApO1xubWluU3RhY2sucHVzaCgtMyk7XG5taW5TdGFjay5nZXRNaW4oKTsgICAtLT4g6L+U5ZueIC0zLlxubWluU3RhY2sucG9wKCk7XG5taW5TdGFjay50b3AoKTsgICAgICAtLT4g6L+U5ZueIDAuXG5taW5TdGFjay5nZXRNaW4oKTsgICAtLT4g6L+U5ZueIC0yLlxuKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbi8qKlxuICogaW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKiDlho3lu7rnq4vkuIDkuKrmnIDlsI/lgLzmoIjnlKjmiLflrZjlgqjlvZPliY0g5pyA5bCP5YC8XG4gKiDmr4/mrKHlhaXmoIgg5bCx5q+U6L6D5pyA5bCP5YC85qCI6aG255qE5YC8IOWmguaenCDlsI/kuo7mnIDlsI/lgLzliJnmjqjlhaXlvZPliY3lgLxcbiAqIOavj+asoeWHuuagiCDmnIDlsI/lgLzmoIjkuZ/lh7rmoIhcbiAqL1xuY2xhc3MgTWluU3RhY2sge1xuICBkYXRhOiBudW1iZXJbXSA9IFtdO1xuICBtaW5EYXRhOiBudW1iZXJbXSA9IFtJbmZpbml0eV07XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcHVzaCh4OiBudW1iZXIpIHtcbiAgICB0aGlzLmRhdGEucHVzaCh4KTtcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih4LCBfLmxhc3QodGhpcy5taW5EYXRhKSEpO1xuICAgIHRoaXMubWluRGF0YS5wdXNoKG1pbik7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwb3AoKSB7XG4gICAgdGhpcy5kYXRhLnBvcCgpO1xuICAgIHRoaXMubWluRGF0YS5wb3AoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdG9wKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRNaW4oKSB7XG4gICAgcmV0dXJuIF8ubGFzdCh0aGlzLm1pbkRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogWW91ciBNaW5TdGFjayBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNaW5TdGFjaygpXG4gKiBvYmoucHVzaCh4KVxuICogb2JqLnBvcCgpXG4gKiB2YXIgcGFyYW1fMyA9IG9iai50b3AoKVxuICogdmFyIHBhcmFtXzQgPSBvYmouZ2V0TWluKClcbiAqL1xuXG5leHBvcnQge307XG4iXX0=