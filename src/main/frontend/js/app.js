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
import{
    displaySinglePost
} from "../js/displaySinglePost.js"

let allPosts = "All Posts";

fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(response => displayAllPosts(response, allPosts));

const anchor = document.querySelector('.anchor');

const allPostsButton = document.querySelector('.allPosts');

allPostsButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => displayAllPosts(response, allPosts));
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

const selectAuthor = (authorId, authorName) => {
    clear(anchor);
    fetch(`http://localhost:8080/authors/${authorId}`)
        .then(response => response.json())
        .then(response => displayAllPosts(response, authorName));
}

const selectCategory = (categoryId, categoryName) => {
    clear(anchor);
    fetch(`http://localhost:8080/categories/${categoryId}`)
        .then(response => response.json())
        .then(response => displayAllPosts(response, categoryName));
}

const selectHashtag = (hashtagId, hashtagName) => {
    clear(anchor);
    fetch(`http://localhost:8080/hashtags/${hashtagId}`)
        .then(response => response.json())
        .then(response => displayAllPosts(response, hashtagName));
}

const selectPost = (postID) => {
    clear(anchor);
    fetch(`http://localhost:8080/${postID}`)
        .then(response => response.json())
        .then(response => displaySinglePost(response));
}

const newPostButton = document.querySelector('.newPostButton');

newPostButton.addEventListener('click', () => {
    clear(anchor);
    createNewPost();
})


export{
    anchor, selectCategory, selectAuthor, selectHashtag, selectPost, allPosts
}