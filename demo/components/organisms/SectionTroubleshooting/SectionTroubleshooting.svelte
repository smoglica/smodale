<script>
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<h3><code>Uncaught (in promise)</code></h3>
<hr />

<p>
  This console error happens when the returned promise from <code>show()</code> method has been
  rejected through the <code>cancel()</code> method and has no rejection handler.
</p>

<p>
  You can prevent that from happening by handling the rejection with the <code>catch</code> block:
</p>

<CodeSnippet
  code={`
  import smodale from 'smodale';

  smodale.show().catch(() => {});
  `}
/>
