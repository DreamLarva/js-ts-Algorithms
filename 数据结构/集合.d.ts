/**
 * 集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。
 * 集合的两个最重要特性是：首先，集合中的成员是无序的；
 * 其次，集合中不允许相同成员存在。
 * 集合在计算机科学中扮演了非常重要的角色，然而在很多编程语言中，并不把集合当成一种数据类型。
 * 当你想要创建一个数据结构，用来保存一些独一无二的元素时，比如一段文本中用到的单词，集合就变得非常有用。*/
/**
 * 建立集合的基础类型是数组*/
declare class MySet<T> {
    dataStore: T[];
    size(): number;
    add(data: T): boolean;
    addArr(arr: T[]): void;
    show(): T[];
    contains(data: T): boolean;
    union(set: MySet<T>): MySet<{}>;
    intersect(set: MySet<T>): Set<any>;
    subset(set: MySet<T>): boolean;
    difference(set: MySet<T>): MySet<{}>;
}
declare const S1: MySet<{}>;
declare const S2: MySet<{}>;
declare const S3: MySet<{}>;
