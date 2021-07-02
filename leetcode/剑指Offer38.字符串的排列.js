"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
剑指 Offer 38. 字符串的排列
输入一个字符串，打印出该字符串中字符的所有排列。



你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。



示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]


限制：

1 <= s 的长度 <= 8
* */
function permutation(s) {
    const rec = [];
    /**
     * 用于判断 哪个位置的值true已经被使用了
     * */
    const vis = [];
    const n = s.length;
    const arr = Array.from(s).sort();
    const backtrack = (arr, i, n, perm) => {
        if (i === n) {
            rec.push(perm.join(""));
            return;
        }
        for (let j = 0; j < n; j++) {
            /**
             * 1. 如果 当前位置的值被用过的 当然不能用
             * 2. 如果 当前值和前一值相同 且上一个值能用, 则当前值也不能用(因为一样)
             * */
            if (vis[j] || (!vis[j - 1] && arr[j - 1] === arr[j]))
                continue;
            vis[j] = true;
            perm.push(arr[j]);
            backtrack(arr, i + 1, n, perm);
            perm.pop();
            vis[j] = false;
        }
    };
    backtrack(arr, 0, n, []);
    return rec;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(new Set(permutation("abc")), new Set(["abc", "acb", "bac", "bca", "cab", "cba"]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5YmR5oyHT2ZmZXIzOC7lrZfnrKbkuLLnmoTmjpLliJcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+WJkeaMh09mZmVyMzgu5a2X56ym5Liy55qE5o6S5YiXLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSixTQUFTLFdBQVcsQ0FBQyxDQUFTO0lBQzVCLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUN6Qjs7U0FFSztJQUNMLE1BQU0sR0FBRyxHQUFjLEVBQUUsQ0FBQztJQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25CLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFjLEVBQUUsRUFBRTtRQUN4RSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPO1NBQ1I7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCOzs7aUJBR0s7WUFDTCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxTQUFTO1lBRS9ELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNoQjtJQUNILENBQUMsQ0FBQztJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMzQixJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7liZHmjIcgT2ZmZXIgMzguIOWtl+espuS4sueahOaOkuWIl1xu6L6T5YWl5LiA5Liq5a2X56ym5Liy77yM5omT5Y2w5Ye66K+l5a2X56ym5Liy5Lit5a2X56ym55qE5omA5pyJ5o6S5YiX44CCXG5cblxuXG7kvaDlj6/ku6Xku6Xku7vmhI/pobrluo/ov5Tlm57ov5nkuKrlrZfnrKbkuLLmlbDnu4TvvIzkvYbph4zpnaLkuI3og73mnInph43lpI3lhYPntKDjgIJcblxuXG5cbuekuuS+izpcblxu6L6T5YWl77yacyA9IFwiYWJjXCJcbui+k+WHuu+8mltcImFiY1wiLFwiYWNiXCIsXCJiYWNcIixcImJjYVwiLFwiY2FiXCIsXCJjYmFcIl1cblxuXG7pmZDliLbvvJpcblxuMSA8PSBzIOeahOmVv+W6piA8PSA4XG4qICovXG5mdW5jdGlvbiBwZXJtdXRhdGlvbihzOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlYzogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIOeUqOS6juWIpOaWrSDlk6rkuKrkvY3nva7nmoTlgLx0cnVl5bey57uP6KKr5L2/55So5LqGXG4gICAqICovXG4gIGNvbnN0IHZpczogYm9vbGVhbltdID0gW107XG4gIGNvbnN0IG4gPSBzLmxlbmd0aDtcbiAgY29uc3QgYXJyID0gQXJyYXkuZnJvbShzKS5zb3J0KCk7XG4gIGNvbnN0IGJhY2t0cmFjayA9IChhcnI6IHN0cmluZ1tdLCBpOiBudW1iZXIsIG46IG51bWJlciwgcGVybTogc3RyaW5nW10pID0+IHtcbiAgICBpZiAoaSA9PT0gbikge1xuICAgICAgcmVjLnB1c2gocGVybS5qb2luKFwiXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgLyoqXG4gICAgICAgKiAxLiDlpoLmnpwg5b2T5YmN5L2N572u55qE5YC86KKr55So6L+H55qEIOW9k+eEtuS4jeiDveeUqFxuICAgICAgICogMi4g5aaC5p6cIOW9k+WJjeWAvOWSjOWJjeS4gOWAvOebuOWQjCDkuJTkuIrkuIDkuKrlgLzog73nlKgsIOWImeW9k+WJjeWAvOS5n+S4jeiDveeUqCjlm6DkuLrkuIDmoLcpXG4gICAgICAgKiAqL1xuICAgICAgaWYgKHZpc1tqXSB8fCAoIXZpc1tqIC0gMV0gJiYgYXJyW2ogLSAxXSA9PT0gYXJyW2pdKSkgY29udGludWU7XG5cbiAgICAgIHZpc1tqXSA9IHRydWU7XG4gICAgICBwZXJtLnB1c2goYXJyW2pdKTtcbiAgICAgIGJhY2t0cmFjayhhcnIsIGkgKyAxLCBuLCBwZXJtKTtcbiAgICAgIHBlcm0ucG9wKCk7XG4gICAgICB2aXNbal0gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgYmFja3RyYWNrKGFyciwgMCwgbiwgW10pO1xuICByZXR1cm4gcmVjO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIG5ldyBTZXQocGVybXV0YXRpb24oXCJhYmNcIikpLFxuICBuZXcgU2V0KFtcImFiY1wiLCBcImFjYlwiLCBcImJhY1wiLCBcImJjYVwiLCBcImNhYlwiLCBcImNiYVwiXSlcbik7XG4iXX0=