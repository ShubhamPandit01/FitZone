import { useRef } from "react";
import { Link } from "react-router-dom";



const Login = (props) => {

  const input = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = input.email.current.value;
    const password = input.password.current.value;

    if (!email || !password) {
      alert("Both fields are required.");
      return;
    }

    if (!email.includes('@')) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    console.log("Login Data:", email, password);
    alert(`${email} logged in successfully!`);
  };


  return (
    <>
      <div className="user_container">
        <form onSubmit={handleSubmit} className="user_form">
          <h1>Login</h1>

          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder="Enter your E-mail" name="email" required ref={input.email}/>

          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Enter your password" name="password" required ref={input.password}/>

          <button type="submit">Login</button>

          <div className="login_link">
              <p>Already have an account?</p>   
              <Link to="/user" onClick={() => props.setUserDisplay(false)}>
                  <h3>Login</h3>
              </Link>
          </div>
              

        </form>
      </div>
    </>
  );
};

export default Login;
