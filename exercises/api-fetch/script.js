const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultsList = document.getElementById("results");

async function searchBooks() {
  const query = searchInput.value.trim();
  if (!query) return;

  resultsList.innerHTML = "<li class='loading'>Searching...</li>";

  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    displayResults(data.docs);
  } catch (error) {
    resultsList.innerHTML = `<li class='error'>Something went wrong: ${error.message}</li>`;
  }
}

function displayResults(books) {
  resultsList.innerHTML = "";

  if (!books || books.length === 0) {
    resultsList.innerHTML = "<li class='no-results'>No books found.</li>";
    return;
  }

  books.slice(0, 20).forEach(book => {
    const title = book.title || "Unknown title";
    const authors = book.author_name
      ? book.author_name.join(", ")
      : "Unknown author";

    const li = document.createElement("li");
    li.innerHTML = `
      <span class="book-title">${title}</span>
      <span class="book-author">by ${authors}</span>
    `;
    resultsList.appendChild(li);
  });
}

searchBtn.addEventListener("click", searchBooks);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBooks();
});
