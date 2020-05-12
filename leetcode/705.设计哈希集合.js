"use strict";
/*
不使用任何内建的哈希表库设计一个哈希集合

具体地说，你的设计应该包含以下的功能

add(value)：向哈希集合中插入一个值。
contains(value) ：返回哈希集合中是否存在这个值。
remove(value)：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

示例:

MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // 返回 true
hashSet.contains(3);    // 返回 false (未找到)
hashSet.add(2);
hashSet.contains(2);    // 返回 true
hashSet.remove(2);
hashSet.contains(2);    // 返回  false (已经被删除)

注意：

所有的值都在 [1, 1000000]的范围内。
操作的总数目在[1, 10000]范围内。
不要使用内建的哈希集合库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-hashset
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Initialize your data structure here.
 */
class MyHashSet {
  constructor(length = 101) {
    this.length = length;
    this.cache = Array(length)
      .fill(0)
      .map(() => []);
  }
  getHash(key) {
    return key % this.length;
  }
  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    if (this.contains(key)) return;
    this.cache[this.getHash(key)].push(key);
  }
  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (!this.contains(key)) return;
    this.cache[this.getHash(key)] = this.cache[this.getHash(key)].filter(
      (v) => v !== key
    );
  }
  /**
   * Returns true if this set contains the specified element
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.cache[this.getHash(key)].indexOf(key) !== -1;
  }
}
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
/*
MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // 返回 true
hashSet.contains(3);    // 返回 false (未找到)
hashSet.add(2);
hashSet.contains(2);    // 返回 true
hashSet.remove(2);
hashSet.contains(2);    // 返回  false (已经被删除)
* */
const assert_1 = __importDefault(require("assert"));
const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
assert_1.default.strictEqual(hashSet.contains(1), true); // 返回 true
assert_1.default.strictEqual(hashSet.contains(3), false); // 返回 false (未找到)
hashSet.add(2);
assert_1.default.strictEqual(hashSet.contains(2), true); // 返回 true
hashSet.remove(2);
assert_1.default.strictEqual(hashSet.contains(2), false); // 返回  false (已经被删除)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTs7Ozs7QUFFSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUlYLFlBQW9CLFNBQWlCLEdBQUc7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNmLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUdEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQUEsQ0FBQztDQUVMO0FBR0Q7Ozs7OztHQU1HO0FBR0g7Ozs7Ozs7Ozs7SUFVSTtBQUNKLG9EQUE0QjtBQUU1QixNQUFNLE9BQU8sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLFVBQVU7QUFDM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFJLGlCQUFpQjtBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLFVBQVU7QUFDM0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS4jeS9v+eUqOS7u+S9leWGheW7uueahOWTiOW4jOihqOW6k+iuvuiuoeS4gOS4quWTiOW4jOmbhuWQiFxuXG7lhbfkvZPlnLDor7TvvIzkvaDnmoTorr7orqHlupTor6XljIXlkKvku6XkuIvnmoTlip/og71cblxuYWRkKHZhbHVlKe+8muWQkeWTiOW4jOmbhuWQiOS4reaPkuWFpeS4gOS4quWAvOOAglxuY29udGFpbnModmFsdWUpIO+8mui/lOWbnuWTiOW4jOmbhuWQiOS4reaYr+WQpuWtmOWcqOi/meS4quWAvOOAglxucmVtb3ZlKHZhbHVlKe+8muWwhue7meWumuWAvOS7juWTiOW4jOmbhuWQiOS4reWIoOmZpOOAguWmguaenOWTiOW4jOmbhuWQiOS4reayoeaciei/meS4quWAvO+8jOS7gOS5iOS5n+S4jeWBmuOAglxuXG7npLrkvos6XG5cbk15SGFzaFNldCBoYXNoU2V0ID0gbmV3IE15SGFzaFNldCgpO1xuaGFzaFNldC5hZGQoMSk7IMKgIMKgIMKgIMKgXG5oYXNoU2V0LmFkZCgyKTsgwqAgwqAgwqAgwqBcbmhhc2hTZXQuY29udGFpbnMoMSk7IMKgwqDCoC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LmNvbnRhaW5zKDMpOyDCoMKgwqAvLyDov5Tlm54gZmFsc2UgKOacquaJvuWIsClcbmhhc2hTZXQuYWRkKDIpOyDCoCDCoCDCoCDCoCDCoFxuaGFzaFNldC5jb250YWlucygyKTsgwqDCoMKgLy8g6L+U5ZueIHRydWVcbmhhc2hTZXQucmVtb3ZlKDIpOyDCoCDCoCDCoCDCoCDCoFxuaGFzaFNldC5jb250YWlucygyKTsgwqDCoMKgLy8g6L+U5ZueICBmYWxzZSAo5bey57uP6KKr5Yig6ZmkKVxuXG7ms6jmhI/vvJpcblxu5omA5pyJ55qE5YC86YO95ZyowqBbMSwgMTAwMDAwMF3nmoTojIPlm7TlhoXjgIJcbuaTjeS9nOeahOaAu+aVsOebruWcqFsxLCAxMDAwMF3ojIPlm7TlhoXjgIJcbuS4jeimgeS9v+eUqOWGheW7uueahOWTiOW4jOmbhuWQiOW6k+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWhhc2hzZXRcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeUhhc2hTZXQge1xuICAgIGNhY2hlOiBudW1iZXJbXVtdO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxlbmd0aDogbnVtYmVyID0gMTAxKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBBcnJheShsZW5ndGgpLmZpbGwoMCkubWFwKCgpID0+IFtdKTtcbiAgICB9XG5cbiAgICBnZXRIYXNoKGtleTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBrZXkgJSB0aGlzLmxlbmd0aDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZChrZXk6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jb250YWlucyhrZXkpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0ucHVzaChrZXkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmUoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGtleSkpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXSA9IHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmZpbHRlcih2ID0+IHYgIT09IGtleSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb250YWlucyhrZXk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgICB9O1xuXG59XG5cblxuLyoqXG4gKiBZb3VyIE15SGFzaFNldCBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNeUhhc2hTZXQoKVxuICogb2JqLmFkZChrZXkpXG4gKiBvYmoucmVtb3ZlKGtleSlcbiAqIHZhciBwYXJhbV8zID0gb2JqLmNvbnRhaW5zKGtleSlcbiAqL1xuXG5cbi8qXG5NeUhhc2hTZXQgaGFzaFNldCA9IG5ldyBNeUhhc2hTZXQoKTtcbmhhc2hTZXQuYWRkKDEpOyDCoCDCoCDCoCDCoFxuaGFzaFNldC5hZGQoMik7IMKgIMKgIMKgIMKgXG5oYXNoU2V0LmNvbnRhaW5zKDEpOyDCoMKgwqAvLyDov5Tlm54gdHJ1ZVxuaGFzaFNldC5jb250YWlucygzKTsgwqDCoMKgLy8g6L+U5ZueIGZhbHNlICjmnKrmib7liLApXG5oYXNoU2V0LmFkZCgyKTsgwqAgwqAgwqAgwqAgwqBcbmhhc2hTZXQuY29udGFpbnMoMik7IMKgwqDCoC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgwqBcbmhhc2hTZXQuY29udGFpbnMoMik7IMKgwqDCoC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcbiogKi9cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5jb25zdCBoYXNoU2V0ID0gbmV3IE15SGFzaFNldCgpO1xuaGFzaFNldC5hZGQoMSk7XG5oYXNoU2V0LmFkZCgyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDEpLHRydWUpOyDCoMKgwqAvLyDov5Tlm54gdHJ1ZVxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hTZXQuY29udGFpbnMoMyksZmFsc2UpOyDCoMKgwqAvLyDov5Tlm54gZmFsc2UgKOacquaJvuWIsClcbmhhc2hTZXQuYWRkKDIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hTZXQuY29udGFpbnMoMiksdHJ1ZSk7IMKgwqDCoC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDIpLGZhbHNlKTsgwqDCoMKgLy8g6L+U5ZueICBmYWxzZSAo5bey57uP6KKr5Yig6ZmkKVxuIl19
