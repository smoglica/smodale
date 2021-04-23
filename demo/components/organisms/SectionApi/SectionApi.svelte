<script>
  import List from 'Demo/components/atoms/List';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<h4><code>show()</code></h4>
<hr />

<p>For displaying a static or dynamic modal.</p>

<List>
  <li>
    <strong><small>Arguments:</small></strong>
    <ul>
      <li><code>{'{ string | SvelteComponent } name (required)'}</code></li>
      <li>
        <code>{'{ object } componentProps (optional)'}</code>
      </li>
      <li>
        <code>{'{ object } modalProps (optional)'}</code>
      </li>
      <li>
        <code>{'{ object } modalEvents (optional)'}</code>
      </li>
      <p>
        Optional arguments are consumed when <code>name</code> it's a
        <code>SvelteComponent</code> object.
      </p>
    </ul>
  </li>
  <li>
    <strong><small>Returns:</small></strong>
    <ul>
      <li>A<code>Promise</code> object.</li>
    </ul>
  </li>
  <li>
    <strong><small>Example:</small></strong>
    <CodeSnippet
      filename="App.svelte"
      language="markup"
      unescaped
      code={`
<script>
  import smodale, { Modal } from 'smodale';
  import MyCustomModalContent from 'MyCustomModalContent.svelte';

  const componentProps = { text: 'Lorem ipsum' };
  const modalProps = {
    breakpoints: {
      '768px': {
        maxWidth: '450px',
      },
    },
  };

  smodale.show('modal-name');
  smodale
  .show(MyCustomModalContent, componentProps, modalProps)
  .then(() => {/* when hide(); invoked */})
  .catch(() => {/* when cancel(); invoked */});
</script>

<Modal name="modal-name" {...modalProps}>
  <h1>Modal title</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</Modal>
`}
/>
  </li>
</List>

<h4><code>hide()</code></h4>
<hr />

<h4><code>cancel()</code></h4>
<hr />

<h4><code>ModalDismissReasons</code></h4>
<hr />

<h4><code>getModalContext()</code></h4>
<hr />
