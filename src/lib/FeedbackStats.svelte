<script>
  export let fbCount;
  export let fbAverage;
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
    font-size: 18px;
  }
</style>