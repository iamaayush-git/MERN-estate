import React, { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/slices/userSlice";
import OAuth from "../Components/OAuth";

const SignIn = () => {
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (!data.success) {
        return dispatch(signInFailure(data.message));
      }
      dispatch(signInSuccess(data.validUser));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl s text-center font-semibold my-7">Sign in</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            onChange={handleChange}
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg"
            id="email"
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
          />
          <button
            disabled={loading}
            className="bg-slate-700 p-3 rounded-lg uppercase text-white hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5 font-semibold">
          <p>Dont have an account?</p>
          <Link to={"/sign-up"}>
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </div>
        <p className="text-sm text-red-700 sm:font-medium">{error}</p>
      </div>
    </div>
  );
};

export default SignIn;
