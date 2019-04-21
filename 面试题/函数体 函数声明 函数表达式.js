/**
 * 函数体是用花括号括起来的若干语句，他们完成了一个函数的具体功能。
 * 函数体内的前面是定义和说明部分，后面是语句部分。
 * 函数声明与函数体放在一起组成了函数定义。
 **/
function foo() // 函数声明
// 函数体
{
    // ....
}

/**
 * 函数声明解析过程如下:
 *　　1. 创建一个new Function对象，FormalParameterList指定参数，FunctionBody指定函数体。将当前正在运行环境中作用域链作为它的作用域。
 *　　2. 为当前变量对象创建一个名为Identifier的属性，值为Result(1)。
 *
 * Sp:函数声明的特点:并不能直接执行
 **/

// function foo(){}() // 并不能执行


/**
 * 函数表达式：(函数表达式分为匿名和具名函数表达式)
 * 简单来说，ECMAScript是通过上下文来区分这两者的：假如 function foo(){} 是一个赋值表达式的一部分，则认为它是一个函数表达式。而如果 function foo(){} 被包含在一个函数体内，或者位于程序（的最上层）中，则将它作为一个函数声明来解析。显然，在省略标识符的情况下，“表达式” 也就只能是表达式了。
 *
 * */

function foo() {
} // 声明，因为它是程序的一部分

var bar = function foo() {
}; // 表达式，因为它是赋值表达（AssignmentExpression）的一部分

new function bar() {
}; // 表达式，因为它是New表达式（NewExpression）的一部分

(function () {
    function bar() {
    } // 声明，因为它是函数体（FunctionBody）的一部分
})();

(function foo() {
}) // 表达式

// 将声明变成表达式的办法
// 1. 赋值
var a = function () {
};
// 2. 加括号
(function () {
    console.log(this)
}())

// 3.使用数学运算符(并不推荐,不在意执行后的返回值,只在乎执行的过程)
// !function () { /* code */ } ();
// ~function () { /* code */ } ();
// -function () { /* code */ } ();
// +function () { /* code */ } ();

// 4,.其他方法
// true && function () { /* code */ } ();
// 0, function () { /* code */ } ();


/**
 * 两者的异同
 * 函数声明会在任何表达式被解析和求值之前先行被解析和求值。
 * 1. 声明总是在作用域开始时先行解析；
 * 2. 表达式在遇到时候才运算。
 * */
/* if ( true ) {
 function foo() {
 return 'first';
 }
 }
 else {
 function foo() {
 return 'second';
 }
 }
 foo();*/


// 记住，这种情况下要使用函数表达式：
var foo;
if (true) {
    foo = function () {
        return 'first';
    };
} else {
    foo = function () {
        return 'second';
    };
}
foo();
