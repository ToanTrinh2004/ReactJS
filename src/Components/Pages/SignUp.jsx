import React from 'react';
import BasicTextField from '../BasicTextField';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Notification } from '../../utils/helper';
function SignUp() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    Name: yup.string().required("Please input Last Name"),
    email: yup.string().email("Invalid email format").required("Please input Email"),
    phone : yup.string().min(10,"Phone number must be at least 10 numbers").required("Please input Phone number"),
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
      Name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone :''
    },
    onSubmit: values => {
     handleSignUp(formik.values.Name,formik.values.email,formik.values.phone,formik.values.password)
    },
    validationSchema: validationSchema,
  });
  const handleSignUp = async(name,email,phone,password) =>{
    try {
      const response = await axios.get(`http://localhost:4000/user`, {
        params: { email },
      });

      if (response.data.length === 0) {
        const newUser = {
          name: name,
          email: email,
          phone: phone,
          password: password,
        };
        await axios.post('http://localhost:4000/user', newUser);

      Notification("Sign up successful!");
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isLogIn","true");
      navigate('/');
      window.location.reload();
      

      }
      else{
        Notification("Email is already used","error");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      Notification("An error occurred while sign up.");
    }
  };

  return (
    <div class="bg-gray-100 flex items-center justify-center px-2 sm:px-6 lg:px-8  ">
      <div class="w-full max-w-md space-y-8 mt-20 mb-20">
        <div class="bg-white shadow-md rounded-md p-6">
          <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
          <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>
          <form class="space-y-6" onSubmit={formik.handleSubmit}>
            <BasicTextField
              Label="User Name"
              value={formik.values.Name}
              onChange={formik.handleChange("Name")}
              required={true}
              helperText={formik.touched.Name && formik.errors.Name}
              error={Boolean(formik.touched.Name) && formik.errors.Name}
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
              Label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange("phone")}
              required={true}
              helperText={formik.touched.phone && formik.errors.phone}
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
