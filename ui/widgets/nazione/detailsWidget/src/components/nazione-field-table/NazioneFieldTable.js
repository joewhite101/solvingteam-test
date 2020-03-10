import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import nazioneType from 'components/__types__/nazione';

const NazioneFieldTable = ({ t, nazione }) => {
  const translationKeyPrefix = `entities.nazione.`;

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
            <span>{nazione.id}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}name`)}</span>
          </TableCell>
          <TableCell>
            <span>{nazione.name}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}descrizione`)}</span>
          </TableCell>
          <TableCell>
            <span>{nazione.descrizione}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

NazioneFieldTable.propTypes = {
  nazione: nazioneType,
  t: PropTypes.func.isRequired,
};

NazioneFieldTable.defaultProps = {
  nazione: [],
};

export default withTranslation()(NazioneFieldTable);
