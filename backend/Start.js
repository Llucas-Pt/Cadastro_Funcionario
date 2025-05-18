const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const apiURL = 'https://cadastro-funcionario-indol.vercel.app';

fetch(`${apiURL}/Cadastrotb`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
