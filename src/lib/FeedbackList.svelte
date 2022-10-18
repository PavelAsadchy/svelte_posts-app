<script>
  // import { onDestroy } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { feedbackStore } from '../stores';
  import FeedbackItem from './FeedbackItem.svelte';
  
  // let feedbackList;

  // const unsubscribe = feedbackStore.subscribe(data => feedbackList = data);

  // onDestroy(() => unsubscribe());
</script>

{#each $feedbackStore as feedbackItem (feedbackItem.id)}
  <div in:scale out:fade="{{ duration: 500 }}">
    <FeedbackItem item={feedbackItem} />
  </div>
{/each}