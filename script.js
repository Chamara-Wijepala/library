let myLibrary = [];
const library = document.getElementById('library');

class Book {
    constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    };
};

function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.className = 'bookCard';
        library.appendChild(book);
        addBookProperties(book);
    };

    addListener();
};

function updateLibrary() {
    library.textContent = '';

    displayLibrary();
};

function addBookProperties(book) {
    let {title, author, pages, read} = myLibrary[i];

    let titleElement = book.appendChild(document.createElement('h1'));
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
    readElement.dataset.ID = myLibrary.indexOf(myLibrary[i]);
    let removeElement = book.appendChild(document.createElement('button'));
    removeElement.className = 'remove';
    removeElement.innerText = 'Remove';
    removeElement.dataset.ID = myLibrary.indexOf(myLibrary[i]);
};

function processForm() {
    const formData = document.getElementById('form');
    let title = formData[1].value;
    let author = formData[2].value;
    let pages = formData[3].value;
    let read;

    if (document.getElementById('yes').checked) {
        read = 'Read'
    }
    else if (document.getElementById('no').checked) {
        read = 'Not read'
    };

    myLibrary.push({title, author, pages, read});

    updateLibrary();
    closeForm();
};

function toggleRead(buttonId) {
    if (myLibrary[buttonId].read === 'Read') {
        myLibrary[buttonId].read = 'Not Read';
    }
    else if (myLibrary[buttonId].read === 'Not Read') {
        myLibrary[buttonId].read = 'Read';
    };

    updateLibrary();
};

function removeBook(buttonId) {
    myLibrary.splice(buttonId, 1);

    updateLibrary();
};

function libraryEventHandler(e) {
    let buttonClass = e.target.className;
    let buttonId = e.target.dataset.ID;

    if (buttonClass === 'read') {
        toggleRead(buttonId);
    }
    else if (buttonClass === 'remove') {
        removeBook(buttonId);
    };
};

function addListener() {
    library.addEventListener('click', libraryEventHandler);
};

function openForm() {
    document.getElementById('form').style.display = 'block';
};

function closeForm() {
    document.getElementById('form').style.display = 'none';
};

displayLibrary()