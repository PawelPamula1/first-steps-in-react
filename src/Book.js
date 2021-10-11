import React from 'react';

const Book = ({ img, title, author, url }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('siemanko');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <a href={url}>
        <img src={img} />
      </a>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
