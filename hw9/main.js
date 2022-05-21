// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// const divka = document.createElement('div');
// console.log(divka);
// divka.classList.add('wrap', 'collapse', 'alpha', 'beta');
// divka.innerText = 'hello octen';
// divka.style.backgroundColor = 'aqua';
// divka.style.color = 'red';
// divka.style.fontSize = '40px';
// document.body.appendChild(divka);
// document.body.appendChild(divka.cloneNode(true));
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main','Products','About us','Contacts'];
// for (const key of arr) {
//     let menu = document.getElementsByClassName('menu')[0];
//     let li = document.createElement('li');
//     li.innerText = key;
//     menu.appendChild(li);
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     let divElem = document.createElement('div');
//     divElem.className = 'item';
//     let h1Elem = document.createElement('h1');
//     h1Elem.innerText = `${item.title}`;
//     let pElem = document.createElement('p');
//     pElem.innerText = `${item.monthDuration}`;
//     divElem.append(h1Elem, pElem);
//     document.body.append(divElem);
// }

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
