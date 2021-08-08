import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = () => {
  const techs = useSelector((state) => state.tech);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, []);

  return techs.map((t) => (
    <option key={t.id} value={`${t.firstName} ${t.lasgName}`}>
      {t.firstName}
      {t.lastName}
    </option>
  ));
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

export default TechSelectOptions;
