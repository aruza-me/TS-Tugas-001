/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
 type data = {
     ISBN: number
     BookTitle: string
     AuthorName: string
     NumberOfPages: number
     Category: string
     Availability:boolean
 }

const book1 :data ={
     ISBN: 43275,
     BookTitle: "JokeBook",
     AuthorName: "Izura",
     NumberOfPages: 67,
     Category: "comedy",
     Availability:true
}
const book2 :data ={
     ISBN: 74312,
     BookTitle: "HistoryBook",
     AuthorName: "Imura",
     NumberOfPages: 55,
     Category: "History",
     Availability:false
}
const book3 :data ={
     ISBN: 98543,
     BookTitle: "LoveBook",
     AuthorName: "Inuza",
     NumberOfPages: 143,
     Category: "romance",
     Availability:true
}
console.log(book1)
console.log(book2)
console.log(book3)