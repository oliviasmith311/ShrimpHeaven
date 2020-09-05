import{
    clear
} from "../js/clear.js"
import{
    anchor, selectHashtag, selectCategory, selectAuthor, selectPost, allPosts
} from "../js/app.js"
import { displaySinglePost } from "./displaySinglePost.js";

const displayAllPosts = (jsonResponse, headerText) => {
    clear(anchor);
    anchor.classList.add('anchor');
    const postHeader = document.createElement('div');
    postHeader.innerText = headerText;
    postHeader.classList.add('postHeader');
    anchor.appendChild(postHeader);

    jsonResponse.forEach(post => {

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let postTitle = document.createElement('div');
        postTitle.innerText = post.title;
        postDiv.appendChild(postTitle);
        postTitle.classList.add('title');

        let postTimestamp = document.createElement('div');
        postTimestamp.innerText = post.timestamp;
        postDiv.appendChild(postTimestamp);
        postTimestamp.classList.add('timestamp');

        let postAuthor = document.createElement('div');
        postAuthor.innerText = post.author.name;
        postDiv.appendChild(postAuthor);
        postAuthor.classList.add('author');

        let postCategory = document.createElement('div');
        postCategory.innerText = post.postCategory.title;
        postDiv.appendChild(postCategory);
        postCategory.classList.add('category');

        let postBody = document.createElement('div');
        let textBody = post.postBody;
        postDiv.appendChild(postBody);
        let seeMore = document.createElement('button');
        seeMore.classList.add('seeMore');
        seeMore.innerText = "See more";

        if(textBody.length >= 100){
            postBody.innerText = textBody.substring(0, 100) + "...";
            seeMore.addEventListener('click', () => {
                selectPost(post.id);
            });
            postDiv.appendChild(seeMore);
        } else {
            postBody.innerText = textBody;
        }
        

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
                selectHashtag(hashtagLinkId, 'All posts with ' + postHashtags.innerText);
            })
        })

        postDiv.appendChild(hashtagsAll);
        anchor.appendChild(postDiv);

        postCategory.addEventListener('click', () => {
            clear(anchor);
            let categoryLinkId = post.postCategory.id;
            selectCategory(categoryLinkId, postCategory.innerText);
        })

        postAuthor.addEventListener('click', () => {
            clear(anchor);
            let authorLinkId = post.author.id;
            selectAuthor(authorLinkId, 'All posts by ' + postAuthor.innerText);
        })

        postTitle.addEventListener('click', () => {
            clear(anchor);
            let postLinkId = post.id;
            selectPost(postLinkId, postTitle.innerText);
        })
    })
}

export{
    displayAllPosts
}