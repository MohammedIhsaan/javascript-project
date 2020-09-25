class Book {
  constructor(title, author, bookCodeNo) {
    this.title = title;
    this.author = author;
    this.bookCodeNo = bookCodeNo;
  }
}

function getBooks() {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
}
function addBook(book) {
  const books = getBooks();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}
function removeBook(barCode) {
  const books = getBooks();
  books.forEach((book, index) => {
    if (book.bookCodeNo === barCode) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
}

function showBookAdded() {
  const books = getBooks();
  books.forEach((book) => addBookToList(book));
}
function addBookToList(book) {
  const list = document.createElement("tr");
  list.className = "success";
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  console.log(radioBtn);
  list.innerHTML = `<td></td>
  <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.bookCodeNo}</td>
    <td ><a href="#" class="btn btn-danger btn-sm delet">X</a></td>`;
  const tbody = document.querySelector("#bookList");
  tbody.appendChild(list);
  console.log(list.childNodes[0]);
  list.childNodes[0].appendChild(radioBtn);
}

function notification(message, className) {
  const info = document.createElement("div");
  info.className = `alert alert-${className}`;
  info.innerHTML = message;
  const form = document.querySelector("#book-form");
  const container = document.querySelector(".container");
  container.insertBefore(info, form);
  setTimeout(() => {
    container.removeChild(info);
  }, 3000);
}

function clearAllFields() {
  document.querySelector("#titleValue").value = "";
  document.querySelector("#authorValue").value = "";
  document.querySelector("#codeValue").value = "";
}

const addBookBtn = document.querySelector("#book-form");
addBookBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#titleValue").value;
  const author = document.querySelector("#authorValue").value;
  const bookCode = document.querySelector("#codeValue").value;

  console.log(title === "" || author === "" || bookCode === "");

  if (title == "" || author == "" || bookCode == "") {
    notification("Please fill all fields", "success");
  } else {
    const book = new Book(title, author, bookCode);

    addBook(book);
    addBookToList(book);
    notification("Book Added Successfully", "success");

    clearAllFields();
  }
});
const tbody = document.querySelector("#bookList");
const tbodyShift = document.querySelector("#shifted");
const compDiv = document.querySelector("#comp");
console.log(tbodyShift);
tbody.addEventListener("click", (e) => {
  console.log(e.target.parentElement.parentElement);
  if (e.target.checked === true) {
    const div = document.createElement("h3");
    div.innerHTML = "Reading Completed Books";
    div.className = "text-success ";
    compDiv.appendChild(div);
    const shiftingElemenr = e.target.parentElement.parentElement;
    tbodyShift.appendChild(shiftingElemenr);
    console.log("hello");
  }
});

tbodyShift.addEventListener("click", (e) => {
  if (e.target.classList.contains("delet")) {
    tbodyShift.removeChild(e.target.parentElement.parentElement);
  }
  removeBook(e.target.parentElement.previousElementSibling.innerHTML);
  console.log(e.target.parentElement.previousElementSibling.innerHTML);

  notification("Book Removed Successfully", "danger");
});

document.addEventListener("DOMContentLoaded", (e) => {
  showBookAdded();
});
