import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBalance, apiTransaction } from '../utils/Api';

function Transactions() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [valor, setValor] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  function LocalStorage() {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findUserIdAccont = JSON.parse(userId);
      return findUserIdAccont;
    }
    return false;
  }

  function loginClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function handleSaldo(id: number, token: string) {
    const userLogin = await apiBalance(id, token);
    setBalance(userLogin.userBalance);
  }

  async function handleVerifyApi(idaccount: number, token: string) {
    const userLogin = await apiTransaction(
      idaccount,
      username,
      Number(valor),
      token,
    );
    if (!userLogin || userLogin !== 200) {
      setError(true);
      setSucess(false);
      setUsername('');
      setValor('');
    }
    if (userLogin === 200) {
      setSucess(true);
      setError(false);
      setUsername('');
      setValor('');
      handleSaldo(idaccount, token);
    }
    setTimeout(() => setSucess(false), 2000) as unknown as number;
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    const userId = LocalStorage();
    event.preventDefault();
    if (userId && Number(valor) > 0) {
      handleVerifyApi(userId.idaccount, userId.token);
    }
    if (!userId || Number(valor) <= 0) {
      setError(true);
      setSucess(false);
    }
  }

  useEffect(() => {
    const userId = LocalStorage();
    if (userId) {
      handleSaldo(userId.idaccount, userId.token);
    }
    if (!userId) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <div>
        <span>
          Saldo:
          R$
          {' '}
          {balance}
          {' '}
          BRL
        </span>
      </div>
      <form data-testid="container" onSubmit={loginClick}>
        <div className="inputs">
          <input
            type="number"
            value={valor}
            autoComplete="on"
            min="1"
            onChange={(event) => setValor(event.target.value)}
          />
          <input
            type="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="btn">
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Transferir
          </button>
        </div>
        {error && (
          <div className="error-message">
            <p>
              Não foi possível fazer a Transferencia.
            </p>
          </div>
        )}
        {sucess && (
          <div className="sucess-message">
            <p>
              Transferencia realizada com sucesso!
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Transactions;
