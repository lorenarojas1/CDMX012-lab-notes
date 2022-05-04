import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import signupIcon from "../img/signupIcon.svg";
import backIcon from "../img/backIcon.svg";
import emailIcon from "../img/emailIcon.svg";
import passwordIcon from "../img/passwordIcon.svg";

export default function SignUpPage() {

  const [user, setUser] = useState({
    email: '',
    password:'',
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] =useState();

  const handleBack = () => {
    navigate('/');
};

  const handleChange =({target:{name, value}}) => {
    console.log(name, value);
    setUser({...user, [name]: value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
      await signup(user.email, user.password)
      navigate('/Blog')
      console.log(user)
    } catch (error) {
      if(error.code === "auth/internal-error") {
        setError("Invalid email");
      }
      setError(error.message);
    }
  }

  return (
  <div class="container-login">
    {error && <p>{error}</p>}

    <form class="register-container" onSubmit={handleSubmit}>
      <button class="back-btn"onClick={handleBack}><img class="back-icon" src={backIcon} alt="back-icon"></img></button>
      <img class="mid-icon" src={signupIcon} alt="signup-icon"></img>
        <h1> Register</h1>
        <h3> Create your new account</h3>
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
        <br></br>

        <p class="paragraph">By signing up you’ve agree to Our Terms of Use And Privacy Notice<a class="link-ref-signup" href="#/">Our Terms of Use And Privacy Notice</a> </p>
        

        <button class="btn-form" onClick={handleSubmit}>Sign up</button>
      <p class="paragraph">Already have an account?<a class="link-ref-signup" href="/login">Login</a></p>
      </form>

    </div>
  )
}