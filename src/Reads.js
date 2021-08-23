import React from 'react';
import './index.scss';
import FadeIn from 'react-fade-in';

import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Grid,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "black",
    color: "white",
    padding: 0,
  },
  content: {
    paddingLeft: 0,
  }
}));

const reads = [
  [ 'Ready Player One',
    'Ernest Cline', 
    'REVIEW'
  ],
  [ '12 Rules for Life: An Antidote to Chaos',
    '',
    ''
  ],
  [ 'The Ruthless Elimination of Hurry',
    '',
    ''
  ], 
  [ 'Culture Map',
    '',
    ''
  ]
]

export default function Reads() {
  const classes = useStyles();
  return (
    <FadeIn className={classes.root}>
      <Grid container spacing={2}>
        {reads.map(read => (
          <Grid item xs={12} s={6}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <h4>{ read[0] }</h4>
                <p>{ read[1] }</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </FadeIn>
  )
}