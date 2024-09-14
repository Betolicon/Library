const myLibrary = []; 
const newBook = document.querySelector(".add")
const closeButton = document.getElementById('Submit')

function Book(title, author, numberPages, read){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages
    this.read = read === 'yes' ? 'Read' : 'Not read yet'
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.numberPages} pages, ${this.read}`
    }
}

function addBookToLibrary(title, author, numberPages, read){
    let oldBook = myLibrary.map( book => book.title).includes(title)
    if(!oldBook){
    const book = new Book(title, author, numberPages, read)
    myLibrary.push(book)
    createNewBook(book);
}
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
    card.setAttribute('data-index', book.title)
    const title = document.createElement('h4')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('button')
    const Remove = document.createElement('button')
    title.textContent = `${book.title}`
    author.textContent = `Author: ${book.author}`
    pages.textContent = `Pages: ${book.numberPages}`
    read.innerHTML = `${book.read}`
    read.className = book.read == 'Read'? 'correct':'incorrect'
    Remove.innerHTML = 'Remove'
    Remove.className = 'remove'
    read.addEventListener('click', changeStatus)
    Remove.addEventListener('click', () => removeBook())
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
    if(title.length != 0 && author.length != 0 && read.length != 0 ){
    addBookToLibrary(title, author, numberPages, read);
    e.preventDefault()
    }
}

const removeBook = () =>{
    const cardAux = event.target.closest('.card')
    let index = cardAux.dataset.index;
    BookIndex = myLibrary.findIndex(book => book.title === index)
    if (BookIndex !== -1){
        myLibrary.splice(BookIndex, 1)
    }   
    const cardToRemove = document.querySelector(`.card[data-index='${index}']`);
    if (cardToRemove) {
        cardToRemove.remove(); 
    }
}

const changeStatus = () =>{
    const cardAux = event.target.closest('.card')
    const index = cardAux.dataset.index;
    for(let i=0; i<myLibrary.length; i++){
        if(myLibrary[i].title == index){
            myLibrary[i].read = myLibrary[i].read === 'Read'? 'Not read yet':'Read'
            const name = myLibrary[i].read === 'Read'? 'correct':'incorrect'
            const nameInv = name === 'correct'? 'incorrect':'correct'
            const cardToChange = document.querySelector(`.card[data-index='${index}']`);
            const button = cardToChange.querySelector(`.${nameInv}`)
            button.innerHTML = myLibrary[i].read
            button.className = name
        }
    }
}

newBook.addEventListener('click', showForm)
closeButton.addEventListener('click', SubmitForm)