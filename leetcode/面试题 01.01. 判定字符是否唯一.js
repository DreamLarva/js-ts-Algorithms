"use strict";
/*
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false
示例 2：

输入: s = "abc"
输出: true
限制：

0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-unique-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    /**
     * 不用额外的数据结构
     * 前提必须是 只有英文小写26个字母
     * 那就是要用 数字格式来存数据 有两种办法
     * 1.用位运算 32位 存26个字母
     * 2.用质数相乘,只要能整除 就是已经乘过这个数了 (似乎不好用如果26个字母都有相乘得到的数字太大超过了 Number.MAX_SAFE_INTEGER)
     * */
    let cache = 0;
    for (let i = 0; i < astr.length; i++) {
        const code = astr.charCodeAt(i);
        let newCache = cache ^ (1 << (code - 97));
        if (newCache < cache)
            return false;
        cache = newCache;
    }
    return true;
};
/**
 * 这么写却更快一点
 * */
var isUnique1 = function (astr) {
    return new Set([...astr]).size === astr.length;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isUnique("leetcode"), false);
assert_1.default.strictEqual(isUnique("abc"), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYIDAxLjAxLiDliKTlrprlrZfnrKbmmK/lkKbllK/kuIAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+mdouivlemimCAwMS4wMS4g5Yik5a6a5a2X56ym5piv5ZCm5ZSv5LiALnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLElBQVk7SUFDbkM7Ozs7OztTQU1LO0lBQ0wsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBRyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDbkMsS0FBSyxHQUFHLFFBQVEsQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLFNBQVMsR0FBRyxVQUFVLElBQVk7SUFDcEMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNqRCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lrp7njrDkuIDkuKrnrpfms5XvvIznoa7lrprkuIDkuKrlrZfnrKbkuLIgcyDnmoTmiYDmnInlrZfnrKbmmK/lkKblhajpg73kuI3lkIzjgIJcblxu56S65L6LIDHvvJpcblxu6L6T5YWlOiBzID0gXCJsZWV0Y29kZVwiXG7ovpPlh7o6IGZhbHNlXG7npLrkvosgMu+8mlxuXG7ovpPlhaU6IHMgPSBcImFiY1wiXG7ovpPlh7o6IHRydWVcbumZkOWItu+8mlxuXG4wIDw9IGxlbihzKSA8PSAxMDBcbuWmguaenOS9oOS4jeS9v+eUqOmineWklueahOaVsOaNrue7k+aehO+8jOS8muW+iOWKoOWIhuOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvaXMtdW5pcXVlLWxjY2lcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBhc3RyXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNVbmlxdWUgPSBmdW5jdGlvbiAoYXN0cjogc3RyaW5nKSB7XG4gIC8qKlxuICAgKiDkuI3nlKjpop3lpJbnmoTmlbDmja7nu5PmnoRcbiAgICog5YmN5o+Q5b+F6aG75pivIOWPquacieiLseaWh+Wwj+WGmTI25Liq5a2X5q+NXG4gICAqIOmCo+WwseaYr+imgeeUqCDmlbDlrZfmoLzlvI/mnaXlrZjmlbDmja4g5pyJ5Lik56eN5Yqe5rOVXG4gICAqIDEu55So5L2N6L+Q566XIDMy5L2NIOWtmDI25Liq5a2X5q+NXG4gICAqIDIu55So6LSo5pWw55u45LmYLOWPquimgeiDveaVtOmZpCDlsLHmmK/lt7Lnu4/kuZjov4fov5nkuKrmlbDkuoYgKOS8vOS5juS4jeWlveeUqOWmguaenDI25Liq5a2X5q+N6YO95pyJ55u45LmY5b6X5Yiw55qE5pWw5a2X5aSq5aSn6LaF6L+H5LqGIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgKiAqL1xuICBsZXQgY2FjaGUgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2RlID0gYXN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGxldCBuZXdDYWNoZSA9IGNhY2hlIF4gKDEgPDwgKGNvZGUgLSA5NykpO1xuICAgIGlmIChuZXdDYWNoZSA8IGNhY2hlKSByZXR1cm4gZmFsc2U7XG4gICAgY2FjaGUgPSBuZXdDYWNoZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICog6L+Z5LmI5YaZ5Y205pu05b+r5LiA54K5XG4gKiAqL1xudmFyIGlzVW5pcXVlMSA9IGZ1bmN0aW9uIChhc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBTZXQoWy4uLmFzdHJdKS5zaXplID09PSBhc3RyLmxlbmd0aDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVW5pcXVlKFwibGVldGNvZGVcIiksIGZhbHNlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc1VuaXF1ZShcImFiY1wiKSwgdHJ1ZSk7XG4iXX0=