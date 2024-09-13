const myLibrary = []; 
const newBook = document.querySelector(".add")
const closeButton = document.getElementById('Submit')

function Book(title, author, numberPages, read){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages
    this.read = read ? 'read' : 'not read yet'
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.numberPages} pages, ${this.read}`
    }
}

function addBookToLibrary(){
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let numberPages = document.getElementById('pages').value
    let read = document.getElementById('read').value
    const book = new Book(title, author, numberPages, read)

    myLibrary.push(book)
}

const showForm = () =>{
    let dlg = document.getElementById("form");
    dlg.show();
}

const closeForm = () =>{
    addBookToLibrary();
}

newBook.addEventListener('click', showForm)
closeButton.addEventListener('click', closeForm)