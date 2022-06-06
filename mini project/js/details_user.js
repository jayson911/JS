// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user
// на кнопку/ссылку которого был совершен клик ранее.

// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


const returnUsers = JSON.parse(localStorage.getItem('key'));
console.log(returnUsers);

let container = document.createElement('div');
container.classList.add('container');
for (const returnUser of returnUsers) {
    let user = document.createElement('div');
    user.classList.add('user');
    user.innerHTML = `
        <h5>ID: ${returnUser.e.id}</h5>
        <h4>Name: ${returnUser.e.name}</h4>
        <h4>User Name: ${returnUser.e.username}</h4>
        <h5>Email: ${returnUser.e.email}</h5>
        <h5>Street: ${returnUser.e.address.street}</h5>
        <h5>Suite: ${returnUser.e.address.suite}</h5>
        <h5>City: ${returnUser.e.address.city}</h5>
        <h5>Zip Code: ${returnUser.e.address.zipcode}</h5>
        <h5>Lat: ${returnUser.e.address.geo.lat}</h5>
        <h5>Lng: ${returnUser.e.address.geo.lng}</h5>
        <h5>Phone: ${returnUser.e.phone}</h5>
        <h5>Web Site: ${returnUser.e.website}</h5>
        <h5>Name: ${returnUser.e.company.name}</h5>
        <h5>Catch Phrase: ${returnUser.e.company.catchPhrase}</h5>
        <h5>Bs: ${returnUser.e.company.bs}</h5>
    `;

    let btn_post = document.createElement('button');
    btn_post.classList.add('btn_post');
    btn_post.innerText = 'post of current user';

    btn_post.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${returnUser.e.id}/posts`)
            .then(res => res.json())
            .then(post => {
                const box_post = document.createElement('div');
                box_post.classList.add('box_post')

                for (const postElement of post) {
                    const btn_title = document.createElement('button');
                    btn_title.classList.add('btn_post');
                    btn_title.innerText = 'Подробнее';

                    const postTitle = document.createElement('div')
                    postTitle.classList.add('postTitle')
                    postTitle.innerHTML = `
                <h4>Title:${postElement.id} - ${postElement.title}</h4>
                `;
                    const keyPost = 'key_post';

                    const savePost = (p) => {
                        let postArray = JSON.parse(localStorage.getItem(keyPost)) || [];
                        postArray.push({p})
                        localStorage.setItem(keyPost, JSON.stringify(postArray))
                    }

                    btn_title.onclick = () => {
                        savePost(postElement)
                        location.href = 'post_details.html';
                    }
                    box_post.append(postTitle, btn_title)
                    postTitle.appendChild(btn_title)
                }

                document.body.appendChild(box_post)
                container.appendChild(box_post)
            })
        console.log(btn_post)
    }

    user.appendChild(btn_post)
    container.appendChild(user);
    document.body.appendChild(container,)

}
