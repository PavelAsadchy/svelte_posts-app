<script>
  import { createEventDispatcher } from 'svelte';
  import FeedbackCard from './FeedbackCard.svelte';

  export let item;

  const dispatch = createEventDispatcher();

  const handleDelete = id => dispatch('delete-feedback', id);
</script>

<FeedbackCard>
  <div class="num-display">
    {item.rating}
  </div>

  <button
    class="close"
    on:click={() => handleDelete(item.id)}
  >X</button>

  <p class="text-display">
    {item.text}
  </p>
</FeedbackCard>

<style>
  .num-display {
    width: 50px;
    height: 50px;
    padding: 10px;
    position: absolute;
    top: -10px;
    left: -10px;
    color: #fff;
    background-color: #ff6a95;
    border: 1px solid #eee;
    border-radius: 50%;
    font-size: 19px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
</style>