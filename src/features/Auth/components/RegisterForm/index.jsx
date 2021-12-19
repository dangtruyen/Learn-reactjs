// import InputField from '../../../../components/FormControl/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputField from 'components/FormControl/InputField';
import PasswordField from 'components/FormControl/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const theme = createTheme();

RegisterForm.prototype = {
  onSubmit: PropTypes.func,
};
const schema = yup.object({
  fullName: yup
    .string()
    .required('please enter you full name.')
    .test(
      'Should has as least two words',
      'Please enter as least two words',
      (value) => {
        console.log('value', value);
        return value.split(' ').length >= 2;
      }
    ),
  email: yup
    .string()
    .required('please enter you full name.')
    .email('please enter a valid email.'),
  password: yup
    .string()
    .required('please enter you password')
    .min(2, 'Please enter as least 6 character'),
  retypePassword: yup
    .string()
    .required('please enter retype password')
    .oneOf([yup.ref('password')], 'Password dose not match'),
});

function RegisterForm(props) {
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data, e) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(data);
    }
    // e.target.reset();
  };

  const { isSubmitting } = form.formState;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isSubmitting && (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          )}

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create An Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField
                  name="fullName"
                  label="Full Name"
                  form={form}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <InputField name="email" label="Email" form={form} />
              </Grid>

              <Grid item xs={12}>
                <PasswordField
                  fullWidth
                  form={form}
                  label="Password"
                  name="password"
                />
              </Grid>

              <Grid item xs={12}>
                <PasswordField
                  fullWidth
                  form={form}
                  label="Retype Password"
                  name="retypePassword"
                />
              </Grid>
              <Button
                disabled={isSubmitting}
                type="submit"
                color="primary"
                variant="contained"
                sx={{ m: [2, 2, 2], mb: 2 }}
              >
                Create An Account
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterForm;
