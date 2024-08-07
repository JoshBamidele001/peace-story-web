import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store, persistor} from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';  
import ThemeProvider from './Components/ThemeProvider.jsx'
import '@fontsource/poppins';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
        <ThemeProvider></ThemeProvider>
         <App />
      
    </Provider>
  </PersistGate>
)
