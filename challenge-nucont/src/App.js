import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import MainPage from './Pages/MainPage';
import ThanksPage from './Pages/ThanksPage';

// Chave criada para teste, é preciso gerar uma chave para o projeto em produção.
ReactGA.initialize('G-EKW75M91C9');

const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
