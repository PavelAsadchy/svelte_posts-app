import './app.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
