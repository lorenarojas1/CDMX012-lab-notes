import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import resgisterIcon from '../img/registerIcon.svg';
import backIcon from '../img/backIcon.svg';
import emailIcon from '../img/emailIcon.svg';
import passwordIcon from '../img/passwordIcon.svg';

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/Blog');
      // console.log(user);
    } catch (errors) {
      if (errors.code === 'auth/internal-error') {
        setError('Invalid email');
      }
      setError(error.message);
    }
  };

  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className="container-login">
      {error && <p>{error}</p>}
      <form className="register-container" onSubmit={handleSubmit}>
        <button type="button" className="back-btn" onClick={handleBack}><img className="back-icon" src={backIcon} alt="back-icon" /></button>
        <img className="mid-icon" src={resgisterIcon} alt="register-icon" />
        <h1> Welcome back</h1>
        <h3> Login to your account</h3>
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
        <p className="option-password">
          <input className="input-checkbox" type="checkbox" id="rememberMe" name="rememberMe" value="Remember me" />
          <label className="label-checkbox" htmlFor="rememberMe">Remember me</label>
          <a className="link-ref" href="#/">Forgot Password?</a>
        </p>
        <button type="button" className="btn-form" onClick={handleSubmit}> Login</button>
        <div className="link-login">
          <p className="paragraph"> Dont have an account?</p>
          {' '}
          <br />
          <a className="link-ref" href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}
