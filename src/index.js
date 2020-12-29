import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers';



// Создаем store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// импортируем store
// import {createStore} from "redux";
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const list = document.querySelectorAll('.list')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
//
// // Получение значение store
// store.subscribe(() => {
//     // console.log(store.getState())
//     list.innerHTML = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
//     trackInput.value = '';
// })
//
//
//
// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// });
