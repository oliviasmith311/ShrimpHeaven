import{
    anchor, selectHashtag, selectAuthor, selectCategory
} from "../js/app.js"
import{
    clear
} from "../js/clear.js"

const displaySinglePost = (jsonResponse) => {

    clear(anchor);

    const postDiv = document.createElement('div');
    postDiv.classList.add('singlePost');

    let postTitle = document.createElement('div');
    postTitle.innerText = jsonResponse.title;
    postDiv.appendChild(postTitle);
    postTitle.classList.add('title');

    let postTimestamp = document.createElement('div');
    postTimestamp.innerText = jsonResponse.timestamp;
    postDiv.appendChild(postTimestamp);
    postTimestamp.classList.add('timestamp');

    let postAuthor = document.createElement('div');
    postAuthor.innerText = "Author: " + jsonResponse.author.name;
    postDiv.appendChild(postAuthor);
    postAuthor.classList.add('author');

    let postCategory = document.createElement('div');
    postCategory.innerText = jsonResponse.postCategory.title;
    postDiv.appendChild(postCategory);
    postCategory.classList.add('category');

    let postBody = document.createElement('div');
    postBody.innerText = jsonResponse.postBody;
    postDiv.appendChild(postBody);
    postBody.classList.add('body');

    const hashtagsAll = document.createElement('div');
    hashtagsAll.classList.add('hashtagsAll');

    let hashtags = jsonResponse.hashtags;
    hashtags.forEach(hashtag => {
        let postHashtags = document.createElement('div');
        postHashtags.innerText = "#" + hashtag.content;
        hashtagsAll.appendChild(postHashtags);
        postHashtags.classList.add('hashtags');

        postHashtags.addEventListener('click', () => {
            clear(anchor);
            let hashtagLinkId = hashtag.id;
            selectHashtag(hashtagLinkId, 'All posts with ' + postHashtags.innerText);

        })
    })

    postDiv.appendChild(hashtagsAll);
    anchor.appendChild(postDiv);

    postCategory.addEventListener('click', () => {
        clear(anchor);
        let categoryLinkId = jsonResponse.postCategory.id;
        selectCategory(categoryLinkId, postCategory.innerText);
    })

    postAuthor.addEventListener('click', () => {
        clear(anchor);
        let authorLinkId = jsonResponse.author.id;
        selectAuthor(authorLinkId, 'All posts by ' + postAuthor.innerText);
    })

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

            fetch(`http://localhost:8080/${jsonResponse.id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: addHashtagInput.value
            })
                .then(response => response.json())
                .then(response => displaySinglePost(response))
        })
    })
}

export{
    displaySinglePost
}