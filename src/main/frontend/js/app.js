fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => displayAllPosts(response));

const anchor = document.querySelector('.anchor');

const displayAllPosts = (jsonResponse) => {
    anchor.classList.add('anchor');
    const postHeader = document.createElement('div');
    postHeader.innerText = "All Posts";
    postHeader.classList.add('postHeader');
    anchor.appendChild(postHeader);

    jsonResponse.forEach(post => {

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let postTitle = document.createElement('div');
        postTitle.innerText = post.title;
        postDiv.appendChild(postTitle);
        postTitle.classList.add('title');

        let postAuthor = document.createElement('div');
        postAuthor.innerText = "Author: " + post.author.name;
        postDiv.appendChild(postAuthor);
        postAuthor.classList.add('author');

        let postBody = document.createElement('div');
        postBody.innerText = post.postBody;
        postDiv.appendChild(postBody);
        postBody.classList.add('body');

        const hashtagsAll = document.createElement('div');
        hashtagsAll.classList.add('hashtagsAll');

        let hashtags = post.hashtags;
        hashtags.forEach(hashtag => {
            let postHashtags = document.createElement('div');
            postHashtags.innerText = "#" + hashtag.content;
            hashtagsAll.appendChild(postHashtags);
            postHashtags.classList.add('hashtags');
        })
        postDiv.appendChild(hashtagsAll);
        anchor.appendChild(postDiv);
    })
}

const allPostsButton = document.querySelector('.allPosts');
allPostsButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => displayAllPosts(response));
})

const clear = (chosenElement) => {
    while(chosenElement.firstChild){
        chosenElement.removeChild(chosenElement.firstChild);
    }   
}


const displayAllHashtags = (jsonResponse) => {
    const hashtagHeader = document.createElement('div');
    hashtagHeader.innerText = "All Hashtags";
    hashtagHeader.classList.add('hashtagHeader');
    anchor.appendChild(hashtagHeader);

    jsonResponse.forEach(hashtag => {
        const hashtagsAnchor = document.createElement('div');
        hashtagsAnchor.classList.add('hashtagsAnchor');

        let hashtagContent = document.createElement('div');
        hashtagContent.innerText = "#" + hashtag.content;
        hashtagsAnchor.appendChild(hashtagContent);
        hashtagContent.classList.add('hashtagContent');
        anchor.appendChild(hashtagsAnchor);
    })
}

const allHashtagsButton = document.querySelector('.allHashtags');

allHashtagsButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/hashtags')
        .then(response => response.json())
        .then(response => displayAllHashtags(response));
})

const displayAllCategories = (jsonResponse) => {
    const categoriesHeader = document.createElement('div');
    categoriesHeader.innerText = "All Categories";
    categoriesHeader.classList.add('categoriesHeader');
    anchor.appendChild(categoriesHeader);

    jsonResponse.forEach(category => {
        const categoriesAnchor = document.createElement('div');
        categoriesAnchor.classList.add('categoriesAnchor');

        let categoryContent = document.createElement('div');
        categoryContent.innerText = category.title;
        categoriesAnchor.appendChild(categoryContent);
        categoryContent.classList.add('categoryContent');
        anchor.appendChild(categoriesAnchor);
    })
}

const allCategoriesButton = document.querySelector('.allCategories');

allCategoriesButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/categories')
    .then(response => response.json())
    .then(response => displayAllCategories(response));
})