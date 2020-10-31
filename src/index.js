import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let postsData = [
  { id: 1, message: 'Hi how are you', likesCount: 12 },
  { id: 2, message: 'Hi i`am ok', likesCount: 14 },
  { id: 3, message: 'Let`s go to swim', likesCount: 19 },
];


let peoplesData = [
  { id: 1, name: 'Оля' },
  { id: 2, name: 'Егор' },
  { id: 3, name: 'Рома' },
  { id: 4, name: 'Рашид' },
  { id: 5, name: 'Коля' },
  { id: 6, name: 'Саша' }
];
let messagesData = [
  { id: 1, message: 'Привет как дела?' },
  { id: 2, message: 'Норм учу React' },
  { id: 3, message: 'Когда на собес?' },
  { id: 4, message: 'В декабре' },
  { id: 5, message: 'Круто удачи!' },
  { id: 6, message: 'Благодарю!' }
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} peoplesData={peoplesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
