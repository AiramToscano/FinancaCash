import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRegister } from '../utils/Api';
import style from '../pagesCss/login.module.scss';

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
    <form data-testid="container" className={style.formclass} onSubmit={loginClick}>
      <h4>Crie sua conta na NgCash</h4>
      <br />
      <div className={style.formdiv}>
        <p>Username:</p>
        <input
          type="username"
          className={style.fieldclass}
          value={username}
          autoComplete="on"
          onChange={(event) => setUsername(event.target.value)}
        />
        <small>
          <li>Username não pode ter espaços.</li>
        </small>
        <br />
        <p>Senha:</p>
        <input
          type="password"
          className={style.fieldclass}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <small>
          <li>Uma letra maiúscula.</li>
          <li>Um caracter especial.</li>
          <li>Pelo menos 8 digitos.</li>
        </small>
      </div>
      <div className="btn">
        <button
          type="submit"
          className={style.submitclass}
          disabled={password.length < MIN_LENGTH_PASSWORD || username.length < MIN_LENGTH_USERNAME}
          onClick={handleSubmit}
        >
          Continuar
        </button>
      </div>
      <br />
      {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer seu cadastro.
          </p>
        </div>
      )}
      <div className={style.infodiv}>
        <p>
          Você ja possui conta?
          <a href="/login">
            Faça Login!
          </a>
        </p>
      </div>
    </form>
  );
}

export default Register;
