let books = [
    {
        id: 1,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam"
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho"
    }
];

// Display books
function displayBooks() {
    let list = document.getElementById("bookList");

    list.innerHTML = "";

    books.forEach(book => {
        list.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button class="edit"
                    onclick="editBook(${book.id})">
                    Edit</button>

                    <button class="delete"
                    onclick="deleteBook(${book.id})">
                    Delete</button>
                </td>
            </tr>
        `;
    });
}

// CREATE - Add Book
function addBook() {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();

    if (title === "" || author === "") {
        alert("Please enter book title and author");
        return;
    }

    let bookId = document.getElementById("bookId").value;

    if (bookId !== "") {
        // UPDATE
        let book = books.find(b => b.id === Number(bookId));

        if (book) {
            book.title = title;
            book.author = author;
        }

        document.querySelector(".form button").textContent = "Add Book";
    } else {
        // CREATE
        let newBook = {
            id: books.length > 0
                ? Math.max(...books.map(b => b.id)) + 1
                : 1,
            title: title,
            author: author
        };

        books.push(newBook);
    }

    clearForm();
    displayBooks();
}

// UPDATE - Edit Book
function editBook(id) {
    let book = books.find(b => b.id === id);

    if (book) {
        document.getElementById("bookId").value = book.id;
        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;

        document.querySelector(".form button").textContent = "Update Book";
    }
}

// DELETE - Remove Book
function deleteBook(id) {
    if (confirm("Are you sure you want to delete this book?")) {
        books = books.filter(book => book.id !== id);
        displayBooks();
    }
}

// Clear input fields
function clearForm() {
    document.getElementById("bookId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
}

// Initial display
displayBooks();