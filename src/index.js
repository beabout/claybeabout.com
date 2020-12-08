import React from 'react';
import './Index.scss';
import FadeIn from 'react-fade-in';
import ReactDOM from 'react-dom';

/* Components */
import Projects from './Projects'
import Bio from './Bio'
import Catalog from './Catalog'
import Resume from './Resume'
import SwipeableTemporaryDrawer from './SwipeableDrawer'

/* Macro variables */
const btn_class = "btn btn-primary";

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = { showBio: true }
  }

  showProjectsState = () => {
    this.setState({
      ...this.state, 
      showProjects: true, 
      showBio: false, 
      showCatalog: false, 
      showResume: false
    })
  }

  showBioState = () => {
    this.setState({
      ...this.state,
      showProjects: false,
      showBio: true,
      showCatalog: false,
      showResume: false
    })
  }

  showCatalogState = () => {
    this.setState({
      ...this.state,
      showProjects: false,
      showBio: false,
      showCatalog: true,
      showResume: false
    })
  }

  showResumeState = () => {
    this.setState({
      ...this.state,
      showProjects: false,
      showBio: false,
      showCatalog: false,
      showResume: true
    })
  }

  render() {
    return (
      <div>
        <div className="homepage">
          {/* <SwipeableTemporaryDrawer /> */}
          <FadeIn><h1 className="blue">hello,</h1></FadeIn>
          <FadeIn><h1>clay beabout.</h1></FadeIn>
          <br/>
          <div className="links">
            <div onClick={this.showBioState} className={this.state.showBio ? btn_class + " clicked" : btn_class}>bio</div>
            <div onClick={this.showProjectsState} className={this.state.showProjects ? btn_class + " clicked" : btn_class}>projects</div>
            <div onClick={this.showResumeState} className={this.state.showResume ? btn_class + " clicked" : btn_class}>resumé</div>
          </div>
          {this.state.showProjects && <Projects />}
          {this.state.showBio && <Bio />}
          {this.state.showCatalog && <Catalog />}
          {this.state.showResume && <Resume />}
        </div>
      </div>
    );
  };
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
