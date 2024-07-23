/*
2618. 检查是否是类的对象实例
提示
中等
0
相关企业
请你编写一个函数，检查给定的对象是否是给定类或超类的实例。

可以传递给函数的数据类型没有限制。



示例 1：

输入：func = () => checkIfInstance(new Date(), Date)
输出：true
解释：根据定义，Date 构造函数返回的对象是 Date 的一个实例。
* */

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  try {
    if (obj == null || classFunction == null) return false;
    if (classFunction === Object) return true;
    if (typeof obj === "object") {
      return obj instanceof classFunction;
    }
    if (obj === classFunction) return false;

    return (typeof obj).toLowerCase() === classFunction.name.toLowerCase();
  } catch (e) {
    return false;
  }
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
