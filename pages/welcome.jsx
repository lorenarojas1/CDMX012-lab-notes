import { useNavigate } from 'react-router-dom';
import girlIcon from '../img/girlIcon.svg';
import googleIcon from '../img/googleIcon.svg';
import { useAuth } from '../context/authContext';

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
    navigate('/Blog');
  };

  return (
    <div className="container-welcome">
      <section className="box-container">
        <img className="girl-image" src={girlIcon} alt="girl-icon" />
        <p className="descriptionWelcome">
          The best app for
          {' '}
          <br />
          {' '}
          organize your
          {' '}
          <br />
          {' '}
          day...
        </p>
        <div className="box-buttons">
          <h1 className="titleWelcome">
            JOIN OUR
            {' '}
            <br />
            {' '}
            TEAM
          </h1>
          <button type="button" className="btn-welcome" on onClick={loginClick}>Login</button>
          <p className="orText">-------------- or ---------------</p>
          <button type="button" className="btn-welcome" on onClick={signupClick}>Sign up</button>
          <br />
          <button type="button" className="btn-google" on onClick={handleGoogleSignin}>
            <img className="icon-google" src={googleIcon} alt="google-icon" />
            Continue with Google

          </button>
        </div>

      </section>
    </div>
  );
}
