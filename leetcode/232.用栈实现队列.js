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
  stackForPush = [];
  stackForPop = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMyLueUqOagiOWunueOsOmYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMyLueUqOagiOWunueOsOmYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFDWCxZQUFZLEdBQWEsRUFBRSxDQUFDO0lBQzVCLFdBQVcsR0FBYSxFQUFFLENBQUM7SUFFM0I7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxDQUFTO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0gsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5L2/55So5qCI5a6e546w6Zif5YiX55qE5LiL5YiX5pON5L2c77yaXG5cbnB1c2goeCkgLS0g5bCG5LiA5Liq5YWD57Sg5pS+5YWl6Zif5YiX55qE5bC+6YOo44CCXG5wb3AoKSAtLSDku47pmJ/liJfpppbpg6jnp7vpmaTlhYPntKDjgIJcbnBlZWsoKSAtLSDov5Tlm57pmJ/liJfpppbpg6jnmoTlhYPntKDjgIJcbmVtcHR5KCkgLS0g6L+U5Zue6Zif5YiX5piv5ZCm5Li656m644CCXG7npLrkvos6XG5cbk15UXVldWUgcXVldWUgPSBuZXcgTXlRdWV1ZSgpO1xuXG5xdWV1ZS5wdXNoKDEpO1xucXVldWUucHVzaCgyKTtcbnF1ZXVlLnBlZWsoKTsgIC8vIOi/lOWbniAxXG5xdWV1ZS5wb3AoKTsgICAvLyDov5Tlm54gMVxucXVldWUuZW1wdHkoKTsgLy8g6L+U5ZueIGZhbHNlXG7or7TmmI46XG5cbuS9oOWPquiDveS9v+eUqOagh+WHhueahOagiOaTjeS9nCAtLSDkuZ/lsLHmmK/lj6rmnIkgcHVzaCB0byB0b3AsIHBlZWsvcG9wIGZyb20gdG9wLCBzaXplLCDlkowgaXMgZW1wdHkg5pON5L2c5piv5ZCI5rOV55qE44CCXG7kvaDmiYDkvb/nlKjnmoTor63oqIDkuZ/orrjkuI3mlK/mjIHmoIjjgILkvaDlj6/ku6Xkvb/nlKggbGlzdCDmiJbogIUgZGVxdWXvvIjlj4znq6/pmJ/liJfvvInmnaXmqKHmi5/kuIDkuKrmoIjvvIzlj6ropoHmmK/moIflh4bnmoTmoIjmk43kvZzljbPlj6/jgIJcbuWBh+iuvuaJgOacieaTjeS9nOmDveaYr+acieaViOeahCDvvIjkvovlpoLvvIzkuIDkuKrnqbrnmoTpmJ/liJfkuI3kvJrosIPnlKggcG9wIOaIluiAhSBwZWVrIOaTjeS9nO+8ieOAglxuKiAqL1xuLyoqXG4gKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS5cbiAqIOWPquiDveeUqCBhcnLnmoQgcHVzaCDlkowgcG9wIOaWueazlSBsZW5ndGgg5bGe5oCnXG4gKi9cbmNsYXNzIE15UXVldWUge1xuICBzdGFja0ZvclB1c2g6IG51bWJlcltdID0gW107XG4gIHN0YWNrRm9yUG9wOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBQdXNoIGVsZW1lbnQgeCB0byB0aGUgYmFjayBvZiBxdWV1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHB1c2goeDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGFja0ZvclB1c2gucHVzaCh4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGZyb250IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHBlZWsoKSB7XG4gICAgaWYgKCF0aGlzLnN0YWNrRm9yUG9wLmxlbmd0aCkge1xuICAgICAgd2hpbGUgKHRoaXMuc3RhY2tGb3JQdXNoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnN0YWNrRm9yUG9wLnB1c2godGhpcy5zdGFja0ZvclB1c2gucG9wKCkhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnN0YWNrRm9yUG9wLnBvcCgpITtcbiAgICB0aGlzLnN0YWNrRm9yUG9wLnB1c2gocmVzdWx0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBxdWV1ZSBpcyBlbXB0eS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiAhKHRoaXMuc3RhY2tGb3JQb3AubGVuZ3RoIHx8IHRoaXMuc3RhY2tGb3JQdXNoLmxlbmd0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIE15UXVldWUgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlRdWV1ZSgpXG4gKiBvYmoucHVzaCh4KVxuICogdmFyIHBhcmFtXzIgPSBvYmoucG9wKClcbiAqIHZhciBwYXJhbV8zID0gb2JqLnBlZWsoKVxuICogdmFyIHBhcmFtXzQgPSBvYmouZW1wdHkoKVxuICovXG5cbmV4cG9ydCB7fTtcbiJdfQ==
