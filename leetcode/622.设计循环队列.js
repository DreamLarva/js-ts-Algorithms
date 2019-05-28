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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLuiuvuiuoeW+queOr+mYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjIyLuiuvuiuoeW+queOr+mYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7Ozs7QUFHSixNQUFNLGVBQWU7SUFJakI7Ozs7T0FJRztJQUNILFlBQVksQ0FBUztRQVByQixVQUFLLEdBQXNCLEVBQUUsQ0FBQztRQVc5QixnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBZWpCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFsQmIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUlELFFBQVE7SUFDUixJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsYUFBYTtJQUNiLElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYTtRQUN4QixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRLENB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LGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFakQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWxELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFbkQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu6K6+6K6h5L2g55qE5b6q546v6Zif5YiX5a6e546w44CCIOW+queOr+mYn+WIl+aYr+S4gOenjee6v+aAp+aVsOaNrue7k+aehO+8jOWFtuaTjeS9nOihqOeOsOWfuuS6jiBGSUZP77yI5YWI6L+b5YWI5Ye677yJ5Y6f5YiZ5bm25LiU6Zif5bC+6KKr6L+e5o6l5Zyo6Zif6aaW5LmL5ZCO5Lul5b2i5oiQ5LiA5Liq5b6q546v44CC5a6D5Lmf6KKr56ew5Li64oCc546v5b2i57yT5Yay5Zmo4oCd44CCXHJcblxyXG7lvqrnjq/pmJ/liJfnmoTkuIDkuKrlpb3lpITmmK/miJHku6zlj6/ku6XliKnnlKjov5nkuKrpmJ/liJfkuYvliY3nlKjov4fnmoTnqbrpl7TjgILlnKjkuIDkuKrmma7pgJrpmJ/liJfph4zvvIzkuIDml6bkuIDkuKrpmJ/liJfmu6HkuobvvIzmiJHku6zlsLHkuI3og73mj5LlhaXkuIvkuIDkuKrlhYPntKDvvIzljbPkvb/lnKjpmJ/liJfliY3pnaLku43mnInnqbrpl7TjgILkvYbmmK/kvb/nlKjlvqrnjq/pmJ/liJfvvIzmiJHku6zog73kvb/nlKjov5nkupvnqbrpl7TljrvlrZjlgqjmlrDnmoTlgLzjgIJcclxuXHJcbuS9oOeahOWunueOsOW6lOivpeaUr+aMgeWmguS4i+aTjeS9nO+8mlxyXG5cclxuTXlDaXJjdWxhclF1ZXVlKGspOiDmnoTpgKDlmajvvIzorr7nva7pmJ/liJfplb/luqbkuLogayDjgIJcclxuRnJvbnQ6IOS7jumYn+mmluiOt+WPluWFg+e0oOOAguWmguaenOmYn+WIl+S4uuepuu+8jOi/lOWbniAtMSDjgIJcclxuUmVhcjog6I635Y+W6Zif5bC+5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxyXG5lblF1ZXVlKHZhbHVlKTog5ZCR5b6q546v6Zif5YiX5o+S5YWl5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5o+S5YWl5YiZ6L+U5Zue55yf44CCXHJcbmRlUXVldWUoKTog5LuO5b6q546v6Zif5YiX5Lit5Yig6Zmk5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5Yig6Zmk5YiZ6L+U5Zue55yf44CCXHJcbmlzRW1wdHkoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5Li656m644CCXHJcbmlzRnVsbCgpOiDmo4Dmn6Xlvqrnjq/pmJ/liJfmmK/lkKblt7Lmu6HjgIJcclxuXHJcblxyXG7npLrkvovvvJpcclxuXHJcbk15Q2lyY3VsYXJRdWV1ZSBjaXJjdWxhclF1ZXVlID0gbmV3IE15Y2lyY3VsYXJRdWV1ZSgzKTsgLy8g6K6+572u6ZW/5bqm5Li6IDNcclxuXHJcbmNpcmN1bGFyUXVldWUuZW5RdWV1ZSgxKTsgIC8vIOi/lOWbniB0cnVlXHJcblxyXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoMik7ICAvLyDov5Tlm54gdHJ1ZVxyXG5cclxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDMpOyAgLy8g6L+U5ZueIHRydWVcclxuXHJcbmNpcmN1bGFyUXVldWUuZW5RdWV1ZSg0KTsgIC8vIOi/lOWbniBmYWxzZe+8jOmYn+WIl+W3sua7oVxyXG5cclxuY2lyY3VsYXJRdWV1ZS5SZWFyKCk7ICAvLyDov5Tlm54gM1xyXG5cclxuY2lyY3VsYXJRdWV1ZS5pc0Z1bGwoKTsgIC8vIOi/lOWbniB0cnVlXHJcblxyXG5jaXJjdWxhclF1ZXVlLmRlUXVldWUoKTsgIC8vIOi/lOWbniB0cnVlXHJcblxyXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoNCk7ICAvLyDov5Tlm54gdHJ1ZVxyXG5cclxuY2lyY3VsYXJRdWV1ZS5SZWFyKCk7ICAvLyDov5Tlm54gNFxyXG5cclxuXHJcblxyXG7mj5DnpLrvvJpcclxuXHJcbuaJgOacieeahOWAvOmDveWcqCAwIOiHsyAxMDAwIOeahOiMg+WbtOWGhe+8m1xyXG7mk43kvZzmlbDlsIblnKggMSDoh7MgMTAwMCDnmoTojIPlm7TlhoXvvJtcclxu6K+35LiN6KaB5L2/55So5YaF572u55qE6Zif5YiX5bqT44CCXHJcbiogKi9cclxuXHJcblxyXG5jbGFzcyBNeUNpcmN1bGFyUXVldWUge1xyXG4gICAgc2l6ZTogbnVtYmVyO1xyXG4gICAgY2FjaGU6IChudW1iZXIgfCB2b2lkKVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS4gU2V0IHRoZSBzaXplIG9mIHRoZSBxdWV1ZSB0byBiZSBrLlxyXG4gICAgICogTXlDaXJjdWxhclF1ZXVlKGspOiDmnoTpgKDlmajvvIzorr7nva7pmJ/liJfplb/luqbkuLogayDjgIJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBrXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGs6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGs7XHJcbiAgICB9XHJcblxyXG4gICAgX3RhaWxfaW5kZXggPSAtMTtcclxuXHJcbiAgICAvLyDmjIflkJHkuLroioLngrlcclxuICAgIGdldCB0YWlsX2luZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90YWlsX2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0YWlsX2luZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhaWxfaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90YWlsX2luZGV4ID0gdGhpcy5nZXRJbmRleChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hlYWRfaW5kZXggPSAtMTtcclxuXHJcbiAgICAvLyDmjIflkJHpppboioLngrkg5YmN5LiA5Liq54K5XHJcbiAgICBnZXQgaGVhZF9pbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhZF9pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVhZF9pbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFkX2luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGVhZF9pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLnNpemUgLSAxKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gIGluZGV4ICAlIHRoaXMuc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBhbiBlbGVtZW50IGludG8gdGhlIGNpcmN1bGFyIHF1ZXVlLiBSZXR1cm4gdHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWwuXHJcbiAgICAgKiBlblF1ZXVlKHZhbHVlKTog5ZCR5b6q546v6Zif5YiX5o+S5YWl5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5o+S5YWl5YiZ6L+U5Zue55yf44CCXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGVuUXVldWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRnVsbCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YWlsX2luZGV4Kys7XHJcbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLnRhaWxfaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZF9pbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkX2luZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGFuIGVsZW1lbnQgZnJvbSB0aGUgY2lyY3VsYXIgcXVldWUuIFJldHVybiB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cclxuICAgICAqIGRlUXVldWUoKTog5LuO5b6q546v6Zif5YiX5Lit5Yig6Zmk5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5Yig6Zmk5YiZ6L+U5Zue55yf44CCXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBkZVF1ZXVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRfaW5kZXggPT0gdGhpcy50YWlsX2luZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZF9pbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLnRhaWxfaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5oZWFkX2luZGV4KytdID0gdm9pZCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBmcm9udCBpdGVtIGZyb20gdGhlIHF1ZXVlLlxyXG4gICAgICogRnJvbnQ6IOS7jumYn+mmluiOt+WPluWFg+e0oOOAguWmguaenOmYn+WIl+S4uuepuu+8jOi/lOWbniAtMSDjgIJcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgRnJvbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy5oZWFkX2luZGV4XTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsYXN0IGl0ZW0gZnJvbSB0aGUgcXVldWUuXHJcbiAgICAgKiBSZWFyOiDojrflj5bpmJ/lsL7lhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy50YWlsX2luZGV4XTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgY2lyY3VsYXIgcXVldWUgaXMgZW1wdHkgb3Igbm90LlxyXG4gICAgICogaXNFbXB0eSgpOiDmo4Dmn6Xlvqrnjq/pmJ/liJfmmK/lkKbkuLrnqbrjgIJcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZF9pbmRleCA9PT0gLTEgJiYgdGhpcy50YWlsX2luZGV4ID09PSAtMTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgY2lyY3VsYXIgcXVldWUgaXMgZnVsbCBvciBub3QuXHJcbiAgICAgKiBpc0Z1bGwoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5bey5ruh44CCXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0Z1bGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXgodGhpcy50YWlsX2luZGV4ICsgMSkgPT09IHRoaXMuaGVhZF9pbmRleDtcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFlvdXIgTXlDaXJjdWxhclF1ZXVlIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XHJcbiAqIHZhciBvYmogPSBuZXcgTXlDaXJjdWxhclF1ZXVlKGspXHJcbiAqIHZhciBwYXJhbV8xID0gb2JqLmVuUXVldWUodmFsdWUpXHJcbiAqIHZhciBwYXJhbV8yID0gb2JqLmRlUXVldWUoKVxyXG4gKiB2YXIgcGFyYW1fMyA9IG9iai5Gcm9udCgpXHJcbiAqIHZhciBwYXJhbV80ID0gb2JqLlJlYXIoKVxyXG4gKiB2YXIgcGFyYW1fNSA9IG9iai5pc0VtcHR5KClcclxuICogdmFyIHBhcmFtXzYgPSBvYmouaXNGdWxsKClcclxuICovXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmNvbnN0IGNpcmN1bGFyUXVldWUgPSBuZXcgTXlDaXJjdWxhclF1ZXVlKDMpOyAvLyDorr7nva7plb/luqbkuLogM1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSgxKSwgdHJ1ZSk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDIpLCB0cnVlKTtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoMyksIHRydWUpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSg0KSwgZmFsc2UpOyAvLyDpmJ/liJflt7Lmu6FcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLlJlYXIoKSwgMyk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5pc0Z1bGwoKSwgdHJ1ZSk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5kZVF1ZXVlKCksIHRydWUpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSg0KSwgdHJ1ZSk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5SZWFyKCksIDQpO1xyXG4iXX0=