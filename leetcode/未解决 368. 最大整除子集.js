"use strict";
/*
368. 最大整除子集
给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
answer[i] % answer[j] == 0 ，或
answer[j] % answer[i] == 0
如果存在多个有效解子集，返回其中任何一个均可。



示例 1：

输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。
示例 2：

输入：nums = [1,2,4,8]
输出：[1,2,4,8]


提示：

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
nums 中的所有整数 互不相同

* */
function largestDivisibleSubset(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
        }
    }
    return [];
}
largestDivisibleSubset([1, 2, 3]);
largestDivisibleSubset([1, 2, 4, 8]);
largestDivisibleSubset([1, 2, 3, 4, 8, 9]);
largestDivisibleSubset([1, 2, 3, 4, 8, 9, 18]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazIDM2OC4g5pyA5aSn5pW06Zmk5a2Q6ZuGLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/mnKrop6PlhrMgMzY4LiDmnIDlpKfmlbTpmaTlrZDpm4YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCSTtBQUNKLFNBQVMsc0JBQXNCLENBQUMsSUFBYztJQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7U0FFM0I7S0FDRjtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuMzY4LiDmnIDlpKfmlbTpmaTlrZDpm4Zcbue7meS9oOS4gOS4queUsSDml6Dph43lpI0g5q2j5pW05pWw57uE5oiQ55qE6ZuG5ZCIIG51bXMg77yM6K+35L2g5om+5Ye65bm26L+U5Zue5YW25Lit5pyA5aSn55qE5pW06Zmk5a2Q6ZuGIGFuc3dlciDvvIzlrZDpm4bkuK3mr4/kuIDlhYPntKDlr7kgKGFuc3dlcltpXSwgYW5zd2VyW2pdKSDpg73lupTlvZPmu6HotrPvvJpcbmFuc3dlcltpXSAlIGFuc3dlcltqXSA9PSAwIO+8jOaIllxuYW5zd2VyW2pdICUgYW5zd2VyW2ldID09IDBcbuWmguaenOWtmOWcqOWkmuS4quacieaViOino+WtkOmbhu+8jOi/lOWbnuWFtuS4reS7u+S9leS4gOS4quWdh+WPr+OAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yabnVtcyA9IFsxLDIsM11cbui+k+WHuu+8mlsxLDJdXG7op6Pph4rvvJpbMSwzXSDkuZ/kvJrooqvop4bkuLrmraPnoa7nrZTmoYjjgIJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mm51bXMgPSBbMSwyLDQsOF1cbui+k+WHuu+8mlsxLDIsNCw4XVxuXG5cbuaPkOekuu+8mlxuXG4xIDw9IG51bXMubGVuZ3RoIDw9IDEwMDBcbjEgPD0gbnVtc1tpXSA8PSAyICogMTA5XG5udW1zIOS4reeahOaJgOacieaVtOaVsCDkupLkuI3nm7jlkIxcblxuKiAqL1xuZnVuY3Rpb24gbGFyZ2VzdERpdmlzaWJsZVN1YnNldChudW1zOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgbnVtcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmxhcmdlc3REaXZpc2libGVTdWJzZXQoWzEsIDIsIDNdKTtcbmxhcmdlc3REaXZpc2libGVTdWJzZXQoWzEsIDIsIDQsIDhdKTtcbmxhcmdlc3REaXZpc2libGVTdWJzZXQoWzEsIDIsIDMsIDQsIDgsIDldKTtcbmxhcmdlc3REaXZpc2libGVTdWJzZXQoWzEsIDIsIDMsIDQsIDgsIDksIDE4XSk7XG4iXX0=