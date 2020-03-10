import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formValues, formTouched, formErrors } from 'components/__types__/nazione';
import { withFormik } from 'formik';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    margin: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
});

class NazioneForm extends PureComponent {
  render() {
    const {
      classes,
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit: formikHandleSubmit,
      isSubmitting,
      setFieldValue,
      t,
      i18n,
    } = this.props;

    const getHelperText = field => (errors[field] && touched[field] ? errors[field] : '');

    const handleSubmit = e => {
      e.stopPropagation(); // avoids double submission caused by react-shadow-dom-retarget-events
      formikHandleSubmit(e);
    };

    return (
      <form onSubmit={handleSubmit} className={classes.root} data-testid="nazione-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nazione-name"
              error={errors.name && touched.name}
              helperText={getHelperText('name')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              label={t('entities.nazione.name')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nazione-descrizione"
              error={errors.descrizione && touched.descrizione}
              helperText={getHelperText('descrizione')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.descrizione}
              name="descrizione"
              label={t('entities.nazione.descrizione')}
            />
          </Grid>
          <Button type="submit" color="primary" disabled={isSubmitting} data-testid="submit-btn">
            {t('common.save')}
          </Button>
        </Grid>
      </form>
    );
  }
}

NazioneForm.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    textField: PropTypes.string,
    submitButton: PropTypes.string,
    button: PropTypes.string,
    downloadAnchor: PropTypes.string,
  }),
  values: formValues,
  touched: formTouched,
  errors: formErrors,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({ language: PropTypes.string }).isRequired,
};

NazioneForm.defaultProps = {
  classes: {},
  values: {},
  touched: {},
  errors: {},
};

const emptyNazione = {
  name: '',
  descrizione: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  descrizione: Yup.string(),
});

const formikBag = {
  mapPropsToValues: ({ nazione }) => nazione || emptyNazione,

  enableReinitialize: true,

  validationSchema,

  handleSubmit: (values, { setSubmitting, props: { onSubmit } }) => {
    onSubmit(values);
    setSubmitting(false);
  },

  displayName: 'NazioneForm',
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withTranslation(),
  withFormik(formikBag)
)(NazioneForm);
