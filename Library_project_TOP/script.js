const myLibrary = [];

function Book(author, title, noOfPages, readOrNot) {
  this.author = author;
  this.title = title;
  this.noOfPages = noOfPages;
  this.readOrNot = readOrNot;
}

Book.prototype.toggleRead = function(){
    this.readOrNot = !this.readOrNot;
}

function toggleRead(idx){
    myLibrary[idx].toggleRead();
    render();
}

function render(){
    let displayCard = document.querySelector("#bookshelf");
    displayCard.innerHTML = "";
    for(let i=0 ; i<myLibrary.length;i++){
        let bookCard = myLibrary[i];
        let bookCardElement = document.createElement("div");
        bookCardElement.innerHTML = `
         <div id="display-card">
            <div class="card-header">
                <h2 class="author">${bookCard.author}</h2>
                <h4 class="title">${bookCard.title}</h4>
            </div>
            <div class="card-body">
                <p class="pages">${bookCard.noOfPages}</p>
                <p class="read">${bookCard.readOrNot ? "Read" : "Not Read"}</p>
                <button class = "removeButton" onclick="removeBook(${i})">Remove</button>
                <button class = "removeButton" onclick="toggleRead(${i})">Read or not</button>
            </div>
        </div>`
        displayCard.appendChild(bookCardElement);
    }
}

function removeBook(idx){
    myLibrary.splice(idx,1);
    render();
}
function addBookToLibrary() {
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value;
  let noOfPages = document.querySelector("#no-of-pages").value;
  let checkBox = document.querySelector("#read-or-not").checked;

  let book = new Book(author, title, noOfPages, checkBox);
  myLibrary.push(book);
  render();
}

let bookButton = document.querySelector("#new-book");

bookButton.addEventListener("click", function() {
    let bookForm = document.querySelector("#book-form");
    bookForm.style.display = "block";
})

let submitButton = document.querySelector("#submit");



document.querySelector("#book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})

