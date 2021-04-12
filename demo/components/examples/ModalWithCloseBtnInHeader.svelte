<script>
  import { getModalContext } from '../../../src';

  const { cancel } = getModalContext();
</script>

<header class="flex items-center justify-between margin-bottom-sm">
  <h2>Modal title</h2>
  <button class="reset inline-flex padding-xs js-tab-focus" type="button" on:click={cancel}>
    <svg class="icon" viewBox="0 0 20 20">
      <title>Close modal</title>
      <g
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="3" x2="17" y2="17" />
        <line x1="17" y1="3" x2="3" y2="17" />
      </g>
    </svg>
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
