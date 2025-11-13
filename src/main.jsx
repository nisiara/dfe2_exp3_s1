//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'

async function enableMocking() {
  // if(process.env.NODE_ENV != 'development')
  //   return;

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    // <StrictMode>
      <Router>
        <App />
      </Router>
    // </StrictMode>
  )
});