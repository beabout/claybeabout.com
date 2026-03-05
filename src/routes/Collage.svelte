<script>
  import SectionHeader from '../components/SectionHeader.svelte';
  import { ExternalLink } from 'lucide-svelte';

  const cards = [
    {
      type: 'color',
      span: 2,
      hex: '#a3f7b5',
      label: 'Mint fresh'
    },
    {
      type: 'link',
      span: 2,
      title: 'bel.beabout.cc',
      url: 'https://bel.beabout.cc/',
      description: 'You probably can\'t access this.'
    },
    {
      type: 'note',
      span: 6,
      title: 'grandma\'s eggbake recipe',
      body: `
      <div class="recipe-columns">
        <div class="recipe-column">
          <h3>ingredients</h3>
          <ul>
            <li>6 eggs, beaten</li>
            <li>2 cups of milk</li>
            <li>6 slices of bread, torn</li>
            <li>1 lb of sausage (rolled up jimmy dean stuff)</li>
            <li>2 cup of graded cheddar cheese</li>
          </ul>
        </div>
        <div class="recipe-column">
          <h3>steps</h3>
          <ol>
            <li>Brown the sausage, drain it (soak up greasy parts)</li>
            <li>Mix together everything else (eggs, milk, cheese, bread)</li>
            <li>Put in a greased casserole (9x13 container)</li>
            <li>Set oven for 350</li>
            <li>Should cook for 45 minutes</li>
          </ol>
        </div>
      </div>
    `
    },
    {
      type: 'note',
      span: 3,
      title: 'Is "should" inspiring?',
      body: 'When you say "We should do ...", "let\'s try to", it comes off argumentative and attempts to remove pressure from oneself. Replace "should" with "I\'d like to do", "I\'d prefer to". These phrases take ownership and inspire.'
    },
    {
      type: 'note',
      span: 1,
      title: 'Be Curious',
      body: 'Ask more, tell less.'
    },
    {
      type: 'note',
      span: 2,
      title: 'Be Careful',
      body: 'It is a dangerous thing to assume intent in others actions.'
    },
    {
      type: 'quote',
      span: 3,
      quote: 'To honor your mother and father is not to obey what they say, to honor your mother and father is to respect them.',
      author: 'Fred Rogers'
    },
    {
      type: 'quote',
      span: 3,
      quote: 'Love is at the root of everything, all learning, all relationships. Love or the lack of it.',
      author: 'Fred Rogers'
    },
    {
      type: 'quote',
      span: 3,
      quote: 'The effect you have on others is the most valuable currency there is.',
      author: 'Jim Carrey'
    }
  ];
</script>

<SectionHeader title="notes." hint="a collage of loose thoughts" />

<div class="collage-grid">
  {#each cards as card}
    <div class="collage-card collage-span-{card.span}" class:collage-card--link={card.type === 'link'} class:collage-card--color={card.type === 'color'}>
      {#if card.type === 'note'}
        <h3 class="theme-primary">{card.title}</h3>
        <p class="collage-body theme-alternative">{@html card.body}</p>
      {:else if card.type === 'link'}
        <a href={card.url} target="_blank" rel="noreferrer" class="collage-link-anchor">
          <span class="collage-link-title theme-primary">
            {card.title}
            <ExternalLink size={14} style="display:inline; vertical-align: middle;" />
          </span>
          <p class="collage-body theme-alternative">{card.description}</p>
        </a>
      {:else if card.type === 'quote'}
        <blockquote class="collage-quote theme-alternative">
          "{card.quote}"
          <cite class="theme-primary">— {card.author}</cite>
        </blockquote>
      {:else if card.type === 'color'}
        <div class="collage-swatch" style="background:{card.hex}"></div>
        <span class="collage-swatch-label theme-primary">{card.label}</span>
        <span class="collage-swatch-hex theme-alternative">{card.hex}</span>
      {/if}
    </div>
  {/each}
</div>

<style>
  .collage-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 1.5rem;
    padding-bottom: 3rem;
  }

  .collage-card {
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;
    padding: 1.25rem;
    transition: border-color 0.2s, transform 0.2s;
  }

  .collage-card:hover {
    border-color: var(--color-alternative);
    transform: translateY(-2px);
  }

  .collage-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
  }

  .collage-body {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

  .recipe-columns {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .recipe-column h3 {
    margin-top: 0;
  }

  @media screen and (max-width: 640px) {
    .recipe-columns {
      grid-template-columns: 1fr;
    }
  }

  .collage-card--link {
    cursor: pointer;
  }

  .collage-link-anchor {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  .collage-link-title {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .collage-quote {
    border-left: 3px solid var(--color-primary);
    font-style: italic;
    margin: 0;
    padding: 0 0 0 1rem;
    line-height: 1.6;
  }

  .collage-quote cite {
    display: block;
    font-size: 0.9rem;
    font-style: normal;
    margin-top: 0.75rem;
  }

  .collage-card--color {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }

  .collage-swatch {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }

  .collage-swatch-label {
    font-weight: 600;
    font-size: 1rem;
  }

  .collage-swatch-hex {
    font-family: monospace;
    font-size: 0.85rem;
    opacity: 0.7;
  }

  .collage-span-1 { grid-column: span 1; }
  .collage-span-2 { grid-column: span 2; }
  .collage-span-3 { grid-column: span 3; }
  .collage-span-4 { grid-column: span 4; }
  .collage-span-5 { grid-column: span 5; }
  .collage-span-6 { grid-column: span 6; }

  @media screen and (max-width: 768px) {
    .collage-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .collage-span-1,
    .collage-span-2,
    .collage-span-3,
    .collage-span-4,
    .collage-span-5,
    .collage-span-6 {
      grid-column: span 2;
    }
  }
</style>
