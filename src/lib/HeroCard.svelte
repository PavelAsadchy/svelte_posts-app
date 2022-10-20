<script>
  import { Link } from "svelte-routing";

  export let hero;
</script>

<div class="card small">
  <div class="card-image waves-effect waves-block waves-light">
    <img
      src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
      alt={hero.name}
    >
  </div>
  <div class="card-content">
    <span class="card-title grey-text text-darken-4">
      <span class="hero-name activator">{hero.name}</span>
      <i class="material-icons right activator">more_vert</i>
    </span>
    <p><Link to={`/hero/${hero.id}`}>See details</Link></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">
      <span class="hero-name wrap">{hero.name}</span>
      <i class="material-icons right">close</i>
    </span>
    <ul>
      {#each hero.comics.items as comics}
        <li>{comics.name}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .card {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .card .card-image {
    flex-grow: 1;
    max-height: 70%;
  }

  .card .card-title {
    display: flex;
    cursor: pointer;
  }

  .card .card-image img {
    position: absolute;
    top: unset;
    left: 50%;
    transform: translateX(-50%);
  }

  .hero-name {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hero-name.wrap {
    flex-grow: 1;
    white-space: initial;
  }
</style>