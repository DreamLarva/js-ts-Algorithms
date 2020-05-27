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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLuiuvuiuoeW+queOr+mYn+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjIyLuiuvuiuoeW+queOr+mYn+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDSTs7Ozs7QUFFSixNQUFNLGVBQWU7SUFJbkI7Ozs7T0FJRztJQUNILFlBQVksQ0FBUztRQVByQixVQUFLLEdBQXNCLEVBQUUsQ0FBQztRQVc5QixnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBZWpCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFsQmYsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUlELFFBQVE7SUFDUixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlELGFBQWE7SUFDYixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEs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O0FBRTVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVqRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVuRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7orr7orqHkvaDnmoTlvqrnjq/pmJ/liJflrp7njrDjgIIg5b6q546v6Zif5YiX5piv5LiA56eN57q/5oCn5pWw5o2u57uT5p6E77yM5YW25pON5L2c6KGo546w5Z+65LqOIEZJRk/vvIjlhYjov5vlhYjlh7rvvInljp/liJnlubbkuJTpmJ/lsL7ooqvov57mjqXlnKjpmJ/pppbkuYvlkI7ku6XlvaLmiJDkuIDkuKrlvqrnjq/jgILlroPkuZ/ooqvnp7DkuLrigJznjq/lvaLnvJPlhrLlmajigJ3jgIJcclxuXHJcbuW+queOr+mYn+WIl+eahOS4gOS4quWlveWkhOaYr+aIkeS7rOWPr+S7peWIqeeUqOi/meS4qumYn+WIl+S5i+WJjeeUqOi/h+eahOepuumXtOOAguWcqOS4gOS4quaZrumAmumYn+WIl+mHjO+8jOS4gOaXpuS4gOS4qumYn+WIl+a7oeS6hu+8jOaIkeS7rOWwseS4jeiDveaPkuWFpeS4i+S4gOS4quWFg+e0oO+8jOWNs+S9v+WcqOmYn+WIl+WJjemdouS7jeacieepuumXtOOAguS9huaYr+S9v+eUqOW+queOr+mYn+WIl++8jOaIkeS7rOiDveS9v+eUqOi/meS6m+epuumXtOWOu+WtmOWCqOaWsOeahOWAvOOAglxyXG5cclxu5L2g55qE5a6e546w5bqU6K+l5pSv5oyB5aaC5LiL5pON5L2c77yaXHJcblxyXG5NeUNpcmN1bGFyUXVldWUoayk6IOaehOmAoOWZqO+8jOiuvue9rumYn+WIl+mVv+W6puS4uiBrIOOAglxyXG5Gcm9udDog5LuO6Zif6aaW6I635Y+W5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxyXG5SZWFyOiDojrflj5bpmJ/lsL7lhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXHJcbmVuUXVldWUodmFsdWUpOiDlkJHlvqrnjq/pmJ/liJfmj5LlhaXkuIDkuKrlhYPntKDjgILlpoLmnpzmiJDlip/mj5LlhaXliJnov5Tlm57nnJ/jgIJcclxuZGVRdWV1ZSgpOiDku47lvqrnjq/pmJ/liJfkuK3liKDpmaTkuIDkuKrlhYPntKDjgILlpoLmnpzmiJDlip/liKDpmaTliJnov5Tlm57nnJ/jgIJcclxuaXNFbXB0eSgpOiDmo4Dmn6Xlvqrnjq/pmJ/liJfmmK/lkKbkuLrnqbrjgIJcclxuaXNGdWxsKCk6IOajgOafpeW+queOr+mYn+WIl+aYr+WQpuW3sua7oeOAglxyXG5cclxuXHJcbuekuuS+i++8mlxyXG5cclxuTXlDaXJjdWxhclF1ZXVlIGNpcmN1bGFyUXVldWUgPSBuZXcgTXljaXJjdWxhclF1ZXVlKDMpOyAvLyDorr7nva7plb/luqbkuLogM1xyXG5cclxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDEpOyAgLy8g6L+U5ZueIHRydWVcclxuXHJcbmNpcmN1bGFyUXVldWUuZW5RdWV1ZSgyKTsgIC8vIOi/lOWbniB0cnVlXHJcblxyXG5jaXJjdWxhclF1ZXVlLmVuUXVldWUoMyk7ICAvLyDov5Tlm54gdHJ1ZVxyXG5cclxuY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDQpOyAgLy8g6L+U5ZueIGZhbHNl77yM6Zif5YiX5bey5ruhXHJcblxyXG5jaXJjdWxhclF1ZXVlLlJlYXIoKTsgIC8vIOi/lOWbniAzXHJcblxyXG5jaXJjdWxhclF1ZXVlLmlzRnVsbCgpOyAgLy8g6L+U5ZueIHRydWVcclxuXHJcbmNpcmN1bGFyUXVldWUuZGVRdWV1ZSgpOyAgLy8g6L+U5ZueIHRydWVcclxuXHJcbmNpcmN1bGFyUXVldWUuZW5RdWV1ZSg0KTsgIC8vIOi/lOWbniB0cnVlXHJcblxyXG5jaXJjdWxhclF1ZXVlLlJlYXIoKTsgIC8vIOi/lOWbniA0XHJcblxyXG5cclxuXHJcbuaPkOekuu+8mlxyXG5cclxu5omA5pyJ55qE5YC86YO95ZyoIDAg6IezIDEwMDAg55qE6IyD5Zu05YaF77ybXHJcbuaTjeS9nOaVsOWwhuWcqCAxIOiHsyAxMDAwIOeahOiMg+WbtOWGhe+8m1xyXG7or7fkuI3opoHkvb/nlKjlhoXnva7nmoTpmJ/liJflupPjgIJcclxuKiAqL1xyXG5cclxuY2xhc3MgTXlDaXJjdWxhclF1ZXVlIHtcclxuICBzaXplOiBudW1iZXI7XHJcbiAgY2FjaGU6IChudW1iZXIgfCB2b2lkKVtdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLiBTZXQgdGhlIHNpemUgb2YgdGhlIHF1ZXVlIHRvIGJlIGsuXHJcbiAgICogTXlDaXJjdWxhclF1ZXVlKGspOiDmnoTpgKDlmajvvIzorr7nva7pmJ/liJfplb/luqbkuLogayDjgIJcclxuICAgKiBAcGFyYW0ge251bWJlcn0ga1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGs6IG51bWJlcikge1xyXG4gICAgdGhpcy5zaXplID0gaztcclxuICB9XHJcblxyXG4gIF90YWlsX2luZGV4ID0gLTE7XHJcblxyXG4gIC8vIOaMh+WQkeS4uuiKgueCuVxyXG4gIGdldCB0YWlsX2luZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RhaWxfaW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgdGFpbF9pbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuX3RhaWxfaW5kZXggPSAtMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGFpbF9pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgX2hlYWRfaW5kZXggPSAtMTtcclxuXHJcbiAgLy8g5oyH5ZCR6aaW6IqC54K5IOWJjeS4gOS4queCuVxyXG4gIGdldCBoZWFkX2luZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYWRfaW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgaGVhZF9pbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuX2hlYWRfaW5kZXggPSAtMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faGVhZF9pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGluZGV4ID4gdGhpcy5zaXplIC0gMSkge1xyXG4gICAgICBpbmRleCA9IGluZGV4ICUgdGhpcy5zaXplO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IGFuIGVsZW1lbnQgaW50byB0aGUgY2lyY3VsYXIgcXVldWUuIFJldHVybiB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cclxuICAgKiBlblF1ZXVlKHZhbHVlKTog5ZCR5b6q546v6Zif5YiX5o+S5YWl5LiA5Liq5YWD57Sg44CC5aaC5p6c5oiQ5Yqf5o+S5YWl5YiZ6L+U5Zue55yf44CCXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBlblF1ZXVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmlzRnVsbCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICB0aGlzLnRhaWxfaW5kZXgrKztcclxuICAgIHRoaXMuY2FjaGVbdGhpcy50YWlsX2luZGV4XSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaGVhZF9pbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5oZWFkX2luZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIGFuIGVsZW1lbnQgZnJvbSB0aGUgY2lyY3VsYXIgcXVldWUuIFJldHVybiB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bC5cclxuICAgKiBkZVF1ZXVlKCk6IOS7juW+queOr+mYn+WIl+S4reWIoOmZpOS4gOS4quWFg+e0oOOAguWmguaenOaIkOWKn+WIoOmZpOWImei/lOWbnuecn+OAglxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgZGVRdWV1ZSgpIHtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuaGVhZF9pbmRleCA9PSB0aGlzLnRhaWxfaW5kZXgpIHtcclxuICAgICAgdGhpcy5oZWFkX2luZGV4ID0gLTE7XHJcbiAgICAgIHRoaXMudGFpbF9pbmRleCA9IC0xO1xyXG4gICAgICB0aGlzLmNhY2hlID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhY2hlW3RoaXMuaGVhZF9pbmRleCsrXSA9IHZvaWQgMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBmcm9udCBpdGVtIGZyb20gdGhlIHF1ZXVlLlxyXG4gICAqIEZyb250OiDku47pmJ/pppbojrflj5blhYPntKDjgILlpoLmnpzpmJ/liJfkuLrnqbrvvIzov5Tlm54gLTEg44CCXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEZyb250KCkge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmhlYWRfaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsYXN0IGl0ZW0gZnJvbSB0aGUgcXVldWUuXHJcbiAgICogUmVhcjog6I635Y+W6Zif5bC+5YWD57Sg44CC5aaC5p6c6Zif5YiX5Li656m677yM6L+U5ZueIC0xIOOAglxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBSZWFyKCkge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLnRhaWxfaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGNpcmN1bGFyIHF1ZXVlIGlzIGVtcHR5IG9yIG5vdC5cclxuICAgKiBpc0VtcHR5KCk6IOajgOafpeW+queOr+mYn+WIl+aYr+WQpuS4uuepuuOAglxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmhlYWRfaW5kZXggPT09IC0xICYmIHRoaXMudGFpbF9pbmRleCA9PT0gLTE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgY2lyY3VsYXIgcXVldWUgaXMgZnVsbCBvciBub3QuXHJcbiAgICogaXNGdWxsKCk6IOajgOafpeW+queOr+mYn+WIl+aYr+WQpuW3sua7oeOAglxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNGdWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXgodGhpcy50YWlsX2luZGV4ICsgMSkgPT09IHRoaXMuaGVhZF9pbmRleDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZb3VyIE15Q2lyY3VsYXJRdWV1ZSBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxyXG4gKiB2YXIgb2JqID0gbmV3IE15Q2lyY3VsYXJRdWV1ZShrKVxyXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5lblF1ZXVlKHZhbHVlKVxyXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5kZVF1ZXVlKClcclxuICogdmFyIHBhcmFtXzMgPSBvYmouRnJvbnQoKVxyXG4gKiB2YXIgcGFyYW1fNCA9IG9iai5SZWFyKClcclxuICogdmFyIHBhcmFtXzUgPSBvYmouaXNFbXB0eSgpXHJcbiAqIHZhciBwYXJhbV82ID0gb2JqLmlzRnVsbCgpXHJcbiAqL1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5jb25zdCBjaXJjdWxhclF1ZXVlID0gbmV3IE15Q2lyY3VsYXJRdWV1ZSgzKTsgLy8g6K6+572u6ZW/5bqm5Li6IDNcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoMSksIHRydWUpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZW5RdWV1ZSgyKSwgdHJ1ZSk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5lblF1ZXVlKDMpLCB0cnVlKTtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoNCksIGZhbHNlKTsgLy8g6Zif5YiX5bey5ruhXHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2lyY3VsYXJRdWV1ZS5SZWFyKCksIDMpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuaXNGdWxsKCksIHRydWUpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuZGVRdWV1ZSgpLCB0cnVlKTtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjaXJjdWxhclF1ZXVlLmVuUXVldWUoNCksIHRydWUpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNpcmN1bGFyUXVldWUuUmVhcigpLCA0KTtcclxuIl19