<script context="module">
  window.Prism = window.Prism || {};
  window.Prism.manual = true;

  import 'prismjs';
</script>

<script>
  import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

  export let language = 'javascript';
  export let filename = '';
  export let code = '';

  const onMount = (node) => window.Prism.highlightElement(node);
</script>

{#if code}
  <div class="code-snippet position-relative">
    {#if filename}
      <div class="position-absolute top-0 right-0 text-xs margin-top-sm margin-right-md font-mono">
        {filename}
      </div>
    {/if}
    <pre
      class="radius-md"
      {...$$restProps}>
    <code class="language-{language}" use:onMount>
      {@html code}
    </code>
  </pre>
  </div>
{/if}

<style src="_index.scss"></style>
