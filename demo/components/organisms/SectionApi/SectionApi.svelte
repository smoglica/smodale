<script>
  import List from 'Demo/components/atoms/List';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<h4><code>show()</code></h4>
<hr />

<p>Display a static or dynamic modal.</p>

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
  smodale.show(MyCustomModalContent, componentProps, modalProps);
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

<p>Hide an existing modal and <u>resolve</u> the promise returned from <code>show();</code></p>

<List>
  <li>
    <strong><small>Arguments:</small></strong>
    <ul>
      <li>
        <code>{'{ string } name (required)'}</code>
      </li>
      <li>
        <code>{'{ any } data (optional)'}</code> - Argument for the resolved promise
      </li>
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

  smodale
    .show('modal-name')
    .then(data => {
      console.log(data); // { foo: 'bar' }
    });

  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });
</script>

<Modal name="modal-name">
  <h1>Modal title</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <button on:click={onOkClick}>Ok</button>
</Modal>
`}
    />
  </li>
</List>

<h4><code>cancel()</code></h4>
<hr />

<p>Hide an existing modal and <u>reject</u> the promise returned from <code>show();</code></p>

<List>
  <li>
    <strong><small>Arguments:</small></strong>
    <ul>
      <li>
        <code>{'{ string } name (required)'}</code>
      </li>
      <li>
        <code>{'{ any } data (optional)'}</code> - Argument for the rejected promise
      </li>
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

  smodale
    .show('modal-name')
    .then(data => {
      console.log(data); // { foo: 'bar' }
    });

  const onCancelClick = () => smodale.cancel('modal-name', { foo: 'bar' });
</script>

<Modal name="modal-name">
  <h1>Modal title</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <button on:click={onCancelClick}>Cancel</button>
</Modal>
`}
    />
  </li>
</List>

<h4><code>getModalContext()</code></h4>
<hr />

<p>
  Usable in children components of <code>Modal</code> component or in custom components for dynamic modals.
</p>

<List>
  <li>
    <strong><small>Returns:</small></strong>
    <ul>
      <li>An <code>Object</code> with the following properties.
        <ul>
          <li><code>hide(data: any)</code> - Hide modal and resolve the promise</li>
          <li><code>close(data: any)</code> - Hide modal and reject the promise</li>
          <li><code>component</code> - <code>Modal</code> component instance</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <strong><small>Example:</small></strong>
    <CodeSnippet
      filename="MyCustomModalContent.svelte"
      language="markup"
      unescaped
      code={`
<script>
  import { getModalContext } from 'smodale';
  
  const { hide, cancel, component } = getModalContext();

  console.log(component);

  const onCancelClick = () => cancel('cancelled');
  const onOkClick = () => hide({ foo: 'bar' });

  <button on:click={onCancelClick}>Cancel</button>
  <button on:click={onOkClick}>Ok</button>
</script>
`}
    />
    <CodeSnippet
      filename="App.svelte"
      language="markup"
      unescaped
      code={`
<script>
  import smodale, { Modal } from 'smodale';
  import MyCustomModalContent from 'MyCustomModalContent.svelte';

  smodale.show('modal-name');
  smodale.show(MyCustomModalContent);
</script>

<Modal name="modal-name">
  <MyCustomModalContent />
</Modal>
`}
    />
  </li>
</List>

<h4><code>ModalDismissReasons</code></h4>
<hr />

<p>Constans for checking what's the modal close reason.</p>

<List>
  <li>
    <strong><small>Type:</small></strong> <code>Object</code>
    <ul>
      <li><code>BACKDROP_CLICK</code></li>
      <li><code>ESC</code></li>
    </ul>
  </li>
  <li><strong><small>Read only</small></strong></li>
  <li>
    <strong><small>Details:</small></strong>
    <p>
      When props <code>escapeToClose</code> or <code>clickOutsideToClose</code> are set to
      <code>true</code> the modal will be closed with the <code>cancel()</code> method with a dismiss
      string argument.
    </p>
  </li>
  <li>
    <strong><small>Example:</small></strong>
    <CodeSnippet
      filename="App.svelte"
      language="markup"
      unescaped
      code={`
<script>
  import smodale, { ModalDismissReasons } from 'smodale';
  import MyCustomModalContent from 'MyCustomModalContent.svelte';

  smodale.show(MyCustomModalContent)
    .then(() => {})
    .catch(reason => {
      if (
        reason === ModalDismissReasons.BACKDROP_CLICK ||
        reason === ModalDismissReasons.ESC
      ) {
        // do something
      }
    });
</script>
`}
    />
  </li>
</List>