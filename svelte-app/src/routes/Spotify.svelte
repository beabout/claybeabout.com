<script>
  import SectionHeader from '../components/SectionHeader.svelte';
  import sample from '../data/Spotify.json';
  export let spotifyData = null;
  $: albums = spotifyData && Array.isArray(spotifyData.albums) ? spotifyData.albums : sample.albums;

  function revealCover(event) {
    event.currentTarget.classList.add('is-visible');
  }
</script>

<div>
  <SectionHeader title="records." hint="imported from spotify" />
  <div class="p-5 albums-grid">
    {#each albums as album}
      <div class="album">
        <a href={album.url} target="_blank" rel="noreferrer">
          <img
            src={album.cover}
            on:load={revealCover}
            class="album-art" />
        </a>
      </div>
    {/each}
  </div>
</div>


