import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync, reset } from "../api/authSlice";
import { loginUserAsync, logout } from "../api/authSlice";
import { useNavigate } from "react-router-dom";
import './styles.css';
// import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, password, confirmPassword } = formValue;
  const [phone, setPhone] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, error, isSuccess, msg, isError } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };



  const handleLogin = () => {
    console.log(phone, email, password);
    if (!phone || !email || !password) {
      toast.error("Please fill in all the fields");
    } else {
      const userData = { phone, email, password };
      dispatch(loginUserAsync(userData));
      setShowRegister(true);
    }
  };


  const handleRegister = (e) => {
    e.preventDefault();
    console.table(name, phone, email, password);
  
    if (!phone || !email || !password || !name) {
      toast.error("Please fill in all the fields");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = { name, email, password };
      dispatch(registerUserAsync(userData))
        .unwrap()
        .then((response) => {
          if (response.success) {
            setShowRegister(true);
          } else {
            toast.error(response.msg);
          }
        })
        .catch((error) => {
          toast.error(error.toString());
        });
    }
  };
  

  useEffect(() => {
    console.log("isSuccess:", isSuccess);
    console.log("isError:", isError);

    if (isSuccess) {
      if (showRegister) {
        navigate("/");
      }
    }
  }, [isSuccess, showRegister, navigate]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-fit p-12 my-4 rounded-lg w-fit bg-gradient-to-b from-primaryLight/10 to-primaryDark/20 shadow-2xl">
          {!showRegister ? (
            <h1 className="text-transparent text-6xl mb-8 bg-clip-text bg-gradient-to-r from-secondaryLight to-souptickBlue">
              Hi, Welcome Back!
            </h1>
          ) : (
            <h1 className="text-transparent text-6xl mb-8 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Create an Account
            </h1>
          )}
          <form>
            {showRegister && (
              <div className="mb-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formValue.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="bg-gray-300 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm"
                  placeholder="Enter your Full Name"
                />
              </div>
            )}

            <div className="mb-4">
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  height: "10px",
                  borderTopStyle: "hidden",
                  borderRightStyle: "hidden",
                  borderLeftStyle: "hidden",
                  borderBottomStyle: "groove",
                }}
                country={"in"}
                name="phone"
                enableSearch={true}
                value={phone}
                onChange={setPhone}
                placeholder="Enter your registered phone number"
                className="w-full border-none outline-none"
              />
            </div>

            <div className="mb-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formValue.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="bg-primaryLight appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div className="mb-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formValue.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                className="bg-primaryLight appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm"
                placeholder="Password"
              />
            </div>

            {showRegister && (
              <div className="mb-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formValue.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  className="bg-primaryLight appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            )}

            {!showRegister ? (
              <>
                <div className="flex flex-col items-end">
                  <button
                    className="mybutton border-black border-2 mb-10 mt-4 text-center  font-normal flex-initial rounded-lg w-20 py-1 px-3"
                    onClick={() => handleLogin()}
                  >
                    
                    <span class="mytransition"></span>
                    <span class="mygradient"></span>
                    <span class="mylabel">Login</span>
                  </button>
                  <button
                    className="text-center hover:text-blue-500 font-normal rounded w-30 px-2.5"
                    type="button"
                    onClick={() => handleForgotPassword()}
                  >
                    FORGOT PASSWORD
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  className="w-full bg-green-500 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(e) => handleRegister(e)}
                >
                  REGISTER
                </button>
                <ToastContainer />
              </>
            )}

            <div className="mt-4 text-center">
              {!showRegister ? (
                <>
                  <p className="text-gray-400">
                    Don't have an account?{" "}
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setShowRegister(true)}
                    >
                      Sign up
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-400">
                    Already have an account?{" "}
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setShowRegister(false)}
                    >
                      Log in
                    </button>
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
