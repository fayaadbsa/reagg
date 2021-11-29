import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';
import ReduxPage from './pages/ReduxPage';
import NotesPage from './pages/NotesPage';
import NotFoundPage from './pages/NotFoundPage';

function AppRoutes(props) {
  return (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/notes/:title" component={NotePage} />
        <Route path="/notes" component={NotesPage} />
        <Route path="/redux" component={ReduxPage} />
        <Route component={NotFoundPage} />
      </Switch>
  );
}

export default AppRoutes;
