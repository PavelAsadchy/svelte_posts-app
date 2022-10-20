<script>
  import { heroesStore } from "../stores";
  import {
    HEROES_API_BASE_URL,
    HEROES_PUBLIC_KEY,
    COUNT_OPTIONS,
    SEARCH_DEBOUNCE_TIME
  } from "../helpers/consts";

  let debounceTimer;

  const onInputEnter = event => {
    clearTimeout(debounceTimer);
    heroesStore.update(currState => ({...currState, search: event.target.value}));

    debounceTimer = setTimeout(() => {
      onFilterChange();
    }, SEARCH_DEBOUNCE_TIME);
  }

  const onCountChange = event => {
    heroesStore.update(currState => ({...currState, limit: +event.target.value}));
    onFilterChange();
  };

  const onFilterChange = async () => {
    heroesStore.update(currState => ({...currState, isLoading: true}));
    const res = await fetch(
      `${HEROES_API_BASE_URL}/v1/public/characters?${$heroesStore.search ? `nameStartsWith=${$heroesStore.search}&` : ''}limit=${$heroesStore.limit}&apikey=${HEROES_PUBLIC_KEY}
    `);
    if (res.ok) {
      const { data } = await res.json();
      heroesStore.update(currState => ({...data, search: currState.search, isLoading: false}));
    }
  }
</script>

<form class="col s12">
  <div class="row">
    <div class="col s12 form-row">
      <div class="search">
        Start typing Hero name:
        <div class="input-field inline">
          <input
            id="search" type="text"
            bind:value={$heroesStore.search}
            on:keyup={onInputEnter}
          >
          <label for="search" class={$heroesStore.search ? "active" : ''}>Name</label>
        </div>
      </div>

      <div class="count">
        Results per page:
        <div class="input-field inline">
          <select bind:value={$heroesStore.limit} on:change={onCountChange}>
            {#each COUNT_OPTIONS as option (option)}
              <option value={option}>
                {option}
              </option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </div>
</form>

<style>
  .form-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  select {
    display: inline-block;
    border: none;
    outline: none;
  }
</style>