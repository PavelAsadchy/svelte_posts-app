<script>
  import FeedbackList from '../lib/FeedbackList.svelte';
  import FeedbackForm from '../lib/FeedbackForm.svelte';
  import FeedbackStats from '../lib/FeedbackStats.svelte';

  let feedbackList = [
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.'
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.'
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.'
    },
  ];

  $: fbCount = feedbackList.length;
  $: fbAverage = feedbackList.reduce((acc, { rating }) => acc + rating, 0) / feedbackList.length;

  const addFeedback = ({ detail: newFb }) => feedbackList = [newFb, ...feedbackList];

  const deleteFeedback = ({ detail: itemId }) => {
    feedbackList = feedbackList.filter(({ id }) => id !== itemId);
  };
</script>

<div class="rating">
  <div class="container">
    <FeedbackForm on:add-feedback={addFeedback} />

    <FeedbackStats {fbCount} {fbAverage} />

    <FeedbackList
      on:delete-feedback={deleteFeedback}
      {feedbackList}
    />
  </div>
</div>

<style>
  .rating {
    padding: 60px 0;
    background-color: #202142;
    line-height: 1.6;
    color: #fff;
  }
</style>