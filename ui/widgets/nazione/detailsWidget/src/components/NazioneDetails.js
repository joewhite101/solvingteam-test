import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

import nazioneType from 'components/__types__/nazione';
import NazioneFieldTable from 'components/nazione-field-table/NazioneFieldTable';

const NazioneDetails = ({ t, nazione }) => {
  return (
    <Box>
      <h3>
        {t('common.widgetName', {
          widgetNamePlaceholder: 'Nazione',
        })}
      </h3>
      <NazioneFieldTable nazione={nazione} />
    </Box>
  );
};

NazioneDetails.propTypes = {
  nazione: nazioneType,
  t: PropTypes.func.isRequired,
};

NazioneDetails.defaultProps = {
  nazione: {},
};

export default withTranslation()(NazioneDetails);
