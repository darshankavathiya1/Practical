import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const otpValidationSchema = Yup.object({
  otp: Yup.string()
    .length(4, 'OTP must be exactly 4 characters')
    .matches(/^[0-9]+$/, 'OTP must be numeric')
    .required('OTP is required'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export const repetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  repetPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Please, make sure your password match. ')
    .required('Confirm Password is required'),
});
