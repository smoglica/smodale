<script>
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<p>
  Smodale uses <code>svelte/store</code> module for handling the visibility of modals. When using
  static modals the property <code>name</code> it's mandatory and must be unique.
</p>

<p>
  By default when a modal it's shown will fit the viewport height and width, which could be a common
  case when on mobile devices however the <code>breakpoints</code> property will allow the definition
  of different parameters which will style modals on different screen sizes.
</p>

<p>Smodale also provides a built-in way for getting back data on modal acceptance or removal.</p>

<CodeSnippet filename="App.svelte" language="css" code={'body { color: white; }'} />
