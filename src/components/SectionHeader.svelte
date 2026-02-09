<script>
  export let title = '';
  export let hint = '';
</script>

<h2 style="margin-top: 3rem" class="theme-alternative">{title}</h2>
{#if hint}
  <hint class="theme-primary">{hint}</hint>
{/if}
