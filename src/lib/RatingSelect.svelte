<script>
  import RatingSelectItem from "./RatingSelectItem.svelte";

  let selected = 10;
  let ids = Array.from(Array(10), (_, i) => ++i);
</script>

<ul class="rating">
  {#each ids as id}
    <RatingSelectItem
      {id}
      {selected}
      on:rating-select
    />    
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }
</style>