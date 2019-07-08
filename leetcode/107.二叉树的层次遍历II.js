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
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (root === null)
        return [];
    let current_layer_nodes = [root];
    let next_layer_nodes = [];
    const result = [];
    while (current_layer_nodes.length) {
        const cache = [];
        current_layer_nodes.forEach(node => {
            if (node !== null) {
                const { left, right, val } = node;
                cache.push(val);
                if (left)
                    next_layer_nodes.push(left);
                if (right)
                    next_layer_nodes.push(right);
            }
        });
        result.unshift(cache);
        current_layer_nodes = [...next_layer_nodes];
        next_layer_nodes.length = 0;
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3LuS6jOWPieagkeeahOWxguasoemBjeWOhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDcu5LqM5Y+J5qCR55qE5bGC5qyh6YGN5Y6GSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7O0FBR0YsTUFBTSxRQUFRO0lBS1YsWUFBWSxHQUFNO1FBSGxCLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBYSxJQUFpQjtJQUNqRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQUksZ0JBQWdCLEdBQWtCLEVBQUUsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFbEIsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDL0IsTUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2YsTUFBTSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLElBQUk7b0JBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLEtBQUs7b0JBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLG1CQUFtQixHQUFHLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5YW26IqC54K55YC86Ieq5bqV5ZCR5LiK55qE5bGC5qyh6YGN5Y6G44CCIO+8iOWNs+aMieS7juWPtuWtkOiKgueCueaJgOWcqOWxguWIsOagueiKgueCueaJgOWcqOeahOWxgu+8jOmAkOWxguS7juW3puWQkeWPs+mBjeWOhu+8iVxuXG7kvovlpoLvvJpcbue7meWumuS6jOWPieagkSBbMyw5LDIwLG51bGwsbnVsbCwxNSw3XSxcblxuICAgIDNcbiAgIC8gXFxcbiAgOSAgMjBcbiAgICAvICBcXFxuICAgMTUgICA3XG7ov5Tlm57lhbboh6rlupXlkJHkuIrnmoTlsYLmrKHpgY3ljobkuLrvvJpcblxuW1xuICBbMTUsN10sXG4gIFs5LDIwXSxcbiAgWzNdXG5dXG4qL1xuXG5cbmNsYXNzIFRyZWVOb2RlPFQ+IHtcbiAgICB2YWw6IFQ7XG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcbiAgICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xudmFyIGxldmVsT3JkZXJCb3R0b20gPSBmdW5jdGlvbiA8VD4ocm9vdDogVHJlZU5vZGU8VD4pIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuICAgIGxldCBjdXJyZW50X2xheWVyX25vZGVzID0gW3Jvb3RdO1xuICAgIGxldCBuZXh0X2xheWVyX25vZGVzOiBUcmVlTm9kZTxUPltdID0gW107XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICB3aGlsZSAoY3VycmVudF9sYXllcl9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY2FjaGU6IFRbXSA9IFtdO1xuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtsZWZ0LCByaWdodCwgdmFsfSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgY2FjaGUucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0KSBuZXh0X2xheWVyX25vZGVzLnB1c2gobGVmdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0KSBuZXh0X2xheWVyX25vZGVzLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHQudW5zaGlmdChjYWNoZSk7XG4gICAgICAgIGN1cnJlbnRfbGF5ZXJfbm9kZXMgPSBbLi4ubmV4dF9sYXllcl9ub2Rlc107XG4gICAgICAgIG5leHRfbGF5ZXJfbm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt9O1xuIl19