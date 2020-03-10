import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import personaType from 'components/__types__/persona';

const PersonaFieldTable = ({ t, persona }) => {
  const translationKeyPrefix = `entities.persona.`;

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
            <span>{persona.id}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}nome`)}</span>
          </TableCell>
          <TableCell>
            <span>{persona.nome}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}cognome`)}</span>
          </TableCell>
          <TableCell>
            <span>{persona.cognome}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}codiceFiscale`)}</span>
          </TableCell>
          <TableCell>
            <span>{persona.codiceFiscale}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}indirizzo`)}</span>
          </TableCell>
          <TableCell>
            <span>{persona.indirizzo}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}numeroConsolato`)}</span>
          </TableCell>
          <TableCell>
            <span>{persona.numeroConsolato}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

PersonaFieldTable.propTypes = {
  persona: personaType,
  t: PropTypes.func.isRequired,
};

PersonaFieldTable.defaultProps = {
  persona: [],
};

export default withTranslation()(PersonaFieldTable);
