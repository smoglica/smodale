<script>
  import smodale, { Modal } from 'smodale';
  import eRemove from 'Demo/assets/icons/e-remove.svg';

  const modalName = 'modal-video';
  const modalProps = {
    name: modalName,
    backgroundColor: 'transparent',
    margin: 'var(--component-padding)',
    padding: 0,
    borderRadius: 'var(--radius-lg)',
    centered: true,
    maxWidth: 'var(--max-width-md)',
    height: 'auto',
    clickOutsideToClose: false,
  };

  const onShowClick = () => smodale.show(modalName);
  const onCloseClick = () => smodale.cancel(modalName);
</script>

<button class="btn btn--accent" type="button" on:click={onShowClick}>Show modal video</button>

<Modal {...modalProps}>
  <figure class="aspect-ratio-16:9 bg-black">
    <iframe
      title={modalName}
      src="https://www.youtube.com/embed/gJ2P6hGwcgo"
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
  </figure>
  <div class="position-absolute top-md right-md">
    <button
      class="btn btn--subtle padding-xs js-tab-focus radius-full"
      type="button"
      on:click={onCloseClick}
    >
      <img class="icon icon--sm" src={eRemove} alt="Close" />
    </button>
  </div>
</Modal>
