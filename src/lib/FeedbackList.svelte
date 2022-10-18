<script>
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './FeedbackItem.svelte';
  
  export let feedbackList;
</script>

{#each feedbackList as feedbackItem (feedbackItem.id)}
  <div in:scale out:fade="{{ duration: 500 }}">
    <FeedbackItem
      on:delete-feedback
      item={feedbackItem}
    />
  </div>
{/each}