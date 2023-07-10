import React from 'react';
import './index.scss';
import FadeIn from 'react-fade-in';
import claysLetterboxReviews from "./reviews.json"
import { Grid } from '@mui/material';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function compareWatchedDate(a, b) {
  return a["Watched Date"] < b["Watched Date"];
}

function compareName(a, b) {
  return a["Name"] > b["Name"];
}

function compareYear(a, b) {
  return a["Year"] < b["Year"];
}

function compareRating(a, b) {
  return a["Rating"] < b["Rating"];
}

class Letterbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: claysLetterboxReviews.reviews.sort(compareWatchedDate),
    }
  }

  starsHTML(r) {
    // some ratings are 2.5 or 3.5. It's easier to deal with whole numbers. So ex. 3.5 -> 7
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

  handleChange(e) {
    console.log(e.target.value);
    this.state = {
      reviews: claysLetterboxReviews.reviews.sort(compareWatchedDate)
    }
  }

  render() {
    return(
      <FadeIn>
        <h2 style={{ marginTop: '3rem' }}>reviews.</h2>
        <hint>
          reviews rank from <FaStarHalfAlt /> to <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </hint>
        <Grid className='p-5' container spacing={1}>
          <p style={{ padding: '1rem' }}>
            Sort by
            <select defaultValue="watched_date" onChange={(e) => {
              console.log(e.target.value);
              if(e.target.value == "Name") {
                console.log("in Name");
                this.setState({ reviews: claysLetterboxReviews.reviews.sort(compareName) });
              } else if (e.target.value == "Year") {
                console.log("in Year");
                this.setState({ reviews: claysLetterboxReviews.reviews.sort(compareYear) });
              } else if (e.target.value == "Rating") {
                console.log("in Rating");
                this.setState({ reviews: claysLetterboxReviews.reviews.sort(compareRating) });
              } else {
                console.log("in Date");
                this.setState({ reviews: claysLetterboxReviews.reviews.sort(compareWatchedDate) });
              }
            }}>
              <option value="Date">Watched Date</option>
              <option value="Name">Name</option>
              <option value="Year">Year</option>
              <option value="Rating">Rating</option>
            </select>
          </p>
          {this.state.reviews.map(review => (
            <Grid item sm={12} md={12}>
              <div className='review'>
                <h3 style={{ marginBottom: '1rem' }}>
                  <span class='ul-title'>{review.Name}</span>
                  <span class='mdate'> {review.Year}</span>
                </h3>
                { this.starsHTML(review.Rating) }
                <div id={ review["Letterboxd URI"] } className='reviewText'>
                  <br/>
                  <div dangerouslySetInnerHTML={{ __html: review.Review.replace("\n", "<br/><br/>")}}></div>
                  <br />
                  <span class='mdate'>{review["Watched Date"]}</span>
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
