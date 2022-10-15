<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from './lib/Navbar.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
</script>

<Router>
  <Navbar/>

  <div class="container">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
</Router>

<style>
  
</style>
