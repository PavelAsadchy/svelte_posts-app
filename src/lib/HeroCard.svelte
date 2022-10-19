<script>
  import { Link } from "svelte-routing";

  export let hero;
</script>

<div class="card">
  <div class="card-image waves-effect waves-block waves-light">
    <img
      src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
      alt={hero.name}
    >
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">
      {hero.name}
      <i class="material-icons right">more_vert</i>
    </span>
    <p><Link to={`/hero/${hero.id}`}>See details</Link></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">
      {hero.name}
      <i class="material-icons right">close</i>
    </span>
    <ul>
      {#each hero.comics.items as comics (comics.name)}
        <li>{comics.name}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .card {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .card .card-image {
    flex-grow: 1;
  }
</style>