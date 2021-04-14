<script>
  import { getModalContext } from 'smodale';
  import eRemove from 'Demo/assets/icons/e-remove.svg';

  const { cancel } = getModalContext();
</script>

<header class="flex items-center justify-between margin-bottom-sm">
  <h2>Modal title</h2>
  <button class="btn btn--subtle padding-xs js-tab-focus" type="button" on:click={cancel}>
    <img class="icon icon--sm" src={eRemove} alt="Close" />
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
</div>
