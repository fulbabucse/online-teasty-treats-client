import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Signup = () => {
  const [errorPassword, setErrorPassword] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorPassword("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setErrorPassword("Password did not match!!");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setErrorPassword(err.message);
      });
  };
  return (
    <div className="flex justify-center py-5">
      <div className="card card-compact flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-7">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-700">Sign Up</h3>
          <p>Create a new account</p>
        </div>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p className="text-red-500">{errorPassword}</p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn">Sign Up</button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-2">
          {/* <p>Sign Up with social accounts</p>
          <div className="flex justify-center gap-4 text-2xl">
            <button>
              <FaGoogle></FaGoogle>
            </button>
            <button>
              <FaFacebook></FaFacebook>
            </button>
            <button>
              <FaTwitter></FaTwitter>
            </button>
          </div> */}
          <p>
            Already have an Account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
