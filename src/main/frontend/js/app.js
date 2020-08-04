// page load fetch request for all posts
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

            postHashtags.addEventListener('click', () => {
                clear(anchor);
                let hashtagLinkId = hashtag.id;
                selectHashtag(hashtagLinkId);
            })
        })

        postDiv.appendChild(hashtagsAll);
        anchor.appendChild(postDiv);

        let postCategory = document.createElement('div');
        postCategory.innerText = post.postCategory.title;
        postDiv.appendChild(postCategory);
        postCategory.classList.add('category');

        postCategory.addEventListener('click', () => {
            clear(anchor);
            let categoryLinkId = post.postCategory.id;
            selectCategory(categoryLinkId);
        })

        postAuthor.addEventListener('click', () => {
            clear(anchor);
            let authorLinkId = post.author.id;
            selectAuthor(authorLinkId)
        })
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
    while (chosenElement.firstChild) {
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

        hashtagContent.addEventListener('click', () => {
            let hashtagId = hashtag.id;
            selectHashtag(hashtagId);
        })
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

        categoryContent.addEventListener('click', () => {
            let categoryId = category.id;
            selectCategory(categoryId);
        })
    })
}

const allCategoriesButton = document.querySelector('.allCategories');

allCategoriesButton.addEventListener('click', () => {
    clear(anchor);
    fetch('http://localhost:8080/categories')
        .then(response => response.json())
        .then(response => displayAllCategories(response));
})

const displayAllAuthors = (jsonResponse) => {
    const authorsHeader = document.createElement('div');
    authorsHeader.innerText = "All Authors";
    authorsHeader.classList.add('authorsHeader');
    anchor.appendChild(authorsHeader);

    jsonResponse.forEach(author => {
        const authorsAnchor = document.createElement('div');
        authorsAnchor.classList.add('authorsAnchor');

        let authorContent = document.createElement('div');
        authorContent.innerText = author.name;
        authorsAnchor.appendChild(authorContent);
        authorContent.classList.add('authorContent');
        anchor.appendChild(authorsAnchor);

        authorContent.addEventListener('click', () => {
            let authorId = author.id;
            selectAuthor(authorId);
        })
    })
}

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