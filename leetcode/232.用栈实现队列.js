"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
示例:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
说明:

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
* */
/**
 * Initialize your data structure here.
 * 只能用 arr的 push 和 pop 方法 length 属性
 */
class MyQueue {
    constructor() {
        this.stackForPush = [];
        this.stackForPop = [];
    }
    /**
     * Push element x to the back of queue.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stackForPush.push(x);
    }
    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
        if (!this.stackForPop.length) {
            while (this.stackForPush.length) {
                this.stackForPop.push(this.stackForPush.pop());
            }
        }
        const result = this.stackForPop.pop();
        this.stackForPop.push(result);
        return result;
    }
    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return !(this.stackForPop.length || this.stackForPush.length);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMyLueUqOagiOWunueOsOmYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMyLueUqOagiOWunueOsOmYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFBYjtRQUNFLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBbUM3QixDQUFDO0lBakNDOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsQ0FBUztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQzthQUNqRDtTQUNGO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSztRQUNILE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5L2/55So5qCI5a6e546w6Zif5YiX55qE5LiL5YiX5pON5L2c77yaXHJcblxyXG5wdXNoKHgpIC0tIOWwhuS4gOS4quWFg+e0oOaUvuWFpemYn+WIl+eahOWwvumDqOOAglxyXG5wb3AoKSAtLSDku47pmJ/liJfpppbpg6jnp7vpmaTlhYPntKDjgIJcclxucGVlaygpIC0tIOi/lOWbnumYn+WIl+mmlumDqOeahOWFg+e0oOOAglxyXG5lbXB0eSgpIC0tIOi/lOWbnumYn+WIl+aYr+WQpuS4uuepuuOAglxyXG7npLrkvos6XHJcblxyXG5NeVF1ZXVlIHF1ZXVlID0gbmV3IE15UXVldWUoKTtcclxuXHJcbnF1ZXVlLnB1c2goMSk7XHJcbnF1ZXVlLnB1c2goMik7XHJcbnF1ZXVlLnBlZWsoKTsgIC8vIOi/lOWbniAxXHJcbnF1ZXVlLnBvcCgpOyAgIC8vIOi/lOWbniAxXHJcbnF1ZXVlLmVtcHR5KCk7IC8vIOi/lOWbniBmYWxzZVxyXG7or7TmmI46XHJcblxyXG7kvaDlj6rog73kvb/nlKjmoIflh4bnmoTmoIjmk43kvZwgLS0g5Lmf5bCx5piv5Y+q5pyJIHB1c2ggdG8gdG9wLCBwZWVrL3BvcCBmcm9tIHRvcCwgc2l6ZSwg5ZKMIGlzIGVtcHR5IOaTjeS9nOaYr+WQiOazleeahOOAglxyXG7kvaDmiYDkvb/nlKjnmoTor63oqIDkuZ/orrjkuI3mlK/mjIHmoIjjgILkvaDlj6/ku6Xkvb/nlKggbGlzdCDmiJbogIUgZGVxdWXvvIjlj4znq6/pmJ/liJfvvInmnaXmqKHmi5/kuIDkuKrmoIjvvIzlj6ropoHmmK/moIflh4bnmoTmoIjmk43kvZzljbPlj6/jgIJcclxu5YGH6K6+5omA5pyJ5pON5L2c6YO95piv5pyJ5pWI55qEIO+8iOS+i+Wmgu+8jOS4gOS4quepuueahOmYn+WIl+S4jeS8muiwg+eUqCBwb3Ag5oiW6ICFIHBlZWsg5pON5L2c77yJ44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxyXG4gKiDlj6rog73nlKggYXJy55qEIHB1c2gg5ZKMIHBvcCDmlrnms5UgbGVuZ3RoIOWxnuaAp1xyXG4gKi9cclxuY2xhc3MgTXlRdWV1ZSB7XHJcbiAgc3RhY2tGb3JQdXNoOiBudW1iZXJbXSA9IFtdO1xyXG4gIHN0YWNrRm9yUG9wOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBQdXNoIGVsZW1lbnQgeCB0byB0aGUgYmFjayBvZiBxdWV1ZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICovXHJcbiAgcHVzaCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhY2tGb3JQdXNoLnB1c2goeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGZyb250IGVsZW1lbnQuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHBlZWsoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhY2tGb3JQb3AubGVuZ3RoKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLnN0YWNrRm9yUHVzaC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnN0YWNrRm9yUG9wLnB1c2godGhpcy5zdGFja0ZvclB1c2gucG9wKCkhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RhY2tGb3JQb3AucG9wKCkhO1xyXG4gICAgdGhpcy5zdGFja0ZvclBvcC5wdXNoKHJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcXVldWUgaXMgZW1wdHkuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBlbXB0eSgpIHtcclxuICAgIHJldHVybiAhKHRoaXMuc3RhY2tGb3JQb3AubGVuZ3RoIHx8IHRoaXMuc3RhY2tGb3JQdXNoLmxlbmd0aCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogWW91ciBNeVF1ZXVlIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XHJcbiAqIHZhciBvYmogPSBuZXcgTXlRdWV1ZSgpXHJcbiAqIG9iai5wdXNoKHgpXHJcbiAqIHZhciBwYXJhbV8yID0gb2JqLnBvcCgpXHJcbiAqIHZhciBwYXJhbV8zID0gb2JqLnBlZWsoKVxyXG4gKiB2YXIgcGFyYW1fNCA9IG9iai5lbXB0eSgpXHJcbiAqL1xyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=