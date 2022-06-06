// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users


/*let arr = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    }).then(function(user) {
    arr.push(user);
})
console.log(arr)*/

// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.

/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let dataUser = document.createElement('div');
        dataUser.classList.add('dataUser');
        console.log(users)
        for (const user1 of users) {
            let user_id = document.createElement('div');
            user_id.classList.add('user_id');
            user_id.innerHTML = `
            <h4>${user1.id}</h4>
            <h2>${user1.name}</h2>
            `;
            dataUser.appendChild(user_id);
            document.body.appendChild(dataUser)
        }
    })*/




// 3 Добавить каждому блоку кнопку/ссылку, при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let dataUser = document.createElement('div');
        dataUser.classList.add('dataUser');
        for (const user1 of users) {
            const btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'Подробнее';
            const user_id = document.createElement('div');
            user_id.classList.add('user_id');
            user_id.innerHTML = `
            <h4>${user1.id}</h4>
            <h2>${user1.name}</h2>   
            `;

            const keyUser = 'key';

            const saveInUser = (e) => {
                let userArray = JSON.parse(localStorage.getItem(keyUser)) || [];
                userArray.push({e})
                localStorage.setItem(keyUser, JSON.stringify(userArray))

            };

            btn.onclick = () => {
                saveInUser(user1)
                location.href = 'user-details.html';
            }

            dataUser.append(btn, user_id);
            user_id.appendChild(btn);
            document.body.appendChild(dataUser);
        }
    })









// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


