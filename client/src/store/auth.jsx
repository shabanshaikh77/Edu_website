import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services,setServices] = useState([]);
  const authorizationtoken = `Bearer ${token}`;



  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };



  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);



  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return  localStorage.removeItem("token");
  };

  // JWT AUTHORIZATION
  
                                              
  const userAuthentication = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationtoken,
        },
      });
 
      if (response.ok) {
        const data = await response.json();

        // our main goal is to get the user data 
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  // Fetchi services from bacend

  const getServiceData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const services = await response.json();
        setServices(services.data);
      }
      console.log("service", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceData();
    userAuthentication();
  }, []);

return (
  <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationtoken}}>
    {children}
  </AuthContext.Provider>
);
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};