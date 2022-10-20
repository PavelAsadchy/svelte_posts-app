import { writable } from "svelte/store";

export const feedbackStore = writable([
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
]);

export const heroesStore = writable({
  isLoading: true,
  results: [],
  count: 20,
  limit: 20,
  offset: 0,
  total: null
});
