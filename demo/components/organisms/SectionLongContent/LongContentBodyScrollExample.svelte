<script>
  import smodale, { Modal } from 'smodale';

  const modalName = 'long-content-body-scroll';
  const modalProps = {
    name: modalName,
    padding: 0,
    breakpoints: {
      '32rem': {
        maxWidth: 'var(--max-width-xxs)',
        margin: 'var(--component-padding)',
        borderRadius: 'var(--radius-md)',
        height: 'calc(100% - var(--component-padding) * 2)',
        centered: true,
      },
    },
  };

  const onShowClick = () => smodale.show(modalName);
  const onCloseClick = () => smodale.cancel(modalName);
</script>

<button class="btn btn--accent" type="button" on:click={onShowClick}>
  Show long content modal with body scroll
</button>

<Modal {...modalProps}>
  <div class="flex flex-column height-100%">
    <header>
      <h2>Modal title</h2>
    </header>
    <main>
      {#each Array(10) as n, i}
        <p>
          {i + 1}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consequuntur
          odio natus veritatis, cupiditate iusto velit numquam at voluptates. Laudantium, deleniti
          eos. Porro illo quo architecto magnam nobis laborum aliquid!
        </p>
      {/each}
    </main>
    <footer>
      <button class="btn btn--subtle" type="button" on:click={onCloseClick}>Close</button>
    </footer>
  </div>
</Modal>

<style>
  h2 {
    margin: 0;
  }

  main {
    overflow: auto;
  }

  header {
    border-bottom: 1px solid var(--color-contrast-lower);
  }

  footer {
    margin-top: auto;
    text-align: right;
    border-top: 1px solid var(--color-contrast-lower);
  }

  header,
  main,
  footer {
    padding: var(--space-sm);
  }
</style>
