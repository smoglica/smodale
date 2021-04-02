import App from './App.svelte';

if (!('CSS' in window) || !CSS.supports('color', 'var(--color-var)')) {
  const cfStyle = document.getElementById('codyframe');

  if (cfStyle) {
    let href = cfStyle.getAttribute('href');

    href = href.replace('style.css', 'style-fallback.css');
    cfStyle.setAttribute('href', href);
  }
}

export default new App({ target: document.body });
