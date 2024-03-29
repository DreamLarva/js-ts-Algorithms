"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (t < 0) return false;
  // 分隔成多个桶
  const map = {};
  const w = t + 1; // 一个桶里面放几个东西
  for (let i = 0; i < nums.length; i++) {
    let m = getID(nums[i], w);
    // 当前桶有 两个值 那么一定在范围内
    if (map[m] != null) return true; // 注意这边 map[m]
    // 相邻的桶中是不是有符合要求的
    if (map[m - 1] != null && Math.abs(nums[i] - map[m - 1]) < w) return true;
    if (map[m + 1] != null && Math.abs(nums[i] - map[m + 1]) < w) return true;
    // 没有满足 直接放入 桶中
    map[m] = nums[i];
    /**
     * 为什么只要比一次就行了呢 就算在相邻的桶中也有可能 并不是想要的结果
     * 但是每次都能覆盖呢
     * 因为很简单 如果要覆盖 必定在同一个桶里面 那么优先因为在一个桶中 而判断为 true 不需要再和相邻的桶判断了
     * */
    // 把 不满足 i - j <= k 的排除 注意此处 i 是index
    if (i >= k) Reflect.deleteProperty(map, getID(nums[i - k], w));
  }
  return false;
};
// 获取 桶的编号
function getID(x, w) {
  return Math.floor(x / w);
}
// 暴力
var containsNearbyAlmostDuplicate1 = function (nums, k, t) {
  // 只要 判断 i 位置 之前 k 个位置内 有没有能够符合 nums [i] 和 nums [j] 的差的绝对值最大为 t 就成了
  for (let i = 0; i < nums.length; i++) {
    let j = i - 1;
    while (j >= 0 && i - j <= k) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
      j--;
    }
  }
  return false;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(
  containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0),
  true
);
assert_1.default.strictEqual(
  containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2),
  true
);
assert_1.default.strictEqual(
  containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3),
  false
);
assert_1.default.strictEqual(
  containsNearbyAlmostDuplicate([3, 6, 0, 2], 2, 2),
  true
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwLuWtmOWcqOmHjeWkjeWFg+e0oElJSS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjIwLuWtmOWcqOmHjeWkjeWFg+e0oElJSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQXNCQTs7Ozs7R0FLRztBQUNILElBQUksNkJBQTZCLEdBQUcsVUFDbEMsSUFBYyxFQUNkLENBQVMsRUFDVCxDQUFTO0lBRVQsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3hCLFNBQVM7SUFFVCxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhO0lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsb0JBQW9CO1FBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLGNBQWM7UUFDL0MsaUJBQWlCO1FBQ2pCLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFMUUsZUFBZTtRQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakI7Ozs7YUFJSztRQUNMLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoRTtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsVUFBVTtBQUNWLFNBQVMsS0FBSyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELEtBQUs7QUFDTCxJQUFJLDhCQUE4QixHQUFHLFVBQ25DLElBQWMsRUFDZCxDQUFTLEVBQ1QsQ0FBUztJQUVULG1FQUFtRTtJQUNuRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUNsRCxDQUFDLEVBQUUsQ0FBQztTQUNMO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1RSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1RSxnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkQsS0FBSyxDQUNOLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbTmlbDmlbDnu4TvvIzliKTmlq3mlbDnu4TkuK3mmK/lkKbmnInkuKTkuKrkuI3lkIznmoTntKLlvJUgaSDlkowgau+8jOS9v+W+lyBudW1zIFtpXSDlkowgbnVtcyBbal0g55qE5beu55qE57ud5a+55YC85pyA5aSn5Li6IHTvvIzlubbkuJQgaSDlkowgaiDkuYvpl7TnmoTlt67nmoTnu53lr7nlgLzmnIDlpKfkuLogxLfjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogbnVtcyA9IFsxLDIsMywxXSwgayA9IDMsIHQgPSAwXG7ovpPlh7o6IHRydWVcbuekuuS+iyAyOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwwLDEsMV0sIGsgPSAxLCB0ID0gMlxu6L6T5Ye6OiB0cnVlXG7npLrkvosgMzpcblxu6L6T5YWlOiBudW1zID0gWzEsNSw5LDEsNSw5XSwgayA9IDIsIHQgPSAzXG7ovpPlh7o6IGZhbHNlXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9jb250YWlucy1kdXBsaWNhdGUtaWlpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0ga1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBjb250YWluc05lYXJieUFsbW9zdER1cGxpY2F0ZSA9IGZ1bmN0aW9uIChcbiAgbnVtczogbnVtYmVyW10sXG4gIGs6IG51bWJlcixcbiAgdDogbnVtYmVyXG4pIHtcbiAgaWYgKHQgPCAwKSByZXR1cm4gZmFsc2U7XG4gIC8vIOWIhumalOaIkOWkmuS4quahtlxuXG4gIGNvbnN0IG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuICBjb25zdCB3ID0gdCArIDE7IC8vIOS4gOS4quahtumHjOmdouaUvuWHoOS4quS4nOilv1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbSA9IGdldElEKG51bXNbaV0sIHcpO1xuICAgIC8vIOW9k+WJjeahtuaciSDkuKTkuKrlgLwg6YKj5LmI5LiA5a6a5Zyo6IyD5Zu05YaFXG4gICAgaWYgKG1hcFttXSAhPSBudWxsKSByZXR1cm4gdHJ1ZTsgLy8g5rOo5oSP6L+Z6L65IG1hcFttXVxuICAgIC8vIOebuOmCu+eahOahtuS4reaYr+S4jeaYr+acieespuWQiOimgeaxgueahFxuICAgIGlmIChtYXBbbSAtIDFdICE9IG51bGwgJiYgTWF0aC5hYnMobnVtc1tpXSAtIG1hcFttIC0gMV0pIDwgdykgcmV0dXJuIHRydWU7XG4gICAgaWYgKG1hcFttICsgMV0gIT0gbnVsbCAmJiBNYXRoLmFicyhudW1zW2ldIC0gbWFwW20gKyAxXSkgPCB3KSByZXR1cm4gdHJ1ZTtcblxuICAgIC8vIOayoeaciea7oei2syDnm7TmjqXmlL7lhaUg5qG25LitXG4gICAgbWFwW21dID0gbnVtc1tpXTtcbiAgICAvKipcbiAgICAgKiDkuLrku4DkuYjlj6ropoHmr5TkuIDmrKHlsLHooYzkuoblkaIg5bCx566X5Zyo55u46YK755qE5qG25Lit5Lmf5pyJ5Y+v6IO9IOW5tuS4jeaYr+aDs+imgeeahOe7k+aenFxuICAgICAqIOS9huaYr+avj+asoemDveiDveimhuebluWRolxuICAgICAqIOWboOS4uuW+iOeugOWNlSDlpoLmnpzopoHopobnm5Yg5b+F5a6a5Zyo5ZCM5LiA5Liq5qG26YeM6Z2iIOmCo+S5iOS8mOWFiOWboOS4uuWcqOS4gOS4quahtuS4rSDogIzliKTmlq3kuLogdHJ1ZSDkuI3pnIDopoHlho3lkoznm7jpgrvnmoTmobbliKTmlq3kuoZcbiAgICAgKiAqL1xuICAgIC8vIOaKiiDkuI3mu6HotrMgaSAtIGogPD0gayDnmoTmjpLpmaQg5rOo5oSP5q2k5aSEIGkg5pivaW5kZXhcbiAgICBpZiAoaSA+PSBrKSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG1hcCwgZ2V0SUQobnVtc1tpIC0ga10sIHcpKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDojrflj5Yg5qG255qE57yW5Y+3XG5mdW5jdGlvbiBnZXRJRCh4OiBudW1iZXIsIHc6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5mbG9vcih4IC8gdyk7XG59XG5cbi8vIOaatOWKm1xudmFyIGNvbnRhaW5zTmVhcmJ5QWxtb3N0RHVwbGljYXRlMSA9IGZ1bmN0aW9uIChcbiAgbnVtczogbnVtYmVyW10sXG4gIGs6IG51bWJlcixcbiAgdDogbnVtYmVyXG4pIHtcbiAgLy8g5Y+q6KaBIOWIpOaWrSBpIOS9jee9riDkuYvliY0gayDkuKrkvY3nva7lhoUg5pyJ5rKh5pyJ6IO95aSf56ym5ZCIIG51bXMgW2ldIOWSjCBudW1zIFtqXSDnmoTlt67nmoTnu53lr7nlgLzmnIDlpKfkuLogdCDlsLHmiJDkuoZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGogPSBpIC0gMTtcbiAgICB3aGlsZSAoaiA+PSAwICYmIGkgLSBqIDw9IGspIHtcbiAgICAgIGlmIChNYXRoLmFicyhudW1zW2ldIC0gbnVtc1tqXSkgPD0gdCkgcmV0dXJuIHRydWU7XG4gICAgICBqLS07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjb250YWluc05lYXJieUFsbW9zdER1cGxpY2F0ZShbMSwgMiwgMywgMV0sIDMsIDApLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChjb250YWluc05lYXJieUFsbW9zdER1cGxpY2F0ZShbMSwgMCwgMSwgMV0sIDEsIDIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgY29udGFpbnNOZWFyYnlBbG1vc3REdXBsaWNhdGUoWzEsIDUsIDksIDEsIDUsIDldLCAyLCAzKSxcbiAgZmFsc2Vcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoY29udGFpbnNOZWFyYnlBbG1vc3REdXBsaWNhdGUoWzMsIDYsIDAsIDJdLCAyLCAyKSwgdHJ1ZSk7XG4iXX0=
