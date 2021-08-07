import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';
import PropType from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted!' });
  };

  return (
    <div>
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
      >
        {log.message}
      </a>
      <br />
      <span className="gray-text">
        <span className="black-text">ID #{log.id}</span> last updated:{' '}
        <span className="black-text">{log.tech}</span> on{' '}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <a href="#" className="secondary-content" onClick={onDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
  );
};

export default connect(null, { deleteLog })(LogItem);

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};
