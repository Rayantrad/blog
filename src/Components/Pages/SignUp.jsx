import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  let passworValue = watch("password");
  return (
    <div className="flex flex-col items-center gap-5 px-4 sm:px-6 md:px-8 lg:px-10">
      <div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl pb-6 font-bold text-blue-900 leading-snug">
          Welcome to our CarePharma <br />
          <span className="text-blue-600">SignUp to explore our Categories</span>
        </h1>
      </div>
      <div className="border rounded-lg shadow-md px-4 py-6 w-full max-w-md bg-white">
        <h3 className="text-center text-xl font-semibold text-blue-700 mb-4">Signup</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-700">User name</label>
            <input
              className="border rounded w-full mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
            />
            {errors?.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              className="border rounded w-full mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="email"
              id="email"
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@carepharma\.com$/,
                  message: "You should use your work email",
                },
              })}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="border rounded w-full mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              {...register("password", {
                required: "password required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Password must be at least 8 characters, include one uppercase letter, one number, and one special character",
                },
              })}
            />
            {errors?.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="cpasssowrd" className="text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="cpasssowrd"
              className="border rounded w-full mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              {...register("confirmpassword", {
                required: "confirmpassword required",
                validate: (value) => {
                  return value === passworValue || "Passwords do not match";
                },
              })}
            />
            {errors?.confirmpassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmpassword.message}</p>
            )}
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 cursor-pointer rounded transition mt-2 font-medium"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

