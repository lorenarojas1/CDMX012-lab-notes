
import "./App.css";

import resgisterIcon from "./registerIcon.svg"



    <div className="App">
      <div class="register-container">
      <img src={resgisterIcon} alt="register-icon"></img>
        <h1> Welcome back</h1>
        <h3> Login to your account</h3>
        <input
          placeholder="email@example.com"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <br></br>
        <input type="checkbox" id="rememberMe" name="rememberMe" value="Remember me"></input>
        <label for="rememberMe">Remember me   </label>
        <a href="#/">Forgot Password?</a><br></br>
        <button onClick={register}> Login</button>
        <p>Don't have an account?</p>
        <a href="#/">Sign up</a>

        <p>------------------ or --------------------</p>
        <button onClick={register}>Continue with Google</button>
      </div>

    </div>



