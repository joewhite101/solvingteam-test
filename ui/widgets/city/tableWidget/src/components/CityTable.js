import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import cityType from 'components/__types__/city';

const styles = {
  tableRoot: {
    marginTop: '10px',
  },
  rowRoot: {
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  noItems: {
    margin: '15px',
  },
};

const CityTable = ({ items, onSelect, classes, t, i18n }) => {
  const tableRows = items.map(item => (
    <TableRow hover className={classes.rowRoot} key={item.id} onClick={() => onSelect(item)}>
      <TableCell>
        <span>{item.name}</span>
      </TableCell>
      <TableCell>
        <span>{item.descrizione}</span>
      </TableCell>
    </TableRow>
  ));

  return items.length ? (
    <Table className={classes.tableRoot} stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>
            <span>{t('entities.city.name')}</span>
          </TableCell>
          <TableCell>
            <span>{t('entities.city.descrizione')}</span>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  ) : (
    <div className={classes.noItems}>{t('entities.city.noItems')}</div>
  );
};

CityTable.propTypes = {
  items: PropTypes.arrayOf(cityType).isRequired,
  onSelect: PropTypes.func,
  classes: PropTypes.shape({
    rowRoot: PropTypes.string,
    tableRoot: PropTypes.string,
    noItems: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({ language: PropTypes.string }).isRequired,
};

CityTable.defaultProps = {
  onSelect: () => {},
};

export default withStyles(styles)(withTranslation()(CityTable));
