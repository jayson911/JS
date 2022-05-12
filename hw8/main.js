// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// const elemById = document.getElementById('content');
// console.log(elemById);
// -- отримує текст з блоку з id "rules"
// const elemById = document.getElementById('rules');
// console.log(elemById.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
// const newTxt = document.getElementById('content');
// newTxt.innerText = 'some new Txt';
// -- замініть текст параграфа з id 'rules' на будь-який інший
// const newTxt = document.getElementById('rules');
// newTxt.innerText = 'some new Txt';
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// const newBg1 = document.getElementById('content');
// newBg1.style.backgroundColor = 'red';
// newBg1.style.color = 'blue';
// const  newBg2 = document.getElementById('rules');
// newBg2.style.backgroundColor = 'red';
// newBg2.style.color = 'blue';
// const newBg3 = document.getElementsByTagName('li');
//
// for (let i = 0; i < newBg3.length; i++) {
//     const newBg3Element = newBg3[i];
//     newBg3Element.style.backgroundColor = 'red';
//     newBg3Element.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// const txtClass = document.getElementById('rules');
// console.log(txtClass.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const newColorFc = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < newColorFc.length; i++) {
//     const newColorFcElement = newColorFc[i];
//     newColorFcElement.style.color ='red';
// }
//
//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
const nameGroup = document.getElementById('main_header');
nameGroup.innerText = 'March 2022';
// b) робить шириниу елементу ul 400px
const newWidth = document.getElementsByTagName('ul');
for (let i = 0; i < newWidth.length; i++) {
    const newWidthElement = newWidth[i];
    newWidthElement.style.width = '400px';
}
console.log(newWidth);
// c) робить шириниу всіх елементів з класом linkList шириною 50%
const newWidthLinks = document.getElementsByClassName('linkList');
for (let i = 0; i < newWidthLinks.length; i++) {
    const newWidthLink = newWidthLinks[i];
    newWidthLink.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
const consLiList = document.getElementsByClassName('listElement2');
for (const consLiListElement of consLiList) {
    console.log(consLiListElement.innerText);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
const newColorLi = document.getElementsByTagName('li');
for (let i = 0; i < newColorLi.length; i++) {
    const newColorLiElement = newColorLi[i];
    newColorLiElement.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
const newClassAnchor = document.getElementsByTagName('a');
for (const newClassAnchorElement of newClassAnchor) {
    newClassAnchorElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let link = document.getElementsByTagName('a');
for (const linkElement of link) {
    if (linkElement.innerText === 'link3'){
        linkElement.style.fontSize = '40px';
    }
}
console.log(link);
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let newClassA = document.getElementsByTagName('a');
for (const newClassAElement of newClassA) {
    newClassAElement.classList.add(`element_${newClassAElement.innerText}`)
}
console.log(newClassA);
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let newElemPromt = document.getElementsByClassName('sub-header');
// for (const newElemPromtElement of newElemPromt) {
//     let prom = prompt('what color do u want?');
//     if (prom === 'red'){
//         newElemPromtElement.style.backgroundColor = 'red';
//     }
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let newBgProm = document.getElementsByClassName('sub-header');
// for (const newBgPromElement of newBgProm) {
//     let prom = prompt('what color do u want?');
//     if(prom === 'red' && newBgPromElement.innerText === 'content 2 segment'){
//         newBgPromElement.style.backgroundColor = 'red';
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
let newTxtProm = document.getElementsByClassName('content_1')
for (const newTxtPromElement of newTxtProm) {
    let prom = prompt('wright your message');
    newTxtPromElement.innerText = `${prom}`;
}
console.log(newTxtProm);
// l) отримати елементи p та змінити їм padding на 20px
let newPaddingP = document.getElementsByTagName('p');
for (const newPaddingPElement of newPaddingP) {
    newPaddingPElement.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let newNameGroup = document.getElementsByClassName('text2');
for (const newNameGroupElement of newNameGroup) {
    newNameGroupElement.innerText = 'mar-2022';
}