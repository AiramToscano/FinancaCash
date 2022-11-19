import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRegister } from '../utils/Api';

function Register() {
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
    const Validuser = /\s/g.test(username);
    const userLogin = await apiRegister(username, password);
    if (!Validuser && userLogin) {
      setError(false);
      navigate('/login');
    }
    setError(true);
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
        <small>
          <li>username não pode ter espaços.</li>
        </small>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <small>
          <li>1 letra maiúscula.</li>
          <li>1 caracter especial.</li>
          <li>Pelo menos 8 digitos.</li>
        </small>
      </div>
      <div className="btn">
        <button
          type="submit"
          disabled={password.length < MIN_LENGTH_PASSWORD || username.length < MIN_LENGTH_USERNAME}
          onClick={handleSubmit}
        >
          REGISTRAR
        </button>
      </div>
      {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer seu cadastro.
          </p>
        </div>
      )}
    </form>
  );
}

export default Register;
