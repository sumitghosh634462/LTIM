class Book {
    constructor(bookId, bookTitle, author, publishedYear) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    displayDetails() {
        console.log(`Book details:
        Id : ${this.bookId},
        Title : ${this.bookTitle},
        Author : ${this.author},
        Published in : ${this.publishedYear}`)
    }
}
let book = new Book(1001, "Umbrella Man", "Roald Dahl", 1998);
book.displayDetails(); 