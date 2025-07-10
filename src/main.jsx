import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LocationProvider } from './contexts/LocationSearch.jsx'
import { store } from './redux/store.js'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    
      
    <LocationProvider>

    <App />
    </LocationProvider>
    </Provider>
  </StrictMode>,
)
