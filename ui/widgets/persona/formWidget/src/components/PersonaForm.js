import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formValues, formTouched, formErrors } from 'components/__types__/persona';
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

class PersonaForm extends PureComponent {
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
      <form onSubmit={handleSubmit} className={classes.root} data-testid="persona-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="persona-nome"
              error={errors.nome && touched.nome}
              helperText={getHelperText('nome')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nome}
              name="nome"
              label={t('entities.persona.nome')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="persona-cognome"
              error={errors.cognome && touched.cognome}
              helperText={getHelperText('cognome')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cognome}
              name="cognome"
              label={t('entities.persona.cognome')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="persona-codiceFiscale"
              error={errors.codiceFiscale && touched.codiceFiscale}
              helperText={getHelperText('codiceFiscale')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.codiceFiscale}
              name="codiceFiscale"
              label={t('entities.persona.codiceFiscale')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="persona-indirizzo"
              error={errors.indirizzo && touched.indirizzo}
              helperText={getHelperText('indirizzo')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.indirizzo}
              name="indirizzo"
              label={t('entities.persona.indirizzo')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="persona-numeroConsolato"
              error={errors.numeroConsolato && touched.numeroConsolato}
              helperText={getHelperText('numeroConsolato')}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numeroConsolato}
              name="numeroConsolato"
              label={t('entities.persona.numeroConsolato')}
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

PersonaForm.propTypes = {
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

PersonaForm.defaultProps = {
  classes: {},
  values: {},
  touched: {},
  errors: {},
};

const emptyPersona = {
  nome: '',
  cognome: '',
  codiceFiscale: '',
  indirizzo: '',
  numeroConsolato: '',
};

const validationSchema = Yup.object().shape({
  nome: Yup.string(),
  cognome: Yup.string(),
  codiceFiscale: Yup.string(),
  indirizzo: Yup.string(),
  numeroConsolato: Yup.string(),
});

const formikBag = {
  mapPropsToValues: ({ persona }) => persona || emptyPersona,

  enableReinitialize: true,

  validationSchema,

  handleSubmit: (values, { setSubmitting, props: { onSubmit } }) => {
    onSubmit(values);
    setSubmitting(false);
  },

  displayName: 'PersonaForm',
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withTranslation(),
  withFormik(formikBag)
)(PersonaForm);
