<script>
  import smodale from 'smodale';
  import ModalWithLongText from 'Demo/components/examples/ModalWithLongText';
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';

  const onClick = () => {
    smodale.show(ModalWithLongText, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px',
          borderRadius: '4px',
          centered: true,
          scrollable: true,
        },
      },
    });
  };
</script>

<button class="btn btn--primary" type="button" on:click={onClick}>Show long content modal</button>

<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    language="markup"
    unescaped
    code={`
<script>
  import smodale from 'smodale';
  import ModalWithLongText from 'Demo/components/examples/ModalWithLongText';

  const onClick = () => {
    smodale.show(ModalWithLongText, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px',
          borderRadius: '4px',
          centered: true,
          scrollable: true,
        },
      },
    });
  };
<\/script>

<button class="btn btn--primary" type="button" on:click={onClick}>Show long content modal</button>
`}
  />
</Details>
