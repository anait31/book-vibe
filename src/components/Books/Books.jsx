import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const[books, setBooks] = useState([])
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="mb-8">
            <h2 className="text-center text-4xl font-bold mb-8">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    books.map(book => <Book 
                        book={book}
                        key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;