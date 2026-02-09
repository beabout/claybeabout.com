<script>
  import SectionHeader from '../components/SectionHeader.svelte';
  import jsonData from '../data/Reviews.json';
  import RatingStars from '../components/RatingStars.svelte';
  export let reviewsData = null;
  let sortKey = 'Date';
  let data = jsonData;
  let reviews = data.reviews.slice();

  import { 
    MessageSquareText
  } from 'lucide-svelte';

  const compare = {
    Date: (a, b) => (a['Watched Date'] < b['Watched Date'] ? 1 : -1),
    Name: (a, b) => (a['Name'] > b['Name'] ? 1 : -1),
    Year: (a, b) => (a['Year'] < b['Year'] ? 1 : -1),
    Rating: (a, b) => (parseFloat(a['Rating']) < parseFloat(b['Rating']) ? 1 : -1)
  };
  function sortBy(key) {
    sortKey = key;
  }

  $: data = reviewsData && Array.isArray(reviewsData.reviews) ? reviewsData : jsonData;
  $: reviews = data.reviews.slice().sort(compare[sortKey] || compare.Date);

  let detailedHTML = '';
  let selectedReview = null;
  let showDetail = false;
  function selectReview(review) {
    selectedReview = review;
    detailedHTML = review.Review.replace('\n', '<br/><br/>');
    showDetail = true;
  }
  function closeDetail() {
    showDetail = false;
    selectedReview = null;
  }
  function revealPoster(e) {
    e.currentTarget.style.opacity = 1;
  }
  function formatWatchedDate(value) {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }
</script>

<SectionHeader title="reviews." hint="imported from letterboxd" />
<p class="reviews-controls theme-primary">
  Sort by
  <select
    on:change={(e) => sortBy(e.target.value)}
  >
    <option value="Date">Watched Date</option>
    <option value="Name">Name</option>
    <option value="Year">Year</option>
    <option value="Rating">Rating</option>
  </select>
  </p>

{#if showDetail}
  <div class="review-detailed-backdrop" on:click={closeDetail}>
    <div class="review-detailed" on:click|stopPropagation>
      <button class="close" type="button" on:click={closeDetail} aria-label="Close review">&times;</button>
      {#if selectedReview}
        <div class="review-detailed-grid">
          <div class="review-detailed-media">
            <img
              class="review-detailed-poster"
              src={selectedReview.PosterURL}
              alt={`${selectedReview.Name} poster`}
            />
          </div>
          <div class="review-detailed-body">
            <h2 class="theme-primary">{selectedReview.Name} ({selectedReview.Year})</h2>
            <div class="review-detailed-rating">
              <RatingStars rating={selectedReview.Rating} size={24} />
            </div>
            <br />
            <div class="reviewText theme-primary">{@html detailedHTML}</div>
            <div class="review-detailed-meta">
              <span class="theme-primary">Logged {formatWatchedDate(selectedReview['Watched Date'])}</span>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<div id="reviews" class="reviews {showDetail ? 'reviews-blurred' : ''}">
  {#each reviews as review}
    <div
      class="review"
      on:click={() => selectReview(review)}
    >
      <div class="poster-wrapper">
        <img
          class="poster"
          style="transition: opacity 2.0s; opacity: 0"
          src={review.PosterURL}
          alt="poster"
          on:load={revealPoster}
        />
      </div>
      <br />
      <RatingStars rating={review.Rating} size={24} />
      <span class="commentIcon theme-primary">
        <MessageSquareText class="icon" size={24} />
      </span>
      <div class="reviewText" style="display:none"></div>
    </div>
  {/each}
  </div>


