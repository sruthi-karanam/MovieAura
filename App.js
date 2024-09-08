import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from '../components/Movies';
import Theatres from '../components/Theatres';
import Showtimes from '../components/Showtimes';
import Reservation from '../components/Reservation';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/theatres" component={Theatres} />
          <Route path="/showtimes" component={Showtimes} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

