import axios from 'axios';

export async function apiLogin(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3004/login', { username, password });
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiRegister(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3004/register', { username, password });
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiBalance(id: number, token: string) {
  try {
    const response = await axios.post(
      'http://localhost:3004/balance',
      { id },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiTransaction(
  iddebited: number,
  usercredited: string,
  value: number,
  token: string,
) {
  try {
    const response = await axios.post(
      'http://localhost:3004/transactions',
      { iddebited, usercredited, value },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.status;
  } catch (err) {
    return false;
  }
}

export async function apihistoricTransactionAll(
  id: number,
  token: string,
) {
  try {
    const response = await axios.post(
      'http://localhost:3004/transactions/all',
      { id },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiDebitedOrCredited(
  id: number,
  debiteOrcredite: string,
  token: string,
) {
  try {
    const response = await axios.post(
      'http://localhost:3004/transactions/debitedorcredited',
      { id, debiteOrCredite: debiteOrcredite },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiData(
  id: number,
  startDate: string,
  token: string,
) {
  try {
    const response = await axios.post(
      'http://localhost:3004/transactions/data',
      { id, startDate },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiDataCreditedDebited(
  id: number,
  startDate: string,
  debiteOrcredite: string,
  token: string,
) {
  try {
    const response = await axios.post(
      'http://localhost:3004/transactions/datadebitedcredited',
      { id, startDate, debiteOrCredite: debiteOrcredite },
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    return false;
  }
}
