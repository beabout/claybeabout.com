<script>
  import { Star, StarHalf } from 'lucide-svelte';

  export let rating = 0;
  export let size = 24;

  function getRatingValue(value) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  $: normalized = getRatingValue(rating);
  $: fullStars = Math.floor(normalized);
  $: halfStar = normalized % 1 >= 0.5;
</script>

{#each Array(fullStars) as _, i}
  <span class="theme-primary"><Star class="icon" size={size} /></span>
{/each}{#if halfStar}
  <span class="theme-primary"><StarHalf class="icon" size={size} /></span>
{/if}
