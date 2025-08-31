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
    <div className="text-white border rounded px-2 py-3 w-[400px]">
      <h3 className="text-center text-lg">Signup</h3>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User name</label>
        <input
          className={`border rounded my-1 p-1 `}
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
        {errors && errors.username && (
          <p className="text-red-300">{errors.username.message}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          className={`border rounded my-1 p-1 `}
          type="email"
          id="email"
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@blogapi\.com$/,
              message: "You should use your work email",
            },
          })}
        />
        {errors && errors.email && (
          <p className="text-red-300">{errors.email.message}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={`border rounded my-1 p-1`}
          {...register("password", {
            required: "password required",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
              message:
                "Password must be at least 8 characters, include one uppercase letter, one number, and one special character",
            },
          })}
        />
        {errors && errors.password && (
          <p className="text-red-300">{errors.password.message}</p>
        )}
        <label htmlFor="cpasssowrd">Confirm Password</label>
        <input
          type="password"
          id="cpasssowrd"
          className={`border rounded my-1 p-1`}
          {...register("confirmpassword", {
            required: "confirmpassword required",
            validate: (value) => {
              return value === passworValue || "Passwords do not match";
            },
          })}
        />
        {errors && errors.confirmpassword && (
          <p className="text-red-300">{errors.confirmpassword.message}</p>
        )}
        <button
          className={`${"bg-gray-300 text-white"} px-3 py-1 rounded mt-3`}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
