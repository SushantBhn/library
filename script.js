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

function displayBooks() {
    for(index in myLibrary) {
        let div = document.createElement("div");
        div.style.whiteSpace = "pre-line"
        document.body.appendChild(div);
        for(prop in myLibrary[index]) {
            console.log(div.textContent);
            div.textContent += `${prop.toUpperCase()} = ${myLibrary[index][prop]}\n`;
            console.log(myLibrary[index][prop]);
        }
    }
}

displayBooks();