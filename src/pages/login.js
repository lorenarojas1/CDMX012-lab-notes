import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import resgisterIcon from "../img/registerIcon.svg";
import backIcon from "../img/backIcon.svg";
import emailIcon from "../img/emailIcon.svg";
import passwordIcon from "../img/passwordIcon.svg";

export default function LoginPage() {

  const [user, setUser] = useState({
    email: '',
    password:'',
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] =useState();

  const handleChange =({target:{name, value}}) => {
    console.log(name, value);
    setUser({...user, [name]: value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await login(user.email, user.password)
      navigate('/Blog')
      console.log(user)
    } catch (error) {
      if(error.code === "auth/internal-error") {
        setError("Invalid email");
      }
      setError(error.message);
    }
  }

  const handleBack = () => {
    navigate('/');
};
  return (
  <div className="container-login">
      {error && <p>{error}</p>}
    <form class="register-container" onSubmit={handleSubmit}>
      <button class="back-btn"onClick={handleBack}><img class="back-icon" src={backIcon} alt="back-icon"></img></button>
      <img class="mid-icon" src={resgisterIcon} alt="register-icon"></img>
        <h1> Welcome back</h1>
        <h3> Login to your account</h3>
        <div class="box-form">
        <img class="icon" src={emailIcon} alt="email-icon"></img>
        <input class="input-form"
          type="email"
          name="email"
          placeholder="email@example.com"
          onChange={ handleChange }
        />
        </div>
        <br></br>
        <div class="box-form">
        <img class="icon" src={passwordIcon} alt="password-icon"></img>
        <input class="input-form"
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          onChange= { handleChange }
        />
        </div>
        <p class="option-password">
          <input class="input-checkbox" type="checkbox" id="rememberMe" name="rememberMe" value="Remember me"></input>
          <label class="label-checkbox"for="rememberMe">Remember me</label>
          <a class="link-ref" href="#/">Forgot Password?</a>
        </p>
        <button class="btn-form" onClick={handleSubmit}> Login</button>
        <div class="link-login">
        <p class="paragraph">Don't have an account?</p> <br/>
        <a class="link-ref" href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  )
}