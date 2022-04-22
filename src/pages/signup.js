import signupIcon from "../img/signupIcon.svg";
import backIcon from "../img/backIcon.svg";
import emailIcon from "../img/emailIcon.svg";
import passwordIcon from "../img/passwordIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
 onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export default function SignUpPage() {
  const navigate = useNavigate();

 const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
    setUser(currentUser);
  }else{
    setUser(null);
  }
  });


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register =  () => {
    createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

    }

  const loginBtn = async (e) => {
    try {
      await register();
    navigate('/dashboard');
    }
    catch (error){
      console.log(error);
    }
 
 
    }




  return (
  <div class="container-login">
    <div class="register-container">
      <img class="back-icon" src={backIcon} alt="back-icon"></img>
      <img class="mid-icon" src={signupIcon} alt="signup-icon"></img>
        <h1> Register</h1>
        <h3> Create your new account</h3>
        <div class="box-form">
        <img class="icon" src={emailIcon} alt="email-icon"></img>
        <input class="input-form"
          placeholder="email@example.com"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
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
            setRegisterPassword(event.target.value);
          }}
        />
        </div>
        <br></br>
        <p class="paragraph">By signing up you’ve agree to Our Terms of Use And Privacy Notice </p>
        <a class="link-ref" href="#/">Our Terms of Use And Privacy Notice</a>
        <button class="btn-form" onClick={loginBtn}>Sign up</button>
        <p class="paragraph">Already have an account?</p>
        <a class="link-ref" href="/login">Login</a>



      </div>

    </div>
  )
}