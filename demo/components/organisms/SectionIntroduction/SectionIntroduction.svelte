<p>
  Smodale uses <code>svelte/store</code> module for handling the visibility of modals and when
  supported it also uses <code>ResizeObserver</code> for detecting screen changes.
</p>

<p>
  By default when a modal it's shown will fit the viewport height and width, which could be a common
  case when on mobile devices however the <code>breakpoints</code> property will allow the definition
  of some parameters which will style modals on different screen sizes.
</p>

<p>Smodale also provides a built-in way for getting back data on modal acceptance or removal.</p>
