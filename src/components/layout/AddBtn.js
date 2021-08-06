import React from 'react';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large wave-effect modal-trigger grey darken-1"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating modal-trigger green"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#tech-modal" className="btn-floating modal-trigger red">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
