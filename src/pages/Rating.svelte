<script>
  import FeedbackList from '../lib/FeedbackList.svelte';
  import FeedbackForm from '../lib/FeedbackForm.svelte';
  import FeedbackStats from '../lib/FeedbackStats.svelte';
</script>

<svelte:head>
	<style>
    main {
      background-color: #202142;
    }
  </style>
</svelte:head>

<div class="rating">
  <div class="container">
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
  </div>
</div>

<style>
  .rating {
    padding-top: 40px;
  }
</style>