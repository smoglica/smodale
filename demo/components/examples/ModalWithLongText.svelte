<script>
  import { getModalContext } from 'smodale';

  const { hide, cancel } = getModalContext();
</script>

<div class="text-component">
  <h2>Modal title</h2>
  {#each Array(16) as n, i}
    <p>
      {i + 1}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur
      doloremque vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui
      officiis reprehenderit reiciendis excepturi culpa!
    </p>
  {/each}
</div>
<footer class="flex justify-end gap-xs margin-top-md">
  <button type="button" class="btn btn--subtle" on:click={cancel}>Cancel</button>
  <button type="button" class="btn btn--primary" on:click={hide}>Confirm</button>
</footer>
