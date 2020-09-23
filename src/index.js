import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FaTwitter, FaGithub, FaThemeisle } from 'react-icons/fa';
import './index.scss';
import WebFont from 'webfontloader';
import FadeIn from 'react-fade-in';

WebFont.load({
  google: {
    families: ['Martel Web:200,400,700,800', 'serif']
  }
});

/* Macro variables */
const links = ['projects', 'films', 'catalog', 'resumé'];
const projects = ['MovieCannon', 'mlem2'];
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
          <FadeIn><h1 style={{color:"#8cb9bd"}}>hello.</h1></FadeIn>
          <FadeIn><h1>clay beabout.</h1></FadeIn>
          <div className="links">
            <div onClick={this.showBioState} className={this.state.showBio ? btn_class + " clicked" : btn_class }>bio</div>
            <div onClick={this.showCatalogState} className={this.state.showCatalog ? btn_class + " clicked" : btn_class }>catalog</div>
            <div onClick={this.showProjectsState} className={this.state.showProjects ? btn_class + " clicked" : btn_class }>projects</div> 
            <div onClick={this.showResumeState} className={this.state.showResume ? btn_class + " clicked" : btn_class }>resumé</div>
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

class Projects extends React.Component {
  render() {
    return (
      <FadeIn>
        {projects.map(project => (
          <div>
            <h2>
              {project}
              <a className="github-link" href='https://github.com/Cbeeb121/MovieCannon'>
                <FaGithub />
              </a>
            </h2>
            <p>Cataloging site for film enthusiasts.</p>
          </div>
        ))}
      </FadeIn>
    )
  }
}

class Catalog extends React.Component {
  render() {
    return (
      <FadeIn>
        <p>include photos and videos.</p>
      </FadeIn>
    )
  }
}

class Bio extends React.Component {
  render() {
    return (
      <FadeIn>
        <div>
          <a href="https://github.com/Cbeeb121">
            <div className={btn_class}>github</div>
          </a>
          <a href="https://www.linkedin.com/in/clayton-beabout/">
            <div className={btn_class}>linkedin</div>
          </a>
          <a href="https://douglascounty.younglife.org/about-2/">
            <div className={btn_class}>young life</div>
          </a>
        </div>
        <p>
          Something about Young Life. Lawrence, KS. Marriage.
        </p>
        <p>
          Make very Blog-esc
        </p>
      </FadeIn>
    ) 
  }
}

class Resume extends React.Component {
  render() { 
    return (
      <FadeIn>
        <h2 className="header">education.</h2>
        <p>Computer Science Undergraduate - University of Kansas</p>
        <h2 className="header">work experience.</h2>
        <h3>Brand New Box (2018-Today)</h3>
        <p>details.</p>
        <h2 className="header">volunteer work.</h2>
        <h3>Young Life (2016-Today)</h3>
        <p>details.</p>
        <h3>Association for Computing Machinery.</h3>
        <p>Public Relations Chair (2018-2019)</p>
        <p>some details below here.</p>
        <h2 className="header">hobbies.</h2>
        <ul>
          <li>Banjo</li>
          <li>Coding</li>
          <li>Film</li>
        </ul>
        <h2 className="header">programming abilities.</h2>
        <p>some details below here.</p>
        <ul>
          <li>proficient: C++, Ruby, HTML, CSS</li>
          <li>Familiar: Python, Javascript, Haskell, Java</li>
          <li>Frameworks & Tools: React, Rails, Docker, Redis, SQL, MySQL, GraphQL, Django?</li>
          <li></li>
        </ul>

        <div className={btn_class}>download resumé</div>
      </FadeIn>
    ) 
  }
}

class SocialLinks extends React.Component {
  render() {
    return (
      <div> 
        <a href="https://github.com/Cbeeb121" class="icon-button github"><i class="icon-github"></i><span></span></a>
        <a href="https://www.linkedin.com/in/clayton-beabout/" class="icon-button linkedin"><i class="icon-linkedin"></i><span></span></a>
        <a href="https://plus.google.com" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>
      </div>
    )
  }
}

class Fish extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="bowl"></div>
        <div class="water">
          <div class="body">
            <div class="eye"></div>
            <div class="fin-center"></div>
            <div class="fin top"></div>
            <div class="fin bottom"></div>
            <div class="tail"></div>
          </div>
        </div>
      </div>
    );
  };
}


class ThreeFancyLinks extends React.Component {
  render() {
    return (
      <div class="full-width">
        <div class="background-one link-container">
          <a class="link-one">Three</a>
        </div>
        <div class="background-two link-container">
          <a class="link-two">Fancy</a>
        </div>
        <div class="background-three link-container">
          <a class="link-three">Links</a>
        </div>
      </div>
    );
  };
}

class ScrollBars extends React.Component {
  constructor(props) {
    super(props);
  }

  // render() {
    // return (
      // <div> 
      //   <div class="scrollBar1"><span></span></div>
      //   <div class="scrollBar2"><span></span></div>
      //   <div>
      //     <svg class="scroll-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="-285 377 40 40" xml:space="preserve">
      //       <g id="scroll"> 
      //         <g>
      //           <path class="st0" d="M-265,388.1c-0.9,0-1.6,0.7-1.6,1.6v4.1c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6v-4.1
      //           C-263.4,388.8-264.1,388.1-265,388.1" />
      //         </g>
      //       </g>
      //       <g id="wheel">
      //         <g>
      //           <path class="st0" d="M-264,378.2h-1.9c-6.2,0.5-10.9,5.5-10.9,11.6v14.3c0,6.5,5.3,11.7,11.8,11.7
      //           s11.8-5.3,11.8-11.7v-14.3C-253.1,383.7-257.9,378.7-264,378.2z M-255.1,404.2c0,5.4-4.4,9.8-9.9,9.8c-5.4,0-9.9-4.4-9.9-9.8
      //           v-14.4c0-5.4,4.5-9.8,9.9-9.8s9.9,4.4,9.9,9.8V404.2z" />
      //         </g>
      //       </g>
      //     </svg>
      //     <App />
      //   </div >
      // </div>
    // );
  // };
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
