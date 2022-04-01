import React from 'react';
import { Link } from 'react-router-dom';
import Pages from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Pages
        count={pageNumbers.map((number) => {
          return (
            <li>
              <a href="!#">{number}</a>
            </li>
          );
        })}
        color="primary"
      />
    </div>
  );
}

export default Pagination;
