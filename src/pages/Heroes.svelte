<script>
  import { onMount } from 'svelte';
  import { heroesStore } from '../stores';
  import HeroCard from '../lib/HeroCard.svelte';
  import HeroesPagination from '../lib/HeroesPagination.svelte';
  import HeroesFilters from '../lib/HeroesFilters.svelte';
  import Spinner from '../lib/Spinner.svelte';
  import { HEROES_API_BASE_URL, HEROES_PUBLIC_KEY } from '../helpers/consts';

  onMount(async () => {
    if (!!$heroesStore.results.length) return;

    heroesStore.update(currState => ({...currState, isLoading: true}));
    const res = await fetch(`${HEROES_API_BASE_URL}/v1/public/characters?apikey=${HEROES_PUBLIC_KEY}`);
    if (res.ok) {
      const { data } = await res.json();
      heroesStore.update(() => ({...data, isLoading: false}));
    }
  });
</script>

<div class="heroes">
  <div class="container">
    {#if !$heroesStore.isLoading}
      <HeroesFilters />

      <ul>
        {#each $heroesStore.results as hero (hero.id)}
          <li><HeroCard {hero} /></li>
        {/each}
      </ul>

      <HeroesPagination />
    {:else}
      <Spinner />
    {/if}
  </div>
</div>

<style>
  .heroes {
    padding: 40px 0;
  }
  
  ul {
    margin: 0 -10px;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50%;
    padding: 10px;
  }
</style>