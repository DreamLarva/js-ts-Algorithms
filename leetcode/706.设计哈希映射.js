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
        this.cache = Array(length).fill(0).map(() => []);
    }
    getHash(key) {
        return key % this.length;
    }
    contains(key) {
        return this.cache[this.getHash(key)].some(([_key]) => _key === key);
    }
    ;
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
    ;
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
    ;
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
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qkk7QUFDSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUdYLFlBQW9CLFNBQWlCLEdBQUc7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNmLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDSCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDNUU7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xHO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQUdEOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBR0osb0RBQTRCO0FBRTVCLE1BQU0sT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZLE9BQU87QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVksY0FBYztBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFTLFNBQVM7QUFDcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZLE9BQU87QUFDekQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFTLFdBQVc7QUFDdEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuS4jeS9v+eUqOS7u+S9leWGheW7uueahOWTiOW4jOihqOW6k+iuvuiuoeS4gOS4quWTiOW4jOaYoOWwhFxyXG5cclxu5YW35L2T5Zyw6K+077yM5L2g55qE6K6+6K6h5bqU6K+l5YyF5ZCr5Lul5LiL55qE5Yqf6IO9XHJcblxyXG5wdXQoa2V5LCB2YWx1ZSnvvJrlkJHlk4jluIzmmKDlsITkuK3mj5LlhaUo6ZSuLOWAvCnnmoTmlbDlgLzlr7njgILlpoLmnpzplK7lr7nlupTnmoTlgLzlt7Lnu4/lrZjlnKjvvIzmm7TmlrDov5nkuKrlgLzjgIJcclxuZ2V0KGtleSnvvJrov5Tlm57nu5nlrprnmoTplK7miYDlr7nlupTnmoTlgLzvvIzlpoLmnpzmmKDlsITkuK3kuI3ljIXlkKvov5nkuKrplK7vvIzov5Tlm54tMeOAglxyXG5yZW1vdmUoa2V5Ke+8muWmguaenOaYoOWwhOS4reWtmOWcqOi/meS4qumUru+8jOWIoOmZpOi/meS4quaVsOWAvOWvueOAglxyXG5cclxu56S65L6L77yaXHJcblxyXG5NeUhhc2hNYXAgaGFzaE1hcCA9IG5ldyBNeUhhc2hNYXAoKTtcclxuaGFzaE1hcC5wdXQoMSwgMSk7IMKgIMKgIMKgIMKgIMKgXHJcbmhhc2hNYXAucHV0KDIsIDIpOyDCoCDCoCDCoCDCoFxyXG5oYXNoTWFwLmdldCgxKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gMVxyXG5oYXNoTWFwLmdldCgzKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gLTEgKOacquaJvuWIsClcclxuaGFzaE1hcC5wdXQoMiwgMSk7IMKgIMKgIMKgIMKgIC8vIOabtOaWsOW3suacieeahOWAvFxyXG5oYXNoTWFwLmdldCgyKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gMVxyXG5oYXNoTWFwLnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgLy8g5Yig6Zmk6ZSu5Li6MueahOaVsOaNrlxyXG5oYXNoTWFwLmdldCgyKTsgwqAgwqAgwqAgwqAgwqAgwqAvLyDov5Tlm54gLTEgKOacquaJvuWIsClcclxuXHJcbuazqOaEj++8mlxyXG5cclxu5omA5pyJ55qE5YC86YO95ZyowqBbMSwgMTAwMDAwMF3nmoTojIPlm7TlhoXjgIJcclxu5pON5L2c55qE5oC75pWw55uu5ZyoWzEsIDEwMDAwXeiMg+WbtOWGheOAglxyXG7kuI3opoHkvb/nlKjlhoXlu7rnmoTlk4jluIzlupPjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2Rlc2lnbi1oYXNobWFwXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS5cclxuICovXHJcbmNsYXNzIE15SGFzaE1hcCB7XHJcbiAgICBjYWNoZTogW251bWJlciwgbnVtYmVyXVtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsZW5ndGg6IG51bWJlciA9IDEwMSkge1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSBBcnJheShsZW5ndGgpLmZpbGwoMCkubWFwKCgpID0+IFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIYXNoKGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleSAlIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zKGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLnNvbWUoKFtfa2V5XSkgPT4gX2tleSA9PT0ga2V5KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWx1ZSB3aWxsIGFsd2F5cyBiZSBub24tbmVnYXRpdmUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHB1dChrZXk6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uZmluZCgoW19rZXldKSA9PiBfa2V5ID09PSBrZXkpIVsxXSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdG8gd2hpY2ggdGhlIHNwZWNpZmllZCBrZXkgaXMgbWFwcGVkLCBvciAtMSBpZiB0aGlzIG1hcCBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGUga2V5XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldChrZXk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmZpbmQoKFtfa2V5XSkgPT4gX2tleSA9PT0ga2V5KSFbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBtYXBwaW5nIG9mIHRoZSBzcGVjaWZpZWQgdmFsdWUga2V5IGlmIHRoaXMgbWFwIGNvbnRhaW5zIGEgbWFwcGluZyBmb3IgdGhlIGtleVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXSA9IHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmZpbHRlcigoW19rZXldKSA9PiBfa2V5ICE9PSBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogWW91ciBNeUhhc2hNYXAgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcclxuICogdmFyIG9iaiA9IG5ldyBNeUhhc2hNYXAoKVxyXG4gKiBvYmoucHV0KGtleSx2YWx1ZSlcclxuICogdmFyIHBhcmFtXzIgPSBvYmouZ2V0KGtleSlcclxuICogb2JqLnJlbW92ZShrZXkpXHJcbiAqL1xyXG5cclxuLypcclxuTXlIYXNoTWFwIGhhc2hNYXAgPSBuZXcgTXlIYXNoTWFwKCk7XHJcbmhhc2hNYXAucHV0KDEsIDEpOyDCoCDCoCDCoCDCoCDCoFxyXG5oYXNoTWFwLnB1dCgyLCAyKTsgwqAgwqAgwqAgwqBcclxuaGFzaE1hcC5nZXQoMSk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIDFcclxuaGFzaE1hcC5nZXQoMyk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXHJcbmhhc2hNYXAucHV0KDIsIDEpOyDCoCDCoCDCoCDCoCAvLyDmm7TmlrDlt7LmnInnmoTlgLxcclxuaGFzaE1hcC5nZXQoMik7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIDFcclxuaGFzaE1hcC5yZW1vdmUoMik7IMKgIMKgIMKgIMKgIC8vIOWIoOmZpOmUruS4ujLnmoTmlbDmja5cclxuaGFzaE1hcC5nZXQoMik7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9kZXNpZ24taGFzaG1hcFxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuY29uc3QgaGFzaE1hcCA9IG5ldyBNeUhhc2hNYXAoKTtcclxuaGFzaE1hcC5wdXQoMSwgMSk7XHJcbmhhc2hNYXAucHV0KDIsIDIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaE1hcC5nZXQoMSksIDEpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAxXHJcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoTWFwLmdldCgzKSwgLTEpOyDCoCDCoCDCoCDCoCDCoCDCoC8vIOi/lOWbniAtMSAo5pyq5om+5YiwKVxyXG5oYXNoTWFwLnB1dCgyLCAxKTsgwqAgwqAgwqAgwqAgLy8g5pu05paw5bey5pyJ55qE5YC8XHJcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoTWFwLmdldCgyKSwgMSk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIDFcclxuaGFzaE1hcC5yZW1vdmUoMik7IMKgIMKgIMKgIMKgIC8vIOWIoOmZpOmUruS4ujLnmoTmlbDmja5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDIpLCAtMSk7IMKgIMKgIMKgIMKgIMKgIMKgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXHJcbiJdfQ==