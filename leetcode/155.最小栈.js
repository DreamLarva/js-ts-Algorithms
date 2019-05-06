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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU1LuacgOWwj+agiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTU1LuacgOWwj+agiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRTtBQUNGOztHQUVHO0FBQ0gsTUFBTSxRQUFRO0lBQWQ7UUFDSSxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBMEJ4QixDQUFDO0lBekJHOzs7T0FHRztJQUNILElBQUksQ0FBQyxDQUFTO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUFBLENBQUM7SUFDRjs7T0FFRztJQUNILEdBQUc7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFBQSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFBQSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7orr7orqHkuIDkuKrmlK/mjIEgcHVzaO+8jHBvcO+8jHRvcCDmk43kvZzvvIzlubbog73lnKjluLjmlbDml7bpl7TlhoXmo4DntKLliLDmnIDlsI/lhYPntKDnmoTmoIjjgIJcblxucHVzaCh4KSAtLSDlsIblhYPntKAgeCDmjqjlhaXmoIjkuK3jgIJcbnBvcCgpIC0tIOWIoOmZpOagiOmhtueahOWFg+e0oOOAglxudG9wKCkgLS0g6I635Y+W5qCI6aG25YWD57Sg44CCXG5nZXRNaW4oKSAtLSDmo4DntKLmoIjkuK3nmoTmnIDlsI/lhYPntKDjgIJcbuekuuS+izpcblxuTWluU3RhY2sgbWluU3RhY2sgPSBuZXcgTWluU3RhY2soKTtcbm1pblN0YWNrLnB1c2goLTIpO1xubWluU3RhY2sucHVzaCgwKTtcbm1pblN0YWNrLnB1c2goLTMpO1xubWluU3RhY2suZ2V0TWluKCk7ICAgLS0+IOi/lOWbniAtMy5cbm1pblN0YWNrLnBvcCgpO1xubWluU3RhY2sudG9wKCk7ICAgICAgLS0+IOi/lOWbniAwLlxubWluU3RhY2suZ2V0TWluKCk7ICAgLS0+IOi/lOWbniAtMi5cbiovXG4vKipcbiAqIGluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNaW5TdGFjayB7XG4gICAgZGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVzaCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0TWluKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oLi4udGhpcy5kYXRhKTtcbiAgICB9XG59XG5cbi8qKlxuICogWW91ciBNaW5TdGFjayBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNaW5TdGFjaygpXG4gKiBvYmoucHVzaCh4KVxuICogb2JqLnBvcCgpXG4gKiB2YXIgcGFyYW1fMyA9IG9iai50b3AoKVxuICogdmFyIHBhcmFtXzQgPSBvYmouZ2V0TWluKClcbiAqL1xuXG5leHBvcnQge31cbiJdfQ==