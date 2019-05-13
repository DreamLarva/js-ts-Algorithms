/**
 * Javascript中对应的是Object 所以这边也没什么卵用
 * Dictionary 类的基础是 Array 类(其实Object也可以)
 * 对字典中的键排序，而 JavaScript 中是不能对对象的属性进行排序的
 * */
type TypeObject<T> = {
    [key: string]: T;
    [key: number]: T;
}
type LabelType = number | string;

class Dictionary<T> {
    dataStore: TypeObject<T> = {};

    add(key: number | string, value: T) {
        this.dataStore[key] = value;
        return this;
    };

    find(key: LabelType) {
        return this.dataStore[key];
    };

    remove(key: LabelType) {
        delete this.dataStore[key];
    };

    showAll() {
        Object.keys(this.dataStore).sort().forEach(v => console.log(v + " -> " + this.dataStore[v]));
    };

    count() {
        return Object.keys(this.dataStore).length;
    };

    clear() {
        this.dataStore = {};
    }
}


const D = new Dictionary();
D.add("1A", "1").add("3B", "2").add("2C", "3").add("1", "abc");
console.log(D.find("1A"));
D.showAll();
console.log(D.count());


export {};
