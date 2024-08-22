import React from 'react';
import BasicTextField from '../Components/BasicTextField';
import * as yup from 'yup';
import { useFormik } from 'formik';

function SignUp() {
  const validationSchema = yup.object({
    firstName: yup.string().required("Please input First Name"),
    lastName: yup.string().required("Please input Last Name"),
    email: yup.string().email("Invalid email format").required("Please input Email"),
    password: yup.string()
      .matches(/^[A-Z]/, "First letter must be capitalized")
      .matches(/^(?=.*[!@#$%^&*])/, "Must include at least one special character")
      .min(8, "Password must be at least 8 characters long")
      .required("Please input Password"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      alert("Dang ky thanh cong");
    },
    validationSchema: validationSchema,
  });

  return (
    <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ">
      <div class="w-full max-w-md space-y-8 mt-40 mb-40">
        <div class="bg-white shadow-md rounded-md p-6 mt-40">
          <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
          <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>
          <form class="space-y-6" onSubmit={formik.handleSubmit}>
            <BasicTextField
              Label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              required={true}
              helperText={formik.touched.firstName && formik.errors.firstName}
              error={Boolean(formik.touched.firstName) && formik.errors.firstName}
            />
            <BasicTextField
              Label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              required={true}
              helperText={formik.touched.lastName && formik.errors.lastName}
              error={Boolean(formik.touched.lastName) && formik.errors.lastName}
            />
            <BasicTextField
              Label="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              required={true}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.touched.email) && formik.errors.email}
            />
            <BasicTextField
              Label="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              type="password"
              required={true}
              helperText={formik.touched.password && formik.errors.password}
              error={Boolean(formik.touched.password) && formik.errors.password}
            />
            <BasicTextField
              Label="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange("confirmPassword")}
              type="password"
              required={true}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              error={Boolean(formik.touched.confirmPassword) && formik.errors.confirmPassword}
            />
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
