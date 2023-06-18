import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'

// import dotenv from 'dotenv';
// dotenv.config();

import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
