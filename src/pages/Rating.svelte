<script>
  import FeedbackList from '../lib/FeedbackList.svelte';
  import FeedbackForm from '../lib/FeedbackForm.svelte';
  import FeedbackStats from '../lib/FeedbackStats.svelte';
</script>

<div class="rating">
  <div class="container">
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
  </div>
</div>

<style>
  .rating {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    background-color: #202142;
    line-height: 1.6;
    color: #fff;
  }
</style>