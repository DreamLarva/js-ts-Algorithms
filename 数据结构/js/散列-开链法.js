/**
 * 散列表的呈现是一个二维数组
 * 发生碰撞的内容依次推入对应的数组中
 *
 * 如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
 * 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法
 * */
function HashTable() {
  this.table = new Array(137);
}

HashTable.prototype.put = function (data) {
  // 储存一个数据
  var pos = this.betterHash(data);
  if (this.table[pos]) {
    this.table[pos].push(data);
  } else {
    this.table[pos] = [data];
  }
};
HashTable.prototype.putArr = function (arr) {
  // 储存多个数据
  arr.forEach((v) => {
    // 箭头函数绑定了作用域
    this.put(v);
  });
};
HashTable.prototype.showDistro = function () {
  // 打印所有数据
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      this.table[i].forEach((value) => {
        console.log(i + " : " + value);
      });
    }
  }
};
// 霍纳算法 更好的解决碰撞
HashTable.prototype.betterHash = function (string) {
  const H = 31;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
};

HashTable.prototype.get = function (key) {
  var pos = this.betterHash(key);
  if (!this.table[pos]) {
    return false;
  } else if (this.table[pos].length === 1) {
    return this.table[pos];
  } else {
    return this.table[pos].filter((v) => v === key) || false;
  }
};

var T = new HashTable();
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
