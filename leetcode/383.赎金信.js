"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
/*
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

注意：

你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
* */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length === 0)
        return true;
    if (ransomNote.length > magazine.length)
        return false;
    const hashTable = {};
    for (const character of ransomNote) {
        const count = hashTable[character];
        if (count) {
            hashTable[character]++;
        }
        else {
            hashTable[character] = 1;
        }
    }
    for (const character of magazine) {
        const count = hashTable[character];
        if (count) {
            hashTable[character]--;
        }
    }
    return !Object.values(hashTable).some((v) => v > 0);
};
// 双哈希表你个鬼额
/*
var canConstruct = function (ransomNote: string, magazine: string) {
    if (ransomNote.length > magazine.length) return false;
    type hashTable = { [key: string]: number }
    // 双哈希表
    const ransomNote_hash_table: hashTable = {};
    const magazine_hash_table: hashTable = {};

    for (const character of ransomNote) {
        const count = ransomNote_hash_table[character];
        if (count) {
            ransomNote_hash_table[character]++;
        } else {
            ransomNote_hash_table[character] = 1;
        }
    }

    for (const character of magazine) {
        const count = magazine_hash_table[character];
        if (count) {
            magazine_hash_table[character]++;
        } else {
            magazine_hash_table[character] = 1;
        }
    }

    for (const [key, value] of Object.entries(ransomNote_hash_table)) {
        if ((magazine_hash_table[key] || 0) < value) return false;
    }

    return true;
};
*/
assert_1.default.strictEqual(canConstruct("a", "b"), false);
assert_1.default.strictEqual(canConstruct("aa", "ab"), false);
assert_1.default.strictEqual(canConstruct("aa", "aab"), true);
assert_1.default.strictEqual(canConstruct("", ""), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgzLui1jumHkeS/oS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzgzLui1jumHkeS/oS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1Qjs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0o7Ozs7R0FJRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsVUFBa0IsRUFBRSxRQUFnQjtJQUMvRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3pDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXRELE1BQU0sU0FBUyxHQUFjLEVBQUUsQ0FBQztJQUVoQyxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNGO0lBRUQsS0FBSyxNQUFNLFNBQVMsSUFBSSxRQUFRLEVBQUU7UUFDaEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksS0FBSyxFQUFFO1lBQ1QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDeEI7S0FDRjtJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQztBQUVGLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ0U7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRWxELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFcEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbi8qXG7nu5nlrprkuIDkuKrotY7ph5Hkv6EgKHJhbnNvbSkg5a2X56ym5Liy5ZKM5LiA5Liq5p2C5b+XKG1hZ2F6aW5lKeWtl+espuS4su+8jOWIpOaWreesrOS4gOS4quWtl+espuS4snJhbnNvbeiDveS4jeiDveeUseesrOS6jOS4quWtl+espuS4sm1hZ2F6aW5lc+mHjOmdoueahOWtl+espuaehOaIkOOAglxu5aaC5p6c5Y+v5Lul5p6E5oiQ77yM6L+U5ZueIHRydWUg77yb5ZCm5YiZ6L+U5ZueIGZhbHNl44CCXG5cbijpopjnm67or7TmmI7vvJrkuLrkuobkuI3mmrTpnLLotY7ph5Hkv6HlrZfov7nvvIzopoHku47mnYLlv5fkuIrmkJzntKLlkITkuKrpnIDopoHnmoTlrZfmr43vvIznu4TmiJDljZXor43mnaXooajovr7mhI/mgJ3jgIIpXG5cbuazqOaEj++8mlxuXG7kvaDlj6/ku6XlgYforr7kuKTkuKrlrZfnrKbkuLLlnYflj6rlkKvmnInlsI/lhpnlrZfmr43jgIJcblxuY2FuQ29uc3RydWN0KFwiYVwiLCBcImJcIikgLT4gZmFsc2VcbmNhbkNvbnN0cnVjdChcImFhXCIsIFwiYWJcIikgLT4gZmFsc2VcbmNhbkNvbnN0cnVjdChcImFhXCIsIFwiYWFiXCIpIC0+IHRydWVcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHJhbnNvbU5vdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYWdhemluZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGNhbkNvbnN0cnVjdCA9IGZ1bmN0aW9uIChyYW5zb21Ob3RlOiBzdHJpbmcsIG1hZ2F6aW5lOiBzdHJpbmcpIHtcbiAgaWYgKHJhbnNvbU5vdGUubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHJhbnNvbU5vdGUubGVuZ3RoID4gbWFnYXppbmUubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIHR5cGUgaGFzaFRhYmxlID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgY29uc3QgaGFzaFRhYmxlOiBoYXNoVGFibGUgPSB7fTtcblxuICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiByYW5zb21Ob3RlKSB7XG4gICAgY29uc3QgY291bnQgPSBoYXNoVGFibGVbY2hhcmFjdGVyXTtcbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGhhc2hUYWJsZVtjaGFyYWN0ZXJdKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc2hUYWJsZVtjaGFyYWN0ZXJdID0gMTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBtYWdhemluZSkge1xuICAgIGNvbnN0IGNvdW50ID0gaGFzaFRhYmxlW2NoYXJhY3Rlcl07XG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBoYXNoVGFibGVbY2hhcmFjdGVyXS0tO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAhT2JqZWN0LnZhbHVlcyhoYXNoVGFibGUpLnNvbWUoKHYpID0+IHYgPiAwKTtcbn07XG5cbi8vIOWPjOWTiOW4jOihqOS9oOS4qumsvOminVxuLypcbnZhciBjYW5Db25zdHJ1Y3QgPSBmdW5jdGlvbiAocmFuc29tTm90ZTogc3RyaW5nLCBtYWdhemluZTogc3RyaW5nKSB7XG4gICAgaWYgKHJhbnNvbU5vdGUubGVuZ3RoID4gbWFnYXppbmUubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdHlwZSBoYXNoVGFibGUgPSB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9XG4gICAgLy8g5Y+M5ZOI5biM6KGoXG4gICAgY29uc3QgcmFuc29tTm90ZV9oYXNoX3RhYmxlOiBoYXNoVGFibGUgPSB7fTtcbiAgICBjb25zdCBtYWdhemluZV9oYXNoX3RhYmxlOiBoYXNoVGFibGUgPSB7fTtcblxuICAgIGZvciAoY29uc3QgY2hhcmFjdGVyIG9mIHJhbnNvbU5vdGUpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSByYW5zb21Ob3RlX2hhc2hfdGFibGVbY2hhcmFjdGVyXTtcbiAgICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgICAgICByYW5zb21Ob3RlX2hhc2hfdGFibGVbY2hhcmFjdGVyXSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuc29tTm90ZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2YgbWFnYXppbmUpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBtYWdhemluZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl07XG4gICAgICAgIGlmIChjb3VudCkge1xuICAgICAgICAgICAgbWFnYXppbmVfaGFzaF90YWJsZVtjaGFyYWN0ZXJdKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWdhemluZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmFuc29tTm90ZV9oYXNoX3RhYmxlKSkge1xuICAgICAgICBpZiAoKG1hZ2F6aW5lX2hhc2hfdGFibGVba2V5XSB8fCAwKSA8IHZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuKi9cblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNhbkNvbnN0cnVjdChcImFcIiwgXCJiXCIpLCBmYWxzZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjYW5Db25zdHJ1Y3QoXCJhYVwiLCBcImFiXCIpLCBmYWxzZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjYW5Db25zdHJ1Y3QoXCJhYVwiLCBcImFhYlwiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoY2FuQ29uc3RydWN0KFwiXCIsIFwiXCIpLCB0cnVlKTtcbiJdfQ==