<script>
  import { v4 as uuid } from 'uuid';
  import { feedbackStore } from '../stores';
  import Button from './FeedbackButton.svelte';
  import FeedbackCard from './FeedbackCard.svelte';
  import RatingSelect from "./RatingSelect.svelte";

  let rating = 10;
  let text = '';
  let btnDisabled = true;
  let message;
  const min = 10;

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleRatingSelect = ({ detail }) => rating = detail;

  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: uuid(),
        text,
        rating: +rating,
      }

      feedbackStore.update(currentFeedback => [newFeedback, ...currentFeedback])
      text = '';
    }
  };
</script>

<FeedbackCard>
  <h2>Please, rate me</h2>

  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleRatingSelect} />

    <div class="input-group">
      <input
        type="text"
        placeholder="Type in here"
        bind:value={text}
        on:input={handleInput}
      >
    
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>

    {#if message}
      <div class="message">{message}</div>      
    {/if}
  </form>
</FeedbackCard>

<style>
  h2 {
    max-width: 400px;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    margin-top: 15px;
    padding: 8px 10px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .message {
    padding-top: 10px;
    color: rebeccapurple;
    text-align: center;
  }
</style>