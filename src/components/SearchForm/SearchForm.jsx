import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ search });
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={onInputChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="search"
      />
      <button>Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
