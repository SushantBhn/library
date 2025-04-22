const myLibrary = [];//Array to store the books in the library

function Book(id, title, author, pages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let id = crypto.randomUUID();
    let book = new Book(id, title, author, pages, readStatus);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkein", 295, "Not read");
addBookToLibrary("The Full Facts Book of Cold Reading", "Ian Rowland", 241, "Not read");
addBookToLibrary("The Alchemist", "Paolo Coelho", 208, "Not read");
addBookToLibrary("The Three Musketeers", "Alexandre Dumas", 398, "Not read");

let container = document.querySelector(".container");

function displayBooks() {
    container.textContent = "";
    for(index in myLibrary) {
        let div = document.createElement("div");
        div.style.whiteSpace = "pre-line"
        container.appendChild(div);
        for(prop in myLibrary[index]) {
            div.textContent += `${prop.toUpperCase()} = ${myLibrary[index][prop]}\n`;
        }
    }
}

displayBooks();

//Open the modal dialog
let newBookBtn = document.querySelector("#newbook-btn");
let dialog = document.querySelector("#dialog");

newBookBtn.addEventListener("click", (event) => {
    dialog.showModal();
});

//Create a new Book object
let submitBtn = document.querySelector("dialog button");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
    displayBooks();
    dialog.close();
});