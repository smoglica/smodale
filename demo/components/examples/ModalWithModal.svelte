<script>
  import smodale, { getModalContext } from 'smodale';
  import ModalWithTextOnly from 'Demo/components/examples/ModalWithTextOnly';
  import eRemove from 'Demo/assets/icons/e-remove.svg';

  const { cancel } = getModalContext();

  const onClick = () =>
    smodale.show(ModalWithTextOnly, null, {
      padding: 'var(--component-padding)',
      backdropColor: 'transparent',
      breakpoints: {
        '32rem': {
          borderRadius: 'var(--radius-md)',
          margin: 'var(--component-padding)',
          maxWidth: '500px',
          centered: true,
          scrollable: true,
        },
        '48rem': {
          maxWidth: '800px',
        },
      },
    });
</script>

<header class="flex items-center justify-between margin-bottom-sm">
  <h2>First modal</h2>
  <button class="btn btn--subtle padding-xs js-tab-focus" type="button" on:click={cancel}>
    <img class="icon icon--sm" src={eRemove} alt="Close" />
  </button>
</header>
<div class="text-component">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum unde omnis
    distinctio obcaecati corporis ducimus beatae. Sunt, debitis ex dicta, illum voluptates molestiae
    soluta neque, rerum eligendi laudantium maxime.
  </p>
  <button class="btn btn--primary" type="button" on:click={onClick}>Show nested modal</button>
</div>
