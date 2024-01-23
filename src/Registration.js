import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Registration = () => {
  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const myNav = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    let url = "http://localhost:4000/students";
    axios.post(url, input).then((res) => {
      alert("Succesfully Registered!!!");
      myNav("/home");
    });
  };

  return (
    <>
      <div className="container-login">
        <div className="screen">
          <div className="screen__content">
            <h1> Registration Form</h1>

            {isLoading ? <Loader /> : ""}

            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  className="login__input"
                  placeholder="User name"
                  required
                  onChange={handleInput}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  name="email"
                  value={input.email}
                  className="login__input"
                  placeholder="Email"
                  required
                  onChange={handleInput}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  className="login__input"
                  placeholder="Password"
                  required
                  onChange={handleInput}
                />
              </div>
              <button className="button" onClick={handleSubmit}>
                <span className="button__text">Register Now</span>
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
