const gridViewButtonEl = document.getElementById("grid-view-button");
const listViewButtonEl = document.getElementById("list-view-button");
const recommendedBooksCtrEl = document.getElementById("recommended-books-ctr");

gridViewButtonEl.addEventListener('click', applyGridView);
listViewButtonEl.addEventListener('click', applyListView);


function applyGridView() {
    recommendedBooksCtrEl.classList.add("grid-view");
    gridViewButtonEl.ariaPressed = true;
    listViewButtonEl.ariaPressed = false;
}

function applyListView() {
    recommendedBooksCtrEl.classList.remove("grid-view");
    gridViewButtonEl.ariaPressed = false;
    listViewButtonEl.ariaPressed = true;
}
