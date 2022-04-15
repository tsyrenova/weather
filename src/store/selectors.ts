import { RootState } from './store';

const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherRootReducer;

export { selectCurrentWeatherData };
