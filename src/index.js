import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './components/Profile/MyPosts/Post/Post';
import People from './components/Dialogs/People/People';
import Message from './components/Dialogs/Message/Message';


let postsData = [
  { id: 1, message: 'Hi how are you', likesCount: 12 },
  { id: 2, message: 'Hi i`am ok', likesCount: 14 },
  { id: 3, message: 'Let`s go to swim', likesCount: 19 },
];

export let postItem = postsData.map((p) => (<Post message={p.message} likesCount={p.likesCount} />))

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
export let peopleElements = peoplesData.map((p) => (<People name={p.name} id={p.id} />))
export let messageElements = messagesData.map((m) => (<Message message={m.message} />))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
