import{
    anchor, selectHashtag
} from "../js/app.js"

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
            selectHashtag(hashtagId, hashtagContent.innerText);
        })
    })
}

export{
    displayAllHashtags
}