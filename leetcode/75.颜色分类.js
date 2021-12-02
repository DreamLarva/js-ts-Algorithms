"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
进阶：

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  /*
   * 荷兰旗问题
   * 需要排列的内容 只有三种 那么 只需要 O(n)的算法 就可以
   * 需要三个指针
   * 1. 分别是写入位置
   * 2. 当前 最后一个 1 位置之后
   * 3. 当前 最后一个 2 位置之前
   * 循环的结束 条件是 1 指针 在 3 指针 右侧
   * */
  // 初始化0的最右边界：p0 = 0。在整个算法执行过程中 nums[idx < p0] = 0.
  let p0 = 0;
  // 初始化2的最左边界 ：p2 = n - 1。在整个算法执行过程中 nums[idx > p2] = 2.
  let p2 = nums.length - 1;
  // 初始化当前考虑的元素序号 ：curr = 0.
  let curr = 0;
  while (curr <= p2) {
    // 若 nums[curr] = 0 ：交换第 curr个 和 第p0个 元素，并将指针都向右移。
    if (nums[curr] === 0) {
      [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
      curr++;
      p0++;
    }
    // 若 nums[curr] = 2 ：交换第 curr个和第 p2个元素，并将 p2指针左移 。
    else if (nums[curr] === 2) {
      [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
      p2--;
    }
    // 若 nums[curr] = 1 ：将指针curr右移。
    else {
      curr++;
    }
  }
};
const assert_1 = __importDefault(require("assert"));
{
  const sample = [2, 0, 2, 1, 1, 0];
  sortColors(sample);
  assert_1.default.deepStrictEqual(sample, [0, 0, 1, 1, 2, 2]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUu6aKc6Imy5YiG57G7LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83NS7popzoibLliIbnsbsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFjO0lBQ3ZDOzs7Ozs7OztTQVFLO0lBRUwsa0RBQWtEO0lBQ2xELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNYLHVEQUF1RDtJQUN2RCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QiwwQkFBMEI7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFO1FBQ2pCLGtEQUFrRDtRQUNsRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFLENBQUM7WUFDUCxFQUFFLEVBQUUsQ0FBQztTQUNOO1FBQ0Qsa0RBQWtEO2FBQzdDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxFQUFFLEVBQUUsQ0FBQztTQUNOO1FBQ0QsK0JBQStCO2FBQzFCO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDUjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCO0lBQ0UsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDcEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5YyF5ZCr57qi6Imy44CB55m96Imy5ZKM6JOd6Imy77yM5LiA5YWxIG4g5Liq5YWD57Sg55qE5pWw57uE77yM5Y6f5Zyw5a+55a6D5Lus6L+b6KGM5o6S5bqP77yM5L2/5b6X55u45ZCM6aKc6Imy55qE5YWD57Sg55u46YK777yM5bm25oyJ54Wn57qi6Imy44CB55m96Imy44CB6JOd6Imy6aG65bqP5o6S5YiX44CCXG5cbuatpOmimOS4re+8jOaIkeS7rOS9v+eUqOaVtOaVsCAw44CBIDEg5ZKMIDIg5YiG5Yir6KGo56S657qi6Imy44CB55m96Imy5ZKM6JOd6Imy44CCXG5cbuazqOaEjzpcbuS4jeiDveS9v+eUqOS7o+eggeW6k+S4reeahOaOkuW6j+WHveaVsOadpeino+WGs+i/memBk+mimOOAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzIsMCwyLDEsMSwwXVxu6L6T5Ye6OiBbMCwwLDEsMSwyLDJdXG7ov5vpmLbvvJpcblxu5LiA5Liq55u06KeC55qE6Kej5Yaz5pa55qGI5piv5L2/55So6K6h5pWw5o6S5bqP55qE5Lik6Laf5omr5o+P566X5rOV44CCXG7pppblhYjvvIzov63ku6PorqHnrpflh7ow44CBMSDlkowgMiDlhYPntKDnmoTkuKrmlbDvvIznhLblkI7mjInnhacw44CBMeOAgTLnmoTmjpLluo/vvIzph43lhpnlvZPliY3mlbDnu4TjgIJcbuS9oOiDveaDs+WHuuS4gOS4quS7heS9v+eUqOW4uOaVsOepuumXtOeahOS4gOi2n+aJq+aPj+eul+azleWQl++8n1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc29ydC1jb2xvcnNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgbnVtcyBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgc29ydENvbG9ycyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAvKlxuICAgKiDojbflhbDml5fpl67pophcbiAgICog6ZyA6KaB5o6S5YiX55qE5YaF5a65IOWPquacieS4ieenjSDpgqPkuYgg5Y+q6ZyA6KaBIE8obinnmoTnrpfms5Ug5bCx5Y+v5LulXG4gICAqIOmcgOimgeS4ieS4quaMh+mSiFxuICAgKiAxLiDliIbliKvmmK/lhpnlhaXkvY3nva5cbiAgICogMi4g5b2T5YmNIOacgOWQjuS4gOS4qiAxIOS9jee9ruS5i+WQjlxuICAgKiAzLiDlvZPliY0g5pyA5ZCO5LiA5LiqIDIg5L2N572u5LmL5YmNXG4gICAqIOW+queOr+eahOe7k+adnyDmnaHku7bmmK8gMSDmjIfpkogg5ZyoIDMg5oyH6ZKIIOWPs+S+p1xuICAgKiAqL1xuXG4gIC8vIOWIneWni+WMljDnmoTmnIDlj7PovrnnlYzvvJpwMCA9IDDjgILlnKjmlbTkuKrnrpfms5XmiafooYzov4fnqIvkuK0gbnVtc1tpZHggPCBwMF0gPSAwLlxuICBsZXQgcDAgPSAwO1xuICAvLyDliJ3lp4vljJYy55qE5pyA5bem6L6555WMIO+8mnAyID0gbiAtIDHjgILlnKjmlbTkuKrnrpfms5XmiafooYzov4fnqIvkuK0gbnVtc1tpZHggPiBwMl0gPSAyLlxuICBsZXQgcDIgPSBudW1zLmxlbmd0aCAtIDE7XG4gIC8vIOWIneWni+WMluW9k+WJjeiAg+iZkeeahOWFg+e0oOW6j+WPtyDvvJpjdXJyID0gMC5cbiAgbGV0IGN1cnIgPSAwO1xuICB3aGlsZSAoY3VyciA8PSBwMikge1xuICAgIC8vIOiLpSBudW1zW2N1cnJdID0gMCDvvJrkuqTmjaLnrKwgY3VycuS4qiDlkowg56yscDDkuKog5YWD57Sg77yM5bm25bCG5oyH6ZKI6YO95ZCR5Y+z56e744CCXG4gICAgaWYgKG51bXNbY3Vycl0gPT09IDApIHtcbiAgICAgIFtudW1zW2N1cnJdLCBudW1zW3AwXV0gPSBbbnVtc1twMF0sIG51bXNbY3Vycl1dO1xuICAgICAgY3VycisrO1xuICAgICAgcDArKztcbiAgICB9XG4gICAgLy8g6IulIG51bXNbY3Vycl0gPSAyIO+8muS6pOaNouesrCBjdXJy5Liq5ZKM56ysIHAy5Liq5YWD57Sg77yM5bm25bCGIHAy5oyH6ZKI5bem56e7IOOAglxuICAgIGVsc2UgaWYgKG51bXNbY3Vycl0gPT09IDIpIHtcbiAgICAgIFtudW1zW2N1cnJdLCBudW1zW3AyXV0gPSBbbnVtc1twMl0sIG51bXNbY3Vycl1dO1xuICAgICAgcDItLTtcbiAgICB9XG4gICAgLy8g6IulIG51bXNbY3Vycl0gPSAxIO+8muWwhuaMh+mSiGN1cnLlj7Pnp7vjgIJcbiAgICBlbHNlIHtcbiAgICAgIGN1cnIrKztcbiAgICB9XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG57XG4gIGNvbnN0IHNhbXBsZSA9IFsyLCAwLCAyLCAxLCAxLCAwXTtcbiAgc29ydENvbG9ycyhzYW1wbGUpO1xuICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNhbXBsZSwgWzAsIDAsIDEsIDEsIDIsIDJdKTtcbn1cbiJdfQ==
