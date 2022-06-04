// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => {
        return value.json()
    })
    .then(user =>{
        let div = document.createElement('div');
        div.classList.add('ShowUser');
        for (const divElement of user) {
            for (const divElement of user) {
                let btn = document.createElement('button');
                btn.classList.add('click');
                btn.innerText = "click";
                btn.onclick = function (){
                    window.location.href='user-details.html';
                }
                let divUsers = document.createElement('div');
                divUsers.classList.add('users');
                divUsers.innerHTML = `id: ${divElement.id} name: ${divElement.name}, username: ${divElement.username}, email: ${divElement.email}, address: ${divElement.address.street}, suite ${divElement.address.suite}, city ${divElement.address.city}, zipcode ${divElement.address.zipcode}`
                div.appendChild(divUsers);
                div.appendChild(btn);
                document.body.appendChild(div);

            }
        }
    })