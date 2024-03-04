function CreateBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthot = author;
    this.bookpages = pages
}
const book1 = new CreateBook('Atomic Heart', 'James', '306')
console.log(book1)