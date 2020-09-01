import{
    anchor, selectCategory
} from "../js/app.js"

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
            selectCategory(categoryId, categoryContent.innerText);
        })
    })

    anchor.appendChild(categoriesAll);
}

export{
    displayAllCategories
}