import resgisterIcon from "../img/registerIcon.svg";
import backIcon from "../img/backIcon.svg";
import emailIcon from "../img/emailIcon.svg";
import passwordIcon from "../img/passwordIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "../App.css"

export default function LoginPage() {
  const navigate = useNavigate();




  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");;

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginBtn = async (e) => {
    try {
      await loginUser();
    navigate('/dashboard');
    }
    catch (error){
      console.log(error);
    }
    }




  return (
  <div className="container-login">
    <div class="register-container">
      <img class="back-icon" src={backIcon} alt="back-icon"></img>
      <img class="mid-icon" src={resgisterIcon} alt="register-icon"></img>
        <h1> Welcome back</h1>
        <h3> Login to your account</h3>
        <div class="box-form">
        <img class="icon" src={emailIcon} alt="email-icon"></img>
        <input class="input-form"
          placeholder="email@example.com"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        </div>
        <br></br>
        <div class="box-form">
        <img class="icon" src={passwordIcon} alt="password-icon"></img>
        <input class="input-form"
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        </div>
        <p class="option-password">
          <input class="input-checkbox" type="checkbox" id="rememberMe" name="rememberMe" value="Remember me"></input>
          <label for="rememberMe">Remember me</label>
          <a class="link-ref" href="#/">Forgot Password?</a>
        </p>
        <button class="btn-form" onClick={loginBtn}> Login</button>
        <div class="link-signup">
        <p class="paragraph">Don't have an account?</p> <br/>
        <a class="link-ref" href="/signup">Sign up</a>
        </div>
      </div>

    </div>
  )
}