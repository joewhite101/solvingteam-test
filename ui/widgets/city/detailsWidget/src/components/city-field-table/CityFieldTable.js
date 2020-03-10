import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import cityType from 'components/__types__/city';

const CityFieldTable = ({ t, city }) => {
  const translationKeyPrefix = `entities.city.`;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('common.name')}</TableCell>
          <TableCell>{t('common.value')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}id`)}</span>
          </TableCell>
          <TableCell>
            <span>{city.id}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}name`)}</span>
          </TableCell>
          <TableCell>
            <span>{city.name}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}descrizione`)}</span>
          </TableCell>
          <TableCell>
            <span>{city.descrizione}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

CityFieldTable.propTypes = {
  city: cityType,
  t: PropTypes.func.isRequired,
};

CityFieldTable.defaultProps = {
  city: [],
};

export default withTranslation()(CityFieldTable);
