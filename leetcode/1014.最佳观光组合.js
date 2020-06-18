"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
1014. 最佳观光组合
给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。

一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。

返回一对观光景点能取得的最高分。



示例：

输入：[8,1,5,2,6]
输出：11
解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11


提示：

2 <= A.length <= 50000
1 <= A[i] <= 1000
* */
function maxScoreSightseeingPair(A) {
    /**
     * 将 A[i] + A[j] + i - j 的值 分成 A[i] + i 和 A[j] - j
     * 怎么任意一个位置上 A[j] - j 的值 是固定的
     * j 位置上 那么 只要求 A[i] + i 的最大值就行了
     * 那么从左向右 遍历存下A[i] + i
     *
     * */
    let answer = 0;
    let left = A[0];
    for (let i = 1; i < A.length; i++) {
        answer = Math.max(answer, left + A[i] - i);
        left = Math.max(left, A[i] + i);
    }
    return answer;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(maxScoreSightseeingPair([8, 1, 5, 2, 6]), 11);
var Enum;
(function (Enum) {
    Enum[Enum["a"] = 0] = "a";
    Enum[Enum["b"] = 2] = "b";
})(Enum || (Enum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxNC7mnIDkvbPop4LlhYnnu4TlkIguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMTQu5pyA5L2z6KeC5YWJ57uE5ZCILnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCSTtBQUNKLFNBQVMsdUJBQXVCLENBQUMsQ0FBVztJQUMxQzs7Ozs7O1NBTUs7SUFDTCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNqQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUdqRSxJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDTCx5QkFBSyxDQUFBO0lBQ0wseUJBQUssQ0FBQTtBQUNULENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjEwMTQuIOacgOS9s+inguWFiee7hOWQiFxu57uZ5a6a5q2j5pW05pWw5pWw57uEIEHvvIxBW2ldIOihqOekuuesrCBpIOS4quinguWFieaZr+eCueeahOivhOWIhu+8jOW5tuS4lOS4pOS4quaZr+eCuSBpIOWSjCBqIOS5i+mXtOeahOi3neemu+S4uiBqIC0gaeOAglxuXG7kuIDlr7nmma/ngrnvvIhpIDwgau+8iee7hOaIkOeahOinguWFiee7hOWQiOeahOW+l+WIhuS4uu+8iEFbaV0gKyBBW2pdICsgaSAtIGrvvInvvJrmma/ngrnnmoTor4TliIbkuYvlkozlh4/ljrvlroPku6zkuKTogIXkuYvpl7TnmoTot53nprvjgIJcblxu6L+U5Zue5LiA5a+56KeC5YWJ5pmv54K56IO95Y+W5b6X55qE5pyA6auY5YiG44CCXG5cblxuXG7npLrkvovvvJpcblxu6L6T5YWl77yaWzgsMSw1LDIsNl1cbui+k+WHuu+8mjExXG7op6Pph4rvvJppID0gMCwgaiA9IDIsIEFbaV0gKyBBW2pdICsgaSAtIGogPSA4ICsgNSArIDAgLSAyID0gMTFcblxuXG7mj5DnpLrvvJpcblxuMiA8PSBBLmxlbmd0aCA8PSA1MDAwMFxuMSA8PSBBW2ldIDw9IDEwMDBcbiogKi9cbmZ1bmN0aW9uIG1heFNjb3JlU2lnaHRzZWVpbmdQYWlyKEE6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOWwhiBBW2ldICsgQVtqXSArIGkgLSBqIOeahOWAvCDliIbmiJAgQVtpXSArIGkg5ZKMIEFbal0gLSBqXG4gICAqIOaAjuS5iOS7u+aEj+S4gOS4quS9jee9ruS4iiBBW2pdIC0gaiDnmoTlgLwg5piv5Zu65a6a55qEXG4gICAqIGog5L2N572u5LiKIOmCo+S5iCDlj6ropoHmsYIgQVtpXSArIGkg55qE5pyA5aSn5YC85bCx6KGM5LqGXG4gICAqIOmCo+S5iOS7juW3puWQkeWPsyDpgY3ljoblrZjkuItBW2ldICsgaVxuICAgKlxuICAgKiAqL1xuICBsZXQgYW5zd2VyID0gMDtcbiAgbGV0IGxlZnQgPSBBWzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IEEubGVuZ3RoOyBpKyspIHtcbiAgICBhbnN3ZXIgPSBNYXRoLm1heChhbnN3ZXIsIGxlZnQgKyBBW2ldIC0gaSk7XG4gICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIEFbaV0gKyBpKTtcbiAgfVxuXG4gIHJldHVybiBhbnN3ZXI7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG1heFNjb3JlU2lnaHRzZWVpbmdQYWlyKFs4LCAxLCA1LCAyLCA2XSksIDExKTtcblxuXG5lbnVtIEVudW0ge1xuICAgIGEgPSAwLFxuICAgIGIgPSAyXG59XG4iXX0=