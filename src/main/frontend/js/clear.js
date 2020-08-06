const clear = (chosenElement) => {
    while (chosenElement.firstChild) {
        chosenElement.removeChild(chosenElement.firstChild);
    }
}

export{
    clear
}