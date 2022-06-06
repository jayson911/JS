// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


const returnPost = JSON.parse(localStorage.getItem('key_post'))
//console.log(returnPost);

const container = document.createElement('div');
container.classList.add('container');
for (const containerElement of returnPost) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
    <h4>UserId: ${containerElement.p.userId}</h4>
    <h4>ID: ${containerElement.p.id}</h4>
    <h4>Title: ${containerElement.p.title}</h4>
    <h4>Body: ${containerElement.p.body}</h4>
    `;

    let btn_comment = document.createElement('button')
    btn_comment.classList.add('btn_comment')
    btn_comment.innerText = 'Комментарии';

    btn_comment.onclick = () => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${containerElement.p.id}/comments`)
            .then(res => res.json())
            .then(comment => {
                const box = document.createElement('div');
                box.classList.add('box')
                const btn_return = document.createElement('button');
                btn_return.classList.add('btn_return');
                btn_return.innerText = 'НА ГЛАВНУЮ'

                btn_return.onclick = () => {
                    location.href = 'index.html'
                    localStorage.clear()
                }

                for (const commentElement of comment) {
                    const div_comment = document.createElement('div');
                    div_comment.classList.add('div_comment');
                    div_comment.innerHTML = `
                    <h4>UserId: ${commentElement.postId}</h4> 
                    <h4>ID: ${commentElement.id}</h4>
                    <h4>Title: ${commentElement.name}</h4>
                    <h4>Body: ${commentElement.email}</h4>
                    <h4>Body: ${commentElement.body}</h4>
                    `;

                    box.appendChild(div_comment)
                    post.appendChild(btn_return)
                    document.body.appendChild(box)
                }
            })
    }

    post.appendChild(btn_comment)
    container.appendChild(post)
    document.body.appendChild(container)


}

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
