import PropTypes from 'prop-types';

const nazioneType = PropTypes.shape({
  id: PropTypes.number,

  name: PropTypes.string,
  descrizione: PropTypes.string,
});

export default nazioneType;
