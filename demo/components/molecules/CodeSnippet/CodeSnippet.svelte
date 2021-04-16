<script context="module">
  window.Prism = window.Prism || {};
  window.Prism.manual = true;

  import 'prismjs';
</script>

<script>
  export let language = 'javascript';
  export let filename = '';
  export let code = '';

  const onMount = (node) => {
    window.Prism.highlightElement(node);
  };
</script>

<div class="code-snippet position-relative">
  {#if filename}
    <div class="position-absolute top-0 right-0 text-xs margin-top-sm margin-right-md font-mono">
      {filename}
    </div>
  {/if}
  <pre
    class="radius-md">
    <code class="language-{language}" use:onMount>
      {@html code}
    </code>
  </pre>
</div>

<style src="_index.scss"></style>
