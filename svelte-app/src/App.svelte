<script>
  import { onMount } from 'svelte';
  import themes from './themes.json';
  import Catalog from './routes/Catalog.svelte';
  import Spotify from './routes/Spotify.svelte';
  import Letterbox from './routes/Letterbox.svelte';
  import IconLink from './components/IconLink.svelte';

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
  $: homeLinks = [
    {
      href: 'https://github.com/beabout',
      icon: FolderGit,
      newTab: true,
      ariaLabel: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/clayton-beabout/',
      icon: FileScan,
      newTab: true,
      ariaLabel: 'LinkedIn'
    },
    {
      href: '/discography',
      icon: FileScan,
      preventDefault: true,
      onClick: () => navigate('/discography'),
      ariaLabel: 'Discography'
    },
    {
      href: '/films',
      icon: FileScan,
      preventDefault: true,
      onClick: () => navigate('/films'),
      ariaLabel: 'Films'
    },
    {
      href: '/claybeabout.pdf',
      icon: FileScan,
      newTab: true,
      ariaLabel: 'Resume PDF'
    }
  ];

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
  <Wheat class="icon" size={36} />
</button>

{#if atHome}
  <div class="icons">
    {#each homeLinks as link}
      <IconLink
        href={link.href}
        newTab={link.newTab}
        preventDefault={link.preventDefault}
        onClick={link.onClick}
        ariaLabel={link.ariaLabel}
      >
        <svelte:component this={link.icon} class="icon" size={36} />
      </IconLink>
    {/each}
  </div>
{:else}
  <IconLink href="/" preventDefault onClick={() => navigate('/')} ariaLabel="Back home">
    <SquareArrowLeft class="icon" size={36} />
  </IconLink>
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


