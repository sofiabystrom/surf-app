/* react, npm-paket */
import { React } from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* komponenter */
import { Header } from './components/Header';
import { Footer } from './components/Footer';

/* sidor */
import { Places } from './components/pages/Places';
import { About } from './components/pages/About';
import { Detail } from './components/pages/Detail';

/* stilmall */
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
      {/* routing, animerade sidövergångar */}
      <div className="main">
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.pathname}timeout={300} classNames="transition">
            <Switch location={location}>
              <Route path="/" exact component={withRouter(Places)} />
              <Route path="/about" component={withRouter(About)} />
              <Route path="/detail/:id" component={withRouter(Detail)} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      </div>
      <Footer />
     </div>
  </Router>
  );
}

export default App;
