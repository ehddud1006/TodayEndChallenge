import { BrowserRouter } from 'react-router-dom';

import Router from '@/Router';

const App = () => {
  return (
    <BrowserRouter basename='TodayEndChallenge'>
      <Router />
    </BrowserRouter>
  );
};

export default App;
