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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLuiuvuiuoeW+queOr+mYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjIyLuiuvuiuoeW+queOr+mYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7Ozs7QUFFSixNQUFNLGVBQWU7SUFJbkI7Ozs7T0FJRztJQUNILFlBQVksQ0FBUztRQVByQixVQUFLLEdBQXNCLEVBQUUsQ0FBQztRQVc5QixnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBZWpCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFsQmYsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUlELFFBQVE7SUFDUixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlELGFBQWE7SUFDYixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEs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O0FBRTVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVqRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVuRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6K6+6K6h5L2g55qE5b6q546v6Zif5YiX5a6e546w44CCIOW+queOr+mYn+WIl+aYr+S4gOenjee6v+aAp+aVsOaNrue7k+aehO+8jOWFtuaTjeS9nOihqOeOsOWfuuS6jiBGSUZP77yI5YWI6L+b5YWI5Ye677yJ5Y6f5YiZ5bm25LiU6Zif5bC+6KKr6L+e5o6l5Zyo6Zif6aaW5LmL5ZCO5Lul5b2i5oiQ5LiA5Liq5b6q546v44CC5a6D5Lmf6KKr56ew5Li64oCc546v5b2i57yT5Yay5Zmo4oCd44CCXG5cbuW+queOr+mYn+WIl+eahOS4gOS4quWlveWkhOaYr+aIkeS7rOWPr+S7peWIqeeUqOi/meS4qumYn+WIl+S5i+WJjeeUqOi/h+eahOepuumXtOOAguWcqOS4gOS4quaZrumAmumYn+WIl+mHjO+8jOS4gOaXpuS4gOS4qumYn+WIl+a7oeS6hu+8jOaIkeS7rOWwseS4jeiDveaPkuWFpeS4i+S4gOS4quWFg+e0oO+8jOWNs+S9v+WcqOmYn+WIl+WJjemdouS7jeacieepuumXtOOAguS9huaYr+S9v+eUqOW+queOr+mYn+WIl++8jOaIkeS7rOiDveS9v+eUqOi/meS6m+epuumXtOWOu+WtmOWCqOaWsOeahOWAvOOAglxuXG7kvaDnmoTlrp7njrDlupTor6XmlK/mjIHlpoLkuIvmk43kvZzvvJpcblxuTXlDaXJjdWxhclF1ZXVlKGspOiDmnoTpgKDlmajvvIzorr7nva7pmJ/liJfplb/luqbkuLogayDjgIJcbkZyb250OiDku47pmJ/pppbojrflj5blhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXG5SZWFyOiDojrflj5bpmJ/lsL7lhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXG5lblF1ZXVlKHZhbHVlKTog5ZCR5b6q546v6Zif5YiX5o+S5YWl5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5o+S5YWl5YiZ6L+U5Zue55yf44CCXG5kZVF1ZXVlKCk6IOS7juW+queOr+mYn+WIl+S4reWIoOmZpOS4gOS4quWFg+e0oOOAguWmguaenOaIkOWKn+WIoOmZpOWImei/lOWbnuecn+OAglxuaXNFbXB0eSgpOiDmo4Dmn6Xlvqrnjq/pmJ/liJfmmK/lkKbkuLrnqbrjgIJcbmlzRnVsbCgpOiDmo4Dmn6Xlvqrnjq/pmJ/liJfmmK/lkKblt7Lmu6HjgIJcblxuXG7npLrkvovvvJpcblxuTXlDaXJjdWxhclF1ZXVlIGNpcmN1bGFyUXVldWUgPSBuZXcgTXljaXJjdWxhclF1ZXVlKDMpOyAvLyDorr7nva7plb/luqbkuLogM1xuXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoMSk7ICAvLyDov5Tlm54gdHJ1ZVxuXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoMik7ICAvLyDov5Tlm54gdHJ1ZVxuXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoMyk7ICAvLyDov5Tlm54gdHJ1ZVxuXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoNCk7ICAvLyDov5Tlm54gZmFsc2XvvIzpmJ/liJflt7Lmu6FcblxuY2lyY3VsYXJRdWV1ZS5SZWFyKCk7ICAvLyDov5Tlm54gM1xuXG5jaXJjdWxhclF1ZXVlLmlzRnVsbCgpOyAgLy8g6L+U5ZueIHRydWVcblxuY2lyY3VsYXJRdWV1ZS5kZVF1ZXVlKCk7ICAvLyDov5Tlm54gdHJ1ZVxuXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoNCk7ICAvLyDov5Tlm54gdHJ1ZVxuXG5jaXJjdWxhclF1ZXVlLlJlYXIoKTsgIC8vIOi/lOWbniA0XG5cblxuXG7mj5DnpLrvvJpcblxu5omA5pyJ55qE5YC86YO95ZyoIDAg6IezIDEwMDAg55qE6IyD5Zu05YaF77ybXG7mk43kvZzmlbDlsIblnKggMSDoh7MgMTAwMCDnmoTojIPlm7TlhoXvvJtcbuivt+S4jeimgeS9v+eUqOWGhee9rueahOmYn+WIl+W6k+OAglxuKiAqL1xuXG5jbGFzcyBNeUNpcmN1bGFyUXVldWUge1xuICBzaXplOiBudW1iZXI7XG4gIGNhY2hlOiAobnVtYmVyIHwgdm9pZClbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS4gU2V0IHRoZSBzaXplIG9mIHRoZSBxdWV1ZSB0byBiZSBrLlxuICAgKiBNeUNpcmN1bGFyUXVldWUoayk6IOaehOmAoOWZqO+8jOiuvue9rumYn+WIl+mVv+W6puS4uiBrIOOAglxuICAgKiBAcGFyYW0ge251bWJlcn0ga1xuICAgKi9cbiAgY29uc3RydWN0b3IoazogbnVtYmVyKSB7XG4gICAgdGhpcy5zaXplID0gaztcbiAgfVxuXG4gIF90YWlsX2luZGV4ID0gLTE7XG5cbiAgLy8g5oyH5ZCR5Li66IqC54K5XG4gIGdldCB0YWlsX2luZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl90YWlsX2luZGV4O1xuICB9XG5cbiAgc2V0IHRhaWxfaW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX3RhaWxfaW5kZXggPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdGFpbF9pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgpO1xuICB9XG5cbiAgX2hlYWRfaW5kZXggPSAtMTtcblxuICAvLyDmjIflkJHpppboioLngrkg5YmN5LiA5Liq54K5XG4gIGdldCBoZWFkX2luZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkX2luZGV4O1xuICB9XG5cbiAgc2V0IGhlYWRfaW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2hlYWRfaW5kZXggPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faGVhZF9pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgpO1xuICB9XG5cbiAgZ2V0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA+IHRoaXMuc2l6ZSAtIDEpIHtcbiAgICAgIGluZGV4ID0gaW5kZXggJSB0aGlzLnNpemU7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYW4gZWxlbWVudCBpbnRvIHRoZSBjaXJjdWxhciBxdWV1ZS4gUmV0dXJuIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLlxuICAgKiBlblF1ZXVlKHZhbHVlKTog5ZCR5b6q546v6Zif5YiX5o+S5YWl5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5o+S5YWl5YiZ6L+U5Zue55yf44CCXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZW5RdWV1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNGdWxsKCkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLnRhaWxfaW5kZXgrKztcbiAgICB0aGlzLmNhY2hlW3RoaXMudGFpbF9pbmRleF0gPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5oZWFkX2luZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5oZWFkX2luZGV4ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGVsZW1lbnQgZnJvbSB0aGUgY2lyY3VsYXIgcXVldWUuIFJldHVybiB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cbiAgICogZGVRdWV1ZSgpOiDku47lvqrnjq/pmJ/liJfkuK3liKDpmaTkuIDkuKrlhYPntKDjgILlpoLmnpzmiJDlip/liKDpmaTliJnov5Tlm57nnJ/jgIJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGRlUXVldWUoKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuaGVhZF9pbmRleCA9PSB0aGlzLnRhaWxfaW5kZXgpIHtcbiAgICAgIHRoaXMuaGVhZF9pbmRleCA9IC0xO1xuICAgICAgdGhpcy50YWlsX2luZGV4ID0gLTE7XG4gICAgICB0aGlzLmNhY2hlID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVbdGhpcy5oZWFkX2luZGV4KytdID0gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGZyb250IGl0ZW0gZnJvbSB0aGUgcXVldWUuXG4gICAqIEZyb250OiDku47pmJ/pppbojrflj5blhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEZyb250KCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB0aGlzLmNhY2hlW3RoaXMuaGVhZF9pbmRleF07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsYXN0IGl0ZW0gZnJvbSB0aGUgcXVldWUuXG4gICAqIFJlYXI6IOiOt+WPlumYn+WwvuWFg+e0oOOAguWmguaenOmYn+WIl+S4uuepuu+8jOi/lOWbniAtMSDjgIJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgUmVhcigpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybiAtMTtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLnRhaWxfaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjaXJjdWxhciBxdWV1ZSBpcyBlbXB0eSBvciBub3QuXG4gICAqIGlzRW1wdHkoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5Li656m644CCXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRfaW5kZXggPT09IC0xICYmIHRoaXMudGFpbF9pbmRleCA9PT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGNpcmN1bGFyIHF1ZXVlIGlzIGZ1bGwgb3Igbm90LlxuICAgKiBpc0Z1bGwoKTog5qOA5p+l5b6q546v6Zif5YiX5piv5ZCm5bey5ruh44CCXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0Z1bGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXgodGhpcy50YWlsX2luZGV4ICsgMSkgPT09IHRoaXMuaGVhZF9pbmRleDtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgTXlDaXJjdWxhclF1ZXVlIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IE15Q2lyY3VsYXJRdWV1ZShrKVxuICogdmFyIHBhcmFtXzEgPSBvYmouZW5RdWV1ZSh2YWx1ZSlcbiAqIHZhciBwYXJhbV8yID0gb2JqLmRlUXVldWUoKVxuICogdmFyIHBhcmFtXzMgPSBvYmouRnJvbnQoKVxuICogdmFyIHBhcmFtXzQgPSBvYmouUmVhcigpXG4gKiB2YXIgcGFyYW1fNSA9IG9iai5pc0VtcHR5KClcbiAqIHZhciBwYXJhbV82ID0gb2JqLmlzRnVsbCgpXG4gKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmNvbnN0IGNpcmN1bGFyUXVldWUgPSBuZXcgTXlDaXJjdWxhclF1ZXVlKDMpOyAvLyDorr7nva7plb/luqbkuLogM1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDEpLCB0cnVlKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSgyKSwgdHJ1ZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoMyksIHRydWUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpLCBmYWxzZSk7IC8vIOmYn+WIl+W3sua7oVxuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5SZWFyKCksIDMpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5pc0Z1bGwoKSwgdHJ1ZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmRlUXVldWUoKSwgdHJ1ZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoNCksIHRydWUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5SZWFyKCksIDQpO1xuIl19