import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './index.scss';
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

const DateRangeBtn = withStyles({
  contained: {
    marginLeft: '1rem',
    color: 'white',
    fontWeight: 500,
    padding: '0.25rem 0.25rem', 
    backgroundColor: 'black',
    fontFamily: 'Barlow, sans-serif',
  }
})(Button);

class Resume extends React.Component {
  render() {
    return (
      <FadeIn>
        <div className="jumbotron">
          <h2 className="header">abilities.</h2>
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
          <h2 className="header">experience.</h2>
          <h3>
            <a href="https://www.garmin.com/en-US/">Garmin International</a>
            <DateRangeBtn variant="contained">Jan '21 - Today</DateRangeBtn>
          </h3>
          <p>Software Engineer</p>
          <h3>
            <a href="https://brandnewbox.com/">Brand New Box</a>
            <DateRangeBtn variant="contained">Jan '18 - Dec '20</DateRangeBtn>
          </h3>
          <p>Software Developer</p>
        </div>
        <hr />
        <div className="jumbotron">
          <h2 className="header">extras.</h2>
          <h3>
            Young Life
            <DateRangeBtn variant="contained">2016 - Today</DateRangeBtn>
          </h3>
          <p>Young Life Senior Leader</p>
          <h3>
            Association for Computing Machinery
            <DateRangeBtn variant="contained">2018 - 2019</DateRangeBtn>
          </h3>
          <p>Public Relations Chair</p>
        </div>
        <StyledButton variant="outlined" href='/ClaytonBeabout.pdf' download>download resumé</StyledButton>
      </FadeIn>
    )
  }
}

export default Resume;