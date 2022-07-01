import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';

/* Components */
import Catalog from './Catalog'
import Spotify from './Spotify'
import Notes from './Notes'

/* fa icons */
import { 
  FaGithub, 
  FaSpotify, 
  FaRegFolder, 
  FaAngleDoubleLeft 
} from 'react-icons/fa';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const links = [
  { "subUrl": "projects" },
  { "subUrl": "discography" }
]

function atHomepage(){
  if (window.location.pathname === "/") {
    return true
  } else {
    return false
  }
}

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = { atHome: atHomepage() }
  }

  render() {
    return (
      <BrowserRouter>
        { atHomepage() ?
          <FadeIn>
            <div className="container">
              <a className="fa-link" href="https://github.com/beabout" target="_blank">
                <FaGithub />
              </a>
              <Link
                className="fa-link"
                to="/discography"
                onClick={() => this.setState({ atHome: true })}
              >
                <FaSpotify />
              </Link>
              {/* <Link
                className="fa-link"
                to="/notes"
                onClick={() => this.setState({ atHome: true })}
              >
                <FaRegFolder />
              </Link> */}
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
        <div className="revision">www.claybeabout.com | revision: 4a6b40f</div>
        <Routes>
          <Route path="/">
            
          </Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/discography" element={<Spotify />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    );
  };
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
