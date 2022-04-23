// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// //     for(let i = 0; i < 10; i++){
// //         document.write(`<div>div text</div>`);
// //     }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // for(let i = 0; i < 10; i++){
// //     document.write(`<div>div text ${i}</div>`);
// // }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // let i = 0;
// //     while (i < 10){
// //         document.write(`<h1>h1 text</h1>`);
// //         i++;
// //     }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// // let i = 0;
// // while (i < 10){
// //     document.write(`<h1>h1 text ${i}</h1>`);
// //     i++;
// // }
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
// // let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
// //
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// // document.write(`<ul>`);
// //     for (let i = 0; i < listOfItems.length; i++) {
// //     let listOfItem = listOfItems[i];
// //     document.write(`<li>${listOfItem}</li>`)
// // }
// // document.write(`</ul>`);
//
// // -----------------------------------------------
// //
// //     Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону  Зробити адекватну стилізацію
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// //
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// //
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// // <img src="IMAGE" alt="" class="product-image">
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//     for (let product of products){
//         document.write(
//            `<div class="product-card">
//             <h3 class="product-title">${product.title}, ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image">
//             </div>`)
//     };

// ДОПОЛНИТЕЛЬНОЕ

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let number = [];
// for(let i = 0; i < 50; i+=2){
//     number[i] = i;
// }
// console.log(number);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let number = [];
// for(let i = 1; i < 50; i+=2){
//     number[i] = i;
// }
// console.log(number);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let randomNum = Math.random();
console.log(randomNum);
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
