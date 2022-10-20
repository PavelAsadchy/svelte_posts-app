<script>
  import { heroesStore } from '../stores';
  import { HEROES_API_BASE_URL, HEROES_PUBLIC_KEY } from '../helpers/consts';

  $: offset = $heroesStore.offset;
  $: totalResults = $heroesStore.total;
  $: count = $heroesStore.count;
  $: current = Math.ceil(($heroesStore.offset + $heroesStore.count) / $heroesStore.limit);
  $: last = Math.ceil($heroesStore.total / $heroesStore.limit);

  const goToPage = async pageNum => {
    heroesStore.update(currState => ({...currState, isLoading: true}));
    const res = await fetch(`${HEROES_API_BASE_URL}/v1/public/characters?offset=${$heroesStore.limit * (pageNum - 1)}&apikey=${HEROES_PUBLIC_KEY}`);
    if (res.ok) {
      const { data } = await res.json();
      heroesStore.update(() => ({...data, isLoading: false}));
    }
    console.log(pageNum);
  };
</script>

<div>{current}</div>

<ul class="pagination">
  <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
  <li class="active"><a href="#!">1</a></li>
  <li class="waves-effect"><a href="#!">2</a></li>
  <li class="waves-effect"><a href="#!">3</a></li>
  <li class="waves-effect"><a href="#!">4</a></li>
  <li class="waves-effect"><a href="#!">5</a></li>
  <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>

<ul class="pagination">
  <li class="waves-effect">
    <button
      on:click={() => goToPage(current - 1)}
      disabled={current === 1 || null}
    >
      <i class="material-icons">chevron_left</i>
    </button>
  </li>

  {#if current > 1}
    <li class="waves-effect">
      <button on:click={() => goToPage(1)}>1</button>
    </li>
    {#if current - 1 > 1}
      <li class="waves-effect">
        <span class="no-pointer">...</span>
      </li>
      {#if current - 1 > 2}
        <li class="waves-effect">
          <button on:click={() => goToPage(current - 1)}>
            {current - 1}
          </button>          
        </li>
      {/if}
    {/if}
  {/if}

  <li class="active"><span>{current}</span></li>

  {#if current < last}
    {#if current < last - 1}
      <li class="waves-effect">
        <button on:click={() => goToPage(current + 1)}>
          {current + 1}
        </button>
      </li>
      {#if current < last - 2}
        <li class="waves-effect">
          <span class="no-pointer">...</span>
        </li>
      {/if}
    {/if}
    <li class="waves-effect">
      <button on:click={() => goToPage(last)}>
        {last}
      </button>
    </li>
  {/if}

  <li class="waves-effect">
    <button
      on:click={() => goToPage(current + 1)}
      disabled={current === last || null}
    >
      <i class="material-icons">chevron_right</i></button>
  </li>
</ul>

<style>
  .pagination button {
    padding: 0 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #444;
    font-size: 1.2rem;
    line-height: 30px;
  }

  .pagination button:disabled {
    color: #999;
    cursor: default;
  }

  li.active span,
  li.waves-effect span {
    display: inline-block;
    padding: 0 10px;
    font-size: 1.2rem;
    line-height: 30px;
  }

  li.active span {
    color: #fff;
  }

  .no-pointer {
    cursor: default ;
  }
</style>