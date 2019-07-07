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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluYXJ5VHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9CaW5hcnlUcmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0tBRUs7QUFDTCxNQUFNLFFBQVE7SUFLVixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUVKO0FBdUNHLDRCQUFRO0FBcENaLFNBQVMsZ0JBQWdCLENBQUksR0FBaUI7SUFDMUMsTUFBTSxJQUFJLEdBQWdCLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtJQUNsRSxJQUFJLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxDQUFDO0lBQzlDLHdDQUF3QztJQUN4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLElBQUksbUJBQW1CLENBQUMsTUFBTSxFQUFFO1FBQzdDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQztnQkFDdEMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO29CQUNuQixNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2dCQUNELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtvQkFDcEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO29CQUN4QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFFaEIsQ0FBQztBQUlHLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkuozlj4nmoJFcclxuICogKi9cclxuY2xhc3MgVHJlZU5vZGU8VCA9IGFueT4ge1xyXG4gICAgdmFsOiBUO1xyXG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcclxuICAgIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmFyeVRyZWU8VD4oYXJyOiAoVCB8IG51bGwpW10pIHtcclxuICAgIGNvbnN0IHJvb3Q6IFRyZWVOb2RlPFQ+ID0gbmV3IFRyZWVOb2RlKGFyci5zaGlmdCgpISk7IC8vIOagueiKgueCueS4jeS4um51bGxcclxuICAgIGxldCBjdXJyZW50X2xheWVyX25vZGVfYXJyID0gW3Jvb3RdO1xyXG4gICAgY29uc3QgbmV4dF9sYXllcl9ub2RlX2FycjogVHJlZU5vZGU8VD5bXSA9IFtdO1xyXG4gICAgLy8g5bCG5q+P5Liq5pS+5YiwIOS6jOWPieagkeS4iiDlpoLmnpzov5jliankvZnoioLngrnpgqPkuYjov5nkupvoioLngrkg55qE5a2Q6IqC54K55YWo6YOo6K6+5Li6bnVsbFxyXG4gICAgd2hpbGUgKGFyci5sZW5ndGggfHwgbmV4dF9sYXllcl9ub2RlX2Fyci5sZW5ndGgpIHtcclxuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVfYXJyLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRfZGF0YSA9IGFyci5zaGlmdCgpIHx8IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdF9kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0X25vZGUgPSBuZXcgVHJlZU5vZGUobGVmdF9kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBsZWZ0X25vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9sYXllcl9ub2RlX2Fyci5wdXNoKGxlZnRfbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodF9kYXRhID0gYXJyLnNoaWZ0KCkgfHwgbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChyaWdodF9kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodF9ub2RlID0gbmV3IFRyZWVOb2RlKHJpZ2h0X2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSByaWdodF9ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIucHVzaChyaWdodF9ub2RlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVfYXJyID0gWy4uLm5leHRfbGF5ZXJfbm9kZV9hcnJdO1xyXG4gICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIubGVuZ3RoID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiByb290O1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVCaW5hcnlUcmVlLFxyXG4gICAgVHJlZU5vZGUsXHJcbn07XHJcbiJdfQ==