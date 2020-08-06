// page load fetch request for all posts
fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(response => displayAllPosts(response));

const anchor = document.querySelector('.anchor');

const displayAllPosts = (jsonResponse) => {
    clear(anchor);
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

        const addHashtagButton = document.createElement('button');
        addHashtagButton.innerText = "Add a hashtag";
        addHashtagButton.classList.add('addHashtagButton');
        hashtagsAll.appendChild(addHashtagButton);

        addHashtagButton.addEventListener('click', () => {
            addHashtagButton.innerText = "Submit hashtag";

            const addHashtagInput = document.createElement('input');
            addHashtagInput.setAttribute('type', 'text');
            addHashtagInput.setAttribute('placeholder', 'Hashtag');
            hashtagsAll.appendChild(addHashtagInput);

            addHashtagButton.addEventListener('click', () => {

                //adding hashtag in quotes??
                
                let hashtagJson = addHashtagInput.value;

                fetch(`http://localhost:8080/${post.id}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(hashtagJson)
                })
                    .then(response => response.json())
                    .then(response => displayAllPosts(response))
            })
        })

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

    const categoriesAll = document.createElement('div');
    categoriesAll.classList.add('categoriesAll');

    jsonResponse.forEach(category => {
        const categoriesAnchor = document.createElement('div');
        categoriesAnchor.classList.add('categoriesAnchor');

        let categoryContent = document.createElement('div');
        categoryContent.innerText = category.title;
        categoriesAnchor.appendChild(categoryContent);
        categoryContent.classList.add('categoryContent');
        categoriesAll.appendChild(categoriesAnchor);

        categoryContent.addEventListener('click', () => {
            let categoryId = category.id;
            selectCategory(categoryId);
        })
    })

    anchor.appendChild(categoriesAll);
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

    const authorsAll = document.createElement('div');
    authorsAll.classList.add('authorsAll');


    jsonResponse.forEach(author => {
        const authorsAnchor = document.createElement('div');
        authorsAnchor.classList.add('authorsAnchor');

        let authorContent = document.createElement('div');
        authorContent.innerText = author.name;
        authorsAnchor.appendChild(authorContent);
        authorContent.classList.add('authorContent');
        authorsAll.appendChild(authorsAnchor);

        authorContent.addEventListener('click', () => {
            let authorId = author.id;
            selectAuthor(authorId);
        })
    })

    anchor.appendChild(authorsAll);
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

const newPostButton = document.querySelector('.newPost');

newPostButton.addEventListener('click', () => {
    clear(anchor);
    createNewPost();
})

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