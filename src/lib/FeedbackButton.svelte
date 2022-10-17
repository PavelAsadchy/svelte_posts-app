<script>
  export let style = 'primary';
  export let type = 'button';
  export let disabled = false;
</script>

<button {type} {disabled} class={style}>
  <slot></slot>
</button>

<style>
  button {
    width: 100px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled {
    color: #333;
    background-color: #ccc;
    cursor: auto;
  }

  button:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }

  .primary {
    background-color: #202142;
  }

  .secondary {
    background-color: #ff6a95;
  }
</style>