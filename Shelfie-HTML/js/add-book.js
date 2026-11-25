const STORAGE_KEY = "books-library";
const form = document.getElementById("book-form")
const coverInput = document.getElementById("cover")

let coverDataUrl = "";

coverInput.addEventListener("change", (event) => {
    handleCoverChange(event.target.files[0])
});

form.addEventListener("submit", handleAddBookSubmit);

function handleCoverChange(file) {
    if (!file) {
        coverDataUrl = "";
        previewImg.style.display = "none";
        return;
  }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        coverDataUrl = reader.result;
        previewImg.src = coverDataUrl;
        previewImg.style.display = "block";
    });
    reader.readAsDataURL(file);
}

function handleAddBookSubmit(event) {
  event.preventDefault();

  const newBook = {
    id: crypto.randomUUID(),
    title: document.querySelector("#title").value.trim(),
    author: document.querySelector("#author").value.trim(),
    status: document.querySelector("#status").value,
    cover: coverDataUrl
  };

  const existingBooks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existingBooks.push(newBook);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingBooks));
    window.location.href = "../index.html";
  } catch (error) {
    console.error("Could not save the book:", error);
  }
}