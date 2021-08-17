import React from 'react';
import './bookList.css';

const BookDetails = [
    {
        "bookTitle" : "Wuthering Heights",
        "bookAuthor" : "Shernaz Patel",
        "imgUrl" : "https://images-eu.ssl-images-amazon.com/images/I/51aREZykN2L.jpg"
    },
    {
        "bookTitle" : "Harry Potter and the Philosopher's Stone",
        "bookAuthor" : "J.K. Rowling",
        "imgUrl" : "https://m.media-amazon.com/images/I/41PCnI7osjS.jpg"
    }
];

function BookList() {
    return (
        <section className='book-list'>
            {
                BookDetails.map((book) => {
                    return <Book book={book} />
                })
            }
        </section>
    );
}

const Book = (props) => {
    return (
        <article className='book'>
            <Image imgUrl={ props.book.imgUrl }/>
            <BookTitle bookTitle={ props.book.bookTitle }/>
            <BookAuthor bookAuthor={ props.book.bookAuthor }/>
        </article>
    );
};

const Image = (props) => {
    return (
        <img src={props.imgUrl} alt="a"/>
    );
};

const BookTitle = (props) => {
    return (
        <h3>{props.bookTitle}</h3>
    );
};
const BookAuthor = (props) => {
    return (
        <h4>by {props.bookAuthor}</h4>
    );
};

export default BookList;