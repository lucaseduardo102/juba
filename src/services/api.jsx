import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jubas-backend.onrender.com/',
    headers: {
      "Content-Type": 'application/json'
    }
});

api.get('/user')
    .then(response => {
        console.log('Resposta da rota /user:', response.data);
    })
    .catch(error => {
        console.error('Erro na requisição /user:', error);
    });

