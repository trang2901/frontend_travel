import React, {useState} from 'react';
import './pagination.scss'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
             <a onClick={() => {paginate(number); window.scrollTo(0, 500)}} className='page-link'>
              {number}
            </a>
         
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
