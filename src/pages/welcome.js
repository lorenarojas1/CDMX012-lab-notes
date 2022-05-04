import { useNavigate } from "react-router-dom";
import girlIcon from "../img/girlIcon.svg";
import googleIcon from "../img/googleIcon.svg";
import { useAuth } from "../context/authContext";

export default function WelcomePage() {

    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    };
    const signupClick = () => {
        navigate('/signup');
    };

    const handleGoogleSignin = async () => {
        await loginWithGoogle();
        navigate('/Blog')
    };

    return (
        <div class="container-welcome">
            <section class="box-container">
            <img class="girl-image"src={girlIcon} alt="girl-icon"></img>
                <p class="descriptionWelcome">The best app for <br/> organize your <br/> day...</p>
                <div class="box-buttons">
                <h1 class="titleWelcome">JOIN OUR <br/> TEAM</h1>
                    <button class="btn-welcome" on onClick={loginClick}>Login</button>
                    <p class="orText">-------------- or ---------------</p>
                    <button class="btn-welcome" on onClick={signupClick}>Sign up</button>
                    <br/>
                    <button class="btn-google"on onClick={handleGoogleSignin}>
                        <img class="icon-google"src={googleIcon} alt="google-icon" />
                        Continue with Google</button>
                </div>

            </section>
        </div>
    )
}