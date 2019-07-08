"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 二叉树
 * */
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
exports.TreeNode = TreeNode;
function createBinaryTree(arr) {
    const root = new TreeNode(arr.shift()); // 根节点不为null
    let current_layer_node_arr = [root];
    const next_layer_node_arr = [];
    // 将每个放到 二叉树上 如果还剩余节点那么这些节点 的子节点全部设为null
    while (arr.length || next_layer_node_arr.length) {
        current_layer_node_arr.forEach(node => {
            if (node != null) {
                const left_data = arr.shift() || null;
                if (left_data != null) {
                    const left_node = new TreeNode(left_data);
                    node.left = left_node;
                    next_layer_node_arr.push(left_node);
                }
                else {
                    node.left = null;
                }
                const right_data = arr.shift() || null;
                if (right_data != null) {
                    const right_node = new TreeNode(right_data);
                    node.right = right_node;
                    next_layer_node_arr.push(right_node);
                }
                else {
                    node.right = null;
                }
            }
        });
        current_layer_node_arr = [...next_layer_node_arr];
        next_layer_node_arr.length = 0;
    }
    return root;
}
exports.createBinaryTree = createBinaryTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluYXJ5VHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9CaW5hcnlUcmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0tBRUs7QUFDTCxNQUFNLFFBQVE7SUFLVixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUVKO0FBdUNHLDRCQUFRO0FBcENaLFNBQVMsZ0JBQWdCLENBQUksR0FBaUI7SUFDMUMsTUFBTSxJQUFJLEdBQWdCLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtJQUNsRSxJQUFJLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxDQUFDO0lBQzlDLHdDQUF3QztJQUN4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLElBQUksbUJBQW1CLENBQUMsTUFBTSxFQUFFO1FBQzdDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQztnQkFDdEMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO29CQUNuQixNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2dCQUNELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtvQkFDcEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO29CQUN4QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFFaEIsQ0FBQztBQUlHLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5LqM5Y+J5qCRXG4gKiAqL1xuY2xhc3MgVHJlZU5vZGU8VCA9IGFueT4ge1xuICAgIHZhbDogVDtcbiAgICBsZWZ0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuICAgIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodmFsOiBUKSB7XG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmFyeVRyZWU8VD4oYXJyOiAoVCB8IG51bGwpW10pIHtcbiAgICBjb25zdCByb290OiBUcmVlTm9kZTxUPiA9IG5ldyBUcmVlTm9kZShhcnIuc2hpZnQoKSEpOyAvLyDmoLnoioLngrnkuI3kuLpudWxsXG4gICAgbGV0IGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIgPSBbcm9vdF07XG4gICAgY29uc3QgbmV4dF9sYXllcl9ub2RlX2FycjogVHJlZU5vZGU8VD5bXSA9IFtdO1xuICAgIC8vIOWwhuavj+S4quaUvuWIsCDkuozlj4nmoJHkuIog5aaC5p6c6L+Y5Ymp5L2Z6IqC54K56YKj5LmI6L+Z5Lqb6IqC54K5IOeahOWtkOiKgueCueWFqOmDqOiuvuS4um51bGxcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCB8fCBuZXh0X2xheWVyX25vZGVfYXJyLmxlbmd0aCkge1xuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVfYXJyLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdF9kYXRhID0gYXJyLnNoaWZ0KCkgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobGVmdF9kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdF9ub2RlID0gbmV3IFRyZWVOb2RlKGxlZnRfZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IGxlZnRfbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9sYXllcl9ub2RlX2Fyci5wdXNoKGxlZnRfbm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRfZGF0YSA9IGFyci5zaGlmdCgpIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0X2RhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodF9ub2RlID0gbmV3IFRyZWVOb2RlKHJpZ2h0X2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmlnaHRfbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9sYXllcl9ub2RlX2Fyci5wdXNoKHJpZ2h0X25vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIgPSBbLi4ubmV4dF9sYXllcl9ub2RlX2Fycl07XG4gICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG5cbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUJpbmFyeVRyZWUsXG4gICAgVHJlZU5vZGUsXG59O1xuIl19