import 'phoenix_html'

// any css we import will be bundled in app.css
import '../css/global.css'

// import our component
import App from './App.svelte'

// instantiate the component
const app = new App({
  // mount it to `document.body`
  target: document.body,

  // pass some props
  props: {
    name: 'world'
  }
})
