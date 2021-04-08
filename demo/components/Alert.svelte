<script>
  import { createEventDispatcher } from 'svelte';
  import { NotificationTypeEnum } from '../lib/notifier';

  export let severity;

  const emit = createEventDispatcher();
  const onRemove = () => emit('remove');
</script>

<div
  class="alert alert--is-visible padding-sm radius-md"
  class:alert--success={severity === NotificationTypeEnum.SUCCESS}
  class:alert--warning={severity === NotificationTypeEnum.WARNING}
  class:alert--danger={severity === NotificationTypeEnum.DANGER}
  role="alert"
>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="icon icon--sm alert__icon margin-right-xs" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z"
        />
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
    background-color: var(--color-primary-lighter);
    color: var(--color-contrast-higher);
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
  }

  .alert__icon {
    color: var(--color-primary-darker);
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
    color: var(--color-error);
  }

  .alert--warning {
    background-color: var(--color-warning-lighter);
  }

  .alert--warning .alert__icon {
    color: var(--color-warning);
  }

  .alert--is-visible {
    position: static;
    clip: auto;
    clip-path: none;
  }
</style>
