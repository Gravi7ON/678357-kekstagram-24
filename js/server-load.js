import {showErrorLoad} from './util.js';

const loadData = () => fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}. Попробуйте перезагрузить страницу.`);
  }).catch((err) => {
    showErrorLoad(`Ошибка получения данных с сервера. ${err}`);
  });


const postData = (body) => fetch(
  'https://24.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body,
  },
).then((response) => {
  if(response.ok) {
    return response;
  }
  throw new Error(`${response.status} - ${response.statusText}`);
});

export {loadData, postData};