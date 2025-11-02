<script>
  import { onMount } from 'svelte';
  import themes from './themes.json';
  import Catalog from './routes/Catalog.svelte';
  import Spotify from './routes/Spotify.svelte';
  import Letterbox from './routes/Letterbox.svelte';

  import { FileScan, FolderGit, SquareArrowLeft, Wheat } from 'lucide-svelte';

  let themeName = 'dannyphantom';
  let theme = themes[themeName];

  function setTheme(name) {
    themeName = name;
    theme = themes[themeName];
    document.body.style.backgroundColor = theme.secondary;
  }

  function randomizeTheme() {
    const keys = Object.keys(themes);
    let next = themeName;
    while (next === themeName) {
      next = keys[Math.floor(Math.random() * keys.length)];
    }
    setTheme(next);
  }

  let path = window.location.pathname;
  function navigate(to) {
    history.pushState({}, '', to);
    path = window.location.pathname;
  }
  window.addEventListener('popstate', () => (path = window.location.pathname));

  $: atHome = path === '/';

  onMount(() => {
    document.body.style.backgroundColor = theme.secondary;
  });
</script>

<p id="currentTheme" style="display: none">{themeName}</p>
<button
  id="themeBtn"
  class="theme-icon"
  style="color: {theme.primary}; background: transparent; border: none"
  on:click={randomizeTheme}
>
  <Wheat class="fa-link" size={36} />
</button>

{#if atHome}
  <div class="icons">
    <a href="https://github.com/beabout" target="_blank" rel="noreferrer">
      <FolderGit class="fa-link" size={36} />
    </a>
    <a href="https://www.linkedin.com/in/clayton-beabout/" target="_blank" rel="noreferrer">
      <FileScan class="fa-link" size={36} />
    </a>
    <a href="/discography"on:click|preventDefault={() => navigate('/discography')}>
      <FileScan class="fa-link" size={36} />
    </a>
    <a href="/films" on:click|preventDefault={() => navigate('/films')}>
      <FileScan class="fa-link" size={36} />
    </a>
    <a href="/claybeabout.pdf" target="_blank" rel="noreferrer">
      <FileScan class="fa-link" size={36} />
    </a>
  </div>
{:else}
  <a href="/" on:click|preventDefault={() => navigate('/')}>
    <SquareArrowLeft class="fa-link" size={36} />
  </a>
{/if}

<div class="revision" style="color: {theme.primary}">claybeabout.com</div>

{#if path === '/'}
  <!-- Home icons only -->
{:else if path === '/catalog'}
  <Catalog {theme} />
{:else if path === '/discography'}
  <Spotify {theme} />
{:else if path === '/films' || path === '/pdf'}
  <Letterbox {theme} />
{/if}


