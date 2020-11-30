import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin,
  FaGoogle,
  FaThemeisle 
} from 'react-icons/fa';
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
const projects = [
  [
    'MovieCannon',
    'MovieCannon',
    'Film cataloging application with dynamic searching and categorization capabilities.'
  ], 
  [
    'mlem2',
    'mlem2',
    'A Ruby implementation of the popular mlem2 data mining algorithm.'
  ],
  [
    'docoylsale.com',
    'docoyounglifesale',
    'Showcasing and event-based application granting visitors access to fundraiser details, local vendors and sale products.'
  ],
  [
    'Tuun',
    'https://github.com/mleong25/tuun',
    'Collaborative music application for users to combine their music interests into a single playlist.'
  ],
  [
    'Sudoku Solver',
    'SudokuSolver',
    'Takes in a sudoku puzzle and spits it back out completed.'
  ],
  [
    'Mine Sweeper',
    'minesweeper',
    'Unity-based minesweeper application.'
  ]
]

const programming_abilities = [
  { name: 'C++', rank: 10 },
  { name: 'Ruby on Rails', rank: 10 },
  { name: 'Docker', rank: 8 },
  { name: 'Python', rank: 8 },
  { name: 'React (Javascript)', rank: 8 },
  { name: 'Databases (SQL, Postgres)', rank: 8 },
  { name: 'Compiler Construction', rank: 8 },
  { name: 'Debugging', rank: 8 },
  { name: 'Functional Development (Haskell)', rank: 8 }
]
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
          <FadeIn><h1 style={{color:"#8cb9bd"}}>hello,</h1></FadeIn>
          <FadeIn><h1>clay beabout.</h1></FadeIn>
          <div className="links">
            <div onClick={this.showBioState} className={this.state.showBio ? btn_class + " clicked" : btn_class }>bio</div>
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
          <div class="jumbotron">
            <h2>
              {project[0]}
              <a className="fa-link" href={'https://github.com/Cbeeb121/' + project[1]}>
                <FaGithub />
              </a>
            </h2>
            <p>{project[2]}</p>
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
          <a className="fa-link" href='https://github.com/Cbeeb121'>
            <FaGithub></FaGithub>
          </a>
          <a className="fa-link" href='mailto:beaboutclayton@gmail.com'>
            <FaGoogle></FaGoogle>
          </a>
          <a className="fa-link" href="https://www.linkedin.com/in/clayton-beabout/">
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </FadeIn>
    ) 
  }
}

class Resume extends React.Component {
  render() { 
    return (
      <FadeIn>
        <div className="jumbotron">
          <h2 className="header">programming abilities.</h2>
          <div className="row">
            <div className="col-12.col-md-6">
              {programming_abilities.map(ability => (
                <div class="progress pull-left">
                  <div class="progress-bar" role="progressbar" style={{ width: (ability.rank*10) + "%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{ability.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="jumbotron">
          <h2 className="header">education.</h2>
          <p>BSc. Computer Science - University of Kansas</p>
        </div>
        <hr></hr>
        <div className="jumbotron">
          <h2 className="header">work experience.</h2>
          <h3>Garmin International (Jan '21 - Today)</h3>
          <p>Software Engineer</p>
          <h3>Brand New Box (Jan '18 - Dec '20)</h3>
          <p>Software Developer</p>
        </div>
        <hr></hr>
        <div className="jumbotron">
          <h2 className="header">volunteer work.</h2>
          <h3>Young Life (2016-Today)</h3>
          <p>Young Life Senior Leader</p>
          <h3>Association for Computing Machinery.</h3>
          <p>Public Relations Chair (2018-2019)</p>
        </div>
        <a href='/ClaytonBeabout.pdf' className={btn_class} download>download resumé</a>
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
