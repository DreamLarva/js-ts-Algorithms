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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxNC7mnIDkvbPop4LlhYnnu4TlkIguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMTQu5pyA5L2z6KeC5YWJ57uE5ZCILnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCSTtBQUNKLFNBQVMsdUJBQXVCLENBQUMsQ0FBVztJQUMxQzs7Ozs7O1NBTUs7SUFDTCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNqQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4xMDE0LiDmnIDkvbPop4LlhYnnu4TlkIhcbue7meWumuato+aVtOaVsOaVsOe7hCBB77yMQVtpXSDooajnpLrnrKwgaSDkuKrop4LlhYnmma/ngrnnmoTor4TliIbvvIzlubbkuJTkuKTkuKrmma/ngrkgaSDlkowgaiDkuYvpl7TnmoTot53nprvkuLogaiAtIGnjgIJcblxu5LiA5a+55pmv54K577yIaSA8IGrvvInnu4TmiJDnmoTop4LlhYnnu4TlkIjnmoTlvpfliIbkuLrvvIhBW2ldICsgQVtqXSArIGkgLSBq77yJ77ya5pmv54K555qE6K+E5YiG5LmL5ZKM5YeP5Y675a6D5Lus5Lik6ICF5LmL6Ze055qE6Led56a744CCXG5cbui/lOWbnuS4gOWvueinguWFieaZr+eCueiDveWPluW+l+eahOacgOmrmOWIhuOAglxuXG5cblxu56S65L6L77yaXG5cbui+k+WFpe+8mls4LDEsNSwyLDZdXG7ovpPlh7rvvJoxMVxu6Kej6YeK77yaaSA9IDAsIGogPSAyLCBBW2ldICsgQVtqXSArIGkgLSBqID0gOCArIDUgKyAwIC0gMiA9IDExXG5cblxu5o+Q56S677yaXG5cbjIgPD0gQS5sZW5ndGggPD0gNTAwMDBcbjEgPD0gQVtpXSA8PSAxMDAwXG4qICovXG5mdW5jdGlvbiBtYXhTY29yZVNpZ2h0c2VlaW5nUGFpcihBOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIC8qKlxuICAgKiDlsIYgQVtpXSArIEFbal0gKyBpIC0gaiDnmoTlgLwg5YiG5oiQIEFbaV0gKyBpIOWSjCBBW2pdIC0galxuICAgKiDmgI7kuYjku7vmhI/kuIDkuKrkvY3nva7kuIogQVtqXSAtIGog55qE5YC8IOaYr+WbuuWumueahFxuICAgKiBqIOS9jee9ruS4iiDpgqPkuYgg5Y+q6KaB5rGCIEFbaV0gKyBpIOeahOacgOWkp+WAvOWwseihjOS6hlxuICAgKiDpgqPkuYjku47lt6blkJHlj7Mg6YGN5Y6G5a2Y5LiLQVtpXSArIGlcbiAgICpcbiAgICogKi9cbiAgbGV0IGFuc3dlciA9IDA7XG4gIGxldCBsZWZ0ID0gQVswXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XG4gICAgYW5zd2VyID0gTWF0aC5tYXgoYW5zd2VyLCBsZWZ0ICsgQVtpXSAtIGkpO1xuICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCBBW2ldICsgaSk7XG4gIH1cblxuICByZXR1cm4gYW5zd2VyO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChtYXhTY29yZVNpZ2h0c2VlaW5nUGFpcihbOCwgMSwgNSwgMiwgNl0pLCAxMSk7XG4iXX0=