<script>
  import { onMount } from 'svelte';
  import Spinner from '../lib/Spinner.svelte';
  import { HEROES_API_BASE_URL, HEROES_PUBLIC_KEY } from '../helpers/consts';

  export let id;
  let hero;

  onMount(async () => {
    const res = await fetch(`${HEROES_API_BASE_URL}/v1/public/characters/${id}?apikey=${HEROES_PUBLIC_KEY}`);
    if (res.ok) {
      const { data } = await res.json();
      hero = data.results[0];
    }
  })
</script>

<h1>Hero {id}</h1>
<div class="container">
  {#if hero}
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name}>
            <span class="card-title">{hero.name}</span>
          </div>
          <div class="card-content">
            <p>{hero.description}</p>
            {#if !!hero.comics.available}
              <p>Comics:</p>
              {#each hero.comics.items as item}
                <p><a href={item.resourceURI}>{item.name}</a></p>
              {/each}
            {/if}

            {#if !!hero.events.available}
              <p>Events:</p>
              {#each hero.events.items as item}
                <p><a href={item.resourceURI}>{item.name}</a></p>
              {/each}
            {/if}

            {#if !!hero.series.available}
              <p>Series:</p>
              {#each hero.series.items as item}
                <p><a href={item.resourceURI}>{item.name}</a></p>
              {/each}
            {/if}
            
            {#if !!hero.stories.available}
              <p>Stories:</p>
              {#each hero.stories.items as item}
                <p><a href={item.resourceURI}>{item.name}</a></p>
              {/each}
            {/if}
          </div>
          <div class="card-action">
            {#each hero.urls as url (url.type)}
              <a href={url.url}>{url.type}</a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {:else}
    <Spinner />
  {/if}
</div>