import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa';
import FadeIn from 'react-fade-in';
import { Card,
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

const projects = [
  [ 'MovieCannon', 'MovieCannon',
    'Film cataloging application with dynamic searching and categorization capabilities.'
  ],
  [ 'mlem2', 'mlem2',
    'A Ruby implementation of the popular mlem2 data mining algorithm.'
  ],
  [ 'docoylsale.com', 'docoyounglifesale',
    'Showcasing and event-based application granting visitors access to fundraiser details, local vendors and sale products.'
  ],
  [ 'Sudoku Solver', 'SudokuSolver',
    'Takes in a sudoku puzzle and spits it back out completed.'
  ],
  [ 'Mine Sweeper', 'minesweeper',
    'Unity-based minesweeper application.'
  ]
]

export default function Projects() {
    const classes = useStyles();
    return (
      <FadeIn className={classes.root}>
        <Grid container spacing={2}>
          {projects.map(project => (
            <Grid item s={12} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <h3>
                    <a className="fa-link" href={'https://github.com/beabout/' + project[1]}>
                      <FaGithub />
                    </a>
                    {project[0]}
                  </h3>
                  <p>{project[2]}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </FadeIn>
    )
}

// export default Projects;