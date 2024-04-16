import { useState } from "react";
import registerImage from "../images/register.png";
export const Register = () => {
 const [user, setUser] = useState({
     username : "",
     email : " ",
     phone : " ",
     password : "",
 });

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
 
 
 
 
  return (
    <>
      <section>
        <main>
          <div className="section-registeration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src={registerImage}
                  alt="A girl is trying to do registration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form>
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
                      placeholder="Phone number"
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
