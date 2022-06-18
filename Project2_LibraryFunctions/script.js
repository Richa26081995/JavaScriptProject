console.log("library");

//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add methods to display prototypes

Display.prototype.add = function (book) {
  console.log("Adding To UI");
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`;
  tableBody.innerHTML += uiString;
};
//implemented the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//implementing the validate function

Display.prototype.validate = function (book) {
  //let libraryForm = document.getElementById('libraryForm');
  if (book.name.length < 2 && book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

//show function

Display.prototype.show = function (type, displaymessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                       <strong>Message:</strong> ${displaymessage}
                       <button
                       type="button"
                       class="close"
                       data-dismiss="alert"
                       aria-label="Close"
                     >
                       <span aria-hidden="true">×</span>
                     </button>
                   </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

//Add submit event listener to form having id libraryForm

let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  //to display data entered in table create display object

  let display = new Display();
  //validation in fields
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book Added Successfully");
  } else {
    display.show("danger", "Cannot Add Book");
  }

  e.preventDefault();
}
