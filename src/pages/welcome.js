import { Link, useNavigate } from "react-router-dom";
import girlIcon from "../img/girlIcon.svg";
import googleIcon from "../img/googleIcon.svg";
import "../App.css"

const userId = 10;

export default function WelcomePage() {

    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    }
    const signupClick = () => {
        navigate('/signup');
    }
    return (
        <div class="container-principal">
            <section class="box-container">
            <img src={girlIcon} alt="girl-icon"></img>
                <h2>The best app for <br/> organize your <br/> day...</h2>
                <div>
                <h1>JOIN OUR <br/> TEAM</h1>
                    <button on onClick={loginClick}>Login</button>
                    <p>------------- or ---------------</p>
                    <button on onClick={signupClick}>Sign up</button>
                    <br/>
                    <button on onClick={signupClick}>
                        <img src={googleIcon} alt="google-icon" />
                        Continue with Google</button>
                </div>
                <Link to={`/users/${userId}`}>Usuarios</Link>
            </section>
        </div>
    )
}