import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SongList from '../components/SongList/SongList';
import SongDetail from '../components/SongDetail/SongDetail';

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/songs" />
    <Route exact path="/songs" component={SongList} />
    <Route exact path="/song/:id" component={SongDetail} />
    <Route component={SongList} />
  </Switch>
);

export default Routes;
