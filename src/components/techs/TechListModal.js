import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const TechListModal = ({ techs: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>

        <ul className="collection">
          {!loading &&
            techs?.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech,
});

TechListModal.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
