const now = new Date();
const year = now.getFullYear();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('currentYear').textContent = year;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Select elements
const bookList = document.getElementById('bookList');
const genreFilter = document.getElementById('genreFilter');
const categorySelect = document.getElementById('category');
const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

// Book array (load from localStorage if available)
let books = JSON.parse(localStorage.getItem('books')) || [];

// Genre and Category arrays
const genres = [
    'Fiction', 
    'Non-Fiction', 
    'Fantasy', 
    'Mystery', 
    'Romance', 
    'Science Fiction'
];
const categories = [
    'New Release', 
    'Bestseller', 
    'Classic', 
    'Award Winner'
];

// Function to populate the Genre and Category dropdowns
function populateDropdowns() {
    // Populate Genre Filter with genres
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    // Populate Category Select
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Function to display books based on selected genre
function displayBooks(filter) {
    bookList.innerHTML = ''; // Clear current list
    if (!filter) {
        return; // Do not display anything if no genre is selected
    }

    const filteredBooks = books.filter(book => book.genre === filter);
    
    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<li>No books available for this genre.</li>';
    } else {
        filteredBooks.forEach(book => {
            const bookItem = `<li><strong>${book.title}</strong> by ${book.author} (<strong>Genre:</strong> ${book.genre}, <strong>Category:</strong> ${book.category})</li>`;
            bookList.innerHTML += bookItem;
        });
    }
}

// Function to add a new book
function addBook(event) {
    event.preventDefault(); // Prevent form submission
    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        genre: genreFilter.value,
        category: categorySelect.value
    };
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books)); // Save to localStorage
    displayBooks(genreFilter.value); // Refresh the list with the currently selected genre
    bookForm.reset(); // Reset the form
}

// Event Listeners
bookForm.addEventListener('submit', addBook);
genreFilter.addEventListener('change', () => displayBooks(genreFilter.value));

// Initial Population of Dropdowns
populateDropdowns();
