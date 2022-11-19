import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../utils/Api';

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

  function handleSubmitRegister() {
    navigate('/register');
  }

  return (
    <form data-testid="container" onSubmit={loginClick}>
      <div className="inputs">
        <input
          type="username"
          value={username}
          autoComplete="on"
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="btn">
        <button
          type="submit"
          disabled={password.length < MIN_LENGTH_PASSWORD || username.length < MIN_LENGTH_USERNAME}
          onClick={handleSubmit}
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={handleSubmitRegister}
        >
          REGISTRAR
        </button>
      </div>
      {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer login.
          </p>
        </div>
      )}
    </form>
  );
}

export default Login;
