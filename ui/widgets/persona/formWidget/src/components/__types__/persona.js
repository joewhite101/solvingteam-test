import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  nome: PropTypes.string,
  cognome: PropTypes.string,
  codiceFiscale: PropTypes.string,
  indirizzo: PropTypes.string,
  numeroConsolato: PropTypes.string,
});

export const formValues = PropTypes.shape({
  nome: PropTypes.string,
  cognome: PropTypes.string,
  codiceFiscale: PropTypes.string,
  indirizzo: PropTypes.string,
  numeroConsolato: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  nome: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  cognome: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  codiceFiscale: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  indirizzo: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  numeroConsolato: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  nome: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  cognome: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  codiceFiscale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  indirizzo: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  numeroConsolato: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
