import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistic';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/month-statistics' element={<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;
