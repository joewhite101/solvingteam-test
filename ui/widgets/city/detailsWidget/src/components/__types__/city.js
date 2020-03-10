import PropTypes from 'prop-types';

const cityType = PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  descrizione: PropTypes.string,
});

export default cityType;
