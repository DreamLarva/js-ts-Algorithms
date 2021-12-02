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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var state;
(function (state) {
  state[(state["appendTail"] = 0)] = "appendTail";
  state[(state["deleteHead"] = 1)] = "deleteHead";
})(state || (state = {}));
class CQueue {
  stack1 = [];
  stack2 = [];
  state = state.appendTail;
  constructor() {}
  appendTail(value) {
    if (this.state !== state.appendTail) {
      for (let i = 0, len = this.stack2.length; i < len; i++) {
        this.stack1.push(this.stack2.pop());
      }
    }
    this.stack1.push(value);
  }
  deleteHead() {
    if (this.state !== state.deleteHead) {
      for (let i = 0, len = this.stack1.length; i < len; i++) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop() ?? -1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5YmR5oyHT2ZmZXIwOS7nlKjkuKTkuKrmoIjlrp7njrDpmJ/liJcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+WJkeaMh09mZmVyMDku55So5Lik5Liq5qCI5a6e546w6Zif5YiXLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNCSTs7Ozs7QUFFSixJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDUiw2Q0FBVSxDQUFBO0lBQ1YsNkNBQVUsQ0FBQTtBQUNaLENBQUMsRUFISSxLQUFLLEtBQUwsS0FBSyxRQUdUO0FBQ0QsTUFBTSxNQUFNO0lBQ1YsTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUN0QixNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQ3RCLEtBQUssR0FBVSxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ2hDLGdCQUFlLENBQUM7SUFFaEIsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQzthQUN0QztTQUNGO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBRUQ7Ozs7O0dBS0c7QUFDSCxvREFBNEI7QUFFNUI7SUFDRSw4RUFBOEU7SUFDOUUsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLGdCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWJkeaMhyBPZmZlciAwOS4g55So5Lik5Liq5qCI5a6e546w6Zif5YiXXG7nlKjkuKTkuKrmoIjlrp7njrDkuIDkuKrpmJ/liJfjgILpmJ/liJfnmoTlo7DmmI7lpoLkuIvvvIzor7flrp7njrDlroPnmoTkuKTkuKrlh73mlbAgYXBwZW5kVGFpbCDlkowgZGVsZXRlSGVhZCDvvIzliIbliKvlrozmiJDlnKjpmJ/liJflsL7pg6jmj5LlhaXmlbTmlbDlkozlnKjpmJ/liJflpLTpg6jliKDpmaTmlbTmlbDnmoTlip/og73jgIIo6Iul6Zif5YiX5Lit5rKh5pyJ5YWD57Sg77yMZGVsZXRlSGVhZCDmk43kvZzov5Tlm54gLTEgKVxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaXG5bXCJDUXVldWVcIixcImFwcGVuZFRhaWxcIixcImRlbGV0ZUhlYWRcIixcImRlbGV0ZUhlYWRcIl1cbltbXSxbM10sW10sW11dXG7ovpPlh7rvvJpbbnVsbCxudWxsLDMsLTFdXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpcbltcIkNRdWV1ZVwiLFwiZGVsZXRlSGVhZFwiLFwiYXBwZW5kVGFpbFwiLFwiYXBwZW5kVGFpbFwiLFwiZGVsZXRlSGVhZFwiLFwiZGVsZXRlSGVhZFwiXVxuW1tdLFtdLFs1XSxbMl0sW10sW11dXG7ovpPlh7rvvJpbbnVsbCwtMSxudWxsLG51bGwsNSwyXVxu5o+Q56S677yaXG5cbjEgPD0gdmFsdWVzIDw9IDEwMDAwXG7mnIDlpJrkvJrlr7kgYXBwZW5kVGFpbOOAgWRlbGV0ZUhlYWQg6L+b6KGMIDEwMDAwIOasoeiwg+eUqFxuKiAqL1xuXG5lbnVtIHN0YXRlIHtcbiAgYXBwZW5kVGFpbCxcbiAgZGVsZXRlSGVhZCxcbn1cbmNsYXNzIENRdWV1ZSB7XG4gIHN0YWNrMTogbnVtYmVyW10gPSBbXTtcbiAgc3RhY2syOiBudW1iZXJbXSA9IFtdO1xuICBzdGF0ZTogc3RhdGUgPSBzdGF0ZS5hcHBlbmRUYWlsO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXBwZW5kVGFpbCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IHN0YXRlLmFwcGVuZFRhaWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnN0YWNrMi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLnN0YWNrMS5wdXNoKHRoaXMuc3RhY2syLnBvcCgpISk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGFjazEucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBkZWxldGVIZWFkKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IHN0YXRlLmRlbGV0ZUhlYWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnN0YWNrMS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLnN0YWNrMi5wdXNoKHRoaXMuc3RhY2sxLnBvcCgpISk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhY2syLnBvcCgpISA/PyAtMTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgQ1F1ZXVlIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IENRdWV1ZSgpXG4gKiBvYmouYXBwZW5kVGFpbCh2YWx1ZSlcbiAqIHZhciBwYXJhbV8yID0gb2JqLmRlbGV0ZUhlYWQoKVxuICovXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7IHN0YXQgfSBmcm9tIFwiZnNcIjtcbntcbiAgLy8gW1wiQ1F1ZXVlXCIsXCJkZWxldGVIZWFkXCIsXCJhcHBlbmRUYWlsXCIsXCJhcHBlbmRUYWlsXCIsXCJkZWxldGVIZWFkXCIsXCJkZWxldGVIZWFkXCJdXG4gIC8vIFtbXSxbXSxbNV0sWzJdLFtdLFtdXVxuICAvLyBbbnVsbCwtMSxudWxsLG51bGwsNSwyXVxuICBjb25zdCBxID0gbmV3IENRdWV1ZSgpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwocS5kZWxldGVIZWFkKCksIC0xKTtcbiAgcS5hcHBlbmRUYWlsKDUpO1xuICBxLmFwcGVuZFRhaWwoMik7XG4gIGFzc2VydC5zdHJpY3RFcXVhbChxLmRlbGV0ZUhlYWQoKSwgNSk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbChxLmRlbGV0ZUhlYWQoKSwgMik7XG59XG4iXX0=
