import { useState } from "react";
import { useNavigate} from "react-router-dom";
import registerImage from "../images/register.png";
import {useAuth} from "../store/auth";
import {  toast } from 'react-toastify';


export const Register = () => {
 const [user, setUser] = useState({
     username : "",
     email : " ",
     phone : " ",
     password : "",
 });

 const navigate  = useNavigate();
 const {storeTokenInLS} = useAuth();
  
 const handleInput = (e) =>
 {
      console.log(e);
      let name  = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name] : value,
      });
 }

 const handleform = async (e) =>
 {
       e.preventDefault();
       console.log(user);
       try{
       const response  = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
         method: "POST",
         headers: {
        "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
       });
       const res_data = await response.json();
       console.log("Res from server", res_data)
      if(response.ok)
        {
           
          storeTokenInLS(res_data.token);
          setUser({ username : "",
          email : " ",
          phone : " ",
          password : "",});
          navigate("/Login");
          toast.success(res_data.message);
        }
      else{
        toast.error(res_data.extradetails ? res_data.extradetails : res_data.message);
      }
      }
      catch(error)
      {
            console.log("register", error);
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
                  src={registerImage}
                  alt="A girl is trying to do registration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="section-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleform}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      value = {user.username}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      value = {user.email}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Phonenumber"
                      id="phone"
                      value = {user.phone}
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
                      value = {user.password}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <br />
                  <button type="submit" className=" btn btn-submit">
                    Register Now
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
