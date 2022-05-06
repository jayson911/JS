// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str1 = 'lorem ipsum';
// console.log(str1.length);
// let str2 = 'javascript is cool';
// console.log(str2.length);
// console.log(str1.length, str.length, str2.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// let str1 = 'LOREM IPSUM';
// let str2 = 'JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let replaceAll = str.replaceAll('   ', '');
//     str.replace(' ', '');
// console.log(replaceAll);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToArr = (string) => {
//     return string.split(' ');
// }
// console.log(stringToArr(str));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let mass = [10,8,-7,55,987,-1011,0,1050,0];
// let numsToString = (string) => {
//     return string.join(',');
// }
// console.log(numsToString(mass));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// let sortNums = (direction) =>{
//     return direction.sort((n1, n2) => n2 - n1);
// }
// console.log(sortNums(nums));

// let sortNums = (direction) =>{
//     return direction.sort((n1, n2) => n1 - n2);
// }
// console.log(sortNums(nums));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let sort = coursesAndDurationArray.sort((s1, s2) => s2.monthDuration - s1.monthDuration);
// console.log(sort);
// let filter = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
// console.log(filter);
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: null, value: 'joker', color: 'black'},
    {cardSuit: null, value: 'joker', color: 'red'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'}
];
// let filter = cards.find(value => value.value === 'ace' && value.cardSuit === 'spade');
// console.log(filter);
// let filter = cards.filter(value => value.value === 6);
// console.log(filter);
// let filter = cards.filter(value => value.color === 'red');
// console.log(filter);
// let filter = cards.filter(value => value.cardSuit === 'diamond');
// console.log(filter);
let numsTostring = (str) =>{
    let cardsValue = cards.;
    return cardsValue.join(',');
}
console.log(numsTostring(cards));