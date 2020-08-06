import{
    clear
} from "../js/clear.js"
import{
    anchor, selectHashtag, selectCategory, selectAuthor
} from "../js/app.js"


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

                fetch(`http://localhost:8080/${post.id}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: addHashtagInput.value
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

export{
    displayAllPosts
}