// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = prompt('enter your number');
//     if(a === 0){
//         document.write('<div>вірно</div>');
//     }else {
//         document.write('<div>невірно</div>');
//     }
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// let time = prompt('enter your time');
//     if (time <= 15){
//         document.write('<div>1 частина години</div>');
//     } else if(time <= 30){
//         document.write('<div>2 частина години</div>');
//     }else if(time <= 45){
//         document.write('<div>3 частина години</div>');
//     }else if(time <= 60){
//         document.write('<div>4 частина години</div>');
//     }
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt('enter day');
//     if(day <= 10){
//         document.write('<div>1 декада місяця</div>');
//     }else if(day <= 20){
//         document.write('<div>2 декада місяця</div>');
//     }else if(day <= 31){
//         document.write('<div>3 декада місяця</div>');
//     }
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let routine = prompt('enter your day');
//     switch (routine){
//         case 'Monday':
//             document.write('<div>Monday</div>');
//             break;
//         case 'Tuesday':
//             document.write('<div>Tuesday</div>');
//             break;
//         case 'Wednesday':
//             document.write('<div>Wednesday</div>');
//             break;
//         case 'Thursday':
//             document.write('<div>Thursday</div>');
//             break;
//         case 'Friday':
//             document.write('<div>Friday</div>');
//             break;
//         case 'Saturday':
//             document.write('<div>Saturday</div>');
//             break;
//         case 'Sunday':
//             document.write('<div>Sunday</div>');
//             break;
//     }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
