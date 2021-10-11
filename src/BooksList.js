import React from 'react';
import Book from './Book';
import { books } from './books';

function BooksList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

export default BooksList;
