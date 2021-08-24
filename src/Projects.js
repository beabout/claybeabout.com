import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa';
import FadeIn from 'react-fade-in';
import { Card,
  CardActions,
  CardContent,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  projects
} from './Data'

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

export default function Projects() {
    const classes = useStyles();
    return (
      <FadeIn className={classes.root}>
        <Grid container spacing={2}>
          {projects.map(project => (
            <Grid item s={12} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <h4 className="blue">
                    <a className="fa-link" href={'https://github.com/beabout/' + project.url}>
                      <FaGithub />
                    </a>
                    { project.title }. 
                  </h4>
                  <p>{ project.desc }</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </FadeIn>
    )
}

// export default Projects;