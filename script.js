const myLibrary = []; 
const newBook = document.querySelector(".add")
const closeButton = document.getElementById('Submit')

function Book(title, author, numberPages, read){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages
    this.read = read === 'yes' ? 'read' : 'not read yet'
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.numberPages} pages, ${this.read}`
    }
}

function addBookToLibrary(title, author, numberPages, read){
    const book = new Book(title, author, numberPages, read)
    
    myLibrary.push(book)
    createNewBook(book);
}

const showForm = () =>{
    let dlg = document.getElementById("form");
    dlg.show();
}

const closeForm = () =>{
    let dlg = document.getElementById("form");
    dlg.close();
}

const createNewBook = (book) =>{
    const library = document.querySelector('.container')
    const card = document.createElement('div')
    card.className = 'card';
    const title = document.createElement('h4')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('p')
    const Remove = document.createElement('button')
    title.textContent = `${book.title}`
    author.textContent = `Author: ${book.author}`
    pages.textContent = `Pages: ${book.numberPages}`
    read.textContent = `Status: ${book.read}`
    Remove.innerHTML = 'Remove'
    Remove.className = 'remove'
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.append(read)
    card.appendChild(Remove)
    library.appendChild(card)
    closeForm()
}

const SubmitForm = (e) =>{
    let title = document.getElementById('title').value
let author = document.getElementById('author').value
let numberPages = document.getElementById('pages').value
let read = document.getElementById('read').value
    if(title.length != 0 && author.length != 0  && numberPages.length <= 0  && read.length != 0 ){
    addBookToLibrary(title, author, numberPages, read);
    e.preventDefault()
    }

}

newBook.addEventListener('click', showForm)
closeButton.addEventListener('click', SubmitForm)