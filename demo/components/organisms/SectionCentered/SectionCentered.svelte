<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';
  import Details from 'Demo/components/molecules/Details';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';

  const onClick = () => {
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px',
          borderRadius: '4px',
          centered: true,
        },
      },
    });
  };

  const onClick2 = () => {
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px auto',
          borderRadius: '4px',
        },
      },
    });
  };
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show vertically and horizontally centered modal
</button>

<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    language="markup"
    unescaped
    code={`
<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';

  const onClick = () => {
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px auto',
          borderRadius: '4px',
          centered: true,
        },
      },
    });
  };
<\/script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show vertically and horizontally centered modal
</button>
    `}
  />
</Details>

<div class="margin-top-sm" />

<button class="btn btn--accent" type="button" on:click={onClick2}>
  Show horizontally centered modal
</button>

<Details class="margin-top-sm" title="Show code">
  <CodeSnippet
    language="markup"
    unescaped
    code={`
<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';

  const onClick2 = () => {
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px auto',
          borderRadius: '4px',
        },
      },
    });
  };
<\/script>

<button class="btn btn--accent" type="button" on:click={onClick2}>
  Show horizontally centered modal
</button>
    `}
  />
</Details>
