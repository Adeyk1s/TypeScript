const city = "London";
const country = "Great Britain";
const region = 123;
let isSameTypes;
// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes

if(typeof city == typeof country){
    isSameTypes = true;
}
if(typeof String(region) == typeof city){
    isSameTypes = true;
}