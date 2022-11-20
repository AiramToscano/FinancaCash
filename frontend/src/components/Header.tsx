import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../PagesCss/header.module.scss';

function Header() {
  const navigate = useNavigate();
  const [usernameAccount, setusernameAccount] = useState('');
  const [account, SetAccount] = useState('');

  function LocalStorage() {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findUserIdAccont = JSON.parse(userId);
      return findUserIdAccont;
    }
    return false;
  }

  function handleSubmitLogoff() {
    localStorage.removeItem('user');
    navigate('/login');
  }

  function handleSubmithistoric() {
    navigate('/transactions');
  }

  function handleSubmithome() {
    navigate('/home');
  }

  useEffect(() => {
    const userId = LocalStorage();
    if (userId) {
      SetAccount(userId.idaccount);
      setusernameAccount(userId.nome);
    }
    if (!userId) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <header className={style.header}>
        <div>
          <span>
            {' '}
            {usernameAccount}
            {' '}
          </span>
        </div>
        <div>
          <span>
            Numero da conta:
            {' '}
            {account}
            {' '}
          </span>
        </div>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmithistoric}
        >
          Ver transações
        </button>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmithome}
        >
          Home
        </button>
        <button
          className={style.buttom}
          type="button"
          onClick={handleSubmitLogoff}
        >
          Logoff
        </button>
      </header>
    </div>
  );
}

export default Header;
