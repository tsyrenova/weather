import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistic';
import { Header } from './shared/Header/Header';
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
