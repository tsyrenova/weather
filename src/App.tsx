import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { MonthStatistics } from './components/MonthStatistics/MonthStatistic';
import { AppRoute } from './types/const';
// import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <div className='global-container'>
      {/* <Popup /> */}
      <div className='container'>
        <Header />
        <Routes>
          <Route path={AppRoute.Main} element={<Home />} />
          <Route path={AppRoute.Summary} element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
