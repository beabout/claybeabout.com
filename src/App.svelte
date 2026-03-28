<script>
  import { onMount, onDestroy } from 'svelte';
  import themes from './themes.json';
  import Catalog from './routes/Catalog.svelte';
  import Spotify from './routes/Spotify.svelte';
  import Letterbox from './routes/Letterbox.svelte';
  import Collage from './routes/Collage.svelte';
  import GitLog from './routes/GitLog.svelte';
  import IconLink from './components/IconLink.svelte';

  import { 
    ArrowBigLeft,
    FileCode,
    FileVideoCamera,
    FileHeadphone,
    FileQuestionMark,
    FileUser,
    GitBranch,
    Wheat
  } from 'lucide-svelte';

  let themeName = 'dannyphantom';
  let theme = themes[themeName];
  let reviewsData = null;
  let spotifyData = null;
  let cstTime = '';
  let clockInterval;
  let grmnPrice = '';
  let spursRecord = '';

  function updateClock() {
    cstTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Chicago',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    });
  }

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
      href: '/gitlog',
      icon: GitBranch,
      preventDefault: true,
      onClick: () => navigate('/gitlog'),
      ariaLabel: 'Git Log'
    },
    {
      href: 'https://www.linkedin.com/in/clayton-beabout/',
      icon: FileUser,
      newTab: true,
      ariaLabel: 'LinkedIn'
    },
  ];

  onDestroy(() => clearInterval(clockInterval));

  onMount(() => {
    setTheme(themeName);
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
    (async () => {
      try {
        const res = await fetch(
          'https://query1.finance.yahoo.com/v8/finance/chart/GRMN?interval=1d&range=1d'
        );
        if (res.ok) {
          const data = await res.json();
          const meta = data?.chart?.result?.[0]?.meta;
          if (meta?.regularMarketPrice != null) {
            grmnPrice = `GRMN $${meta.regularMarketPrice.toFixed(2)}`;
          }
        }
      } catch (_) {}
    })();
    (async () => {
      try {
        const res = await fetch(
          'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/24'
        );
        if (res.ok) {
          const data = await res.json();
          const summary = data?.team?.record?.items?.[0]?.summary;
          if (summary) {
            spursRecord = `SAS: ${summary}`;
          }
        }
      } catch (_) {}
    })();
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

{#if atHome}
  <div class="top-bar">
    {#if grmnPrice}<span>{grmnPrice}</span>{/if}
    <span>{cstTime}</span>
    {#if spursRecord}<span>{spursRecord}</span>{/if}
  </div>
{/if}

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
{:else if path === '/gitlog'}
  <GitLog />
{:else if path === '/notes'}
  <Collage />
{/if}

<IconLink
  href="/notes"
  preventDefault
  onClick={() => navigate('/notes')}
  ariaLabel="Notes"
>
  <FileQuestionMark class="icon notes-icon" size={36} />
</IconLink>

<div class="revision">claybeabout.com</div>

