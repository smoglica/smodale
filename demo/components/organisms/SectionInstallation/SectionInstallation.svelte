<script>
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<CodeSnippet language="bash" code="npm i -S smodale" />

<h3>Usage</h3>
<p>Modals can be shown statically or dynamically. When shown dynamically can be also nested.</p>

<h4>Static modal</h4>
<p>When using static modals the property <code>name</code> it's mandatory and must be unique.</p>

<CodeSnippet
  filename="App.svelte"
  language="markup"
  code={`
    &lt;script&gt;
      import smodale, { Modal } from 'smodale';

      smodale.show('modal-name')
        .then(data => {
          console.log(data); // { foo: 'bar' }
        })
        .catch(data => {
          console.log(data); // 'cancelled'
        });

      &lt;Modal name="modal-name"&gt;
        &lt;h1&gt;Modal title&lt;/h1&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/p&gt;
        &lt;button on:click={smodale.cancel('cancelled')}&gt;Cancel&lt;/button&gt;
        &lt;button on:click={smodale.hide({ foo: 'bar' })}&gt;Ok&lt;/button&gt;
      &lt;/Modal&gt;
    &lt;/script&gt;
  `}
/>

<h4>Dynamic modal</h4>
<p>When using dynamic modals you should first define your modal content as a Svelte component.</p>

<blockquote>💡 Dynamic modals are useful especially for code splitting</blockquote>

<CodeSnippet
  filename="MyCustomModalContent.svelte"
  language="markup"
  code={`
    &lt;script&gt;
      import { getModalContext } from 'smodale';

      const { hide, cancel } = getModalContext();

      export let text = '';

      &lt;button on:click={cancel(text.toUpperCase())}&gt;Cancel&lt;/button&gt;
      &lt;button on:click={hide({ foo: 'bar' })}&gt;Ok&lt;/button&gt;
    &lt;/script&gt;
  `}
/>

<CodeSnippet
  filename="App.svelte"
  language="markup"
  code={`
    &lt;script&gt;
    import smodale, { Modal } from 'smodale';
    import MyCustomModalContent from 'MyCustomModalContent.svelte';

    smodale.show(MyCustomModalContent, { text: 'Lorem ipsum' })
      .then(data => {
        console.log(data); // { foo: 'bar' }
      })
      .catch(data => {
        console.log(data); // 'LOREM IPSUM'
      });
    &lt;/script&gt;
  `}
/>
