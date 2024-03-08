function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAutor: author,
        bookPage: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic Heart', 'James Clear', '306')
const book2 = createBook('Código Limpo', 'Num Seir', '634')

book1.color = 'White'

console.log(book1)
console.log(book2)
