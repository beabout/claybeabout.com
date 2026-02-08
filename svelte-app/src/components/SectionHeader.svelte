<script>
  export let title = '';
  export let hint = '';
  export let theme;
</script>

<h2 style="margin-top: 3rem; color: {theme.alternative}">{title}</h2>
{#if hint}
  <hint style="color: {theme.primary}">{hint}</hint>
{/if}
