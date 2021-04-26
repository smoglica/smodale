<script>
  import List from 'Demo/components/atoms/List';
</script>

<List>
  <li>
    <code>{'{ string } name'}</code>
    <span>&mdash; An unique and required property when defining a <u>static modal</u>.</span>
  </li>
  <li>
    <code>{'{ function } transition'}</code>
    <span>
      &mdash; A Svelte
      <a href="https://svelte.dev/docs#transition_fn" target="_blank" rel="noopener noreferrer">
        transition
      </a>
      function applied on <code>.modal</code> element. Default <code>null</code>.
    </span>
  </li>
  <li>
    <code>{'{ object } transitionParams'}</code>
    <span>
      &mdash; A Svelte
      <a
        href="https://svelte.dev/docs#Transition_parameters"
        target="_blank"
        rel="noopener noreferrer"
      >
        transition parameters
      </a>
      object used on transition property. Default <code>{'{}'}</code>.
    </span>
  </li>
  <li>
    <code>breakpoints</code>
  </li>
  <li>
    <code>{'{ boolean } escapeToClose'}</code>
    <span>
      &mdash; Whether or not close the modal on escape key (ESC) press. Default <code>true</code>.
    </span>
  </li>
  <li>
    <code>{'{ boolean } clickOutsideToClose'}</code>
    <span>
      &mdash; Whether or not close the modal on backdrop click. Default <code>true</code>.
    </span>
  </li>
  <li>
    <code>{'{ boolean } disableBodyScroll'}</code>
    <span>
      &mdash; Whether or not to prevent body element scroll while the modal is open. Default
      <code>true</code>.
    </span>
  </li>
  <li>
    <code>{'{ boolean } focusOnOpen'}</code>
    <span>
      &mdash; Whether or not move focus automatically to the first focusable element inside the
      modal when the modal is open. Default <code>true</code>.
    </span>
  </li>
  <li>
    <code>{'{ boolean } focusTrap'}</code>
    <span>
      &mdash; Whether or not focus only the elements that are inside the modal on TAB key press.
      Default <code>true</code>.
    </span>
  </li>
  <li>
    <code>{'{ string } classes'}</code>
    <span>
      &mdash; Append custom classes on <code>.modal</code> element. Default <code>''</code>.
    </span>
  </li>
</List>
