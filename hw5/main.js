
// Все стірлочними!!!!!!!!!
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let average = (array) => {
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     } return i / array.length;
// }
// console.log(average([10, 2]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minNum = (array) => {
//     let i = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < i){
//             i = arrayElement;
//         }
//     }return i;
// }
// console.log(minNum([56, 2, 5, 67]));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomNums = (array) =>{
//     let random = [];
//     for (let i = 0; i < 100; i++) {
//         random[i] = Math.round(Math.random()*100);
//     }return random;
// }
// console.log(randomNums(100));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomNums = (array, limit) =>{
//     let random = [];
//     for (let i = 0; i < array; i++) {
//         random[i] = Math.round(Math.random()*limit);
//     }return random;
// }
// console.log(randomNums(10, 10));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse = (arr) =>{
//     let nums = [];
//     for (let i = 0; i < arr.length; i++) {
//         nums[i] = arr[(arr.length - 1) - i];
//
//     }return nums
// }
// console.log(reverse([1, 2, 3]));
//
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangle = (a, b) => {
//     return a * b;
// }
// console.log(rectangle(5, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let cylinderA = (h, r) =>{
//     return 6.28 * r * (r + h);
// }
// console.log(cylinderA(2,10))
// - створити функцію яка приймає масив та виводить кожен його елемент

// let iterator = (users) =>{
//     let usersNames = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}];
//     for (const usersName of usersNames) {
//     }return usersNames
// }
// console.log(iterator());
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let sayHello = (pTxt)=>{
//     return document.write(`<p>Hello ${pTxt}</p>`);
// }
// sayHello('octen');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let someTxtUlLi = (text) =>{
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
// }
// document.write(`<ul> f`);
// someTxtUlLi('hello');
// document.write(`</ul>`);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let someArr = (mass) =>{
//     for (let i = 0; i < mass.length; i++) {
//         const mass1 = mass[i];
//     }return mass;
// }
// console.log(someArr([123, 'hello', true]));
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let iterator = (users) => {
//     for (const user of users) {
//         document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
//     }
// }
// document.write(iterator([{id: 1, name: 'Vasya', age: 25}, {id: 2, name: 'Lena', age: 22}]));

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 5, -5, 25];
// function minNum(array){
//     let min = array[0];
//     for (const item of array) {
//         if (item < min){
//             min = item;
//         }
//     }return min;
// }
// console.log(minNum(arr));
// let minNum = (arr) =>{
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min){
//             min = minElement;
//         }
//     }return min;
// }
// console.log(minNum([10,5,6]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 3];
// function foo(array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }return sum;
// }
// let number = foo(arr);
// console.log(number);
// let foo = (arr) =>{
//     let sum = 0;
//     for (const fooElement of arr) {
//         sum += fooElement;
//     }return sum;
// }
// console.log(foo([1, 2, 10]));
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let reverse = (arr) =>{
//     let nums = [];
//     for (let i = 0; i < arr.length; i++) {
//         nums[i] = arr[(arr.length - 1) - i];
//
//     }return nums
// }
// console.log(reverse(['hello', 'octen']));
//