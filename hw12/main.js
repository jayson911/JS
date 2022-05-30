// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => {
//         return value.json()
//     })
//     .then(posts => {
//         let div = document.createElement('div');
//         div.classList.add('showPosts');
//         for (const divElement of posts) {
//             let divka = document.createElement('div');
//             divka.classList.add('posts');
//             divka.innerHTML = ` id: ${divElement.id} title: ${divElement.title} body: ${divElement.body}`;
//             div.appendChild(divka);
//             document.body.appendChild(div);
//         }
//     })

//
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => {
        return value.json()
    })
    .then(comments =>{
        let div = document.createElement('div');
        div.classList.add('showComments');
        for (const comment of comments) {
            let divka = document.createElement('div');
            divka.classList.add('comment');
            divka.innerHTML = `id: ${comment.id} name: ${comment.name} email: ${comment.email} body: ${comment.body}`;
            div.appendChild(divka);
            document.body.appendChild(div);
        }
    })