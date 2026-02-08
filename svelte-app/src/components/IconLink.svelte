<script>
  export let href = '#';
  export let newTab = false;
  export let rel = 'noreferrer';
  export let onClick = undefined;
  export let preventDefault = false;
  export let ariaLabel = undefined;
  export let download = undefined;

  function handleClick(event) {
    if (preventDefault) {
      event.preventDefault();
    }
    if (onClick) {
      onClick(event);
    }
  }
</script>

<a
  href={href}
  target={newTab ? '_blank' : undefined}
  rel={newTab ? rel : undefined}
  aria-label={ariaLabel}
  download={download}
  on:click={handleClick}
  style="color: inherit"
>
  <slot />
</a>
