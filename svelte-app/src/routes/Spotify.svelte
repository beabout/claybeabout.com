<script>
  import { onMount } from 'svelte';
  export let theme;
  import SectionHeader from '../components/SectionHeader.svelte';
  import sample from '../data/Spotify.sample.json';
  let albums = sample.albums;

  onMount(async () => {
    try {
      const res = await fetch('/Spotify.json', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.albums)) {
          albums = data.albums;
        }
      }
    } catch (_) {
      // fall back to sample
    }
  });

  function revealCover(event) {
    event.currentTarget.style.opacity = 1;
  }
</script>

<div>
  <SectionHeader title="records." hint="imported from spotify" {theme} />
  <div class="p-5 albums-grid">
    {#each albums as album}
      <div class="album">
        <a href={album.url} target="_blank" rel="noreferrer">
          <img
            src={album.cover}
            style="transition: opacity 2.0s; opacity: 0"
            on:load={revealCover}
            class="album-art" />
        </a>
      </div>
    {/each}
  </div>
  </div>


