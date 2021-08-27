import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';

import { FaRegFolder, 
  FaAngleDoubleLeft 
} from 'react-icons/fa';

/* Components */
import Projects from './Projects'
import Catalog from './Catalog'
import Reads from './Reads'
import Thoughts from './Thoughts'
import Spotify from './Spotify'
import Albums from './Albums'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const links = [
  { subUrl: "reads" },
  { subUrl: "projects"},
  { subUrl: "discography" }
]

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = { atHome: true }
  }

  render() {
    return (
      <Router>
        { this.state.atHome ?
          <FadeIn>
            <h4 style={{ width: '100%' }}>
              the 
              <span className="blue"> goods </span>
              can be found 
              <span className="blue"> below. </span>
            </h4>
            <div className="container">
              {links.map(link => (
                  <Link 
                  onClick={() => this.setState({atHome: false })} 
                  className="fa-link" 
                  to={'/' + link["subUrl"]}
                  >
                    <FaRegFolder />
                  </Link>
                ))
              }
            </div>
          </FadeIn>
          :
          <Link 
            className="fa-link" 
            to="/" 
            onClick={() => this.setState({ atHome: true })}
          >
            <FaAngleDoubleLeft />
          </Link>
        }
        <Switch>
          <Route path="/thoughts">
            <Thoughts />
          </Route>
          <Route path="/reads">
            <Reads />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/discography">
            <Spotify />
          </Route>
        </Switch>
      </Router>
    );
  };
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
