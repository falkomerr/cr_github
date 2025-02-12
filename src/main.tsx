import { createRoot } from 'react-dom/client';
import './App.css';
import App from './app';
import { Toaster } from './components/toaster.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster />
  </>,
);
