<script>
  import { onMount } from 'svelte';
  import SectionHeader from '../components/SectionHeader.svelte';
  import jsonData from '../data/Reviews.json';
  let data = jsonData;
  let reviews = data.reviews.slice();

  import { 
    MessageSquareText,
    Star,
    StarHalf
  } from 'lucide-svelte';

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
        const fetched = await res.json();
        if (fetched && Array.isArray(fetched.reviews)) {
          data = fetched;
          sortBy('Date');
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

<div class="review-detailed" style="display: {showDetail ? 'block' : 'none'}">
  <span class="close" on:click={closeDetail}>&times;</span>
  <br />
  <br />
  <div class="reviewText theme-primary">{@html detailedHTML}</div>
  </div>

<div id="reviews" class="reviews" style="display: {showDetail ? 'none' : 'flex'}">
  {#each reviews as review}
    <div
      class="review"
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
        <span class="theme-primary"><Star class="icon" size={24} /></span>
      {/each}
      {#if parseFloat(review.Rating) % 1 >= 0.5}
        <span class="theme-primary"><StarHalf class="icon" size={24} /></span>
      {/if}
      <span class="commentIcon theme-primary">
        <MessageSquareText class="icon" size={24} />
      </span>
      <div class="reviewText" style="display:none"></div>
    </div>
  {/each}
  </div>


