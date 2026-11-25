const STORAGE_KEY = "books-library";
const bookList = document.getElementById("books-list");
const statusFilter = document.getElementById("status-filter");

const books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

books.forEach((book) => {
    const card = createBookCard(book);
    bookList.appendChild(card);
});

statusFilter.addEventListener("change", filterBooks);
filterBooks();

function filterBooks() {
  const selectedStatus = statusFilter.value;

  bookList.querySelectorAll(".book-card").forEach((card) => {
    card.hidden =
      selectedStatus !== "all" && card.dataset.status !== selectedStatus;
  });
}

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.dataset.status = book.status;

  const content = document.createElement("div");
  content.className = "content";

  const title = document.createElement("h3");
  title.textContent = book.title;

  const img = document.createElement("img");
  img.src = book.cover || "./images/default-cover.jpg";
  img.alt = book.title;

  const author = document.createElement("p");
  author.textContent = `By: ${book.author}`;

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;

  const status = document.createElement("p");
  status.textContent = book.status;

  // Map reading status to a matching CSS class
  const statusClassMap = {
    "Already Read": "already-read-status",
    "Reading": "reading-status",
    "To Read": "to-read-status"
  };
  if (statusClassMap[book.status]) {
    status.classList.add(statusClassMap[book.status]);
  }

  content.append(title, img, author, pages, status);
  card.appendChild(content);

  return card;
}