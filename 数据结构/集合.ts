/**
 * 集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。
 * 集合的两个最重要特性是：首先，集合中的成员是无序的；
 * 其次，集合中不允许相同成员存在。
 * 集合在计算机科学中扮演了非常重要的角色，然而在很多编程语言中，并不把集合当成一种数据类型。
 * 当你想要创建一个数据结构，用来保存一些独一无二的元素时，比如一段文本中用到的单词，集合就变得非常有用。*/
/**
 * 建立集合的基础类型是数组*/

class MySet<T> {
  dataStore: T[] = [];

  size() {
    return this.dataStore.length;
  }

  add(data: T) {
    if (this.dataStore.indexOf(data) === -1) {
      this.dataStore.push(data);
      return true;
    } else {
      return false;
    }
  }

  addArr(arr: T[]) {
    arr.forEach((v) => this.add(v));
  }

  show() {
    return this.dataStore;
  }

  contains(data: T) {
    return this.dataStore.indexOf(data) !== -1;
  }

  // 求两者的并集
  union(set: MySet<T>) {
    const tempSet = new MySet();
    this.dataStore.forEach((v) => tempSet.add(v));
    for (let i = 0; i < set.dataStore.length; ++i) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i]);
      }
    }
    return tempSet;
  }

  // 求两者的交集
  intersect(set: MySet<T>) {
    const tempSet = new Set();
    this.dataStore.forEach((v) => {
      !set.contains(v) && tempSet.add(v);
    });

    return tempSet;
  }

  // 判断当前集合是不是传入集合的子集
  subset(set: MySet<T>) {
    if (this.size() > set.size()) {
      return false;
    } else {
      return this.dataStore.every((v) => set.contains(v));
    }
  }

  // 求两个集合的差集(当前集合有,但是传入的集合没有)
  difference(set: MySet<T>) {
    const tempSet = new MySet();
    this.dataStore.forEach((v) => {
      !set.contains(v) && tempSet.add(v);
    });
    return tempSet;
  }
}

const S1 = new MySet();
S1.addArr([1, 2, 3, 4, 5, 6, 6]);
const S2 = new MySet();
S2.addArr([1, 4, 5, 6, 7, 8, 9, 10]);
const S3 = new MySet();
S3.addArr([4, 5, 6]);

console.log("union", S1.union(S2));
console.log("intersect", S1.intersect(S2));
console.log("is subset", S3.subset(S2));
console.log("difference", S1.difference(S2));

export {};
