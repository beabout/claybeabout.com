import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';

/* Components */
import Catalog from './Catalog'
import Spotify from './Spotify'
import Notes from './Notes'
import Letterbox from './Letterbox'

/* fa icons */
import { 
  FaGithub, 
  FaSpotify, 
  FaFolderOpen, 
  FaAngleDoubleLeft,
  FaFilm,
  FaRegLemon,
} from 'react-icons/fa';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
        <FaRegLemon className="theme-icon" />
        { atHomepage() ?
          <FadeIn>
            <div className="icons">
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
              <Link
                className="fa-link"
                to="/films"
                onClick={() => this.setState({ atHome: true })}
              >
                <FaFilm />
              </Link>
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
        <div className="revision">claybeabout.com</div>
        <Routes>
          <Route path="/"></Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/discography" element={<Spotify />} />
          <Route path="/films" element={<Letterbox />} />
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
