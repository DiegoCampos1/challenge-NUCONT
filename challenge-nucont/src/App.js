import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ThanksPage from './Pages/ThanksPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/obrigado" component={ThanksPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
