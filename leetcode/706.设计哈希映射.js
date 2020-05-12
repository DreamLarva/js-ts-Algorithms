"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
不使用任何内建的哈希表库设计一个哈希映射

具体地说，你的设计应该包含以下的功能

put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
remove(key)：如果映射中存在这个键，删除这个数值对。

示例：

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // 返回 1
hashMap.get(3);            // 返回 -1 (未找到)
hashMap.put(2, 1);         // 更新已有的值
hashMap.get(2);            // 返回 1
hashMap.remove(2);         // 删除键为2的数据
hashMap.get(2);            // 返回 -1 (未找到)

注意：

所有的值都在 [1, 1000000]的范围内。
操作的总数目在[1, 10000]范围内。
不要使用内建的哈希库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-hashmap
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * Initialize your data structure here.
 */
class MyHashMap {
  constructor(length = 101) {
    this.length = length;
    this.cache = Array(length)
      .fill(0)
      .map(() => []);
  }
  getHash(key) {
    return key % this.length;
  }
  contains(key) {
    return this.cache[this.getHash(key)].some(([_key]) => _key === key);
  }
  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.contains(key)) {
      this.cache[this.getHash(key)].find(([_key]) => _key === key)[1] = value;
    } else {
      this.cache[this.getHash(key)].push([key, value]);
    }
  }
  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.contains(key)) {
      return this.cache[this.getHash(key)].find(([_key]) => _key === key)[1];
    }
    return -1;
  }
  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (this.contains(key)) {
      this.cache[this.getHash(key)] = this.cache[this.getHash(key)].filter(
        ([_key]) => _key !== key
      );
    }
  }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
/*
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // 返回 1
hashMap.get(3);            // 返回 -1 (未找到)
hashMap.put(2, 1);         // 更新已有的值
hashMap.get(2);            // 返回 1
hashMap.remove(2);         // 删除键为2的数据
hashMap.get(2);            // 返回 -1 (未找到)

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-hashmap
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const assert_1 = __importDefault(require("assert"));
const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
assert_1.default.strictEqual(hashMap.get(1), 1); // 返回 1
assert_1.default.strictEqual(hashMap.get(3), -1); // 返回 -1 (未找到)
hashMap.put(2, 1); // 更新已有的值
assert_1.default.strictEqual(hashMap.get(2), 1); // 返回 1
hashMap.remove(2); // 删除键为2的数据
assert_1.default.strictEqual(hashMap.get(2), -1); // 返回 -1 (未找到)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qkk7QUFDSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUdYLFlBQW9CLFNBQWlCLEdBQUc7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNmLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDSCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDNUU7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xHO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQUdEOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBR0osb0RBQTRCO0FBRTVCLE1BQU0sT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZLE9BQU87QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVksY0FBYztBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFTLFNBQVM7QUFDcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZLE9BQU87QUFDekQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFTLFdBQVc7QUFDdEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7kuI3kvb/nlKjku7vkvZXlhoXlu7rnmoTlk4jluIzooajlupPorr7orqHkuIDkuKrlk4jluIzmmKDlsIRcblxu5YW35L2T5Zyw6K+077yM5L2g55qE6K6+6K6h5bqU6K+l5YyF5ZCr5Lul5LiL55qE5Yqf6IO9XG5cbnB1dChrZXksIHZhbHVlKe+8muWQkeWTiOW4jOaYoOWwhOS4reaPkuWFpSjplK4s5YC8KeeahOaVsOWAvOWvueOAguWmguaenOmUruWvueW6lOeahOWAvOW3sue7j+WtmOWcqO+8jOabtOaWsOi/meS4quWAvOOAglxuZ2V0KGtleSnvvJrov5Tlm57nu5nlrprnmoTplK7miYDlr7nlupTnmoTlgLzvvIzlpoLmnpzmmKDlsITkuK3kuI3ljIXlkKvov5nkuKrplK7vvIzov5Tlm54tMeOAglxucmVtb3ZlKGtleSnvvJrlpoLmnpzmmKDlsITkuK3lrZjlnKjov5nkuKrplK7vvIzliKDpmaTov5nkuKrmlbDlgLzlr7njgIJcblxu56S65L6L77yaXG5cbk15SGFzaE1hcCBoYXNoTWFwID0gbmV3IE15SGFzaE1hcCgpO1xuaGFzaE1hcC5wdXQoMSwgMSk7IMKgIMKgIMKgIMKgIMKgXG5oYXNoTWFwLnB1dCgyLCAyKTsgwqAgwqAgwqAgwqBcbmhhc2hNYXAuZ2V0KDEpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLmdldCgzKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gLTEgKOacquaJvuWIsClcbmhhc2hNYXAucHV0KDIsIDEpOyDCoCDCoCDCoCDCoCAvLyDmm7TmlrDlt7LmnInnmoTlgLxcbmhhc2hNYXAuZ2V0KDIpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgLy8g5Yig6Zmk6ZSu5Li6MueahOaVsOaNrlxuaGFzaE1hcC5nZXQoMik7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG5cbuazqOaEj++8mlxuXG7miYDmnInnmoTlgLzpg73lnKjCoFsxLCAxMDAwMDAwXeeahOiMg+WbtOWGheOAglxu5pON5L2c55qE5oC75pWw55uu5ZyoWzEsIDEwMDAwXeiMg+WbtOWGheOAglxu5LiN6KaB5L2/55So5YaF5bu655qE5ZOI5biM5bqT44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9kZXNpZ24taGFzaG1hcFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeUhhc2hNYXAge1xuICAgIGNhY2hlOiBbbnVtYmVyLCBudW1iZXJdW11bXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbGVuZ3RoOiBudW1iZXIgPSAxMDEpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKS5tYXAoKCkgPT4gW10pO1xuICAgIH1cblxuICAgIGdldEhhc2goa2V5OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGtleSAlIHRoaXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnRhaW5zKGtleTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5zb21lKChbX2tleV0pID0+IF9rZXkgPT09IGtleSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhbHVlIHdpbGwgYWx3YXlzIGJlIG5vbi1uZWdhdGl2ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBwdXQoa2V5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uZmluZCgoW19rZXldKSA9PiBfa2V5ID09PSBrZXkpIVsxXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0ucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHRvIHdoaWNoIHRoZSBzcGVjaWZpZWQga2V5IGlzIG1hcHBlZCwgb3IgLTEgaWYgdGhpcyBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhlIGtleVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0KGtleTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5maW5kKChbX2tleV0pID0+IF9rZXkgPT09IGtleSkhWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbWFwcGluZyBvZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGtleSBpZiB0aGlzIG1hcCBjb250YWlucyBhIG1hcHBpbmcgZm9yIHRoZSBrZXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmUoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0gPSB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5maWx0ZXIoKFtfa2V5XSkgPT4gX2tleSAhPT0ga2V5KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLyoqXG4gKiBZb3VyIE15SGFzaE1hcCBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNeUhhc2hNYXAoKVxuICogb2JqLnB1dChrZXksdmFsdWUpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5nZXQoa2V5KVxuICogb2JqLnJlbW92ZShrZXkpXG4gKi9cblxuLypcbk15SGFzaE1hcCBoYXNoTWFwID0gbmV3IE15SGFzaE1hcCgpO1xuaGFzaE1hcC5wdXQoMSwgMSk7IMKgIMKgIMKgIMKgIMKgXG5oYXNoTWFwLnB1dCgyLCAyKTsgwqAgwqAgwqAgwqBcbmhhc2hNYXAuZ2V0KDEpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLmdldCgzKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gLTEgKOacquaJvuWIsClcbmhhc2hNYXAucHV0KDIsIDEpOyDCoCDCoCDCoCDCoCAvLyDmm7TmlrDlt7LmnInnmoTlgLxcbmhhc2hNYXAuZ2V0KDIpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgLy8g5Yig6Zmk6ZSu5Li6MueahOaVsOaNrlxuaGFzaE1hcC5nZXQoMik7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9kZXNpZ24taGFzaG1hcFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmNvbnN0IGhhc2hNYXAgPSBuZXcgTXlIYXNoTWFwKCk7XG5oYXNoTWFwLnB1dCgxLCAxKTtcbmhhc2hNYXAucHV0KDIsIDIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDEpLCAxKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gMVxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDMpLCAtMSk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG5oYXNoTWFwLnB1dCgyLCAxKTsgwqAgwqAgwqAgwqAgLy8g5pu05paw5bey5pyJ55qE5YC8XG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaE1hcC5nZXQoMiksIDEpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgLy8g5Yig6Zmk6ZSu5Li6MueahOaVsOaNrlxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDIpLCAtMSk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG4iXX0=
