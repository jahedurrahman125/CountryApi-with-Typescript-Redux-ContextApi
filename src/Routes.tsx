import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Main from './pages/Main';
import ThemeContext from './context/Context';

const Routes = () => (
  <ThemeContext>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </ThemeContext>
)

export default Routes
