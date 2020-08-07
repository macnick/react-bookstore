import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  App from './components/App';

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  )
}

export default AppRouter;
