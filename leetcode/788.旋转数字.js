"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let num = 0;
    for (let i = 1; i <= N; i++) {
        isGoodNumber(i) && num++;
    }
    return num;
};
/**
 * 规则 数字 只能是0 1 8 2 5 6 9
 * 且不能只有 1 0 组成
 * */
function isGoodNumber(num) {
    let isValid = false;
    while (num !== 0) {
        const remainder = num % 10;
        if ([2, 5, 6, 9].includes(remainder)) {
            isValid = true;
            num = Math.floor(num / 10);
            continue;
        }
        if ([1, 0, 8].includes(remainder)) {
            num = Math.floor(num / 10);
            continue;
        }
        return false;
    }
    return isValid;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(rotatedDigits(10), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzg4LuaXi+i9rOaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzg4LuaXi+i9rOaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQXVCQTs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QixZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFHLENBQUE7S0FDNUI7SUFDRCxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUMsQ0FBQztBQUVGOzs7S0FHSztBQUNMLFNBQVMsWUFBWSxDQUFDLEdBQVc7SUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNkLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCLFNBQVM7U0FDWjtRQUNELElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMvQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsU0FBUztTQUNaO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuaIkeS7rOensOS4gOS4quaVsCBYIOS4uuWlveaVsCwg5aaC5p6c5a6D55qE5q+P5L2N5pWw5a2X6YCQ5Liq5Zyw6KKr5peL6L2sIDE4MCDluqblkI7vvIzmiJHku6zku43lj6/ku6XlvpfliLDkuIDkuKrmnInmlYjnmoTvvIzkuJTlkowgWCDkuI3lkIznmoTmlbDjgILopoHmsYLmr4/kvY3mlbDlrZfpg73opoHooqvml4vovazjgIJcclxuXHJcbuWmguaenOS4gOS4quaVsOeahOavj+S9jeaVsOWtl+iiq+aXi+i9rOS7peWQjuS7jeeEtui/mOaYr+S4gOS4quaVsOWtl++8jMKg5YiZ6L+Z5Liq5pWw5piv5pyJ5pWI55qE44CCMCwgMSwg5ZKMIDgg6KKr5peL6L2s5ZCO5LuN54S25piv5a6D5Lus6Ieq5bex77ybMiDlkowgNSDlj6/ku6XkupLnm7jml4vovazmiJDlr7nmlrnvvJs2IOWSjCA5IOWQjOeQhu+8jOmZpOS6hui/meS6m+S7peWkluWFtuS7lueahOaVsOWtl+aXi+i9rOS7peWQjumDveS4jeWGjeaYr+acieaViOeahOaVsOWtl+OAglxyXG5cclxu546w5Zyo5oiR5Lus5pyJ5LiA5Liq5q2j5pW05pWwwqBOLCDorqHnrpfku47CoDEg5YiwwqBOIOS4reacieWkmuWwkeS4quaVsMKgWCDmmK/lpb3mlbDvvJ9cclxuXHJcbuekuuS+izpcclxu6L6T5YWlOiAxMFxyXG7ovpPlh7o6IDRcclxu6Kej6YeKOlxyXG7lnKhbMSwgMTBd5Lit5pyJ5Zub5Liq5aW95pWw77yaIDIsIDUsIDYsIDnjgIJcclxu5rOo5oSPIDEg5ZKMIDEwIOS4jeaYr+WlveaVsCwg5Zug5Li65LuW5Lus5Zyo5peL6L2s5LmL5ZCO5LiN5Y+Y44CCXHJcbuazqOaEjzpcclxuXHJcbk7CoOeahOWPluWAvOiMg+WbtOaYr8KgWzEsIDEwMDAwXeOAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcm90YXRlZC1kaWdpdHNcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHZhbGlkYXRlID0gV2ViQXNzZW1ibHkudmFsaWRhdGU7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IE5cclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHJvdGF0ZWREaWdpdHMgPSBmdW5jdGlvbiAoTjogbnVtYmVyKSB7XHJcbiAgICBsZXQgbnVtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE47IGkrKykge1xyXG4gICAgICAgIGlzR29vZE51bWJlcihpKSAmJiBudW0gKytcclxuICAgIH1cclxuICAgIHJldHVybiBudW1cclxufTtcclxuXHJcbi8qKlxyXG4gKiDop4TliJkg5pWw5a2XIOWPquiDveaYrzAgMSA4IDIgNSA2IDlcclxuICog5LiU5LiN6IO95Y+q5pyJIDEgMCDnu4TmiJBcclxuICogKi9cclxuZnVuY3Rpb24gaXNHb29kTnVtYmVyKG51bTogbnVtYmVyKSB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKG51bSAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IG51bSAlIDEwO1xyXG4gICAgICAgIGlmIChbMiwgNSwgNiwgOV0uaW5jbHVkZXMocmVtYWluZGVyKSkge1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0vMTApO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFsxLCAwLCA4XS5pbmNsdWRlcyhyZW1haW5kZXIpKSB7XHJcbiAgICAgICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtLzEwKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG59XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKHJvdGF0ZWREaWdpdHMoMTApLDQpO1xyXG4iXX0=