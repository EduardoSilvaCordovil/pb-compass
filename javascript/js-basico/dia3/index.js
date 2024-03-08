

const book = {
    bookTitle: 'Atomic Heart',
    bookAutor: 'James Clear',
    bookPage: '306',
    bookChapter: {
        chap1: 'Fundamentals',
        chap2: '1 law'
    },
    printBook: function() {
        console.log('Printing...')
    }
}
book.printBook
/*function printBook() {
    console.log('printing...')
}
console.log(book)*/