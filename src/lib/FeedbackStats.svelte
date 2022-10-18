<script>
  import { feedbackStore } from '../stores';

  $: fbCount = $feedbackStore.length;
  $: fbAverage = $feedbackStore.length
    ? $feedbackStore.reduce((acc, { rating }) => acc + rating, 0) / $feedbackStore.length
    : 0;
</script>

<div class="feedback-stats">
  <h4>{fbCount} Reviews</h4>
  <h4>Ratings Average: {fbAverage}</h4>
</div>

<style>
  .feedback-stats {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    margin: 0;
    color: #fff;
    font-size: 18px;
    line-height: 1.6;
  }
</style>