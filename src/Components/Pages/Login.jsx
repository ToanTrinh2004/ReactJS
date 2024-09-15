import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import BasicTextField from "../BasicTextField";
import * as yup from "yup";
import axios from "axios";
import { Notification } from "../../utils/helper";
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please input Email"),
    passWord: yup
      .string()
      .matches(/^[A-Z]/, "First letter must be capitalized")
      .matches(
        /^(?=.*[!@#$%^&*])/,
        "Must include at least one special character"
      )
      .min(8, "Password must be at least 8 characters long")
      .required("Please input Password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: (values) => {
      handleLogin(formik.values.email, formik.values.passWord);
    },
    validationSchema: validationSchema,
  });
  const handleLogin = async (email, passWord) => {
    try {
      const response = await axios.get(`http://localhost:4000/user`, {
        params: { email },
      });

      if (response.data.length === 0) {
        Notification("No account found with this email","error");
      } else {
        const user = response.data[0];

        if (user.password === passWord) {
          Notification("Login successful");
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isLogIn","true");
          navigate('/');
          window.location.reload();
        } else {
          Notification("Password or email is incorrect","error");
          console.log(passWord);
          console.log(user.password);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      Notification("An error occurred while logging in.","error");
    }
  };
  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 class="font-bold text-center text-2xl mb-5">
          WELLCOME LOGIN HERE !
        </h1>
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form class="px-5 py-7" onSubmit={formik.handleSubmit}>
            <BasicTextField
              Label="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              required={true}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.touched.email) && formik.errors.email}
            ></BasicTextField>
            <BasicTextField
              Label="Password"
              value={formik.values.passWord}
              onChange={formik.handleChange("passWord")}
              type="password"
              required={true}
              helperText={formik.touched.passWord && formik.errors.passWord}
              error={Boolean(formik.touched.passWord) && formik.errors.passWord}
            ></BasicTextField>
            <button
              type="submit"
              class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span class="inline-block mr-2">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>

          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div class="text-center sm:text-right  whitespace-nowrap">
                <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-bottom	"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <Link to="/signup">
                    {" "}
                    <span class="inline-block ml-1">Sign Up here</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
              <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block align-text-top"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <Link to="/">
                  <span class="inline-block ml-1">Back to your-app.com</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
