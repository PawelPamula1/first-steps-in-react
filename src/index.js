import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Header from './Header';
import BooksList from './BooksList';

function MyBooks() {
  return (
    <container>
      <Header />
      <BooksList />
    </container>
  );
}

ReactDom.render(<MyBooks />, document.getElementById('root'));
