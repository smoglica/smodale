<script>
  import TransitionFadeExample from 'Demo/components/organisms/SectionTransition/TransitionFadeExample';
  import TransitionBlurExample from 'Demo/components/organisms/SectionTransition/TransitionBlurExample';
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<TransitionFadeExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionTransition/TransitionFadeExample.svelte"
  />
</Details>

<div class="margin-top-sm" />

<TransitionBlurExample />
<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    data-src="demo/components/organisms/SectionTransition/TransitionBlurExample.svelte"
  />
</Details>
