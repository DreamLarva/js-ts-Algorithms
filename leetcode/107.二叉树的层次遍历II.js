"use strict";
/*
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
*/
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
  val;
  left = null;
  right = null;
  constructor(val) {
    this.val = val;
  }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return [];
  let current_layer_nodes = [root];
  let next_layer_nodes = [];
  const result = [];
  while (current_layer_nodes.length) {
    const cache = [];
    current_layer_nodes.forEach((node) => {
      if (node !== null) {
        const { left, right, val } = node;
        cache.push(val);
        if (left) next_layer_nodes.push(left);
        if (right) next_layer_nodes.push(right);
      }
    });
    result.unshift(cache);
    current_layer_nodes = [...next_layer_nodes];
    next_layer_nodes.length = 0;
  }
  return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3LuS6jOWPieagkeeahOWxguasoemBjeWOhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDcu5LqM5Y+J5qCR55qE5bGC5qyh6YGN5Y6GSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7O0FBRUYsTUFBTSxRQUFRO0lBQ1osR0FBRyxDQUFJO0lBQ1AsSUFBSSxHQUF1QixJQUFJLENBQUM7SUFDaEMsS0FBSyxHQUF1QixJQUFJLENBQUM7SUFFakMsWUFBWSxHQUFNO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBYSxJQUFpQjtJQUNuRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQUksZ0JBQWdCLEdBQWtCLEVBQUUsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBVSxFQUFFLENBQUM7SUFFekIsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDakMsTUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25DLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDakIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLElBQUk7b0JBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLEtBQUs7b0JBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLG1CQUFtQixHQUFHLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDN0I7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5YW26IqC54K55YC86Ieq5bqV5ZCR5LiK55qE5bGC5qyh6YGN5Y6G44CCIO+8iOWNs+aMieS7juWPtuWtkOiKgueCueaJgOWcqOWxguWIsOagueiKgueCueaJgOWcqOeahOWxgu+8jOmAkOWxguS7juW3puWQkeWPs+mBjeWOhu+8iVxuXG7kvovlpoLvvJpcbue7meWumuS6jOWPieagkSBbMyw5LDIwLG51bGwsbnVsbCwxNSw3XSxcblxuICAgIDNcbiAgIC8gXFxcbiAgOSAgMjBcbiAgICAvICBcXFxuICAgMTUgICA3XG7ov5Tlm57lhbboh6rlupXlkJHkuIrnmoTlsYLmrKHpgY3ljobkuLrvvJpcblxuW1xuICBbMTUsN10sXG4gIFs5LDIwXSxcbiAgWzNdXG5dXG4qL1xuXG5jbGFzcyBUcmVlTm9kZTxUPiB7XG4gIHZhbDogVDtcbiAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcbiAgcmlnaHQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IodmFsOiBUKSB7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG52YXIgbGV2ZWxPcmRlckJvdHRvbSA9IGZ1bmN0aW9uIDxUPihyb290OiBUcmVlTm9kZTxUPikge1xuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuICBsZXQgY3VycmVudF9sYXllcl9ub2RlcyA9IFtyb290XTtcbiAgbGV0IG5leHRfbGF5ZXJfbm9kZXM6IFRyZWVOb2RlPFQ+W10gPSBbXTtcbiAgY29uc3QgcmVzdWx0OiBUW11bXSA9IFtdO1xuXG4gIHdoaWxlIChjdXJyZW50X2xheWVyX25vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGNhY2hlOiBUW10gPSBbXTtcbiAgICBjdXJyZW50X2xheWVyX25vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHZhbCB9ID0gbm9kZTtcbiAgICAgICAgY2FjaGUucHVzaCh2YWwpO1xuICAgICAgICBpZiAobGVmdCkgbmV4dF9sYXllcl9ub2Rlcy5wdXNoKGxlZnQpO1xuICAgICAgICBpZiAocmlnaHQpIG5leHRfbGF5ZXJfbm9kZXMucHVzaChyaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXN1bHQudW5zaGlmdChjYWNoZSk7XG4gICAgY3VycmVudF9sYXllcl9ub2RlcyA9IFsuLi5uZXh0X2xheWVyX25vZGVzXTtcbiAgICBuZXh0X2xheWVyX25vZGVzLmxlbmd0aCA9IDA7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt9O1xuIl19
