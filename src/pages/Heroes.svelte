<script>
  import { onMount } from 'svelte';
  import HeroCard from '../lib/HeroCard.svelte';
  import { HEROES_API_BASE_URL, HEROES_PUBLIC_KEY } from '../helpers/consts';

  let heroes = [];

  onMount(async () => {
    const res = await fetch(`${HEROES_API_BASE_URL}/v1/public/characters?apikey=${HEROES_PUBLIC_KEY}`);
    if (res.ok) {
      const { data } = await res.json();
      heroes = data.results;
    }
  });
</script>

<div class="container">
  <ul>
    {#each heroes as hero (hero.id)}
      <li><HeroCard {hero} /></li>
    {/each}
  </ul>
</div>

<style>
  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50%;
    padding: 10px;
  }
</style>