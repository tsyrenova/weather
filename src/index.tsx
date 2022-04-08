import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.scss';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
