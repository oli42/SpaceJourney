import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Register from './Components/Register'
import { Route, Routes} from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';

import Home from './Home'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
)
