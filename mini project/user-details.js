// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
const returnUsers = JSON.parse(localStorage.getItem('key'));
const container = document.createElement('div');
container.classList.add('container');
for (const userData of returnUsers) {
    const createUser = document.createElement('div');
    createUser.classList.add('createUser');
    createUser.innerHTML = `${userData.id}`;
    console.log(userData);

    container.appendChild(createUser);
    document.body.appendChild(container);
}