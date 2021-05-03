<script>
  import LongContentExample from 'Demo/components/snippets/LongContentExample';
  import LongContentBodyScrollExample from 'Demo/components/snippets/LongContentBodyScrollExample';
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<LongContentExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet data-src="dist/snippets/LongContentExample.svelte" />
</Details>

<div class="margin-top-sm" />

<LongContentBodyScrollExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet data-src="dist/snippets/LongContentBodyScrollExample.svelte" />
</Details>
