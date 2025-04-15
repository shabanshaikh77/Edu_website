import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../images/login.png";
import { useAuth } from "../store/auth";
import {  toast } from 'react-toastify';

//const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleform = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("Res from server", res_data);
      if (response.ok) {
        console.log("Res from server", res_data);
        storeTokenInLS(res_data.token);
        
        toast.success(res_data.message);
        setUser({ email: "", password: "" });

        navigate("/ ");
      } else {
        toast.error(res_data.extradetails ? res_data.extradetails : res_data.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-auth">
            <div className="container grid grid-two-cols">
              <div className="auth-image">
                <img
                  src={loginImage}
                  alt="A girl is trying to do login"
                  width="500"
                  height="500"
                />
              </div>
              <div className="section-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleform}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      value={user.email}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      id="password"
                      value={user.password}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <br />
                  <button type="submit" className=" btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
