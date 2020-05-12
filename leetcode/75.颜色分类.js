"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUu6aKc6Imy5YiG57G7LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83NS7popzoibLliIbnsbsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFjO0lBQ3JDOzs7Ozs7OztTQVFLO0lBRUwsa0RBQWtEO0lBQ2xELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNYLHVEQUF1RDtJQUN2RCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QiwwQkFBMEI7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFO1FBQ2Ysa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1NBQ1I7UUFDRCxrREFBa0Q7YUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsRUFBRSxDQUFDO1NBQ1I7UUFDRCwrQkFBK0I7YUFDMUI7WUFDRCxJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0o7QUFFTCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUI7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25CLGdCQUFNLENBQUMsZUFBZSxDQUNsQixNQUFNLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNyQixDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5YyF5ZCr57qi6Imy44CB55m96Imy5ZKM6JOd6Imy77yM5LiA5YWxwqBuIOS4quWFg+e0oOeahOaVsOe7hO+8jOWOn+WcsOWvueWug+S7rOi/m+ihjOaOkuW6j++8jOS9v+W+l+ebuOWQjOminOiJsueahOWFg+e0oOebuOmCu++8jOW5tuaMieeFp+e6ouiJsuOAgeeZveiJsuOAgeiTneiJsumhuuW6j+aOkuWIl+OAglxuXG7mraTpopjkuK3vvIzmiJHku6zkvb/nlKjmlbTmlbAgMOOAgcKgMSDlkowgMiDliIbliKvooajnpLrnuqLoibLjgIHnmb3oibLlkozok53oibLjgIJcblxu5rOo5oSPOlxu5LiN6IO95L2/55So5Luj56CB5bqT5Lit55qE5o6S5bqP5Ye95pWw5p2l6Kej5Yaz6L+Z6YGT6aKY44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBbMiwwLDIsMSwxLDBdXG7ovpPlh7o6IFswLDAsMSwxLDIsMl1cbui/m+mYtu+8mlxuXG7kuIDkuKrnm7Top4LnmoTop6PlhrPmlrnmoYjmmK/kvb/nlKjorqHmlbDmjpLluo/nmoTkuKTotp/miavmj4/nrpfms5XjgIJcbummluWFiO+8jOi/reS7o+iuoeeul+WHujDjgIExIOWSjCAyIOWFg+e0oOeahOS4quaVsO+8jOeEtuWQjuaMieeFpzDjgIEx44CBMueahOaOkuW6j++8jOmHjeWGmeW9k+WJjeaVsOe7hOOAglxu5L2g6IO95oOz5Ye65LiA5Liq5LuF5L2/55So5bi45pWw56m66Ze055qE5LiA6Laf5omr5o+P566X5rOV5ZCX77yfXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zb3J0LWNvbG9yc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zIGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbnZhciBzb3J0Q29sb3JzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgLypcbiAgICAgKiDojbflhbDml5fpl67pophcbiAgICAgKiDpnIDopoHmjpLliJfnmoTlhoXlrrkg5Y+q5pyJ5LiJ56eNIOmCo+S5iCDlj6rpnIDopoEgTyhuKeeahOeul+azlSDlsLHlj6/ku6VcbiAgICAgKiDpnIDopoHkuInkuKrmjIfpkohcbiAgICAgKiAxLiDliIbliKvmmK/lhpnlhaXkvY3nva5cbiAgICAgKiAyLiDlvZPliY0g5pyA5ZCO5LiA5LiqIDEg5L2N572u5LmL5ZCOXG4gICAgICogMy4g5b2T5YmNIOacgOWQjuS4gOS4qiAyIOS9jee9ruS5i+WJjVxuICAgICAqIOW+queOr+eahOe7k+adnyDmnaHku7bmmK8gMSDmjIfpkogg5ZyoIDMg5oyH6ZKIIOWPs+S+p1xuICAgICAqICovXG5cbiAgICAvLyDliJ3lp4vljJYw55qE5pyA5Y+z6L6555WM77yacDAgPSAw44CC5Zyo5pW05Liq566X5rOV5omn6KGM6L+H56iL5LitIG51bXNbaWR4IDwgcDBdID0gMC5cbiAgICBsZXQgcDAgPSAwO1xuICAgIC8vIOWIneWni+WMljLnmoTmnIDlt6bovrnnlYwg77yacDIgPSBuIC0gMeOAguWcqOaVtOS4queul+azleaJp+ihjOi/h+eoi+S4rSBudW1zW2lkeCA+IHAyXSA9IDIuXG4gICAgbGV0IHAyID0gbnVtcy5sZW5ndGggLSAxO1xuICAgIC8vIOWIneWni+WMluW9k+WJjeiAg+iZkeeahOWFg+e0oOW6j+WPtyDvvJpjdXJyID0gMC5cbiAgICBsZXQgY3VyciA9IDA7XG4gICAgd2hpbGUgKGN1cnIgPD0gcDIpIHtcbiAgICAgICAgLy8g6IulIG51bXNbY3Vycl0gPSAwIO+8muS6pOaNouesrCBjdXJy5LiqIOWSjCDnrKxwMOS4qiDlhYPntKDvvIzlubblsIbmjIfpkojpg73lkJHlj7Pnp7vjgIJcbiAgICAgICAgaWYgKG51bXNbY3Vycl0gPT09IDApIHtcbiAgICAgICAgICAgIFtudW1zW2N1cnJdLCBudW1zW3AwXV0gPSBbbnVtc1twMF0sIG51bXNbY3Vycl1dO1xuICAgICAgICAgICAgY3VycisrO1xuICAgICAgICAgICAgcDArKztcbiAgICAgICAgfVxuICAgICAgICAvLyDoi6UgbnVtc1tjdXJyXSA9IDIg77ya5Lqk5o2i56ysIGN1cnLkuKrlkoznrKwgcDLkuKrlhYPntKDvvIzlubblsIYgcDLmjIfpkojlt6bnp7sg44CCXG4gICAgICAgIGVsc2UgaWYgKG51bXNbY3Vycl0gPT09IDIpIHtcbiAgICAgICAgICAgIFtudW1zW2N1cnJdLCBudW1zW3AyXV0gPSBbbnVtc1twMl0sIG51bXNbY3Vycl1dO1xuICAgICAgICAgICAgcDItLTtcbiAgICAgICAgfVxuICAgICAgICAvLyDoi6UgbnVtc1tjdXJyXSA9IDEg77ya5bCG5oyH6ZKIY3VycuWPs+enu+OAglxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnIrKztcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG57XG4gICAgY29uc3Qgc2FtcGxlID0gWzIsIDAsIDIsIDEsIDEsIDBdO1xuICAgIHNvcnRDb2xvcnMoc2FtcGxlKTtcbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgICAgICBzYW1wbGUsXG4gICAgICAgIFswLCAwLCAxLCAxLCAyLCAyXSxcbiAgICApO1xufVxuIl19
