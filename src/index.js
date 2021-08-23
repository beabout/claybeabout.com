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
import Resume from './Resume'
import Albums from './Albums'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const links = [
  // { subUrl: "thoughts", },
  { subUrl: "reads" },
  { subUrl: "projects"},
  { subUrl: "resume" },
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
          <FadeIn className="container">
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
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/discography">
            <Albums />
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
