import React from 'react';
import './index.scss';
import FadeIn from 'react-fade-in';
import claysLetterboxReviews from "./Reviews.json"
import { Grid } from '@material-ui/core';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function compareDate(a, b) {
  return a['Watched Date'] < b['Watched Date'];
}

class Letterbox extends React.Component {
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
      console.log(stars)
    }
    return stars;
  }

  convertStringToHTML(htmlString) {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');

    return html;
  }

  constructor(props) {
    super(props)
    this.state = {
      reviews: claysLetterboxReviews.reviews,
    }
  }

  render() {
    return(
      <FadeIn>
        <h2 style={{ marginTop: '3rem' }}>reviews.</h2>
        <hint>reviews are ranked 0-5 stars.</hint>
        <Grid className='p-5' container spacing={1}>
          {this.state.reviews.map(review => (
            <Grid item sm={12} md={6}>
              <div className='review'>
                <h3>
                  {review.Name}
                </h3>
                { this.starsHTML(review.Rating) }
                <p>{convertStringToHTML(review.Review)}</p>
                <p>{review['Watched Date']}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </FadeIn>
    );
  }
}

export default Letterbox;