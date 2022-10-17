<script>
  import FeedbackItem from './FeedbackItem.svelte';
  
  export let feedbackList;
</script>

{#each feedbackList as feedbackItem (feedbackItem.id)}
  <FeedbackItem
    on:delete-feedback
    item={feedbackItem}
  />
{/each}