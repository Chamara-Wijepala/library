let myLibrary = [];
const library = document.getElementById('library');

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};
//Remove this function later
function addBookToLibrary(object) {
    myLibrary.push(object);
};

function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.className = 'bookCard';
        library.appendChild(book);
        addBookProperties(book);
    };

    addListeners();
};

function updateLibrary() {
    library.textContent = '';

    displayLibrary();
};

function addBookProperties(book) {
    let {title, author, pages, read} = myLibrary[i];

    let titleElement = book.appendChild(document.createElement('h3'));
    titleElement.className = 'title';
    titleElement.innerText = title;
    let authorElement = book.appendChild(document.createElement('h3'));
    authorElement.className = 'author';
    authorElement.innerText = author;    
    let pagesElement = book.appendChild(document.createElement('h3'));
    pagesElement.className = 'pages';
    pagesElement.innerText = pages;
    let readElement = book.appendChild(document.createElement('button'));
    readElement.className = 'read';
    readElement.innerText = read;
    let removeElement = book.appendChild(document.createElement('button'));
    removeElement.className = 'remove';
    removeElement.innerText = 'Remove';
    removeElement.dataset.ID = myLibrary.indexOf(myLibrary[i]);
};

function processForm() {
    const formData = document.getElementById('form');
    let title = formData[0].value;
    let author = formData[1].value;
    let pages = formData[2].value;
    let read;

    if (document.getElementById('yes').checked) {
        read = 'Read'
    }
    else if (document.getElementById('no').checked) {
        read = 'Not read'
    };

    myLibrary.push({title, author, pages, read});
    updateLibrary();
};

function removeBook() {
    let bookToRemove = this.dataset.ID;
    myLibrary.splice(bookToRemove, 1);

    updateLibrary();
};

function addListeners () {
    const removeButtons = Array.from(document.querySelectorAll('.remove'));
    removeButtons.forEach(button => {
        button.addEventListener('click', removeBook);
    });
};

//temporary objects
let book1 = new Book('book1', 'chamara', 100, true)
let book2 = new Book('book2', 'chamara', 150, true)
let book3 = new Book('book3', 'chamara', 200, false)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
displayLibrary()