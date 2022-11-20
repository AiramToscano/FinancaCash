import React, { useState, useEffect } from 'react';
import {
  apihistoricTransactionAll,
  apiDebitedOrCredited,
  apiData,
  apiDataCreditedDebited,
} from '../utils/Api';
import { HistoricTransaction } from '../interfaces/HistoricIntefaces';
import Header from '../components/Header';
import style from '../PagesCss/historictransactions.module.scss';

function HistoricTransactions() {
  const [historic, setHistoric] = useState<HistoricTransaction[]>([]);
  const [filterData, setfilterData] = useState('');
  const [filterDebitedOrCredited, setFilterDebitedOrCredited] = useState('');
  const [error, setError] = useState(false);

  function LocalStorage() {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      const findUserIdAccont = JSON.parse(userId);
      return findUserIdAccont;
    }
    return false;
  }

  async function handleHistoric(id: number, token: string) {
    const historicArray = await apihistoricTransactionAll(id, token);
    setHistoric(historicArray.users);
  }

  async function handleHistoricClear(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const userId = LocalStorage();
    const historicArray = await apihistoricTransactionAll(userId.idaccount, userId.token);
    setHistoric(historicArray.users);
    setfilterData('');
    setFilterDebitedOrCredited('');
  }

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const userId = LocalStorage();
    if (userId) {
      if (filterDebitedOrCredited !== '' && filterData === '') {
        const array = await
        apiDebitedOrCredited(userId.idaccount, filterDebitedOrCredited, userId.token);
        setHistoric(array.users);
      }
      if (filterDebitedOrCredited === '' && filterData !== '') {
        const array = await
        apiData(userId.idaccount, filterData, userId.token);
        setHistoric(array);
        if (!array) setError(true);
      }
      if (filterDebitedOrCredited !== '' && filterData !== '') {
        const array = await
        apiDataCreditedDebited(userId.idaccount, filterData, filterDebitedOrCredited, userId.token);
        setHistoric(array);
        if (!array) setError(true);
      }
      setTimeout(() => setError(false), 2000) as unknown as number;
    }
  }

  useEffect(() => {
    const userId = LocalStorage();
    if (userId) {
      handleHistoric(userId.idaccount, userId.token);
    }
  }, []);

  return (
    <div>
      <Header />
      <form className={style.div}>
        <input
          onChange={(e) => setfilterData(e.target.value)}
          className={style.fieldclass}
          name="filterData"
          placeholder="Digite a data"
          value={filterData}
        />
        <select
          className={style.fieldclass}
          onChange={(e) => setFilterDebitedOrCredited(e.target.value)}
          value={filterDebitedOrCredited}
          name="filterByComp"
        >
          <option>Selecione o filtro</option>
          <option value="credited">Transferencias Recebidas</option>
          <option value="debited">Transferencias Realizadas</option>
        </select>
        <button
          type="submit"
          className={style.submitclass}
          onClick={handleSubmit}
        >
          Filtrar
        </button>
        <button
          type="submit"
          className={style.submitclass}
          onClick={handleHistoricClear}
        >
          Limpar filtro
        </button>
      </form>
      {error && (
        <div className={style.errormessage}>
          <p>
            Data invalida ou sem registros.
          </p>
        </div>
      )}
      <br />
      <br />
      <div>
        <h3 className={style.div2}>Historico de Transações: </h3>
      </div>
      <div className={style.div2}>
        <table className={style.styledtable}>
          <thead>
            <tr>
              <th>Conta Creditada</th>
              <th>Conta Debitada</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Valor</th>
            </tr>
          </thead>
          {historic && historic.length > 0 ? historic.map((e) => (
            <tbody key={e.id}>
              <tr>
                <td>{e.creditedAccountId}</td>
                <td>{e.debiteAccountId}</td>
                <td>{e.createdAt?.split('T')[0]}</td>
                <td>{e.createdAt?.split('T')[1].split('.')[0]}</td>
                <td>
                  R$:
                  {' '}
                  {e.value}
                </td>
              </tr>
            </tbody>
          )) : null}
        </table>
      </div>
    </div>
  );
}

export default HistoricTransactions;
