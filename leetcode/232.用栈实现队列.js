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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMyLueUqOagiOWunueOsOmYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMyLueUqOagiOWunueOsOmYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFBYjtRQUNFLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBbUM3QixDQUFDO0lBakNDOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsQ0FBUztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQzthQUNqRDtTQUNGO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSztRQUNILE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS9v+eUqOagiOWunueOsOmYn+WIl+eahOS4i+WIl+aTjeS9nO+8mlxuXG5wdXNoKHgpIC0tIOWwhuS4gOS4quWFg+e0oOaUvuWFpemYn+WIl+eahOWwvumDqOOAglxucG9wKCkgLS0g5LuO6Zif5YiX6aaW6YOo56e76Zmk5YWD57Sg44CCXG5wZWVrKCkgLS0g6L+U5Zue6Zif5YiX6aaW6YOo55qE5YWD57Sg44CCXG5lbXB0eSgpIC0tIOi/lOWbnumYn+WIl+aYr+WQpuS4uuepuuOAglxu56S65L6LOlxuXG5NeVF1ZXVlIHF1ZXVlID0gbmV3IE15UXVldWUoKTtcblxucXVldWUucHVzaCgxKTtcbnF1ZXVlLnB1c2goMik7XG5xdWV1ZS5wZWVrKCk7ICAvLyDov5Tlm54gMVxucXVldWUucG9wKCk7ICAgLy8g6L+U5ZueIDFcbnF1ZXVlLmVtcHR5KCk7IC8vIOi/lOWbniBmYWxzZVxu6K+05piOOlxuXG7kvaDlj6rog73kvb/nlKjmoIflh4bnmoTmoIjmk43kvZwgLS0g5Lmf5bCx5piv5Y+q5pyJIHB1c2ggdG8gdG9wLCBwZWVrL3BvcCBmcm9tIHRvcCwgc2l6ZSwg5ZKMIGlzIGVtcHR5IOaTjeS9nOaYr+WQiOazleeahOOAglxu5L2g5omA5L2/55So55qE6K+t6KiA5Lmf6K645LiN5pSv5oyB5qCI44CC5L2g5Y+v5Lul5L2/55SoIGxpc3Qg5oiW6ICFIGRlcXVl77yI5Y+M56uv6Zif5YiX77yJ5p2l5qih5ouf5LiA5Liq5qCI77yM5Y+q6KaB5piv5qCH5YeG55qE5qCI5pON5L2c5Y2z5Y+v44CCXG7lgYforr7miYDmnInmk43kvZzpg73mmK/mnInmlYjnmoQg77yI5L6L5aaC77yM5LiA5Liq56m655qE6Zif5YiX5LiN5Lya6LCD55SoIHBvcCDmiJbogIUgcGVlayDmk43kvZzvvInjgIJcbiogKi9cbi8qKlxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKiDlj6rog73nlKggYXJy55qEIHB1c2gg5ZKMIHBvcCDmlrnms5UgbGVuZ3RoIOWxnuaAp1xuICovXG5jbGFzcyBNeVF1ZXVlIHtcbiAgc3RhY2tGb3JQdXNoOiBudW1iZXJbXSA9IFtdO1xuICBzdGFja0ZvclBvcDogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogUHVzaCBlbGVtZW50IHggdG8gdGhlIGJhY2sgb2YgcXVldWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwdXNoKHg6IG51bWJlcikge1xuICAgIHRoaXMuc3RhY2tGb3JQdXNoLnB1c2goeCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBmcm9udCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBwZWVrKCkge1xuICAgIGlmICghdGhpcy5zdGFja0ZvclBvcC5sZW5ndGgpIHtcbiAgICAgIHdoaWxlICh0aGlzLnN0YWNrRm9yUHVzaC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zdGFja0ZvclBvcC5wdXNoKHRoaXMuc3RhY2tGb3JQdXNoLnBvcCgpISk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zdGFja0ZvclBvcC5wb3AoKSE7XG4gICAgdGhpcy5zdGFja0ZvclBvcC5wdXNoKHJlc3VsdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gISh0aGlzLnN0YWNrRm9yUG9wLmxlbmd0aCB8fCB0aGlzLnN0YWNrRm9yUHVzaC5sZW5ndGgpO1xuICB9XG59XG5cbi8qKlxuICogWW91ciBNeVF1ZXVlIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IE15UXVldWUoKVxuICogb2JqLnB1c2goeClcbiAqIHZhciBwYXJhbV8yID0gb2JqLnBvcCgpXG4gKiB2YXIgcGFyYW1fMyA9IG9iai5wZWVrKClcbiAqIHZhciBwYXJhbV80ID0gb2JqLmVtcHR5KClcbiAqL1xuXG5leHBvcnQge307XG4iXX0=