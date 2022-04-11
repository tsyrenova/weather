import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
