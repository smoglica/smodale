<script>
  import { createEventDispatcher } from 'svelte';
  import { NotificationTypeEnum } from '../lib/notifier';

  export let severity;

  $: success = severity === NotificationTypeEnum.SUCCESS;
  $: warning = severity === NotificationTypeEnum.WARNING;
  $: danger = severity === NotificationTypeEnum.DANGER;

  const emit = createEventDispatcher();
  const onRemove = () => emit('remove');
</script>

<div
  class="alert alert--is-visible padding-sm radius-md"
  class:alert--success={success}
  class:alert--warning={warning}
  class:alert--danger={danger}
  role="alert"
>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="icon icon--sm alert__icon margin-right-sm" viewBox="0 0 24 24" aria-hidden="true">
        {#if success}
          <path
            d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z"
          />
        {:else if warning}
          <path
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"
          />
        {:else if danger}
          <path
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"
          />
        {:else}
          <path
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z"
          />
        {/if}
      </svg>
      <slot />
    </div>

    <button class="reset alert__close-btn margin-left-sm js-tab-focus" on:click={onRemove}>
      <svg
        class="icon"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <title>Close alert</title>
        <line x1="3" y1="3" x2="17" y2="17" />
        <line x1="17" y1="3" x2="3" y2="17" />
      </svg>
    </button>
  </div>
</div>

<style>
  .alert {
    background-color: var(--color-contrast-lower);
    color: var(--color-contrast-higher);
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
  }

  .alert__icon {
    color: var(--color-contrast-medium);
  }

  .alert__close-btn {
    display: inline-block;
    flex-shrink: 0;
    transition: 0.2s;
  }

  .alert__close-btn .icon {
    display: block;
  }

  .alert__close-btn:hover {
    opacity: 0.7;
  }

  .alert--success {
    background-color: var(--color-success-lighter);
  }

  .alert--success .alert__icon {
    color: var(--color-success-darker);
  }

  .alert--danger {
    background-color: var(--color-error-lighter);
  }

  .alert--danger .alert__icon {
    color: var(--color-error-darker);
  }

  .alert--warning {
    background-color: var(--color-warning-lighter);
  }

  .alert--warning .alert__icon {
    color: var(--color-warning-darker);
  }

  .alert--is-visible {
    position: static;
    clip: auto;
    clip-path: none;
  }
</style>
