<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from './lib/Navbar.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Rating from './pages/Rating.svelte';
</script>

<Router>
  <header>
    <Navbar/>
  </header>

  <main>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/rate" component={Rating} />
  </main>
</Router>

<style>
  
</style>
