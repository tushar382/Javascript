// with classes and objects
//TODO list 1. Add the books to local storage 2. add delete function
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
  // method for adding new book
  add(book) {
    let table = document.getElementById("tableBody");
    let string = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    table.innerHTML += string;
  }
  // method for clearing fields
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
  // method for displying success or error
  show(type, message) {
    let msg = document.getElementById("msg");
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>!</strong> ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
    setTimeout(function () {
      msg.innerHTML = "";
    }, 2000);
  }
  // method for validation of book
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
}
// adding 'submit' eventlistner
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
// this method is called after submit button
function libraryFormSubmit(e) {
  // grabbing the elements
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let biography = document.getElementById("biography");
  let programming = document.getElementById("programming");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (biography.checked) {
    type = biography.value;
  } else if (programming.checked) {
    type = programming.value;
  }
  // creating object of Book class and Display class
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "You have successfully added a book");
  } else {
    display.show("danger", "Sorry you cannot add this book");
  }
  e.preventDefault();
}
