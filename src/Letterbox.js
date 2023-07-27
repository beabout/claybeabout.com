import React from 'react';
import './index.scss';
import FadeIn from 'react-fade-in';
import claysLetterboxReviews from "./reviews.json"
import { FaStar, FaStarHalfAlt, FaRegCommentAlt } from 'react-icons/fa';

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
      clickedReview: null,
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
      } else if (rating === 1) {
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

  handleClick(e) {
    let reviews = document.getElementById("reviews");
    let detailedReview = document.getElementById("detailedReview");
    let reviewText = null;
    let detailedReviewText = null;

    if (this.state.clickedReview != null) {
      this.state.clickedReview = e.currentTarget;
    }
    // if the review's x was clicked
    if (e.currentTarget.className === "close") {
      detailedReview.style.display = "none";
      reviews.style.display = "flex";
    } else {
      for ( let i = 0; i < e.currentTarget.children.length; i++ ) {
        if (e.currentTarget.children[i].className === 'reviewText') {
          console.log("found <div class=\"reviewText\"")
          reviewText = e.currentTarget.children[i];
          break;
        }
      }
      if(reviewText) {
        for ( let i = 0; i < detailedReview.children.length; i++ ) {
          if (detailedReview.children[i].className === "reviewText" ) {
            detailedReviewText = detailedReview.children[i];
            detailedReviewText.innerHTML = reviewText.innerHTML;

            reviews.style.display = "none";
            detailedReview.style.display = "block";
            break;
          }
        }
      }
    }
  }

  render() {
    return(
      <FadeIn>
        <h2 style={{ marginTop: '3rem' }}>reviews.</h2>
        <hint>
          imported from letterboxd
        </hint>
          <p style={{ padding: '1rem' }}>
            Sort by
            <select defaultValue="watched_date" onChange={(e) => {
              console.log(e.target.value);
              if(e.target.value === "Name") {
                console.log("in Name");
                this.setState({ reviews: claysLetterboxReviews.reviews.sort(compareName) });
              } else if (e.target.value === "Year") {
                console.log("in Year");
                this.setState({ reviews: claysLetterboxReviews.reviews.sort(compareYear) });
              } else if (e.target.value === "Rating") {
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
          <div id="detailedReview" className="review-detailed">
            <span className="close" onClick={(e) => {
              this.handleClick(e)
            }}>&times;</span>
            <br />
            <br />
            <div className="reviewText" />
          </div>
          <div id="reviews" className="reviews">
            { this.state.reviews.map(review => (
                <div className='review' onClick={(e) => {
                  this.handleClick(e);
                }}>
                  <img className='poster' src={ review['PosterURL'] }/>
                  <br />
                  { this.starsHTML(review.Rating) }
                  <FaRegCommentAlt className='commentIcon' />
                  <div className='reviewText' dangerouslySetInnerHTML={{ __html: review.Review.replace("\n", "<br/><br/>") }}></div>
                </div>
            ))}
          </div>
      </FadeIn>
    );
  }
}

export default Letterbox;
