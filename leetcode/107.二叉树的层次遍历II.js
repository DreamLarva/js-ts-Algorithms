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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3LuS6jOWPieagkeeahOWxguasoemBjeWOhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDcu5LqM5Y+J5qCR55qE5bGC5qyh6YGN5Y6GSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7O0FBR0YsTUFBTSxRQUFRO0lBS1YsWUFBWSxHQUFNO1FBSGxCLFNBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBdUIsSUFBSSxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQUVEOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBYSxJQUFpQjtJQUNqRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQUksZ0JBQWdCLEdBQWtCLEVBQUUsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFbEIsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDL0IsTUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2YsTUFBTSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLElBQUk7b0JBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLEtBQUs7b0JBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLG1CQUFtQixHQUFHLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57lhbboioLngrnlgLzoh6rlupXlkJHkuIrnmoTlsYLmrKHpgY3ljobjgIIg77yI5Y2z5oyJ5LuO5Y+25a2Q6IqC54K55omA5Zyo5bGC5Yiw5qC56IqC54K55omA5Zyo55qE5bGC77yM6YCQ5bGC5LuO5bem5ZCR5Y+z6YGN5Y6G77yJXHJcblxyXG7kvovlpoLvvJpcclxu57uZ5a6a5LqM5Y+J5qCRIFszLDksMjAsbnVsbCxudWxsLDE1LDddLFxyXG5cclxuICAgIDNcclxuICAgLyBcXFxyXG4gIDkgIDIwXHJcbiAgICAvICBcXFxyXG4gICAxNSAgIDdcclxu6L+U5Zue5YW26Ieq5bqV5ZCR5LiK55qE5bGC5qyh6YGN5Y6G5Li677yaXHJcblxyXG5bXHJcbiAgWzE1LDddLFxyXG4gIFs5LDIwXSxcclxuICBbM11cclxuXVxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIFRyZWVOb2RlPFQ+IHtcclxuICAgIHZhbDogVDtcclxuICAgIGxlZnQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcbiAgICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7bnVtYmVyW11bXX1cclxuICovXHJcbnZhciBsZXZlbE9yZGVyQm90dG9tID0gZnVuY3Rpb24gPFQ+KHJvb3Q6IFRyZWVOb2RlPFQ+KSB7XHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gICAgbGV0IGN1cnJlbnRfbGF5ZXJfbm9kZXMgPSBbcm9vdF07XHJcbiAgICBsZXQgbmV4dF9sYXllcl9ub2RlczogVHJlZU5vZGU8VD5bXSA9IFtdO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgd2hpbGUgKGN1cnJlbnRfbGF5ZXJfbm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGU6IFRbXSA9IFtdO1xyXG4gICAgICAgIGN1cnJlbnRfbGF5ZXJfbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtsZWZ0LCByaWdodCwgdmFsfSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdCkgbmV4dF9sYXllcl9ub2Rlcy5wdXNoKGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0KSBuZXh0X2xheWVyX25vZGVzLnB1c2gocmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc3VsdC51bnNoaWZ0KGNhY2hlKTtcclxuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVzID0gWy4uLm5leHRfbGF5ZXJfbm9kZXNdO1xyXG4gICAgICAgIG5leHRfbGF5ZXJfbm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=