<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <div class="nav-wrapper">
    <div class="container">
      <Link to="/" class="brand-logo">Svelte</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rate">Rate Me</Link></li>
        <li><Link to="/heroes">Heroes</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </div>
</nav>