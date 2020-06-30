"use strict";
/*
剑指 Offer 09. 用两个栈实现队列
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )



示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var state;
(function (state) {
    state[state["appendTail"] = 0] = "appendTail";
    state[state["deleteHead"] = 1] = "deleteHead";
})(state || (state = {}));
class CQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.state = state.appendTail;
    }
    appendTail(value) {
        if (this.state !== state.appendTail) {
            for (let i = 0, len = this.stack2.length; i < len; i++) {
                this.stack1.push(this.stack2.pop());
            }
        }
        this.stack1.push(value);
    }
    deleteHead() {
        var _a;
        if (this.state !== state.deleteHead) {
            for (let i = 0, len = this.stack1.length; i < len; i++) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return (_a = this.stack2.pop()) !== null && _a !== void 0 ? _a : -1;
    }
}
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
const assert_1 = __importDefault(require("assert"));
{
    // ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
    // [[],[],[5],[2],[],[]]
    // [null,-1,null,null,5,2]
    const q = new CQueue();
    assert_1.default.strictEqual(q.deleteHead(), -1);
    q.appendTail(5);
    q.appendTail(2);
    assert_1.default.strictEqual(q.deleteHead(), 5);
    assert_1.default.strictEqual(q.deleteHead(), 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5YmR5oyHT2ZmZXIwOS7nlKjkuKTkuKrmoIjlrp7njrDpmJ/liJcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+WJkeaMh09mZmVyMDku55So5Lik5Liq5qCI5a6e546w6Zif5YiXLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNCSTs7Ozs7QUFFSixJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDUiw2Q0FBVSxDQUFBO0lBQ1YsNkNBQVUsQ0FBQTtBQUNaLENBQUMsRUFISSxLQUFLLEtBQUwsS0FBSyxRQUdUO0FBQ0QsTUFBTSxNQUFNO0lBSVY7UUFIQSxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFVLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDakIsQ0FBQztJQUVoQixVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTs7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7UUFFRCxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFHLG1DQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQUVEOzs7OztHQUtHO0FBQ0gsb0RBQTRCO0FBRTVCO0lBQ0UsOEVBQThFO0lBQzlFLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN2QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLGdCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUN2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7liZHmjIcgT2ZmZXIgMDkuIOeUqOS4pOS4quagiOWunueOsOmYn+WIl1xu55So5Lik5Liq5qCI5a6e546w5LiA5Liq6Zif5YiX44CC6Zif5YiX55qE5aOw5piO5aaC5LiL77yM6K+35a6e546w5a6D55qE5Lik5Liq5Ye95pWwIGFwcGVuZFRhaWwg5ZKMIGRlbGV0ZUhlYWQg77yM5YiG5Yir5a6M5oiQ5Zyo6Zif5YiX5bC+6YOo5o+S5YWl5pW05pWw5ZKM5Zyo6Zif5YiX5aS06YOo5Yig6Zmk5pW05pWw55qE5Yqf6IO944CCKOiLpemYn+WIl+S4reayoeacieWFg+e0oO+8jGRlbGV0ZUhlYWQg5pON5L2c6L+U5ZueIC0xIClcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mlxuW1wiQ1F1ZXVlXCIsXCJhcHBlbmRUYWlsXCIsXCJkZWxldGVIZWFkXCIsXCJkZWxldGVIZWFkXCJdXG5bW10sWzNdLFtdLFtdXVxu6L6T5Ye677yaW251bGwsbnVsbCwzLC0xXVxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaXG5bXCJDUXVldWVcIixcImRlbGV0ZUhlYWRcIixcImFwcGVuZFRhaWxcIixcImFwcGVuZFRhaWxcIixcImRlbGV0ZUhlYWRcIixcImRlbGV0ZUhlYWRcIl1cbltbXSxbXSxbNV0sWzJdLFtdLFtdXVxu6L6T5Ye677yaW251bGwsLTEsbnVsbCxudWxsLDUsMl1cbuaPkOekuu+8mlxuXG4xIDw9IHZhbHVlcyA8PSAxMDAwMFxu5pyA5aSa5Lya5a+5IGFwcGVuZFRhaWzjgIFkZWxldGVIZWFkIOi/m+ihjCAxMDAwMCDmrKHosIPnlKhcbiogKi9cblxuZW51bSBzdGF0ZSB7XG4gIGFwcGVuZFRhaWwsXG4gIGRlbGV0ZUhlYWQsXG59XG5jbGFzcyBDUXVldWUge1xuICBzdGFjazE6IG51bWJlcltdID0gW107XG4gIHN0YWNrMjogbnVtYmVyW10gPSBbXTtcbiAgc3RhdGU6IHN0YXRlID0gc3RhdGUuYXBwZW5kVGFpbDtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFwcGVuZFRhaWwodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBzdGF0ZS5hcHBlbmRUYWlsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5zdGFjazIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5zdGFjazEucHVzaCh0aGlzLnN0YWNrMi5wb3AoKSEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhY2sxLnB1c2godmFsdWUpO1xuICB9XG5cbiAgZGVsZXRlSGVhZCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBzdGF0ZS5kZWxldGVIZWFkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5zdGFjazEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5zdGFjazIucHVzaCh0aGlzLnN0YWNrMS5wb3AoKSEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YWNrMi5wb3AoKSEgPz8gLTE7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIENRdWV1ZSBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBDUXVldWUoKVxuICogb2JqLmFwcGVuZFRhaWwodmFsdWUpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5kZWxldGVIZWFkKClcbiAqL1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBzdGF0IH0gZnJvbSBcImZzXCI7XG57XG4gIC8vIFtcIkNRdWV1ZVwiLFwiZGVsZXRlSGVhZFwiLFwiYXBwZW5kVGFpbFwiLFwiYXBwZW5kVGFpbFwiLFwiZGVsZXRlSGVhZFwiLFwiZGVsZXRlSGVhZFwiXVxuICAvLyBbW10sW10sWzVdLFsyXSxbXSxbXV1cbiAgLy8gW251bGwsLTEsbnVsbCxudWxsLDUsMl1cbiAgY29uc3QgcSA9IG5ldyBDUXVldWUoKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHEuZGVsZXRlSGVhZCgpLCAtMSk7XG4gIHEuYXBwZW5kVGFpbCg1KTtcbiAgcS5hcHBlbmRUYWlsKDIpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwocS5kZWxldGVIZWFkKCksIDUpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwocS5kZWxldGVIZWFkKCksIDIpO1xufVxuIl19