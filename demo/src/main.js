import './global.css';
import App from './App.svelte';

export default new App({
  target: document.body,
  props: {
    name: 'world',
  },
});
