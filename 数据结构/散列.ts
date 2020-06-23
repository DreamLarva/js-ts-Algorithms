/**
 * 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。
 * 也可称为散列表 或者 哈希表
 * 散列使用的数据结构叫做散列表。
 * 在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却效率低下，比如查找一组数据中的最大值和最小值。
 * */

/**
 * 散列表是基于数组进行设计的。
 * 数组的长度是预先设定的，如有需要，可以随时增加。
 * 所有元素根据和该元素对应的键，保存在数组的特定位置，该键和我们前面讲到的字典中的键是类似的概念。
 * 使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是 0 到散列表的长度。
 * 理想情况下，散列函数会将每个键值映射为一个唯一的数组索引。
 * 然而，键的数量是无限的，数组的长度是有限的（理论上，在 JavaScript 中是这样），
 * 一个更现实的目标是让散列函数尽量将键均匀地映射到数组中。
 * 即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为碰撞（collision）。
 * 要确定的最后一个问题是：散列表中的数组究竟应该有多大？这是编写散列函数时必须要考虑的。
 * 对数组大小常见的限制是：数组长度应该是一个质数。
 * */

class HashTable {
  table: string[] = new Array(137);

  simpleHash(data: string) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  put(data: string) {
    // 储存一个数据
    const pos = this.betterHash(data);
    this.table[pos] = data;
  }

  // 霍纳算法 更好的解决碰撞
  betterHash(string: string) {
    const H = 31;
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return Math.floor(total);
  }

  putArr(arr: string[]) {
    // 储存多个数据
    arr.forEach((v) => {
      // 箭头函数绑定了作用域
      const pos = this.betterHash(v);
      this.table[pos] = v;
      // console.log(pos, v);
    });
  }

  showDistro() {
    // 打印所有数据
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i + " : " + this.table[i]);
      }
    }
  }
}

const T = new HashTable();
T.putArr([
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
]);
T.showDistro();
console.log("-----------");

/**
 * 如果用散列来存储数据
 * 那么每个数据就必须要要一个主键 来作为key
 * */
class HashTableData<T = any> {
  table: T[] = new Array(137);

  simpleHash(data: string) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  // 霍纳算法 更好的解决碰撞
  betterHash(string: string) {
    const H = 31;
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return Math.floor(total);
  }

  // 储存一个数据
  put(key: string, data: T) {
    const pos = this.betterHash(key);
    this.table[pos] = data;
  }

  get(key: string) {
    return this.table[this.betterHash(key)];
  }

  // 打印所有数据
  showDistro() {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i + " : " + JSON.stringify(this.table[i]));
      }
    }
  }
}

const TD = new HashTableData();
const data = { key: "123", value: "abc" };
TD.put(data.key, data);
TD.showDistro();

export {};
