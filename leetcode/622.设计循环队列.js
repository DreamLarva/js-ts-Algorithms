"use strict";
/*
设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。


示例：

MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3

circularQueue.enQueue(1);  // 返回 true

circularQueue.enQueue(2);  // 返回 true

circularQueue.enQueue(3);  // 返回 true

circularQueue.enQueue(4);  // 返回 false，队列已满

circularQueue.Rear();  // 返回 3

circularQueue.isFull();  // 返回 true

circularQueue.deQueue();  // 返回 true

circularQueue.enQueue(4);  // 返回 true

circularQueue.Rear();  // 返回 4



提示：

所有的值都在 0 至 1000 的范围内；
操作数将在 1 至 1000 的范围内；
请不要使用内置的队列库。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class MyCircularQueue {
    size;
    cache = [];
    /**
     * Initialize your data structure here. Set the size of the queue to be k.
     * MyCircularQueue(k): 构造器，设置队列长度为 k 。
     * @param {number} k
     */
    constructor(k) {
        this.size = k;
    }
    _tail_index = -1;
    // 指向为节点
    get tail_index() {
        return this._tail_index;
    }
    set tail_index(index) {
        if (index === -1) {
            this._tail_index = -1;
            return;
        }
        this._tail_index = this.getIndex(index);
    }
    _head_index = -1;
    // 指向首节点 前一个点
    get head_index() {
        return this._head_index;
    }
    set head_index(index) {
        if (index === -1) {
            this._head_index = -1;
            return;
        }
        this._head_index = this.getIndex(index);
    }
    getIndex(index) {
        if (index > this.size - 1) {
            index = index % this.size;
        }
        return index;
    }
    /**
     * Insert an element into the circular queue. Return true if the operation is successful.
     * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull())
            return false;
        this.tail_index++;
        this.cache[this.tail_index] = value;
        if (this.head_index === -1) {
            this.head_index = 0;
        }
        return true;
    }
    /**
     * Delete an element from the circular queue. Return true if the operation is successful.
     * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty())
            return false;
        if (this.head_index == this.tail_index) {
            this.head_index = -1;
            this.tail_index = -1;
            this.cache = [];
        }
        else {
            this.cache[this.head_index++] = void 0;
        }
        return true;
    }
    /**
     * Get the front item from the queue.
     * Front: 从队首获取元素。如果队列为空，返回 -1 。
     * @return {number}
     */
    Front() {
        if (this.isEmpty())
            return -1;
        return this.cache[this.head_index];
    }
    /**
     * Get the last item from the queue.
     * Rear: 获取队尾元素。如果队列为空，返回 -1 。
     * @return {number}
     */
    Rear() {
        if (this.isEmpty())
            return -1;
        return this.cache[this.tail_index];
    }
    /**
     * Checks whether the circular queue is empty or not.
     * isEmpty(): 检查循环队列是否为空。
     * @return {boolean}
     */
    isEmpty() {
        return this.head_index === -1 && this.tail_index === -1;
    }
    /**
     * Checks whether the circular queue is full or not.
     * isFull(): 检查循环队列是否已满。
     * @return {boolean}
     */
    isFull() {
        return this.getIndex(this.tail_index + 1) === this.head_index;
    }
}
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
const assert_1 = __importDefault(require("assert"));
const circularQueue = new MyCircularQueue(3); // 设置长度为 3
assert_1.default.strictEqual(circularQueue.enQueue(1), true);
assert_1.default.strictEqual(circularQueue.enQueue(2), true);
assert_1.default.strictEqual(circularQueue.enQueue(3), true);
assert_1.default.strictEqual(circularQueue.enQueue(4), false); // 队列已满
assert_1.default.strictEqual(circularQueue.Rear(), 3);
assert_1.default.strictEqual(circularQueue.isFull(), true);
assert_1.default.strictEqual(circularQueue.deQueue(), true);
assert_1.default.strictEqual(circularQueue.enQueue(4), true);
assert_1.default.strictEqual(circularQueue.Rear(), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLuiuvuiuoeW+queOr+mYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjIyLuiuvuiuoeW+queOr+mYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7Ozs7QUFFSixNQUFNLGVBQWU7SUFDbkIsSUFBSSxDQUFTO0lBQ2IsS0FBSyxHQUFzQixFQUFFLENBQUM7SUFFOUI7Ozs7T0FJRztJQUNILFlBQVksQ0FBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqQixhQUFhO0lBQ2IsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENB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QUFDLENBQUMsQ0FBQztBQUU1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFakQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWxELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFbkQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuiuvuiuoeS9oOeahOW+queOr+mYn+WIl+WunueOsOOAgiDlvqrnjq/pmJ/liJfmmK/kuIDnp43nur/mgKfmlbDmja7nu5PmnoTvvIzlhbbmk43kvZzooajnjrDln7rkuo4gRklGT++8iOWFiOi/m+WFiOWHuu+8ieWOn+WImeW5tuS4lOmYn+Wwvuiiq+i/nuaOpeWcqOmYn+mmluS5i+WQjuS7peW9ouaIkOS4gOS4quW+queOr+OAguWug+S5n+iiq+ensOS4uuKAnOeOr+W9oue8k+WGsuWZqOKAneOAglxuXG7lvqrnjq/pmJ/liJfnmoTkuIDkuKrlpb3lpITmmK/miJHku6zlj6/ku6XliKnnlKjov5nkuKrpmJ/liJfkuYvliY3nlKjov4fnmoTnqbrpl7TjgILlnKjkuIDkuKrmma7pgJrpmJ/liJfph4zvvIzkuIDml6bkuIDkuKrpmJ/liJfmu6HkuobvvIzmiJHku6zlsLHkuI3og73mj5LlhaXkuIvkuIDkuKrlhYPntKDvvIzljbPkvb/lnKjpmJ/liJfliY3pnaLku43mnInnqbrpl7TjgILkvYbmmK/kvb/nlKjlvqrnjq/pmJ/liJfvvIzmiJHku6zog73kvb/nlKjov5nkupvnqbrpl7TljrvlrZjlgqjmlrDnmoTlgLzjgIJcblxu5L2g55qE5a6e546w5bqU6K+l5pSv5oyB5aaC5LiL5pON5L2c77yaXG5cbk15Q2lyY3VsYXJRdWV1ZShrKTog5p6E6YCg5Zmo77yM6K6+572u6Zif5YiX6ZW/5bqm5Li6IGsg44CCXG5Gcm9udDog5LuO6Zif6aaW6I635Y+W5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxuUmVhcjog6I635Y+W6Zif5bC+5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxuZW5RdWV1ZSh2YWx1ZSk6IOWQkeW+queOr+mYn+WIl+aPkuWFpeS4gOS4quWFg+e0oOOAguWmguaenOaIkOWKn+aPkuWFpeWImei/lOWbnuecn+OAglxuZGVRdWV1ZSgpOiDku47lvqrnjq/pmJ/liJfkuK3liKDpmaTkuIDkuKrlhYPntKDjgILlpoLmnpzmiJDlip/liKDpmaTliJnov5Tlm57nnJ/jgIJcbmlzRW1wdHkoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5Li656m644CCXG5pc0Z1bGwoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5bey5ruh44CCXG5cblxu56S65L6L77yaXG5cbk15Q2lyY3VsYXJRdWV1ZSBjaXJjdWxhclF1ZXVlID0gbmV3IE15Y2lyY3VsYXJRdWV1ZSgzKTsgLy8g6K6+572u6ZW/5bqm5Li6IDNcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDEpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDIpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDMpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpOyAgLy8g6L+U5ZueIGZhbHNl77yM6Zif5YiX5bey5ruhXG5cbmNpcmN1bGFyUXVldWUuUmVhcigpOyAgLy8g6L+U5ZueIDNcblxuY2lyY3VsYXJRdWV1ZS5pc0Z1bGwoKTsgIC8vIOi/lOWbniB0cnVlXG5cbmNpcmN1bGFyUXVldWUuZGVRdWV1ZSgpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5SZWFyKCk7ICAvLyDov5Tlm54gNFxuXG5cblxu5o+Q56S677yaXG5cbuaJgOacieeahOWAvOmDveWcqCAwIOiHsyAxMDAwIOeahOiMg+WbtOWGhe+8m1xu5pON5L2c5pWw5bCG5ZyoIDEg6IezIDEwMDAg55qE6IyD5Zu05YaF77ybXG7or7fkuI3opoHkvb/nlKjlhoXnva7nmoTpmJ/liJflupPjgIJcbiogKi9cblxuY2xhc3MgTXlDaXJjdWxhclF1ZXVlIHtcbiAgc2l6ZTogbnVtYmVyO1xuICBjYWNoZTogKG51bWJlciB8IHZvaWQpW10gPSBbXTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuIFNldCB0aGUgc2l6ZSBvZiB0aGUgcXVldWUgdG8gYmUgay5cbiAgICogTXlDaXJjdWxhclF1ZXVlKGspOiDmnoTpgKDlmajvvIzorr7nva7pmJ/liJfplb/luqbkuLogayDjgIJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtcbiAgICovXG4gIGNvbnN0cnVjdG9yKGs6IG51bWJlcikge1xuICAgIHRoaXMuc2l6ZSA9IGs7XG4gIH1cblxuICBfdGFpbF9pbmRleCA9IC0xO1xuXG4gIC8vIOaMh+WQkeS4uuiKgueCuVxuICBnZXQgdGFpbF9pbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFpbF9pbmRleDtcbiAgfVxuXG4gIHNldCB0YWlsX2luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLl90YWlsX2luZGV4ID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RhaWxfaW5kZXggPSB0aGlzLmdldEluZGV4KGluZGV4KTtcbiAgfVxuXG4gIF9oZWFkX2luZGV4ID0gLTE7XG5cbiAgLy8g5oyH5ZCR6aaW6IqC54K5IOWJjeS4gOS4queCuVxuICBnZXQgaGVhZF9pbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZF9pbmRleDtcbiAgfVxuXG4gIHNldCBoZWFkX2luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLl9oZWFkX2luZGV4ID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2hlYWRfaW5kZXggPSB0aGlzLmdldEluZGV4KGluZGV4KTtcbiAgfVxuXG4gIGdldEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPiB0aGlzLnNpemUgLSAxKSB7XG4gICAgICBpbmRleCA9IGluZGV4ICUgdGhpcy5zaXplO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGFuIGVsZW1lbnQgaW50byB0aGUgY2lyY3VsYXIgcXVldWUuIFJldHVybiB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cbiAgICogZW5RdWV1ZSh2YWx1ZSk6IOWQkeW+queOr+mYn+WIl+aPkuWFpeS4gOS4quWFg+e0oOOAguWmguaenOaIkOWKn+aPkuWFpeWImei/lOWbnuecn+OAglxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVuUXVldWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmlzRnVsbCgpKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy50YWlsX2luZGV4Kys7XG4gICAgdGhpcy5jYWNoZVt0aGlzLnRhaWxfaW5kZXhdID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaGVhZF9pbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuaGVhZF9pbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBlbGVtZW50IGZyb20gdGhlIGNpcmN1bGFyIHF1ZXVlLiBSZXR1cm4gdHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWwuXG4gICAqIGRlUXVldWUoKTog5LuO5b6q546v6Zif5YiX5Lit5Yig6Zmk5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5Yig6Zmk5YiZ6L+U5Zue55yf44CCXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBkZVF1ZXVlKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLmhlYWRfaW5kZXggPT0gdGhpcy50YWlsX2luZGV4KSB7XG4gICAgICB0aGlzLmhlYWRfaW5kZXggPSAtMTtcbiAgICAgIHRoaXMudGFpbF9pbmRleCA9IC0xO1xuICAgICAgdGhpcy5jYWNoZSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhY2hlW3RoaXMuaGVhZF9pbmRleCsrXSA9IHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBmcm9udCBpdGVtIGZyb20gdGhlIHF1ZXVlLlxuICAgKiBGcm9udDog5LuO6Zif6aaW6I635Y+W5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBGcm9udCgpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybiAtMTtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmhlYWRfaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGFzdCBpdGVtIGZyb20gdGhlIHF1ZXVlLlxuICAgKiBSZWFyOiDojrflj5bpmJ/lsL7lhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIFJlYXIoKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy50YWlsX2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgY2lyY3VsYXIgcXVldWUgaXMgZW1wdHkgb3Igbm90LlxuICAgKiBpc0VtcHR5KCk6IOajgOafpeW+queOr+mYn+WIl+aYr+WQpuS4uuepuuOAglxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkX2luZGV4ID09PSAtMSAmJiB0aGlzLnRhaWxfaW5kZXggPT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjaXJjdWxhciBxdWV1ZSBpcyBmdWxsIG9yIG5vdC5cbiAgICogaXNGdWxsKCk6IOajgOafpeW+queOr+mYn+WIl+aYr+WQpuW3sua7oeOAglxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNGdWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldEluZGV4KHRoaXMudGFpbF9pbmRleCArIDEpID09PSB0aGlzLmhlYWRfaW5kZXg7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIE15Q2lyY3VsYXJRdWV1ZSBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNeUNpcmN1bGFyUXVldWUoaylcbiAqIHZhciBwYXJhbV8xID0gb2JqLmVuUXVldWUodmFsdWUpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5kZVF1ZXVlKClcbiAqIHZhciBwYXJhbV8zID0gb2JqLkZyb250KClcbiAqIHZhciBwYXJhbV80ID0gb2JqLlJlYXIoKVxuICogdmFyIHBhcmFtXzUgPSBvYmouaXNFbXB0eSgpXG4gKiB2YXIgcGFyYW1fNiA9IG9iai5pc0Z1bGwoKVxuICovXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5jb25zdCBjaXJjdWxhclF1ZXVlID0gbmV3IE15Q2lyY3VsYXJRdWV1ZSgzKTsgLy8g6K6+572u6ZW/5bqm5Li6IDNcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSgxKSwgdHJ1ZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoMiksIHRydWUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDMpLCB0cnVlKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSg0KSwgZmFsc2UpOyAvLyDpmJ/liJflt7Lmu6FcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuUmVhcigpLCAzKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuaXNGdWxsKCksIHRydWUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5kZVF1ZXVlKCksIHRydWUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpLCB0cnVlKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuUmVhcigpLCA0KTtcbiJdfQ==