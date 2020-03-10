import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  descrizione: PropTypes.string,
});

export const formValues = PropTypes.shape({
  name: PropTypes.string,
  descrizione: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  descrizione: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  descrizione: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
