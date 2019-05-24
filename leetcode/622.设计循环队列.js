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
    /**
     * Initialize your data structure here. Set the size of the queue to be k.
     * MyCircularQueue(k): 构造器，设置队列长度为 k 。
     * @param {number} k
     */
    constructor(k) {
        this.cache = [];
        this._tail_index = -1;
        this._head_index = -1;
        this.size = k;
    }
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
    ;
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
    ;
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
    ;
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
    ;
    /**
     * Checks whether the circular queue is empty or not.
     * isEmpty(): 检查循环队列是否为空。
     * @return {boolean}
     */
    isEmpty() {
        return this.head_index === -1 && this.tail_index === -1;
    }
    ;
    /**
     * Checks whether the circular queue is full or not.
     * isFull(): 检查循环队列是否已满。
     * @return {boolean}
     */
    isFull() {
        return this.getIndex(this.tail_index + 1) === this.head_index;
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLuiuvuiuoeW+queOr+mYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjIyLuiuvuiuoeW+queOr+mYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7Ozs7QUFHSixNQUFNLGVBQWU7SUFJakI7Ozs7T0FJRztJQUNILFlBQVksQ0FBUztRQVByQixVQUFLLEdBQXNCLEVBQUUsQ0FBQztRQVc5QixnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBZWpCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFsQmIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUlELFFBQVE7SUFDUixJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsYUFBYTtJQUNiLElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYTtRQUN4QixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRLENB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LGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFakQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWxELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFbkQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuiuvuiuoeS9oOeahOW+queOr+mYn+WIl+WunueOsOOAgiDlvqrnjq/pmJ/liJfmmK/kuIDnp43nur/mgKfmlbDmja7nu5PmnoTvvIzlhbbmk43kvZzooajnjrDln7rkuo4gRklGT++8iOWFiOi/m+WFiOWHuu+8ieWOn+WImeW5tuS4lOmYn+Wwvuiiq+i/nuaOpeWcqOmYn+mmluS5i+WQjuS7peW9ouaIkOS4gOS4quW+queOr+OAguWug+S5n+iiq+ensOS4uuKAnOeOr+W9oue8k+WGsuWZqOKAneOAglxuXG7lvqrnjq/pmJ/liJfnmoTkuIDkuKrlpb3lpITmmK/miJHku6zlj6/ku6XliKnnlKjov5nkuKrpmJ/liJfkuYvliY3nlKjov4fnmoTnqbrpl7TjgILlnKjkuIDkuKrmma7pgJrpmJ/liJfph4zvvIzkuIDml6bkuIDkuKrpmJ/liJfmu6HkuobvvIzmiJHku6zlsLHkuI3og73mj5LlhaXkuIvkuIDkuKrlhYPntKDvvIzljbPkvb/lnKjpmJ/liJfliY3pnaLku43mnInnqbrpl7TjgILkvYbmmK/kvb/nlKjlvqrnjq/pmJ/liJfvvIzmiJHku6zog73kvb/nlKjov5nkupvnqbrpl7TljrvlrZjlgqjmlrDnmoTlgLzjgIJcblxu5L2g55qE5a6e546w5bqU6K+l5pSv5oyB5aaC5LiL5pON5L2c77yaXG5cbk15Q2lyY3VsYXJRdWV1ZShrKTog5p6E6YCg5Zmo77yM6K6+572u6Zif5YiX6ZW/5bqm5Li6IGsg44CCXG5Gcm9udDog5LuO6Zif6aaW6I635Y+W5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxuUmVhcjog6I635Y+W6Zif5bC+5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxuZW5RdWV1ZSh2YWx1ZSk6IOWQkeW+queOr+mYn+WIl+aPkuWFpeS4gOS4quWFg+e0oOOAguWmguaenOaIkOWKn+aPkuWFpeWImei/lOWbnuecn+OAglxuZGVRdWV1ZSgpOiDku47lvqrnjq/pmJ/liJfkuK3liKDpmaTkuIDkuKrlhYPntKDjgILlpoLmnpzmiJDlip/liKDpmaTliJnov5Tlm57nnJ/jgIJcbmlzRW1wdHkoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5Li656m644CCXG5pc0Z1bGwoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5bey5ruh44CCXG5cblxu56S65L6L77yaXG5cbk15Q2lyY3VsYXJRdWV1ZSBjaXJjdWxhclF1ZXVlID0gbmV3IE15Y2lyY3VsYXJRdWV1ZSgzKTsgLy8g6K6+572u6ZW/5bqm5Li6IDNcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDEpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDIpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDMpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpOyAgLy8g6L+U5ZueIGZhbHNl77yM6Zif5YiX5bey5ruhXG5cbmNpcmN1bGFyUXVldWUuUmVhcigpOyAgLy8g6L+U5ZueIDNcblxuY2lyY3VsYXJRdWV1ZS5pc0Z1bGwoKTsgIC8vIOi/lOWbniB0cnVlXG5cbmNpcmN1bGFyUXVldWUuZGVRdWV1ZSgpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5SZWFyKCk7ICAvLyDov5Tlm54gNFxuXG5cblxu5o+Q56S677yaXG5cbuaJgOacieeahOWAvOmDveWcqCAwIOiHsyAxMDAwIOeahOiMg+WbtOWGhe+8m1xu5pON5L2c5pWw5bCG5ZyoIDEg6IezIDEwMDAg55qE6IyD5Zu05YaF77ybXG7or7fkuI3opoHkvb/nlKjlhoXnva7nmoTpmJ/liJflupPjgIJcbiogKi9cblxuXG5jbGFzcyBNeUNpcmN1bGFyUXVldWUge1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBjYWNoZTogKG51bWJlciB8IHZvaWQpW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLiBTZXQgdGhlIHNpemUgb2YgdGhlIHF1ZXVlIHRvIGJlIGsuXG4gICAgICogTXlDaXJjdWxhclF1ZXVlKGspOiDmnoTpgKDlmajvvIzorr7nva7pmJ/liJfplb/luqbkuLogayDjgIJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGs6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNpemUgPSBrO1xuICAgIH1cblxuICAgIF90YWlsX2luZGV4ID0gLTE7XG5cbiAgICAvLyDmjIflkJHkuLroioLngrlcbiAgICBnZXQgdGFpbF9pbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhaWxfaW5kZXg7XG4gICAgfVxuXG4gICAgc2V0IHRhaWxfaW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl90YWlsX2luZGV4ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGFpbF9pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgpO1xuICAgIH1cblxuICAgIF9oZWFkX2luZGV4ID0gLTE7XG5cbiAgICAvLyDmjIflkJHpppboioLngrkg5YmN5LiA5Liq54K5XG4gICAgZ2V0IGhlYWRfaW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkX2luZGV4O1xuICAgIH1cblxuICAgIHNldCBoZWFkX2luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5faGVhZF9pbmRleCA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hlYWRfaW5kZXggPSB0aGlzLmdldEluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICBnZXRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMuc2l6ZSAtIDEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gIGluZGV4ICAlIHRoaXMuc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYW4gZWxlbWVudCBpbnRvIHRoZSBjaXJjdWxhciBxdWV1ZS4gUmV0dXJuIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLlxuICAgICAqIGVuUXVldWUodmFsdWUpOiDlkJHlvqrnjq/pmJ/liJfmj5LlhaXkuIDkuKrlhYPntKDjgILlpoLmnpzmiJDlip/mj5LlhaXliJnov5Tlm57nnJ/jgIJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGVuUXVldWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bGwoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnRhaWxfaW5kZXgrKztcbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLnRhaWxfaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmhlYWRfaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRfaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYW4gZWxlbWVudCBmcm9tIHRoZSBjaXJjdWxhciBxdWV1ZS4gUmV0dXJuIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLlxuICAgICAqIGRlUXVldWUoKTog5LuO5b6q546v6Zif5YiX5Lit5Yig6Zmk5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5Yig6Zmk5YiZ6L+U5Zue55yf44CCXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZVF1ZXVlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZF9pbmRleCA9PSB0aGlzLnRhaWxfaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZF9pbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy50YWlsX2luZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMuaGVhZF9pbmRleCsrXSA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZyb250IGl0ZW0gZnJvbSB0aGUgcXVldWUuXG4gICAgICogRnJvbnQ6IOS7jumYn+mmluiOt+WPluWFg+e0oOOAguWmguaenOmYn+WIl+S4uuepuu+8jOi/lOWbniAtMSDjgIJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgRnJvbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmhlYWRfaW5kZXhdO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGFzdCBpdGVtIGZyb20gdGhlIHF1ZXVlLlxuICAgICAqIFJlYXI6IOiOt+WPlumYn+WwvuWFg+e0oOOAguWmguaenOmYn+WIl+S4uuepuu+8jOi/lOWbniAtMSDjgIJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgUmVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3RoaXMudGFpbF9pbmRleF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjaXJjdWxhciBxdWV1ZSBpcyBlbXB0eSBvciBub3QuXG4gICAgICogaXNFbXB0eSgpOiDmo4Dmn6Xlvqrnjq/pmJ/liJfmmK/lkKbkuLrnqbrjgIJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRfaW5kZXggPT09IC0xICYmIHRoaXMudGFpbF9pbmRleCA9PT0gLTE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjaXJjdWxhciBxdWV1ZSBpcyBmdWxsIG9yIG5vdC5cbiAgICAgKiBpc0Z1bGwoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5bey5ruh44CCXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Z1bGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluZGV4KHRoaXMudGFpbF9pbmRleCArIDEpID09PSB0aGlzLmhlYWRfaW5kZXg7XG4gICAgfTtcblxufVxuXG5cbi8qKlxuICogWW91ciBNeUNpcmN1bGFyUXVldWUgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlDaXJjdWxhclF1ZXVlKGspXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5lblF1ZXVlKHZhbHVlKVxuICogdmFyIHBhcmFtXzIgPSBvYmouZGVRdWV1ZSgpXG4gKiB2YXIgcGFyYW1fMyA9IG9iai5Gcm9udCgpXG4gKiB2YXIgcGFyYW1fNCA9IG9iai5SZWFyKClcbiAqIHZhciBwYXJhbV81ID0gb2JqLmlzRW1wdHkoKVxuICogdmFyIHBhcmFtXzYgPSBvYmouaXNGdWxsKClcbiAqL1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgY2lyY3VsYXJRdWV1ZSA9IG5ldyBNeUNpcmN1bGFyUXVldWUoMyk7IC8vIOiuvue9rumVv+W6puS4uiAzXG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoMSksIHRydWUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDIpLCB0cnVlKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSgzKSwgdHJ1ZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoNCksIGZhbHNlKTsgLy8g6Zif5YiX5bey5ruhXG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLlJlYXIoKSwgMyk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmlzRnVsbCgpLCB0cnVlKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZGVRdWV1ZSgpLCB0cnVlKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSg0KSwgdHJ1ZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLlJlYXIoKSwgNCk7XG4iXX0=