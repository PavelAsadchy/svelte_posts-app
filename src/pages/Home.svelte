<script>
  import { onMount } from 'svelte';
  import { API_BASE_URL } from '../helpers/consts';
  import PostForm from '../lib/PostForm.svelte';

  let posts = [];
  let postLimit = 8;
  let editingPost = {
    title: '',
    body: '',
    id: null
  };

  onMount(async () => {
    const res = await fetch(`${API_BASE_URL}/posts`);
    posts = await res.json();
  });

  const editPost = post => editingPost = post;

  const deletePost = idToDelete => {
    if (confirm('Are you sure?')) {
      fetch(`${API_BASE_URL}/post/${idToDelete}`, {
        method: 'DELETE'
      }).then(() => posts = posts.filter(({ id }) => id !== idToDelete));
    }
  };

  const updatePosts = ({ detail: post }) => {
    if (posts.find(({ id }) => id === post.id)) {
      const index = posts.findIndex(({ id }) => id === post.id);
      posts.splice(index, 1, post);
      posts = [...posts];
    } else posts = [post, ...posts];

    editingPost = {
      title: '',
      body: '',
      id: null
    };
  };

  const setPostLimit = () => {
    fetch(`${API_BASE_URL}/posts/${postLimit}`)
      .then(res => res.json())
      .then(limitedPosts => posts = limitedPosts);
  };
</script>

<div class="container">
  <div class="row">
    <div class="col s6">
      <PostForm
        on:postCreated={updatePosts}
        {editingPost}
      />
    </div>

    <div class="col s3 limit">
      <p>Limit of posts</p>
      <input type="number" bind:value={postLimit} />
      <button
        type="button"
        class="waves-effect waves-light btn"
        on:click={setPostLimit}
      >
        Set post limit
      </button>
    </div>
  </div>

  <div class="row">
    {#if !posts.length}
      <h3>Loading posts...</h3>
    {:else}
      {#each posts as post (post.id)}
        <div class="col s6">
          <div class="card">
            <div class="card-content">
              <p class="card-title">{post.title}</p>
              <p class="timestamp">{post.createdAt}</p>
              <p>{post.body}</p>
            </div>

            <div class="card-action">
              <button
                type="button"
                class="waves-effect waves-light btn add-btn"
                on:click={() => editPost(post)}
              >
                Edit
              </button>
              <button
                type="button"
                class="waves-effect waves-light btn delete-btn"
                on:click={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .add-btn {
    color: #ffab40;
  }
  .delete-btn {
    color: red;
  }

  .add-btn,
  .delete-btn {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  .add-btn:hover,
  .delete-btn:hover {
    opacity: 0.6;
  }

  .card .card-content .card-title {
    margin-bottom: 0;
  }

  .card .card-content .timestamp {
    margin-bottom: 10px;
    color: #999;
  }

  .limit {
    margin: 50px;
  }
</style>