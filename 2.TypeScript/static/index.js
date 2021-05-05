// ===== 1. typepscript的基本使用
// tsc --outDir 指定输出目录
// ex：tsc --outDir /static/ index.ts
var str1 = 'ts 声明的常量';
// tsc --target 指定编译的代码版本目标，默认编译成 ES3 
// tsc --target esx
// tsc --outDir ./static/ --target es6 index.ts
// --watch 监听模式，可以实时监听 ts 文件是否有更改，并转换成 js 代码
var obj = {
    name: 'test',
    key: 'value',
    value: ''
};
var person = {
    name: '鬼',
    num: 100,
    point: 200,
};
var pointTest = {
    "name": "name",
    123: '123'
};
// ===== 3. 函数的标注
// val是函数所接受的参数，并定义了参数的类型。：后表示的是函数的返回值类型
// 即：该函数接收一个字符串的参数，返回的也是一个字符串
function testFn(val) {
    return "";
}
// 函数表达式的写法，和上面的声明是相同的
var testFn1 = function (a) {
    return '';
};
// 函数的可选参数 和 函数默认值
// num就是一个可选参数
// type 就是函数的默认值：
//      1. 函数的默认值也是可选参数
//      2. 设置了默认值的参数，可自动推导出参数类型，不需要标注
//      3. type默认参数，可以标注特定内容的参数内容。不符合会报错，如type只可以传up or down
function testFn2(val, num, type) {
    if (type === void 0) { type = 'up'; }
}
testFn2('123', 123);
// ===== 4. 类
var Person = /** @class */ (function () {
    // id: number;
    // name: string;
    // 如果在给构造函数参数，设置了访问修饰符(如这里的public)，那么ts会做如下两件事情
    // - 给当前类添加同名的成员属性
    // - 在类实例化的时候，会把传入的参数值赋值给对应的成员属性
    function Person(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    Person.prototype.eating = function (food) {
        console.log(this.name + "\u5403\u4E86" + food + "\uFF0C\u771F\u597D\u5403");
    };
    return Person;
}());
var newPerson = new Person(1, '大佬');
newPerson.eating('烤肉');
// ===== 5. 泛型
// 泛型：是允许同一个函数接受不同类型参数的一种模板。
// 泛型函数 ex:
function identity(val) {
    return val;
}
identity(1); // 等同于 identity(1)
// 返回单个类型
// function identity1<T, U> (val: T, type: U): T {
//   console.log(type)
//   return val;
// }
// 返回多个类型
function identity1(val, type) {
    return [val, type];
}
identity1('123', 123); // 等同于 identity1('123', 123)
