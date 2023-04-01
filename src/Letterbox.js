import React from 'react';
import './index.scss';
import FadeIn from 'react-fade-in';
import claysLetterboxReviews from "./Reviews.json"
import { Grid } from '@mui/material';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import $ from 'jquery';

function compareDate(a, b) {
  return a['Year'] < b['Year'];
}

class Letterbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: claysLetterboxReviews.reviews.sort(compareDate),
    }
  }

  starsHTML(r) {
    // some ratings are 2.5 or 3.5. It's easier to deal with whole numbers. So multiplying (3.5 -> 7)
    let rating = r * 2
    const stars = []
    while (rating > 0) {
      if (rating >= 2) {
        stars.push(<FaStar />);
        rating = rating - 2;
      } else if (rating == 1) {
        stars.push(<FaStarHalfAlt />);
        rating = rating - 1;
      } else {
      }
    }
    return stars;
  }

  convertStringToHTML(htmlString) {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    console.log('html');
    console.log(html);
    return html;
  }


  render() {
    return(
      <FadeIn>
        <h2 style={{ marginTop: '3rem' }}>reviews.</h2>
        <hint>
          reviews rank from <FaStarHalfAlt /> to <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </hint>
        <Grid className='p-5' container spacing={1}>
          {this.state.reviews.map(review => (
            <Grid item sm={12} md={12}>
              <div className='review'>
                <h3 style={{ marginBottom: '1rem' }}>
                  <span class='ul-title'>{review.Name}</span>
                  <span class='mdate'> {review.Year}</span>
                </h3>
                { this.starsHTML(review.Rating) }
                <div id={ review['Letterboxd URI'] } className='reviewText'>
                  <br/>
                  { review.Review }
                  <br/>
                  <br />
                  <span class='mdate'>{review['Watched Date']}</span>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </FadeIn>
    );
  }
}

export default Letterbox;