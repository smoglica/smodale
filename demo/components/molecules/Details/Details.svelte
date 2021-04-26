<script context="module">
  let count = 0;
</script>

<script>
  import Details from 'Demo/components/molecules/Details/Details.js';

  let className;

  export let title = '';
  export { className as class };

  count += 1;

  const onMount = (node) => new Details(node, count);
</script>

<details class="details js-details {className}" use:onMount>
  <summary class="details__summary js-details__summary" role="button">
    <span class="flex items-center">
      <svg class="icon icon--xxs margin-right-xxxs" aria-hidden="true" viewBox="0 0 12 12">
        <path
          d="M2.783.088A.5.5,0,0,0,2,.5v11a.5.5,0,0,0,.268.442A.49.49,0,0,0,2.5,12a.5.5,0,0,0,.283-.088l8-5.5a.5.5,0,0,0,0-.824Z"
        />
      </svg>
      <span>{title}</span>
    </span>
  </summary>

  <div class="details__content margin-top-xs js-details__content">
    <slot />
  </div>
</details>

<style src="_index.scss"></style>
