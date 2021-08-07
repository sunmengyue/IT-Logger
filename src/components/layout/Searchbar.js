import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

const Searchbar = ({ searchLogs }) => {
  const text = useRef('');

  // filter as we type
  const handleChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '30px' }} className="blue-grey lighten-2">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={text}
              placeholder="Search logs..."
              onChange={handleChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(Searchbar);
