"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
        }
        else {
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
            this.cache[this.getHash(key)] = this.cache[this.getHash(key)].filter(([_key]) => _key !== key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qkk7QUFDSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUdiLFlBQW9CLFNBQWlCLEdBQUc7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQVc7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUNsRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQ3pCLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRjtBQUVEOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBRUosb0RBQTRCO0FBRTVCLE1BQU0sT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87QUFDOUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztBQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87QUFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7QUFDOUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7kuI3kvb/nlKjku7vkvZXlhoXlu7rnmoTlk4jluIzooajlupPorr7orqHkuIDkuKrlk4jluIzmmKDlsIRcblxu5YW35L2T5Zyw6K+077yM5L2g55qE6K6+6K6h5bqU6K+l5YyF5ZCr5Lul5LiL55qE5Yqf6IO9XG5cbnB1dChrZXksIHZhbHVlKe+8muWQkeWTiOW4jOaYoOWwhOS4reaPkuWFpSjplK4s5YC8KeeahOaVsOWAvOWvueOAguWmguaenOmUruWvueW6lOeahOWAvOW3sue7j+WtmOWcqO+8jOabtOaWsOi/meS4quWAvOOAglxuZ2V0KGtleSnvvJrov5Tlm57nu5nlrprnmoTplK7miYDlr7nlupTnmoTlgLzvvIzlpoLmnpzmmKDlsITkuK3kuI3ljIXlkKvov5nkuKrplK7vvIzov5Tlm54tMeOAglxucmVtb3ZlKGtleSnvvJrlpoLmnpzmmKDlsITkuK3lrZjlnKjov5nkuKrplK7vvIzliKDpmaTov5nkuKrmlbDlgLzlr7njgIJcblxu56S65L6L77yaXG5cbk15SGFzaE1hcCBoYXNoTWFwID0gbmV3IE15SGFzaE1hcCgpO1xuaGFzaE1hcC5wdXQoMSwgMSk7IMKgIMKgIMKgIMKgIMKgXG5oYXNoTWFwLnB1dCgyLCAyKTsgwqAgwqAgwqAgwqBcbmhhc2hNYXAuZ2V0KDEpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLmdldCgzKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gLTEgKOacquaJvuWIsClcbmhhc2hNYXAucHV0KDIsIDEpOyDCoCDCoCDCoCDCoCAvLyDmm7TmlrDlt7LmnInnmoTlgLxcbmhhc2hNYXAuZ2V0KDIpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXG5oYXNoTWFwLnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgLy8g5Yig6Zmk6ZSu5Li6MueahOaVsOaNrlxuaGFzaE1hcC5nZXQoMik7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG5cbuazqOaEj++8mlxuXG7miYDmnInnmoTlgLzpg73lnKjCoFsxLCAxMDAwMDAwXeeahOiMg+WbtOWGheOAglxu5pON5L2c55qE5oC75pWw55uu5ZyoWzEsIDEwMDAwXeiMg+WbtOWGheOAglxu5LiN6KaB5L2/55So5YaF5bu655qE5ZOI5biM5bqT44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9kZXNpZ24taGFzaG1hcFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeUhhc2hNYXAge1xuICBjYWNoZTogW251bWJlciwgbnVtYmVyXVtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsZW5ndGg6IG51bWJlciA9IDEwMSkge1xuICAgIHRoaXMuY2FjaGUgPSBBcnJheShsZW5ndGgpXG4gICAgICAuZmlsbCgwKVxuICAgICAgLm1hcCgoKSA9PiBbXSk7XG4gIH1cblxuICBnZXRIYXNoKGtleTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGtleSAlIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgY29udGFpbnMoa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uc29tZSgoW19rZXldKSA9PiBfa2V5ID09PSBrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHZhbHVlIHdpbGwgYWx3YXlzIGJlIG5vbi1uZWdhdGl2ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHB1dChrZXk6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNvbnRhaW5zKGtleSkpIHtcbiAgICAgIHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmZpbmQoKFtfa2V5XSkgPT4gX2tleSA9PT0ga2V5KSFbMV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0ucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0byB3aGljaCB0aGUgc3BlY2lmaWVkIGtleSBpcyBtYXBwZWQsIG9yIC0xIGlmIHRoaXMgbWFwIGNvbnRhaW5zIG5vIG1hcHBpbmcgZm9yIHRoZSBrZXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQoa2V5OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jb250YWlucyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uZmluZCgoW19rZXldKSA9PiBfa2V5ID09PSBrZXkpIVsxXTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIG1hcHBpbmcgb2YgdGhlIHNwZWNpZmllZCB2YWx1ZSBrZXkgaWYgdGhpcyBtYXAgY29udGFpbnMgYSBtYXBwaW5nIGZvciB0aGUga2V5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlbW92ZShrZXk6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNvbnRhaW5zKGtleSkpIHtcbiAgICAgIHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldID0gdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uZmlsdGVyKFxuICAgICAgICAoW19rZXldKSA9PiBfa2V5ICE9PSBrZXlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogWW91ciBNeUhhc2hNYXAgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlIYXNoTWFwKClcbiAqIG9iai5wdXQoa2V5LHZhbHVlKVxuICogdmFyIHBhcmFtXzIgPSBvYmouZ2V0KGtleSlcbiAqIG9iai5yZW1vdmUoa2V5KVxuICovXG5cbi8qXG5NeUhhc2hNYXAgaGFzaE1hcCA9IG5ldyBNeUhhc2hNYXAoKTtcbmhhc2hNYXAucHV0KDEsIDEpOyDCoCDCoCDCoCDCoCDCoFxuaGFzaE1hcC5wdXQoMiwgMik7IMKgIMKgIMKgIMKgXG5oYXNoTWFwLmdldCgxKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gMVxuaGFzaE1hcC5nZXQoMyk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG5oYXNoTWFwLnB1dCgyLCAxKTsgwqAgwqAgwqAgwqAgLy8g5pu05paw5bey5pyJ55qE5YC8XG5oYXNoTWFwLmdldCgyKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gMVxuaGFzaE1hcC5yZW1vdmUoMik7IMKgIMKgIMKgIMKgIC8vIOWIoOmZpOmUruS4ujLnmoTmlbDmja5cbmhhc2hNYXAuZ2V0KDIpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAtMSAo5pyq5om+5YiwKVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWhhc2htYXBcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgaGFzaE1hcCA9IG5ldyBNeUhhc2hNYXAoKTtcbmhhc2hNYXAucHV0KDEsIDEpO1xuaGFzaE1hcC5wdXQoMiwgMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaE1hcC5nZXQoMSksIDEpOyAvLyDov5Tlm54gMVxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDMpLCAtMSk7IC8vIOi/lOWbniAtMSAo5pyq5om+5YiwKVxuaGFzaE1hcC5wdXQoMiwgMSk7IC8vIOabtOaWsOW3suacieeahOWAvFxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDIpLCAxKTsgLy8g6L+U5ZueIDFcbmhhc2hNYXAucmVtb3ZlKDIpOyAvLyDliKDpmaTplK7kuLoy55qE5pWw5o2uXG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaE1hcC5nZXQoMiksIC0xKTsgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG4iXX0=