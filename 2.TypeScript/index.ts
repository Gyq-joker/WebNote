// ===== 1. typepscript的基本使用
// tsc --outDir 指定输出目录
// ex：tsc --outDir /static/ index.ts
const str1: string = 'ts 声明的常量';

// tsc --target 指定编译的代码版本目标，默认编译成 ES3 
// tsc --target esx
// tsc --outDir ./static/ --target es6 index.ts

// --watch 监听模式，可以实时监听 ts 文件是否有更改，并转换成 js 代码
const obj = {
  name: 'test',
  key: 'value',
  value: ''
}

// tsc -p or --project 可以指定需要加载配置的tsconfig文件



// ===== 2. typescript的 接口
// 注意：接口是一种 类型，不能作为 值 使用。
interface Labor {
  name: string;
  num: number;
  point: number;
  age?: string; // 可选属性
}

let person:Labor = {
  name: '鬼',
  num: 100,
  point: 200,
}
// person.age = '10';

// 索引
interface Point1 {
  [key1: string]: string;
  [key2: number]: string;
}
let pointTest:Point1 = {
  "name": "name",
  123: '123'
}
// 注意：当同时存在 数字类型索引 和 字符串类型索引
//       数字类型索引必须是 字符串类型的值类型 或者 子类型
interface Point2 {
  [key1: string]: Object;
  [key2: number]: number; // 这个数字类型索引必须和上面的字符串类型索引相同或者是子类型
}



// ===== 3. 函数的标注
// val是函数所接受的参数，并定义了参数的类型。：后表示的是函数的返回值类型
// 即：该函数接收一个字符串的参数，返回的也是一个字符串
function testFn(val: string): string {
  return "";
}

// 函数表达式的写法，和上面的声明是相同的
let testFn1:(val: string) => string = function(a) {
  return '';
}

// 函数的可选参数 和 函数默认值
// num就是一个可选参数
// type 就是函数的默认值：
//      1. 函数的默认值也是可选参数
//      2. 设置了默认值的参数，可自动推导出参数类型，不需要标注
//      3. type默认参数，可以标注特定内容的参数内容。不符合会报错，如type只可以传up or down
function testFn2(val: string, num?: number, type: 'up' | 'down' = 'up') {
  
}
testFn2('123', 123);



// ===== 4. 类
class Person {
  // id: number;
  // name: string;

  // 如果在给构造函数参数，设置了访问修饰符(如这里的public)，那么ts会做如下两件事情
  // - 给当前类添加同名的成员属性
  // - 在类实例化的时候，会把传入的参数值赋值给对应的成员属性
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
  eating(food: string) {
    console.log(`${this.name}吃了${food}，真好吃`)
  }
}

let newPerson = new Person(1, '大佬');
newPerson.eating('烤肉');




// ===== 5. 泛型
// 泛型：是允许同一个函数接受不同类型参数的一种模板。

// 泛型函数 ex:
function identity<T>(val: T): T {
  return val;
}
identity<number>(1); // 等同于 identity(1)

// 返回单个类型
// function identity1<T, U> (val: T, type: U): T {
//   console.log(type)
//   return val;
// }
// 返回多个类型
function identity1<T, U> (val: T, type: U): [T, U] {
  return [val, type];
}
identity1<string, number>('123', 123); // 等同于 identity1('123', 123)