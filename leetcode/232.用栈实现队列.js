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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMyLueUqOagiOWunueOsOmYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMyLueUqOagiOWunueOsOmYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFBYjtRQUNJLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBb0MvQixDQUFDO0lBbENHOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsQ0FBUztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRyxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFHLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQUEsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5L2/55So5qCI5a6e546w6Zif5YiX55qE5LiL5YiX5pON5L2c77yaXHJcblxyXG5wdXNoKHgpIC0tIOWwhuS4gOS4quWFg+e0oOaUvuWFpemYn+WIl+eahOWwvumDqOOAglxyXG5wb3AoKSAtLSDku47pmJ/liJfpppbpg6jnp7vpmaTlhYPntKDjgIJcclxucGVlaygpIC0tIOi/lOWbnumYn+WIl+mmlumDqOeahOWFg+e0oOOAglxyXG5lbXB0eSgpIC0tIOi/lOWbnumYn+WIl+aYr+WQpuS4uuepuuOAglxyXG7npLrkvos6XHJcblxyXG5NeVF1ZXVlIHF1ZXVlID0gbmV3IE15UXVldWUoKTtcclxuXHJcbnF1ZXVlLnB1c2goMSk7XHJcbnF1ZXVlLnB1c2goMik7XHJcbnF1ZXVlLnBlZWsoKTsgIC8vIOi/lOWbniAxXHJcbnF1ZXVlLnBvcCgpOyAgIC8vIOi/lOWbniAxXHJcbnF1ZXVlLmVtcHR5KCk7IC8vIOi/lOWbniBmYWxzZVxyXG7or7TmmI46XHJcblxyXG7kvaDlj6rog73kvb/nlKjmoIflh4bnmoTmoIjmk43kvZwgLS0g5Lmf5bCx5piv5Y+q5pyJIHB1c2ggdG8gdG9wLCBwZWVrL3BvcCBmcm9tIHRvcCwgc2l6ZSwg5ZKMIGlzIGVtcHR5IOaTjeS9nOaYr+WQiOazleeahOOAglxyXG7kvaDmiYDkvb/nlKjnmoTor63oqIDkuZ/orrjkuI3mlK/mjIHmoIjjgILkvaDlj6/ku6Xkvb/nlKggbGlzdCDmiJbogIUgZGVxdWXvvIjlj4znq6/pmJ/liJfvvInmnaXmqKHmi5/kuIDkuKrmoIjvvIzlj6ropoHmmK/moIflh4bnmoTmoIjmk43kvZzljbPlj6/jgIJcclxu5YGH6K6+5omA5pyJ5pON5L2c6YO95piv5pyJ5pWI55qEIO+8iOS+i+Wmgu+8jOS4gOS4quepuueahOmYn+WIl+S4jeS8muiwg+eUqCBwb3Ag5oiW6ICFIHBlZWsg5pON5L2c77yJ44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxyXG4gKiDlj6rog73nlKggYXJy55qEIHB1c2gg5ZKMIHBvcCDmlrnms5UgbGVuZ3RoIOWxnuaAp1xyXG4gKi9cclxuY2xhc3MgTXlRdWV1ZSB7XHJcbiAgICBzdGFja0ZvclB1c2g6IG51bWJlcltdID0gW107XHJcbiAgICBzdGFja0ZvclBvcDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1c2ggZWxlbWVudCB4IHRvIHRoZSBiYWNrIG9mIHF1ZXVlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHB1c2goeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFja0ZvclB1c2gucHVzaCh4KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBmcm9udCBlbGVtZW50LlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBwZWVrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFja0ZvclBvcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc3RhY2tGb3JQdXNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFja0ZvclBvcC5wdXNoKHRoaXMuc3RhY2tGb3JQdXNoLnBvcCgpISk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RhY2tGb3JQb3AucG9wKCkhO1xyXG4gICAgICAgIHRoaXMuc3RhY2tGb3JQb3AucHVzaChyZXN1bHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcXVldWUgaXMgZW1wdHkuXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBlbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gISh0aGlzLnN0YWNrRm9yUG9wLmxlbmd0aCB8fCB0aGlzLnN0YWNrRm9yUHVzaC5sZW5ndGgpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFlvdXIgTXlRdWV1ZSBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxyXG4gKiB2YXIgb2JqID0gbmV3IE15UXVldWUoKVxyXG4gKiBvYmoucHVzaCh4KVxyXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5wb3AoKVxyXG4gKiB2YXIgcGFyYW1fMyA9IG9iai5wZWVrKClcclxuICogdmFyIHBhcmFtXzQgPSBvYmouZW1wdHkoKVxyXG4gKi9cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19
