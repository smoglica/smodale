<script>
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<CodeSnippet language="bash" code="npm i -S smodale" />

<h3>Usage</h3>
<p>Modals can be shown statically or dynamically. When shown dynamically can be also nested.</p>

<h4>Static modal</h4>
<p>
  They are defined through a <code>Modal</code> component in the template markup. When using static
  modals the property <code>name</code> it's mandatory and must be unique.
</p>

<CodeSnippet
  filename="App.svelte"
  language="markup"
  unescaped
  code={`
<script>
  import smodale, { Modal } from 'smodale';

  smodale.show('modal-name')
    .then(data => {
      console.log(data); // { foo: 'bar' }
    })
    .catch(data => {
      console.log(data); // 'cancelled'
    });

  const onCancelClick = () => smodale.cancel('modal-name', 'cancelled');
  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });
</script>

<Modal name="modal-name">
  <h1>Modal title</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <button on:click={onCancelClick}>Cancel</button>
  <button on:click={onOkClick}>Ok</button>
</Modal>
`}
/>

<h4>Dynamic modal</h4>
<p>
  They are generated at runtime by using <code>show()</code> method. When using dynamic modals you should first
  define your modal content as a Svelte component.
</p>

<blockquote>
  <p>
    Dynamic modals are useful especially for code splitting or when you need to show multiple modals at
    the same time (nested modals)
  </p>
</blockquote>

<CodeSnippet
  filename="MyCustomModalContent.svelte"
  language="markup"
  unescaped
  code={`
<script>
  import { getModalContext } from 'smodale';

  const { hide, cancel } = getModalContext();

  export let text = '';

  const onCancelClick = () => cancel(text.toUpperCase());
  const onOkClick = () => hide({ foo: 'bar' });
</script>

<button on:click={onCancelClick}>Cancel</button>
<button on:click={onOkClick}>Ok</button>
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

smodale.show(MyCustomModalContent, { text: 'Lorem ipsum' })
  .then(data => {
    console.log(data); // { foo: 'bar' }
  })
  .catch(data => {
    console.log(data); // 'LOREM IPSUM'
  });
</script>
  `}
/>
