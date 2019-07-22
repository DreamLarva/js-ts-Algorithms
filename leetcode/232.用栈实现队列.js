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
    ;
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
    ;
    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return !(this.stackForPop.length || this.stackForPush.length);
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMyLueUqOagiOWunueOsOmYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMyLueUqOagiOWunueOsOmYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFBYjtRQUNJLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBb0MvQixDQUFDO0lBbENHOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsQ0FBUztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRyxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFHLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQUEsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS9v+eUqOagiOWunueOsOmYn+WIl+eahOS4i+WIl+aTjeS9nO+8mlxuXG5wdXNoKHgpIC0tIOWwhuS4gOS4quWFg+e0oOaUvuWFpemYn+WIl+eahOWwvumDqOOAglxucG9wKCkgLS0g5LuO6Zif5YiX6aaW6YOo56e76Zmk5YWD57Sg44CCXG5wZWVrKCkgLS0g6L+U5Zue6Zif5YiX6aaW6YOo55qE5YWD57Sg44CCXG5lbXB0eSgpIC0tIOi/lOWbnumYn+WIl+aYr+WQpuS4uuepuuOAglxu56S65L6LOlxuXG5NeVF1ZXVlIHF1ZXVlID0gbmV3IE15UXVldWUoKTtcblxucXVldWUucHVzaCgxKTtcbnF1ZXVlLnB1c2goMik7XG5xdWV1ZS5wZWVrKCk7ICAvLyDov5Tlm54gMVxucXVldWUucG9wKCk7ICAgLy8g6L+U5ZueIDFcbnF1ZXVlLmVtcHR5KCk7IC8vIOi/lOWbniBmYWxzZVxu6K+05piOOlxuXG7kvaDlj6rog73kvb/nlKjmoIflh4bnmoTmoIjmk43kvZwgLS0g5Lmf5bCx5piv5Y+q5pyJIHB1c2ggdG8gdG9wLCBwZWVrL3BvcCBmcm9tIHRvcCwgc2l6ZSwg5ZKMIGlzIGVtcHR5IOaTjeS9nOaYr+WQiOazleeahOOAglxu5L2g5omA5L2/55So55qE6K+t6KiA5Lmf6K645LiN5pSv5oyB5qCI44CC5L2g5Y+v5Lul5L2/55SoIGxpc3Qg5oiW6ICFIGRlcXVl77yI5Y+M56uv6Zif5YiX77yJ5p2l5qih5ouf5LiA5Liq5qCI77yM5Y+q6KaB5piv5qCH5YeG55qE5qCI5pON5L2c5Y2z5Y+v44CCXG7lgYforr7miYDmnInmk43kvZzpg73mmK/mnInmlYjnmoQg77yI5L6L5aaC77yM5LiA5Liq56m655qE6Zif5YiX5LiN5Lya6LCD55SoIHBvcCDmiJbogIUgcGVlayDmk43kvZzvvInjgIJcbiogKi9cbi8qKlxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKiDlj6rog73nlKggYXJy55qEIHB1c2gg5ZKMIHBvcCDmlrnms5UgbGVuZ3RoIOWxnuaAp1xuICovXG5jbGFzcyBNeVF1ZXVlIHtcbiAgICBzdGFja0ZvclB1c2g6IG51bWJlcltdID0gW107XG4gICAgc3RhY2tGb3JQb3A6IG51bWJlcltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGVsZW1lbnQgeCB0byB0aGUgYmFjayBvZiBxdWV1ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVzaCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFja0ZvclB1c2gucHVzaCh4KTtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZyb250IGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHBlZWsoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFja0ZvclBvcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnN0YWNrRm9yUHVzaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrRm9yUG9wLnB1c2godGhpcy5zdGFja0ZvclB1c2gucG9wKCkhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RhY2tGb3JQb3AucG9wKCkhO1xuICAgICAgICB0aGlzLnN0YWNrRm9yUG9wLnB1c2gocmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMuc3RhY2tGb3JQb3AubGVuZ3RoIHx8IHRoaXMuc3RhY2tGb3JQdXNoLmxlbmd0aCk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBZb3VyIE15UXVldWUgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlRdWV1ZSgpXG4gKiBvYmoucHVzaCh4KVxuICogdmFyIHBhcmFtXzIgPSBvYmoucG9wKClcbiAqIHZhciBwYXJhbV8zID0gb2JqLnBlZWsoKVxuICogdmFyIHBhcmFtXzQgPSBvYmouZW1wdHkoKVxuICovXG5cbmV4cG9ydCB7fTtcbiJdfQ==