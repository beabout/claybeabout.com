import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Index.scss';
import { Button, LinearProgress } from "@material-ui/core";
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

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
    width: "50%",
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#4ec7d0',
  },
}))(LinearProgress);

const StyledButton = withStyles((theme) => ({
  outlined: {
    borderColor: '#4ec7d0',
    color: '#4ec7d0',
    fontFamily: 'Barlow, sans-serif',
  }
}))(Button);

class Resume extends React.Component {
  render() {
    return (
      <FadeIn>
        <div className="jumbotron">
          <StyledButton variant="outlined" href='/ClaytonBeabout.pdf' download>download resumé</StyledButton>
          <h2 className="header">programming abilities.</h2>
          <br />
          <div className="row">
            <div className="col-12.col-md-6">
              {programming_abilities.map(ability => (
                <div>
                  {ability.name}
                  <BorderLinearProgress variant="determinate" value={(ability.rank * 10)} />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
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
        <hr />
        <div className="jumbotron">
          <h2 className="header">volunteer work.</h2>
          <h3>Young Life (2016-Today)</h3>
          <p>Young Life Senior Leader</p>
          <h3>Association for Computing Machinery.</h3>
          <p>Public Relations Chair (2018-2019)</p>
        </div>
      </FadeIn>
    )
  }
}

export default Resume;