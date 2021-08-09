import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <>
      {techs?.map((t) => (
        <option key={t.id} value={`${t.firstName} ${t.lasgName}`}>
          {t.firstName}
          {t.lastName}
        </option>
      ))}{' '}
    </>
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
