"use strict";
/*
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据题意
 * 只能用 数组的 push shift方法
 * 可以查看length 属性
 * */
/**
 * Initialize your data structure here.
 */
class MyStack {
    constructor() {
        this.list = [];
    }
    /**
     * Push element x onto stack.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.list.push(x);
    }
    /**
     * Removes the element on top of the stack and returns that element.
     * @return {number}
     */
    pop() {
        const tempList = [];
        while (this.list.length !== 1) {
            tempList.push(this.list.shift());
        }
        const popResult = this.list.shift();
        this.list = tempList;
        return popResult;
    }
    /**
     * Get the top element.
     * @return {number}
     */
    top() {
        const tempList = [];
        while (this.list.length !== 1) {
            tempList.push(this.list.shift());
        }
        const popResult = this.list.shift();
        this.list = tempList;
        this.list.push(popResult);
        return popResult;
    }
    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.list.length === 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI1LueUqOmYn+WIl+WunueOsOagiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI1LueUqOmYn+WIl+WunueOsOagiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztJQVlJOztBQUVKOzs7O0tBSUs7QUFDTDs7R0FFRztBQUNILE1BQU0sT0FBTztJQUFiO1FBQ0UsU0FBSSxHQUFhLEVBQUUsQ0FBQztJQStDdEIsQ0FBQztJQTdDQzs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLENBQVM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRztRQUNELE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFHLENBQUMsQ0FBQztTQUNuQztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUc7UUFDRCxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS9v+eUqOmYn+WIl+WunueOsOagiOeahOS4i+WIl+aTjeS9nO+8mlxuXG5wdXNoKHgpIC0tIOWFg+e0oCB4IOWFpeagiFxucG9wKCkgLS0g56e76Zmk5qCI6aG25YWD57SgXG50b3AoKSAtLSDojrflj5bmoIjpobblhYPntKBcbmVtcHR5KCkgLS0g6L+U5Zue5qCI5piv5ZCm5Li656m6XG7ms6jmhI86XG5cbuS9oOWPquiDveS9v+eUqOmYn+WIl+eahOWfuuacrOaTjeS9nC0tIOS5n+WwseaYryBwdXNoIHRvIGJhY2ssIHBlZWsvcG9wIGZyb20gZnJvbnQsIHNpemUsIOWSjCBpcyBlbXB0eSDov5nkupvmk43kvZzmmK/lkIjms5XnmoTjgIJcbuS9oOaJgOS9v+eUqOeahOivreiogOS5n+iuuOS4jeaUr+aMgemYn+WIl+OAgiDkvaDlj6/ku6Xkvb/nlKggbGlzdCDmiJbogIUgZGVxdWXvvIjlj4znq6/pmJ/liJfvvInmnaXmqKHmi5/kuIDkuKrpmJ/liJcgLCDlj6ropoHmmK/moIflh4bnmoTpmJ/liJfmk43kvZzljbPlj6/jgIJcbuS9oOWPr+S7peWBh+iuvuaJgOacieaTjeS9nOmDveaYr+acieaViOeahO+8iOS+i+Wmgiwg5a+55LiA5Liq56m655qE5qCI5LiN5Lya6LCD55SoIHBvcCDmiJbogIUgdG9wIOaTjeS9nO+8ieOAglxuKiAqL1xuXG4vKipcbiAqIOagueaNrumimOaEj1xuICog5Y+q6IO955SoIOaVsOe7hOeahCBwdXNoIHNoaWZ05pa55rOVXG4gKiDlj6/ku6Xmn6XnnItsZW5ndGgg5bGe5oCnXG4gKiAqL1xuLyoqXG4gKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS5cbiAqL1xuY2xhc3MgTXlTdGFjayB7XG4gIGxpc3Q6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIFB1c2ggZWxlbWVudCB4IG9udG8gc3RhY2suXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwdXNoKHg6IG51bWJlcikge1xuICAgIHRoaXMubGlzdC5wdXNoKHgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGVsZW1lbnQgb24gdG9wIG9mIHRoZSBzdGFjayBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHBvcCgpIHtcbiAgICBjb25zdCB0ZW1wTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5saXN0Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGVtcExpc3QucHVzaCh0aGlzLmxpc3Quc2hpZnQoKSEpO1xuICAgIH1cbiAgICBjb25zdCBwb3BSZXN1bHQgPSB0aGlzLmxpc3Quc2hpZnQoKTtcbiAgICB0aGlzLmxpc3QgPSB0ZW1wTGlzdDtcbiAgICByZXR1cm4gcG9wUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG9wIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvcCgpIHtcbiAgICBjb25zdCB0ZW1wTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5saXN0Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGVtcExpc3QucHVzaCh0aGlzLmxpc3Quc2hpZnQoKSEpO1xuICAgIH1cbiAgICBjb25zdCBwb3BSZXN1bHQgPSB0aGlzLmxpc3Quc2hpZnQoKSE7XG4gICAgdGhpcy5saXN0ID0gdGVtcExpc3Q7XG4gICAgdGhpcy5saXN0LnB1c2gocG9wUmVzdWx0KTtcbiAgICByZXR1cm4gcG9wUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgc3RhY2sgaXMgZW1wdHkuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aCA9PT0gMDtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgTXlTdGFjayBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNeVN0YWNrKClcbiAqIG9iai5wdXNoKHgpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5wb3AoKVxuICogdmFyIHBhcmFtXzMgPSBvYmoudG9wKClcbiAqIHZhciBwYXJhbV80ID0gb2JqLmVtcHR5KClcbiAqL1xuXG5leHBvcnQge307XG4iXX0=