// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a, b){
//     let result = a * b;
//     return result;
// }
// let answer = rectangle(2, 5);
// console.log(answer);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleR (r){
//     let result = 3.14 * (r * r);
//     return result;
// }
// let answer = circleR(2);
// console.log(answer);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderA(h, r){
//     let result = 6.28 * r * (r + h);
//     return result;
// }
// let answer = cylinderA(2,10);
// console.log(answer);
// - створити функцію яка приймає масив та виводить кожен його елемент
// function iterator(user) {
//     for (let users of user) {
//         console.log(users);
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// iterator(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function sayHello(){
//     for (let i = 0; i < arguments.length; i++) {
//         document.write(`<p>"Hello " ${arguments[i]}</p>`);
//     }
// }
// sayHello("man ");
// sayHello("okten");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function someTxtUlLi(text){
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);

    }
}
document.write(`<ul>Some Ul`);
someTxtUlLi('Hello my friend');
document.write(`</ul>`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13