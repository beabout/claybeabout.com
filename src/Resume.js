import React from 'react';
// import './Index.scss';
import FadeIn from 'react-fade-in';

const programming_abilities = [
  { name: 'C++', rank: 10 },
  { name: 'Ruby on Rails', rank: 10 },
  { name: 'Docker', rank: 8 },
  { name: 'ReactJS', rank: 8 },
  { name: 'Databases', rank: 8 },
  { name: 'Compilers', rank: 8 },
  { name: 'Python', rank: 8 },
  { name: 'Haskell', rank: 8 }
]

const btn_class = "btn btn-primary";

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
                  <div class="progress-bar" role="progressbar" style={{ width: (ability.rank * 10) + "%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{ability.name}</div>
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

export default Resume;