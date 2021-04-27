<script>
  import LongContentExample from 'Demo/components/organisms/SectionLongContent/LongContentExample';
  import LongContentBodyScrollExample from 'Demo/components/organisms/SectionLongContent/LongContentBodyScrollExample';
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<LongContentExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet data-src="demo/components/organisms/SectionLongContent/LongContentExample.svelte" />
</Details>

<div class="margin-top-sm" />

<LongContentBodyScrollExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionLongContent/LongContentBodyScrollExample.svelte"
  />
</Details>
