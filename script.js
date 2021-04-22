let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(object) {
    myLibrary.push(object)
};

function displayLibrary() {
    let library = document.querySelector('#library')

    for (let book of myLibrary) {
        library.appendChild(book);
    };
};

