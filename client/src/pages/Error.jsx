import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error = () => {
  return (
    
    <>
    <section className="error-page">
        <div className=" content">
            <h1 className="header">404</h1>
            <h4>Sorry! Page not found</h4>
            <p>
                Oops! It seems like the page you are trying to access does not exist.
                If you feel their is an issue, feel free to report it, and we will look
                into it. 
            </p>
            <div className="btns">
               <NavLink to = "/"> Return Home</NavLink>
               <NavLink to = "/contact"> Report Problem</NavLink>
            </div>
        </div>

    </section>
    </>
  );
}
