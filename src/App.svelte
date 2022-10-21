<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from './lib/Navbar.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Rating from './pages/Rating.svelte';
  import Heroes from './pages/Heroes.svelte';
  import Hero from "./pages/Hero.svelte";
</script>

<svelte:head>
  <title>Svelte tutorial app</title>
</svelte:head>

<Router>
  <div class="page">
    <header>
      <Navbar/>
    </header>

    <main>
      <Route path="/" component={Home} />
      <Route path="/rate" component={Rating} />
      <Route path="/heroes" component={Heroes} />
      <Route path="/hero/:id" component={Hero} />
      <Route path="/about" component={About} />
    </main>
  </div>
</Router>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
</style>
