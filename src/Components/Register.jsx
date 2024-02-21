import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showpassword, setShowpassword] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-app-backend-0pxu.onrender.com/register", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          toast.success("Successfully register!");
          navigate("/login");
        } else {
          toast.error(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg-[url("./assets/Banner2.jpg")] bg-no-repeat bg-cover bg-center flex items-center justify-center min-h-screen'>
      <div className="bg-opacity-50 backdrop-blur-xl max-w-[400px] mx-auto p-4 sm:p-6 rounded-xl ">
        <h2 className="text-4xl font-bold text-white mb-6">Sign-Up</h2>
        <form>
          <div className="mb-2 flex flex-col">
              <label htmlFor="email" className="text-xl block text-white font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="rounded bg-transparent p-2 border mt-1 text-white"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="email" className="text-xl block text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="rounded bg-transparent p-2 border mt-1 text-white"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-xl block text-white font-semibold">
                Password
            </label>
            <input
              type={showpassword ? 'text' : 'password'}
              placeholder="Enter Password"
              name="password"
              className="rounded bg-transparent border p-2 mt-1 text-white "
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <span
              className="absolute text-white right-2 top-11 text-xl cursor-pointer"
              onClick={() => setShowpassword(!showpassword)}
            >
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </span>

          </div>
          <Link
            onClick={handleSubmit}
            type="submit"
            className="bg-gray-300 px-1 py-1 rounded mt-4 flex text-lg font-semibold items-center justify-center"
          >
            Register
          </Link>
          <p className="mt-2 text-white">You are agree to our terms and policies</p>
          <Link
            to="/login"
            className="py-1 px-1 rounded bg-gray-300 flex items-center justify-center font-semibold text-lg mt-3"
          >
             Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
