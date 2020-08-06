import{
    anchor
} from "../js/app.js"
import{
    displayAllPosts
} from "../js/displayAllPosts.js"

const createNewPost = () => {
    const newPost = document.createElement('div');
    newPost.classList.add('newPost');

    const newPostTitle = document.createElement('input');
    newPostTitle.setAttribute('type', 'text');
    newPostTitle.setAttribute('placeholder', 'Title');
    newPostTitle.classList.add('newTitle')
    newPost.appendChild(newPostTitle);
    const newPostAuthor = document.createElement('input');
    newPostAuthor.setAttribute('type', 'text');
    newPostAuthor.setAttribute('placeholder', 'Author');
    newPostAuthor.classList.add('newAuthor')
    newPost.appendChild(newPostAuthor);
    const newPostBody = document.createElement('input');
    newPostBody.setAttribute('type', 'text');
    newPostBody.setAttribute('placeholder', 'Body');
    newPostBody.classList.add('newBody')
    newPost.appendChild(newPostBody);
    const newPostCategory = document.createElement('input');
    newPostCategory.setAttribute('type', 'text');
    newPostCategory.setAttribute('placeholder', 'Category');
    newPostCategory.classList.add('newCategory')
    newPost.appendChild(newPostCategory);
    const newPostButton = document.createElement('button');
    newPostButton.innerText = "Post";
    newPost.appendChild(newPostButton);

    anchor.appendChild(newPost);



    newPostButton.addEventListener('click', () => {
        let newPostJson = {
            "title": newPostTitle.value,
            "author": newPostAuthor.value,
            "postBody": newPostBody.value,
            "postCategory": newPostCategory.value
        }
        fetch(`http://localhost:8080/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPostJson)
        })
            .then(response => response.json())
            .then(response => displayAllPosts(response))
    })

}

export{
    createNewPost
}