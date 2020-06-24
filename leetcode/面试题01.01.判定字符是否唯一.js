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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYMDEuMDEu5Yik5a6a5a2X56ym5piv5ZCm5ZSv5LiALmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/pnaLor5XpopgwMS4wMS7liKTlrprlrZfnrKbmmK/lkKbllK/kuIAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBWTtJQUNuQzs7Ozs7O1NBTUs7SUFDTCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLEtBQUs7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNuQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7S0FFSztBQUNMLElBQUksU0FBUyxHQUFHLFVBQVUsSUFBWTtJQUNwQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWunueOsOS4gOS4queul+azle+8jOehruWumuS4gOS4quWtl+espuS4siBzIOeahOaJgOacieWtl+espuaYr+WQpuWFqOmDveS4jeWQjOOAglxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaU6IHMgPSBcImxlZXRjb2RlXCJcbui+k+WHujogZmFsc2VcbuekuuS+iyAy77yaXG5cbui+k+WFpTogcyA9IFwiYWJjXCJcbui+k+WHujogdHJ1ZVxu6ZmQ5Yi277yaXG5cbjAgPD0gbGVuKHMpIDw9IDEwMFxu5aaC5p6c5L2g5LiN5L2/55So6aKd5aSW55qE5pWw5o2u57uT5p6E77yM5Lya5b6I5Yqg5YiG44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9pcy11bmlxdWUtbGNjaVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGFzdHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBpc1VuaXF1ZSA9IGZ1bmN0aW9uIChhc3RyOiBzdHJpbmcpIHtcbiAgLyoqXG4gICAqIOS4jeeUqOmineWklueahOaVsOaNrue7k+aehFxuICAgKiDliY3mj5Dlv4XpobvmmK8g5Y+q5pyJ6Iux5paH5bCP5YaZMjbkuKrlrZfmr41cbiAgICog6YKj5bCx5piv6KaB55SoIOaVsOWtl+agvOW8j+adpeWtmOaVsOaNriDmnInkuKTnp43lip7ms5VcbiAgICogMS7nlKjkvY3ov5DnrpcgMzLkvY0g5a2YMjbkuKrlrZfmr41cbiAgICogMi7nlKjotKjmlbDnm7jkuZgs5Y+q6KaB6IO95pW06ZmkIOWwseaYr+W3sue7j+S5mOi/h+i/meS4quaVsOS6hiAo5Ly85LmO5LiN5aW955So5aaC5p6cMjbkuKrlrZfmr43pg73mnInnm7jkuZjlvpfliLDnmoTmlbDlrZflpKrlpKfotoXov4fkuoYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4gICAqICovXG4gIGxldCBjYWNoZSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvZGUgPSBhc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgbGV0IG5ld0NhY2hlID0gY2FjaGUgXiAoMSA8PCAoY29kZSAtIDk3KSk7XG4gICAgaWYgKG5ld0NhY2hlIDwgY2FjaGUpIHJldHVybiBmYWxzZTtcbiAgICBjYWNoZSA9IG5ld0NhY2hlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiDov5nkuYjlhpnljbTmm7Tlv6vkuIDngrlcbiAqICovXG52YXIgaXNVbmlxdWUxID0gZnVuY3Rpb24gKGFzdHI6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFNldChbLi4uYXN0cl0pLnNpemUgPT09IGFzdHIubGVuZ3RoO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNVbmlxdWUoXCJsZWV0Y29kZVwiKSwgZmFsc2UpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVW5pcXVlKFwiYWJjXCIpLCB0cnVlKTtcbiJdfQ==