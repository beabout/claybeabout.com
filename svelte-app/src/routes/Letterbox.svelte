<script>
  import { onMount } from 'svelte';
  export let theme;
  import sample from '../data/Reviews.sample.json';
  let reviews = sample.reviews.slice();
  const compare = {
    Date: (a, b) => (a['Watched Date'] < b['Watched Date'] ? 1 : -1),
    Name: (a, b) => (a['Name'] > b['Name'] ? 1 : -1),
    Year: (a, b) => (a['Year'] < b['Year'] ? 1 : -1),
    Rating: (a, b) => (parseFloat(a['Rating']) < parseFloat(b['Rating']) ? 1 : -1)
  };
  function sortBy(key) {
    reviews = data.reviews.slice().sort(compare[key] || compare.Date);
  }
  sortBy('Date');

  onMount(async () => {
    try {
      const res = await fetch('/Reviews.json', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.reviews)) {
          reviews = data.reviews.slice().sort(compare.Date);
        }
      }
    } catch (_) {
      // fall back to sample
    }
  });

  let detailedHTML = '';
  let showDetail = false;
  function selectReview(html) {
    detailedHTML = html;
    showDetail = true;
  }
  function closeDetail() {
    showDetail = false;
  }
  function revealPoster(e) {
    e.currentTarget.style.opacity = 1;
  }
</script>

<h2 style="margin-top: 3rem; color: {theme.alternative}">reviews.</h2>
<hint style="color: {theme.primary}">imported from letterboxd</hint>
<p style="padding: 1rem; color: {theme.primary}">
  Sort by
  <select
    style="color: {theme.primary}; text-decoration-color: {theme.alternative}"
    on:change={(e) => sortBy(e.target.value)}
  >
    <option value="Date">Watched Date</option>
    <option value="Name">Name</option>
    <option value="Year">Year</option>
    <option value="Rating">Rating</option>
  </select>
  </p>

<div class="review-detailed" style="border: 2px {theme.alternative} solid; display: {showDetail ? 'block' : 'none'}">
  <span class="close" style="color: {theme.primary}" on:click={closeDetail}>&times;</span>
  <br />
  <br />
  <div class="reviewText" style="color: {theme.primary}">{@html detailedHTML}</div>
  </div>

<div id="reviews" class="reviews" style="display: {showDetail ? 'none' : 'flex'}">
  {#each reviews as review}
    <div
      class="review"
      style="border-color: {theme.alternative}"
      on:click={() => selectReview(review.Review.replace('\n', '<br/><br/>'))}
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
      {#each Array(Math.floor(parseFloat(review.Rating))) as _, i}
        <span style="color: {theme.primary}">★</span>
      {/each}
      {#if parseFloat(review.Rating) % 1 >= 0.5}
        <span style="color: {theme.primary}">½</span>
      {/if}
      <span style="color: {theme.primary}" class="commentIcon">💬</span>
      <div class="reviewText" style="display:none"></div>
    </div>
  {/each}
  </div>


