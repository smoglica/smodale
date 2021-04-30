<script>
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
  import VerticallyAndHorizontallyCenteredExample from 'Demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample';
  import VerticallyCenteredExample from 'Demo/components/organisms/SectionCentered/VerticallyCenteredExample';
</script>

<VerticallyAndHorizontallyCenteredExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample.svelte"
  />
</Details>

<div class="margin-top-sm" />

<VerticallyCenteredExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionCentered/VerticallyCenteredExample.svelte"
  />
</Details>
