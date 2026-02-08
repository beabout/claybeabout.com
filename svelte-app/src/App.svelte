<script>
  import { onMount } from 'svelte';
  import themes from './themes.json';
  import Catalog from './routes/Catalog.svelte';
  import Spotify from './routes/Spotify.svelte';
  import Letterbox from './routes/Letterbox.svelte';
  import IconLink from './components/IconLink.svelte';

  import { 
    ArrowBigLeft,
    FileCode,
    FileDown,
    FileVideoCamera,
    FileTerminal,
    FileChartColumn,
    FileHeadphone,
    FileQuestionMark,
    FileUser,
    Download,
    Film,
    FolderGit2,
    Linkedin,
    SquareArrowLeft,
    Wheat
  } from 'lucide-svelte';

  let themeName = 'dannyphantom';
  let theme = themes[themeName];
  let reviewsData = null;
  let spotifyData = null;

  function setTheme(name) {
    themeName = name;
    theme = themes[themeName];
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-alternative', theme.alternative);
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
      icon: FileCode,
      newTab: true,
      ariaLabel: 'GitHub'
    },
    {
      href: '/discography',
      icon: FileHeadphone,
      preventDefault: true,
      onClick: () => navigate('/discography'),
      ariaLabel: 'Discography'
    },
    {
      href: '/films',
      icon: FileVideoCamera,
      preventDefault: true,
      onClick: () => navigate('/films'),
      ariaLabel: 'Films'
    },
    {
      href: '/claybeabout.pdf',
      icon: FileDown,
      download: 'claybeabout.pdf',
      ariaLabel: 'Resume PDF'
    },
    {
      href: 'https://www.linkedin.com/in/clayton-beabout/',
      icon: FileUser,
      newTab: true,
      ariaLabel: 'LinkedIn'
    }
  ];

  onMount(() => {
    setTheme(themeName);
    (async () => {
      try {
        const res = await fetch('/Reviews.json', { cache: 'no-store' });
        if (res.ok) {
          const fetched = await res.json();
          if (fetched && Array.isArray(fetched.reviews)) {
            reviewsData = fetched;
          }
        }
      } catch (_) {
        // fall back to local JSON in Letterbox view
      }
    })();
    (async () => {
      try {
        const res = await fetch('/Spotify.json', { cache: 'no-store' });
        if (res.ok) {
          const fetched = await res.json();
          if (fetched && Array.isArray(fetched.albums)) {
            spotifyData = fetched;
          }
        }
      } catch (_) {
        // fall back to local JSON in Spotify view
      }
    })();
  });
</script>

<p id="currentTheme" style="display: none">{themeName}</p>
<button
  class="theme-icon"
  style="background: transparent; border: none"
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
        download={link.download}
        ariaLabel={link.ariaLabel}
      >
        <svelte:component this={link.icon} class="icon" size={48} />
      </IconLink>
    {/each}
  </div>
{:else}
  <IconLink href="/" preventDefault onClick={() => navigate('/')} ariaLabel="Back home">
    <ArrowBigLeft class="icon back-icon" size={36} />
  </IconLink>
{/if}

{#if path === '/'}
  <!-- Home icons only -->
{:else if path === '/catalog'}
  <Catalog />
{:else if path === '/discography'}
  <Spotify {spotifyData} />
{:else if path === '/films' || path === '/pdf'}
  <Letterbox {reviewsData} />
{/if}

<div class="revision">claybeabout.com</div>

