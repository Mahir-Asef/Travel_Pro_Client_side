import React from "react";
import {  Button } from "react-bootstrap";
import {  useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle,handleRegistration,isLogIn,handleNameChange,handleEmailChange,handlePasswordChange,toggleLogIn,handleResetPassword,error} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        console.log(result);
        history.push(redirect_url)
  
      })

  }
  //return process and login dect register then same as handle google

  
  
  return (
    <div className="mx-5 w-50 mx-auto">
    <form onSubmit={handleRegistration}>
      <h3 className={"text-primary text-center"}>Please {isLogIn ? 'Login' : 'Sign Up'}</h3>
 {!isLogIn && <div className="row mb-3">
   <label  className="col-sm-2 col-form-label">User Name</label>
   <div className="col-sm-10">
     <input onChange={handleNameChange} type="text" className="form-control" required />
   </div>
 </div>}
 <div className="row mb-3">
   <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
   <div className="col-sm-10">
     <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
   </div>
 </div>
 <div className="row mb-3">
   <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
   <div className="col-sm-10">
     <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
   </div>
 </div>
 <div className="row mb-3">
   <div className="col-sm-10 offset-sm-2">
     <div className="form-check">
       <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1"/>
       <label className="form-check-label" htmlFor="gridCheck1">
         Already Sign Up ?
       </label>
     </div>
   </div>
 </div>
 <div  className="row mb-3 text-danger">{error}</div>
 <button type="submit" className="btn me-3 mb-2 btn-primary ">{ isLogIn ? 'Login' : 'Sign Up'}</button>
 <button type="button" onChange={handleResetPassword} className="btn btn-warning mb-2 text-white">Reset Password</button>

</form>
        <Button
          className="m-3 w-75"
          variant="primary"
          onClick={handleGoogleLogin}
        >
          Sign In With Google
        </Button>
   </div>

    
  );
};

export default Login;