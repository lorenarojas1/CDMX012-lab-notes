import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import signupIcon from '../img/signupIcon.svg';
import backIcon from '../img/backIcon.svg';
import emailIcon from '../img/emailIcon.svg';
import passwordIcon from '../img/passwordIcon.svg';

export default function SignUpPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleBack = () => {
    navigate('/');
  };

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate('/Blog');
      // console.log(user);
    } catch (errorMessage) {
      if (errorMessage.code === 'auth/internal-error') {
        setError('Invalid email');
      }
      setError(errorMessage.message);
    }
  };

  return (
    <div className="container-login">
      {error && <p>{error}</p>}

      <form className="register-container" onSubmit={handleSubmit}>
        <button type="button" className="back-btn" onClick={handleBack}>
          <img className="back-icon" src={backIcon} alt="back-icon" />
        </button>
        <img className="mid-icon" src={signupIcon} alt="signup-icon" />
        <h1> Register</h1>
        <h3> Create your new account</h3>
        <div className="box-form">
          <img className="icon" src={emailIcon} alt="email-icon" />
          <input
            className="input-form"
            type="email"
            name="email"
            placeholder="email@example.com"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="box-form">
          <img className="icon" src={passwordIcon} alt="password-icon" />
          <input
            className="input-form"
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            onChange={handleChange}
          />
        </div>
        <br />

        <p className="paragraph">
          By signing up you’ve agree to Our Terms of Use And Privacy Notice
          <a className="link-ref-signup" href="#/">Our Terms of Use And Privacy Notice</a>
          {' '}
        </p>

        <button type="button" className="btn-form" onClick={handleSubmit}>Sign up</button>
        <p className="paragraph">
          Already have an account?
          <a className="link-ref-signup" href="/login">Login</a>
        </p>
      </form>

    </div>
  );
}
