// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let target = document.getElementById('text');
target.onclick = function (ev){
    target.style.display = 'none';
}
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
    function age1(form){
        if (form.age.value >= '18')
            alert("норм проходи")
        else if(form.age.value < '18')
            alert('иди отсюда!');
    }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let f1 = document.forms.f1;
// f1.onsubmit = function (e){
//     e.preventDefault();
//     let userNameInput = f1.userName;
//     let userEmailInput = f1.email;
//     let userName = userNameInput.value;
//     let userEmail = userEmailInput.value;
//     let user = {
//         username: userName,
//         email: userEmail
//     }
//     console.log(user);
// }
let button = document.getElementById('goGo');
    button.addEventListener('click', function (){
        console.log(f1.userName.value);
        console.log(f1.email.value);
        console.log(f2.nickName.value);
        console.log(f2.age.value);
    })

//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)