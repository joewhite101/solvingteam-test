import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

import cityType from 'components/__types__/city';
import CityFieldTable from 'components/city-field-table/CityFieldTable';

const CityDetails = ({ t, city }) => {
  return (
    <Box>
      <h3>
        {t('common.widgetName', {
          widgetNamePlaceholder: 'City',
        })}
      </h3>
      <CityFieldTable city={city} />
    </Box>
  );
};

CityDetails.propTypes = {
  city: cityType,
  t: PropTypes.func.isRequired,
};

CityDetails.defaultProps = {
  city: {},
};

export default withTranslation()(CityDetails);
