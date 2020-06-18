"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
287. 寻找重复数
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

示例 1:

输入: [1,3,4,2,2]
输出: 2
示例 2:

输入: [3,1,3,4,2]
输出: 3
说明：

不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。
* */
var findDuplicate = function (nums) {
    /**
     * 很明显 同142. 环形链表II 就是求同环的起点
     * */
    let slow = 0;
    let fast = 0;
    let len = nums.length;
    do {
        fast = nums[fast === 0 ? 0 : fast - 1];
        fast = nums[fast - 1];
        slow = nums[slow === 0 ? 0 : slow - 1];
    } while (nums[slow] !== nums[fast]);
    // 第二次跑圈 将其中一个 指针指向head节点 并且 都每次只进一步
    // 相遇的节点 就是相较的节点
    fast = 0;
    while (nums[slow] !== nums[fast]) {
        fast = nums[fast === 0 ? 0 : fast - 1];
        slow = nums[slow - 1];
    }
    return nums[slow];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findDuplicate([1, 3, 4, 2, 2]), 2);
// assert.strictEqual(findDuplicate([3, 1, 3, 4, 2]), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg3LuWvu+aJvumHjeWkjeaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjg3LuWvu+aJvumHjeWkjeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7SUFDMUM7O1NBRUs7SUFFTCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RCLEdBQUc7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBRXBDLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RELHlEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4yODcuIOWvu+aJvumHjeWkjeaVsFxu57uZ5a6a5LiA5Liq5YyF5ZCrIG4gKyAxIOS4quaVtOaVsOeahOaVsOe7hCBudW1z77yM5YW25pWw5a2X6YO95ZyoIDEg5YiwIG4g5LmL6Ze077yI5YyF5ousIDEg5ZKMIG7vvInvvIzlj6/nn6Xoh7PlsJHlrZjlnKjkuIDkuKrph43lpI3nmoTmlbTmlbDjgILlgYforr7lj6rmnInkuIDkuKrph43lpI3nmoTmlbTmlbDvvIzmib7lh7rov5nkuKrph43lpI3nmoTmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzEsMyw0LDIsMl1cbui+k+WHujogMlxu56S65L6LIDI6XG5cbui+k+WFpTogWzMsMSwzLDQsMl1cbui+k+WHujogM1xu6K+05piO77yaXG5cbuS4jeiDveabtOaUueWOn+aVsOe7hO+8iOWBh+iuvuaVsOe7hOaYr+WPquivu+eahO+8ieOAglxu5Y+q6IO95L2/55So6aKd5aSW55qEIE8oMSkg55qE56m66Ze044CCXG7ml7bpl7TlpI3mnYLluqblsI/kuo4gTyhuMikg44CCXG7mlbDnu4TkuK3lj6rmnInkuIDkuKrph43lpI3nmoTmlbDlrZfvvIzkvYblroPlj6/og73kuI3mraLph43lpI3lh7rnjrDkuIDmrKHjgIJcbiogKi9cbnZhciBmaW5kRHVwbGljYXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOW+iOaYjuaYviDlkIwxNDIuIOeOr+W9oumTvuihqElJIOWwseaYr+axguWQjOeOr+eahOi1t+eCuVxuICAgKiAqL1xuXG4gIGxldCBzbG93ID0gMDtcbiAgbGV0IGZhc3QgPSAwO1xuICBsZXQgbGVuID0gbnVtcy5sZW5ndGg7XG4gIGRvIHtcbiAgICBmYXN0ID0gbnVtc1tmYXN0ID09PSAwID8gMCA6IGZhc3QgLSAxXTtcbiAgICBmYXN0ID0gbnVtc1sgZmFzdCAtIDFdO1xuXG4gICAgc2xvdyA9IG51bXNbc2xvdyA9PT0gMCA/IDAgOiBzbG93IC0gMV07XG4gIH0gd2hpbGUgKG51bXNbc2xvd10gIT09IG51bXNbZmFzdF0pO1xuXG4gIC8vIOesrOS6jOasoei3keWciCDlsIblhbbkuK3kuIDkuKog5oyH6ZKI5oyH5ZCRaGVhZOiKgueCuSDlubbkuJQg6YO95q+P5qyh5Y+q6L+b5LiA5q2lXG4gIC8vIOebuOmBh+eahOiKgueCuSDlsLHmmK/nm7jovoPnmoToioLngrlcbiAgZmFzdCA9IDA7XG4gIHdoaWxlIChudW1zW3Nsb3ddICE9PSBudW1zW2Zhc3RdKSB7XG4gICAgZmFzdCA9IG51bXNbZmFzdCA9PT0gMCA/IDAgOiBmYXN0IC0gMV07XG4gICAgc2xvdyA9IG51bXNbc2xvdyAtIDFdO1xuICB9XG4gIHJldHVybiBudW1zW3Nsb3ddO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZER1cGxpY2F0ZShbMSwgMywgNCwgMiwgMl0pLCAyKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChmaW5kRHVwbGljYXRlKFszLCAxLCAzLCA0LCAyXSksIDMpO1xuIl19