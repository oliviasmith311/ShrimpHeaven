import{
    displayAllPosts
} from "../js/displayAllPosts.js"
import{
    clear
} from "../js/clear.js"
import{
    createNewPost
} from "../js/newPost.js"
import{
    displayAllHashtags
} from "../js/displayAllHashtags.js"
import{
    displayAllCategories
} from "../js/displayAllCategories.js"
import{
    displayAllAuthors
} from "../js/displayAllAuthors.js"

fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(response => displayAllPosts(response));

const anchor = document.querySelector('.anchor');

const allPostsButton = document.querySelector('.allPosts');

allPostsButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => displayAllPosts(response));
})

const allHashtagsButton = document.querySelector('.allHashtags');

allHashtagsButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/hashtags')
        .then(response => response.json())
        .then(response => displayAllHashtags(response));
})

const allCategoriesButton = document.querySelector('.allCategories');

allCategoriesButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/categories')
        .then(response => response.json())
        .then(response => displayAllCategories(response));
})

const allAuthorsButton = document.querySelector('.allAuthors');

allAuthorsButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/authors')
        .then(response => response.json())
        .then(response => displayAllAuthors(response));
})

const selectAuthor = (authorId) => {
    clear(anchor);
    fetch(`http://localhost:8080/authors/${authorId}`)
        .then(response => response.json())
        .then(response => displayAllPosts(response));
}

const selectCategory = (categoryId) => {
    clear(anchor);
    fetch(`http://localhost:8080/categories/${categoryId}`)
        .then(response => response.json())
        .then(response => displayAllPosts(response));
}

const selectHashtag = (hashtagId) => {
    clear(anchor);
    fetch(`http://localhost:8080/hashtags/${hashtagId}`)
        .then(response => response.json())
        .then(response => displayAllPosts(response));
}

const newPostButton = document.querySelector('.newPostButton');

newPostButton.addEventListener('click', () => {
    clear(anchor);
    createNewPost();
})


export{
    anchor, selectCategory, selectAuthor, selectHashtag
}