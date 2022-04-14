// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7
let num7 = 16;
let positive = true;
let negative = false;
let hello_world = 'hello owu'
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(hello, owu, com, ua, num1, num2, num3, num4, num5, num6, num7, positive, negative);
alert(hello_world);
document.write(hello,' ', owu, ' ', com, ' ', ua, ' ', num1, ' ', num2, ' ', num3, ' ', num4, ' ', num5, ' ', num6, ' ', num7, ' ', positive, ' ', negative);
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book ={
    name: 'The Witcher',
    pages: 356,
    genre: 'fantastic'
};
console.log(book);
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
let book1 ={
    name: 'learning java script',
    pages: 1500,
    genre: 'textbook',
    the_authors: [
        {name: 'Eric', surname: 'Freeman'},
        {name: 'Elisabeth', surname: 'Robson'}
    ]
};
console.log(book1);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName= 'Illya';
let middleName= 'Andriyovich';
let lastName= 'Lobzin';
let person = {
    name: firstName,
    middle: middleName,
    surname: lastName
};
console.log(person.name, person.middle, person.surname);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name1= prompt('enter name');
console.log(person[name1]);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books= [
    {name: 'witcher', pages: '450', genre: 'fantastic', author: 'Andrzej Sapkowski'},
    {name: 'earning java script', pages: '1500', genre: 'textbook', author: 'Eric Freeman'},
    {name: 'harry potter', pages: '500', genre: 'fairytale', author: 'Joanne Rowling'}
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

