import PropTypes from 'prop-types';

const personaType = PropTypes.shape({
  id: PropTypes.number,

  nome: PropTypes.string,
  cognome: PropTypes.string,
  codiceFiscale: PropTypes.string,
  indirizzo: PropTypes.string,
  numeroConsolato: PropTypes.string,
});

export default personaType;
