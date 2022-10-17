<script>
  import { createEventDispatcher } from 'svelte';
  import { API_BASE_URL } from '../helpers/consts';

  export let editingPost;

  $: title = editingPost.title;
  $: body = editingPost.body;
  let loading = false;
  const dispatch = createEventDispatcher();

  const onFormSubmit = async () => {
    if (!title.trim().length || !body.trim().length) return;

    loading = true;
    let url, method;
    const newPost = { title, body };

    if (editingPost.id) {
      url = `${API_BASE_URL}/post/${editingPost.id}`;
      method = 'PUT';
    } else {
      url = `${API_BASE_URL}/post`;
      method = 'POST';
    }

    const res = await fetch(url, {
      method,
      body: JSON.stringify(newPost)
    });
    const post = await res.json();
    dispatch('postCreated', post);
    loading = false;
  };
</script>

{#if loading}
  <div class="progress">
    <div class="indeterminate"></div>
  </div>
{:else}
  <form on:submit|preventDefault={onFormSubmit}>
    <div class="input-field">
      <label for="title">Title</label>
      <input type="text" id="title" bind:value={editingPost.title}/>
    </div>
    
    <div class="input-field">
      <label for="body">Body</label>
      <input type="text" id="body" bind:value={editingPost.body}/>
    </div>
    
    <button type="submit" class="waves-effect waves-light btn">
      {editingPost.id ? "Update" : "Add"}
    </button>
  </form>
{/if}

<style>
  form {
    margin: 50px;
  }

  .progress {
    margin: 100px 0;
  }
</style>