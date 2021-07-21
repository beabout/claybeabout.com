import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa';
import FadeIn from 'react-fade-in';

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

class Projects extends React.Component {
  render() {
    return (
      <FadeIn>
        {projects.map(project => (
          <div class="jumbotron">
            <h2>
              {project[0]}
              <a className="fa-link" href={'https://github.com/beabout/' + project[1]}>
                <FaGithub />
              </a>
            </h2>
            <p>{project[2]}</p>
          </div>
        ))}
        <div class="jumbotron">
          <h2>
            Tuun
            <a className="fa-link" href={'https://github.com/mleong25/tuun'}>
              <FaGithub />
            </a>
          </h2>
          <p>Collaborative music application for users to combine their music interests into a single playlist.</p>
        </div>
      </FadeIn>
    )
  }
}

export default Projects;