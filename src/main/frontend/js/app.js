fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => displayAllPosts(response));

const displayAllPosts = (jsonResponse) => {
    const anchor = document.querySelector('.anchor');
    jsonResponse.forEach(post => {
        let postTitle = document.createElement('div');
        postTitle.innerText = post.title;
        anchor.appendChild(postTitle);
        postTitle.classList.add('title');

        let hashtags = post.hashtags;
        hashtags.forEach(hashtag => {
            let postHashtags = document.createElement('div');
            postHashtags.innerText = hashtag.content;
            anchor.appendChild(postHashtags);
        })
    })
}