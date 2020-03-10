import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

import personaType from 'components/__types__/persona';
import PersonaFieldTable from 'components/persona-field-table/PersonaFieldTable';

const PersonaDetails = ({ t, persona }) => {
  return (
    <Box>
      <h3>
        {t('common.widgetName', {
          widgetNamePlaceholder: 'Persona',
        })}
      </h3>
      <PersonaFieldTable persona={persona} />
    </Box>
  );
};

PersonaDetails.propTypes = {
  persona: personaType,
  t: PropTypes.func.isRequired,
};

PersonaDetails.defaultProps = {
  persona: {},
};

export default withTranslation()(PersonaDetails);
