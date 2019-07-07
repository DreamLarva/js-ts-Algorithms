"use strict";
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
/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.data = [];
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.data.push(x);
    }
    ;
    /**
     * @return {void}
     */
    pop() {
        this.data.pop();
    }
    ;
    /**
     * @return {number}
     */
    top() {
        return this.data[this.data.length - 1];
    }
    ;
    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU1LuacgOWwj+agiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTU1LuacgOWwj+agiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRTtBQUNGOztHQUVHO0FBQ0gsTUFBTSxRQUFRO0lBQWQ7UUFDSSxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBMEJ4QixDQUFDO0lBekJHOzs7T0FHRztJQUNILElBQUksQ0FBQyxDQUFTO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUFBLENBQUM7SUFDRjs7T0FFRztJQUNILEdBQUc7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFBQSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFBQSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuiuvuiuoeS4gOS4quaUr+aMgSBwdXNo77yMcG9w77yMdG9wIOaTjeS9nO+8jOW5tuiDveWcqOW4uOaVsOaXtumXtOWGheajgOe0ouWIsOacgOWwj+WFg+e0oOeahOagiOOAglxyXG5cclxucHVzaCh4KSAtLSDlsIblhYPntKAgeCDmjqjlhaXmoIjkuK3jgIJcclxucG9wKCkgLS0g5Yig6Zmk5qCI6aG255qE5YWD57Sg44CCXHJcbnRvcCgpIC0tIOiOt+WPluagiOmhtuWFg+e0oOOAglxyXG5nZXRNaW4oKSAtLSDmo4DntKLmoIjkuK3nmoTmnIDlsI/lhYPntKDjgIJcclxu56S65L6LOlxyXG5cclxuTWluU3RhY2sgbWluU3RhY2sgPSBuZXcgTWluU3RhY2soKTtcclxubWluU3RhY2sucHVzaCgtMik7XHJcbm1pblN0YWNrLnB1c2goMCk7XHJcbm1pblN0YWNrLnB1c2goLTMpO1xyXG5taW5TdGFjay5nZXRNaW4oKTsgICAtLT4g6L+U5ZueIC0zLlxyXG5taW5TdGFjay5wb3AoKTtcclxubWluU3RhY2sudG9wKCk7ICAgICAgLS0+IOi/lOWbniAwLlxyXG5taW5TdGFjay5nZXRNaW4oKTsgICAtLT4g6L+U5ZueIC0yLlxyXG4qL1xyXG4vKipcclxuICogaW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXHJcbiAqL1xyXG5jbGFzcyBNaW5TdGFjayB7XHJcbiAgICBkYXRhOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcHVzaCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh4KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHBvcCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0TWluKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbiguLi50aGlzLmRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogWW91ciBNaW5TdGFjayBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxyXG4gKiB2YXIgb2JqID0gbmV3IE1pblN0YWNrKClcclxuICogb2JqLnB1c2goeClcclxuICogb2JqLnBvcCgpXHJcbiAqIHZhciBwYXJhbV8zID0gb2JqLnRvcCgpXHJcbiAqIHZhciBwYXJhbV80ID0gb2JqLmdldE1pbigpXHJcbiAqL1xyXG5cclxuZXhwb3J0IHt9XHJcbiJdfQ==