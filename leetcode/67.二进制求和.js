"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
[67] 二进制求和

https://leetcode-cn.com/problems/add-binary/description/

Tags: algorithms facebook math string

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (46.81%)
* Total Accepted: 18.5K
* Total Submissions: 39.4K
* Testcase Example: '"11"\n"1"'

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "";
    let carry_over = 0;
    let a_index = a.length - 1;
    let b_index = b.length - 1;
    while (carry_over === 1 || a_index >= 0 || b_index >= 0) {
        let count_1 = carry_over;
        if (a[a_index])
            count_1 += parseInt(a[a_index]);
        if (b[b_index])
            count_1 += parseInt(b[b_index]);
        if (count_1 === 0) {
            result = "0" + result;
            carry_over = 0;
        }
        else if (count_1 === 1) {
            result = "1" + result;
            carry_over = 0;
        }
        else if (count_1 === 2) {
            result = "0" + result;
            carry_over = 1;
        }
        else if (count_1 === 3) {
            result = "1" + result;
            carry_over = 1;
        }
        a_index--;
        b_index--;
    }
    return result;
};
/**
 * best performance
 * */
var addBinary2 = function (a, b) {
    let [i, j] = [a.length - 1, b.length - 1];
    let carry = 0;
    let ans = "";
    while (i >= 0 || j >= 0 || carry) {
        let sum = 0;
        if (i >= 0)
            sum += Number(a[i]);
        if (j >= 0)
            sum += Number(b[j]);
        sum += carry;
        carry = ~~(sum / 2);
        sum = sum % 2;
        ans = sum + ans;
        i--;
        j--;
    }
    return ans;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(addBinary2("11", "1"), "100");
assert_1.default.strictEqual(addBinary("1010", "1011"), "10101");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcu5LqM6L+b5Yi25rGC5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82Ny7kuozov5vliLbmsYLlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Qkc7QUFDSDs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUM1QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sVUFBVSxLQUFLLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7UUFDdkQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU8sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVoRCxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDakIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdEIsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNoQjthQUFNLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUN4QixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUN0QixVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDaEI7YUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdEIsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUM3QyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDaEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsR0FBRyxJQUFJLEtBQUssQ0FBQztRQUNiLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDZCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pELGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuWzY3XSDkuozov5vliLbmsYLlkoxcblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYWRkLWJpbmFyeS9kZXNjcmlwdGlvbi9cblxuVGFnczogYWxnb3JpdGhtcyBmYWNlYm9vayBtYXRoIHN0cmluZ1xuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDQ2LjgxJSlcbiogVG90YWwgQWNjZXB0ZWQ6IDE4LjVLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiAzOS40S1xuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnXCIxMVwiXFxuXCIxXCInXG5cbue7meWumuS4pOS4quS6jOi/m+WItuWtl+espuS4su+8jOi/lOWbnuS7luS7rOeahOWSjO+8iOeUqOS6jOi/m+WItuihqOekuu+8ieOAglxuXG7ovpPlhaXkuLrpnZ7nqbrlrZfnrKbkuLLkuJTlj6rljIXlkKvmlbDlrZcgMSDlkowgMOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBhID0gXCIxMVwiLCBiID0gXCIxXCJcbui+k+WHujogXCIxMDBcIlxuXG7npLrkvosgMjpcblxu6L6T5YWlOiBhID0gXCIxMDEwXCIsIGIgPSBcIjEwMTFcIlxu6L6T5Ye6OiBcIjEwMTAxXCJcblxuICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBhXG4gKiBAcGFyYW0ge3N0cmluZ30gYlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgYWRkQmluYXJ5ID0gZnVuY3Rpb24gKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBsZXQgY2Fycnlfb3ZlciA9IDA7XG4gIGxldCBhX2luZGV4ID0gYS5sZW5ndGggLSAxO1xuICBsZXQgYl9pbmRleCA9IGIubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGNhcnJ5X292ZXIgPT09IDEgfHwgYV9pbmRleCA+PSAwIHx8IGJfaW5kZXggPj0gMCkge1xuICAgIGxldCBjb3VudF8xID0gY2Fycnlfb3ZlcjtcbiAgICBpZiAoYVthX2luZGV4XSkgY291bnRfMSArPSBwYXJzZUludChhW2FfaW5kZXhdKTtcbiAgICBpZiAoYltiX2luZGV4XSkgY291bnRfMSArPSBwYXJzZUludChiW2JfaW5kZXhdKTtcblxuICAgIGlmIChjb3VudF8xID09PSAwKSB7XG4gICAgICByZXN1bHQgPSBcIjBcIiArIHJlc3VsdDtcbiAgICAgIGNhcnJ5X292ZXIgPSAwO1xuICAgIH0gZWxzZSBpZiAoY291bnRfMSA9PT0gMSkge1xuICAgICAgcmVzdWx0ID0gXCIxXCIgKyByZXN1bHQ7XG4gICAgICBjYXJyeV9vdmVyID0gMDtcbiAgICB9IGVsc2UgaWYgKGNvdW50XzEgPT09IDIpIHtcbiAgICAgIHJlc3VsdCA9IFwiMFwiICsgcmVzdWx0O1xuICAgICAgY2Fycnlfb3ZlciA9IDE7XG4gICAgfSBlbHNlIGlmIChjb3VudF8xID09PSAzKSB7XG4gICAgICByZXN1bHQgPSBcIjFcIiArIHJlc3VsdDtcbiAgICAgIGNhcnJ5X292ZXIgPSAxO1xuICAgIH1cbiAgICBhX2luZGV4LS07XG4gICAgYl9pbmRleC0tO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIGJlc3QgcGVyZm9ybWFuY2VcbiAqICovXG52YXIgYWRkQmluYXJ5MiA9IGZ1bmN0aW9uIChhOiBzdHJpbmcsIGI6IHN0cmluZykge1xuICBsZXQgW2ksIGpdID0gW2EubGVuZ3RoIC0gMSwgYi5sZW5ndGggLSAxXTtcbiAgbGV0IGNhcnJ5ID0gMDtcbiAgbGV0IGFucyA9IFwiXCI7XG4gIHdoaWxlIChpID49IDAgfHwgaiA+PSAwIHx8IGNhcnJ5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgaWYgKGkgPj0gMCkgc3VtICs9IE51bWJlcihhW2ldKTtcbiAgICBpZiAoaiA+PSAwKSBzdW0gKz0gTnVtYmVyKGJbal0pO1xuICAgIHN1bSArPSBjYXJyeTtcbiAgICBjYXJyeSA9IH5+KHN1bSAvIDIpO1xuICAgIHN1bSA9IHN1bSAlIDI7XG4gICAgYW5zID0gc3VtICsgYW5zO1xuICAgIGktLTtcbiAgICBqLS07XG4gIH1cbiAgcmV0dXJuIGFucztcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoYWRkQmluYXJ5MihcIjExXCIsIFwiMVwiKSwgXCIxMDBcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoYWRkQmluYXJ5KFwiMTAxMFwiLCBcIjEwMTFcIiksIFwiMTAxMDFcIik7XG4iXX0=