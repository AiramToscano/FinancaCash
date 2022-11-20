import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../utils/Api';
import style from '../PagesCss/login.module.scss';

function Login() {
  const MIN_LENGTH_PASSWORD = 8;
  const MIN_LENGTH_USERNAME = 3;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const userLogin = await apiLogin(username, password);
    if (userLogin) {
      const pessoa = {
        nome: userLogin.user.username,
        idaccount: userLogin.user.accountId,
        token: userLogin.token,
      };
      setError(false);
      window.localStorage.setItem('user', JSON.stringify(pessoa));
      navigate('/home');
    }
    setError(true);
  }

  useEffect(() => {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      navigate('/home');
    }
  }, []);

  return (
    <form id="login_form" className={style.formclass} onSubmit={loginClick}>
      <h4> Sign In</h4>
      <div className={style.formdiv}>
        <input
          type="username"
          className={style.fieldclass}
          value={username}
          placeholder="Username"
          autoComplete="on"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          className={style.fieldclass}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="btn">
        <button
          className={style.submitclass}
          type="submit"
          disabled={password.length < MIN_LENGTH_PASSWORD || username.length < MIN_LENGTH_USERNAME}
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </div>
      {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer login.
          </p>
        </div>
      )}
      <div className={style.infodiv}>
        <p>
          Ainda não é um usuário registrado?
          <a href="/register">
            Cadastre-se!
          </a>
        </p>
      </div>
    </form>
  );
}

export default Login;
