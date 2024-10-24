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
const categoryFilter = document.getElementById('categoryFilter');
const categorySelect = document.getElementById('category');
const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

// Book array (load from localStorage if available)
let books = JSON.parse(localStorage.getItem('books')) || [];

// Category array and default books for each category
const categories = ['New Release', 'Bestseller', 'Classic', 'Award Winner'];

const defaultBooks = {
    'New Release': [
        { title: 'The Midnight Library', author: 'Matt Haig', category: 'New Release' },
        { title: 'Project Hail Mary', author: 'Andy Weir', category: 'New Release' }
    ],
    'Bestseller': [
        { title: 'Where the Crawdads Sing', author: 'Delia Owens', category: 'Bestseller' },
        { title: 'Becoming', author: 'Michelle Obama', category: 'Bestseller' }
    ],
    'Classic': [
        { title: '1984', author: 'George Orwell', category: 'Classic' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Classic' }
    ],
    'Award Winner': [
        { title: 'The Underground Railroad', author: 'Colson Whitehead', category: 'Award Winner' },
        { title: 'The Night Watchman', author: 'Louise Erdrich', category: 'Award Winner' }
    ]
};

// Function to populate the Category dropdowns
function populateDropdowns() {
    // Populate Category Filter
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Populate Category Select for form
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Function to display books based on selected category
function displayBooks(filter) {
    bookList.innerHTML = ''; // Clear current list
    
    if (!filter) {
        return; // Do not display anything if no category is selected
    }

    // Combine default books with user-added books for the selected category
    const userBooks = books.filter(book => book.category === filter);
    const combinedBooks = [...defaultBooks[filter] || [], ...userBooks];

    if (combinedBooks.length === 0) {
        bookList.innerHTML = '<li>No books available for this category.</li>';
    } else {
        combinedBooks.forEach(book => {
            const bookItem = `<li><strong>${book.title}</strong> by ${book.author} (<strong>Category:</strong> ${book.category})</li>`;
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
        category: categorySelect.value
    };
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books)); // Save to localStorage
    displayBooks(categoryFilter.value); // Refresh the list with the currently selected category
    bookForm.reset(); // Reset the form
}

// Event Listeners
bookForm.addEventListener('submit', addBook);
categoryFilter.addEventListener('change', () => displayBooks(categoryFilter.value));

// Initial Population of Dropdowns
populateDropdowns();
