import React from 'react';
import './index.scss';
import FadeIn from 'react-fade-in';

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
  ]
]

class Reads extends React.Component {
  render() {
    return (
      <FadeIn>
        {reads.map(read => (
          <div class="jumbotron">
            <h2>
              {read[0]}
            </h2>
            <p>{read[1]}</p>
          </div>
        ))}
      </FadeIn>
    )
  }
}

export default Reads;
