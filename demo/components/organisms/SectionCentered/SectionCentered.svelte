<script>
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
  import VerticallyAndHorizontallyCenteredExample from 'Demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample';
  import HorizontallyCenteredExample from 'Demo/components/organisms/SectionCentered/HorizontallyCenteredExample';
</script>

<VerticallyAndHorizontallyCenteredExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample.svelte"
  />
</Details>

<div class="margin-top-sm" />

<HorizontallyCenteredExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionCentered/HorizontallyCenteredExample.svelte"
  />
</Details>
