import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ handleSearch }) {
  const [value, setValue] = useState('Search playlists...');

  const handleClick = (e) => {
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
    setValue('Search playlists...');
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        id="searchBar"
        name="search"
        type="text"
        onChange={handleChange}
        onClick={handleClick}
        value={value}
      />
    </form>
  );
};

