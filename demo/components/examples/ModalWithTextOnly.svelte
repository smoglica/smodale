<script>
  import { getModalContext } from '../../../src';
  import arrowLeft from '../../assets/icons/arrow-left.svg';

  const { cancel } = getModalContext();
</script>

<header class="margin-bottom-sm">
  <button type="button" class="btn btn--subtle" on:click={cancel}>
    <img class="height-xs width-xs" src={arrowLeft} alt="Go back" />
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
</div>
