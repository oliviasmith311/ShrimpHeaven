import{
    anchor, selectAuthor
} from "../js/app.js"

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

export{
    displayAllAuthors
}