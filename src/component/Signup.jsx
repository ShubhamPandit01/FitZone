import { useRef } from "react"
import { Link } from "react-router-dom";

const Signup = (props) => {

    const input = {
        name: useRef(null),
        email: useRef(null),
        password: useRef(null),
        confirmPassword: useRef(null),

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = input.name.current.value;
        const email = input.email.current.value;
        const password = input.password.current.value;
        const confirmPassword = input.confirmPassword.current.value;

        if (!name || !email || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }

        if (!name.includes(' ')) {
            alert("Please enter your full name.");
            return;
        }

        if (!email.includes('@')) {
            alert("Please enter your email correctly.");
            return;
        }

        if (password.length < 6) {
            alert("Password length must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log("Data:", name, email, password);
        alert(`${name} signed up successfully!`);
    };


  return (
    <>
        <div className="user_container">
            
            <form onSubmit={handleSubmit} className="user_form">
                <h1>Sign Up</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter your name" name="name" required ref={input.name}/>
                <label htmlFor="email">E-mail:</label>
                <input type="email" placeholder="Enter your E-mail" name="email" required ref={input.email}/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" name="password" required ref={input.password}/>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" placeholder="Confirm Password" name="confirmPassword" required ref={input.confirmPassword}/>
                <button type="submit">Submit</button>

                <p>
                    Already have an account?   
                    <Link to="/user" onClick={() => props.setUserDisplay(false)}>
                        <h3 className="login-link">Login</h3>
                    </Link>
                </p>    
            </form>
        </div>
    </>
  )
}


export default Signup