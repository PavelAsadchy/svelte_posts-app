<script>
  import { createEventDispatcher } from 'svelte';

  export let id;
  export let selected;

  const dispatch = createEventDispatcher();

  const onChange = () => dispatch('rating-select', id);
</script>

<li>
  <input
    type="radio"
    id={`num${id}`}
    name="rating"
    value={id}
    on:change={onChange}
    checked={selected === id}
  >

  <label for={`num${id}`}>{id}</label>
</li>

<style>
  li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
  }

  li:hover {
    background: #ff6a95;
  }

  li:hover > label {
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>