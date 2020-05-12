"use strict";
/*
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据题意
 * 只能用 数组的 push shift方法
 * 可以查看length 属性
 * */
/**
 * Initialize your data structure here.
 */
class MyStack {
  constructor() {
    this.list = [];
  }
  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.list.push(x);
  }
  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    const tempList = [];
    while (this.list.length !== 1) {
      tempList.push(this.list.shift());
    }
    const popResult = this.list.shift();
    this.list = tempList;
    return popResult;
  }
  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    const tempList = [];
    while (this.list.length !== 1) {
      tempList.push(this.list.shift());
    }
    const popResult = this.list.shift();
    this.list = tempList;
    this.list.push(popResult);
    return popResult;
  }
  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return this.list.length === 0;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI1LueUqOmYn+WIl+WunueOsOagiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI1LueUqOmYn+WIl+WunueOsOagiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztJQVlJOztBQUVKOzs7O0tBSUs7QUFDTDs7R0FFRztBQUNILE1BQU0sT0FBTztJQUFiO1FBQ0ksU0FBSSxHQUFhLEVBQUUsQ0FBQztJQWdEeEIsQ0FBQztJQTlDRzs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLENBQVM7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNILEdBQUc7UUFDQyxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDLENBQUM7U0FDckM7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHO1FBQ0MsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNILEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7kvb/nlKjpmJ/liJflrp7njrDmoIjnmoTkuIvliJfmk43kvZzvvJpcclxuXHJcbnB1c2goeCkgLS0g5YWD57SgIHgg5YWl5qCIXHJcbnBvcCgpIC0tIOenu+mZpOagiOmhtuWFg+e0oFxyXG50b3AoKSAtLSDojrflj5bmoIjpobblhYPntKBcclxuZW1wdHkoKSAtLSDov5Tlm57moIjmmK/lkKbkuLrnqbpcclxu5rOo5oSPOlxyXG5cclxu5L2g5Y+q6IO95L2/55So6Zif5YiX55qE5Z+65pys5pON5L2cLS0g5Lmf5bCx5pivIHB1c2ggdG8gYmFjaywgcGVlay9wb3AgZnJvbSBmcm9udCwgc2l6ZSwg5ZKMIGlzIGVtcHR5IOi/meS6m+aTjeS9nOaYr+WQiOazleeahOOAglxyXG7kvaDmiYDkvb/nlKjnmoTor63oqIDkuZ/orrjkuI3mlK/mjIHpmJ/liJfjgIIg5L2g5Y+v5Lul5L2/55SoIGxpc3Qg5oiW6ICFIGRlcXVl77yI5Y+M56uv6Zif5YiX77yJ5p2l5qih5ouf5LiA5Liq6Zif5YiXICwg5Y+q6KaB5piv5qCH5YeG55qE6Zif5YiX5pON5L2c5Y2z5Y+v44CCXHJcbuS9oOWPr+S7peWBh+iuvuaJgOacieaTjeS9nOmDveaYr+acieaViOeahO+8iOS+i+Wmgiwg5a+55LiA5Liq56m655qE5qCI5LiN5Lya6LCD55SoIHBvcCDmiJbogIUgdG9wIOaTjeS9nO+8ieOAglxyXG4qICovXHJcblxyXG4vKipcclxuICog5qC55o2u6aKY5oSPXHJcbiAqIOWPquiDveeUqCDmlbDnu4TnmoQgcHVzaCBzaGlmdOaWueazlVxyXG4gKiDlj6/ku6Xmn6XnnItsZW5ndGgg5bGe5oCnXHJcbiAqICovXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS5cclxuICovXHJcbmNsYXNzIE15U3RhY2sge1xyXG4gICAgbGlzdDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1c2ggZWxlbWVudCB4IG9udG8gc3RhY2suXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcHVzaCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh4KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgc3RhY2sgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBwb3AoKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcExpc3Q6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubGlzdC5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGVtcExpc3QucHVzaCh0aGlzLmxpc3Quc2hpZnQoKSEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb3BSZXN1bHQgPSB0aGlzLmxpc3Quc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmxpc3QgPSB0ZW1wTGlzdDtcclxuICAgICAgICByZXR1cm4gcG9wUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0b3AgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdG9wKCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBMaXN0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmxpc3QubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRlbXBMaXN0LnB1c2godGhpcy5saXN0LnNoaWZ0KCkhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9wUmVzdWx0ID0gdGhpcy5saXN0LnNoaWZ0KCkhO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRlbXBMaXN0O1xyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHBvcFJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHBvcFJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHN0YWNrIGlzIGVtcHR5LlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogWW91ciBNeVN0YWNrIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XHJcbiAqIHZhciBvYmogPSBuZXcgTXlTdGFjaygpXHJcbiAqIG9iai5wdXNoKHgpXHJcbiAqIHZhciBwYXJhbV8yID0gb2JqLnBvcCgpXHJcbiAqIHZhciBwYXJhbV8zID0gb2JqLnRvcCgpXHJcbiAqIHZhciBwYXJhbV80ID0gb2JqLmVtcHR5KClcclxuICovXHJcblxyXG5leHBvcnQge31cclxuIl19
