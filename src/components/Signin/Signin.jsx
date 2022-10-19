import React, { useContext, useState } from "react";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Signin = () => {
  const [errorPassword, setErrorPassword] = useState("");
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    const from = location.state?.from?.pathname || "/";
    e.preventDefault();
    setErrorPassword("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
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
          <h3 className="text-3xl font-bold text-slate-700">Sign In</h3>
          <p>Sign in to access your account</p>
        </div>
        <form onSubmit={handleSignIn} className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
              <p>{errorPassword}</p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn">Sign In</button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-2">
          <p>Login with social accounts</p>
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
          </div>
          <p>
            Don't have an account yet? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
