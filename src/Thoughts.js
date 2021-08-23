import React from 'react';
import './index.scss';
import { withStyles } from '@material-ui/core/styles';
import { Button, LinearProgress } from "@material-ui/core";
import FadeIn from 'react-fade-in';

class Thoughts extends React.Component {
    render() {
        return(
            <FadeIn>
              <p>thinks</p>
              <p>thinks</p>
            </FadeIn>
        );
    };
}

export default Thoughts;