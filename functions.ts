// 函数声明
// function add(x: number, y: number, z: number = 10): number {
//   if (typeof z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }

// let result = add(2, 3, 5)

// 函数表达式
const add = function(x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
// : 后面是给函数声明类型
const add2: (x: number, y: number, z?: number) => number = add

// 箭头函数
const add3 = (x: number, y: string): string => {
  return x + y
}

add3(3, 'c');
