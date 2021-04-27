<script>
  import smodale, { getModalContext } from 'smodale';
  import arrowLeft from 'Demo/assets/icons/arrow-left.svg';
  import ModalWithButtons from 'Demo/components/examples/ModalWithButtons';

  const { cancel } = getModalContext();

  const onClick = () =>
    smodale.show(ModalWithButtons, null, {
      padding: 'var(--component-padding)',
      backdropColor: 'transparent',
      breakpoints: {
        '32rem': {
          borderRadius: 'var(--radius-md)',
          margin: 'var(--component-padding)',
          maxWidth: 'var(--max-width-xxs)',
          centered: true,
          scrollable: true,
        },
        '48rem': {
          maxWidth: 'var(--max-width-sm)',
        },
      },
    });
</script>

<header class="margin-bottom-sm">
  <button type="button" class="btn btn--subtle" on:click={cancel}>
    <img class="icon" src={arrowLeft} alt="Go back" />
    <span class="margin-left-xs">Go back</span>
  </button>
</header>
<div class="text-component">
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
    reprehenderit reiciendis excepturi culpa!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
    reprehenderit reiciendis excepturi culpa!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
    reprehenderit reiciendis excepturi culpa!
  </p>
  <button class="btn btn--primary" type="button" on:click={onClick}>Show nested modal</button>
</div>
