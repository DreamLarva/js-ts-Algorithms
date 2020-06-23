/**
 * 线性探测法隶属于一种更一般化的散列技术：开放寻址散列。
 * 当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。
 * 如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。
 * 该技术是基于这样一个事实：每个散列表都会有很多空的单元格，可以使用它们来存储数据。
 *
 * 如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
 * 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法
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
    let pos = this.betterHash(data);
    if (this.table[pos] === undefined) {
      this.table[pos] = data;
    } else {
      while (this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos] = data;
    }
  }

  get(key: string) {
    const hash = this.betterHash(key);
    if (hash > -1) {
      for (let i = hash; this.table[hash] !== undefined; i++) {
        if (this.table[hash] === key) {
          return this.table[hash];
        }
      }
    }
    return false;
  }

  putArr(arr: string[]) {
    // 储存多个数据
    arr.forEach((v) => {
      // 箭头函数绑定了作用域
      this.put(v);
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
}

const T = new HashTable();
T.putArr([
  "David",
  "Jennifer",
  "Donnie",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
]);
T.showDistro();

export {};
