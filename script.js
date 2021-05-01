let myLibrary = [];
const library = document.getElementById('library');

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(object) {
    myLibrary.push(object);
};

function displayLibrary() {
    //for(element in myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.className = 'bookCard';
        library.appendChild(book);
        addBookProperties(book);
    };
};

function addBookProperties(book) {// try to simplify this using object destructuring
    let title = book.appendChild(document.createElement('h3'));
    title.className = 'title';
    title.innerText = myLibrary[i.title]; //access object's title property
    let author = book.appendChild(document.createElement('h3'));
    author.className = 'author';    
    let pages = book.appendChild(document.createElement('h3'));
    pages.className = 'pages';
    let read = book.appendChild(document.createElement('button'));
    read.className = 'read';
};



//temporary objects
let book1 = new Book('book1', 'chamara', 100, true)
let book2 = new Book('book2', 'chamara', 150, true)
let book3 = new Book('book3', 'chamara', 200, false)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
displayLibrary()