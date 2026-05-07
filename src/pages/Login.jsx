import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Globe, Monitor } from 'lucide-react';
import './Login.css';
import logo from '../assets/images/logop.svg';

const Login = () => {
  const [email, setEmail]               = useState('');
  const [password, setPassword]         = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/dashboard'), 1200);
  };

  return (
    <div className="lgn">

      <div className="lgn__left">

        <div className="lgn__logo-row">
          <img src={logo} alt="Fontts" className="lgn__logo-img" />
          <span className="lgn__logo-text">Fontts</span>
        </div>

        <div className="lgn__badge">Coordinator Panel</div>

        <h2 className="lgn__heading">Welcome back.</h2>
        <p className="lgn__sub">Log in to access the Fontts coordinator dashboard.</p>

        <form className="lgn__form" onSubmit={handleLogin}>

          <div className="lgn__field">
            <label className="lgn__label" htmlFor="lgn-email">Email Address</label>
            <input
              id="lgn-email"
              type="email"
              className="lgn__input"
              placeholder="coordinator@fontts.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="lgn__field lgn__field--mt">
            <label className="lgn__label" htmlFor="lgn-pass">Password</label>
            <div className="lgn__input-wrap">
              <input
                id="lgn-pass"
                type={showPassword ? 'text' : 'password'}
                className="lgn__input lgn__input--pwd"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="lgn__eye"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
              >
                {showPassword
                  ? <EyeOff size={20} strokeWidth={1.8} />
                  : <Eye    size={20} strokeWidth={1.8} />}
              </button>
            </div>
          </div>

          <div className="lgn__forgot-row">
            <span className="lgn__forgot">Forgot password?</span>
          </div>

          <button
            type="submit"
            className={`lgn__btn${loading ? ' lgn__btn--loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in…' : 'Log In →'}
          </button>

          <div className="lgn__divider">
            <span className="lgn__divider-line" />
            <span className="lgn__divider-text">or continue with</span>
            <span className="lgn__divider-line" />
          </div>

          <div className="lgn__sso">
            <button type="button" className="lgn__sso-btn">
              <Globe size={16} strokeWidth={1.8} />
              Continue with Google
            </button>
            <button type="button" className="lgn__sso-btn">
              <Monitor size={16} strokeWidth={1.8} />
              Continue with Microsoft
            </button>
          </div>

          <div className="lgn__2fa">
            <ShieldCheck size={15} strokeWidth={1.8} color="#22C55E" />
            <span className="lgn__2fa-text">Protected by 2-Factor Authentication</span>
          </div>

        </form>
      </div>

      <div className="lgn__right">

        <div className="lgn__glow" />

        <svg className="lgn__drop lgn__drop--sm-tr" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="dropGradSm" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#C060FF" />
              <stop offset="100%" stopColor="#A020F0" />
            </radialGradient>
          </defs>
          <path d="M 60 10 C 60 10 105 50 105 90 A 45 45 0 1 1 15 90 C 15 50 60 10 60 10 Z" fill="url(#dropGradSm)" />
        </svg>

        <svg className="lgn__drop lgn__drop--main" viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="dropGradMain" cx="50%" cy="62%" r="50%">
              <stop offset="0%" stopColor="#C060FF" />
              <stop offset="100%" stopColor="#A020F0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 170 20 C 170 20 300 120 300 220 A 130 130 0 1 1 40 220 C 40 120 170 20 170 20 Z"
            fill="url(#dropGradMain)"
            filter="url(#glow)"
          />
        </svg>

        <svg className="lgn__drop lgn__drop--sm-bl" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="dropGradBl" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#C060FF" />
              <stop offset="100%" stopColor="#A020F0" />
            </radialGradient>
          </defs>
          <path d="M 80 15 C 80 15 140 65 140 115 A 60 60 0 1 1 20 115 C 20 65 80 15 80 15 Z" fill="url(#dropGradBl)" />
        </svg>

        <div className="lgn__right-body">
          <h3 className="lgn__right-heading">Full control.<br />Complete visibility.</h3>
          <p className="lgn__right-sub">
            Monitor every project, designer, and client on the platform
            from one intelligent dashboard.
          </p>
          <div className="lgn__pills">
            <span className="lgn__pill">Real-time tracking</span>
            <span className="lgn__pill">Checkpoint control</span>
            <span className="lgn__pill">Dispute resolution</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
