<script>
  import List from 'Demo/components/atoms/List';
  import CodeSnippet from 'Demo/components/molecules/CodeSnippet';
</script>

<p>
  There are 2 types of properties: <u>generic</u> ones which will handle some base functionalities
  and
  <u>style</u> ones which will customize the modal.
</p>

<List>
  <li>
    <strong>Generic properties</strong>
    <ul>
      <li>
        <code>{'{ string } name'}</code>
        <div>
          An <u>unique</u> and <u>required</u> property when defining a <u>static modal</u>.
        </div>
      </li>
      <li>
        <code>{'{ function } transition'}</code>
        <div>
          A Svelte
          <a href="https://svelte.dev/docs#transition_fn" target="_blank" rel="noopener noreferrer">
            transition
          </a>
          function applied on <code>.modal</code> element. Default <code>null</code>.
        </div>
      </li>
      <li>
        <code>{'{ boolean } escapeToClose'}</code>
        <div>
          Whether or not close the modal on escape key (ESC) press. Default <code>true</code>.
        </div>
      </li>
      <li>
        <code>{'{ boolean } clickOutsideToClose'}</code>
        <div>
          Whether or not close the modal on backdrop click. Default <code>true</code>.
        </div>
      </li>
      <li>
        <code>{'{ boolean } disableBodyScroll'}</code>
        <div>
          Whether or not to prevent body element scroll while the modal is open. Default
          <code>true</code>.
        </div>
      </li>
      <li>
        <code>{'{ boolean } focusOnOpen'}</code>
        <div>
          Whether or not move focus automatically to the first focusable element inside the modal
          when the modal is open. Default <code>true</code>.
        </div>
      </li>
      <li>
        <code>{'{ boolean } focusTrap'}</code>
        <div>
          Whether or not focus only the elements that are inside the modal on TAB key press. Default
          <code>true</code>.
        </div>
      </li>
      <li>
        <code>{'{ string } classes'}</code>
        <div>
          Append custom classes on <code>.modal</code> element. Default <code>''</code>.
        </div>
      </li>
      <li>
        <code>{'{ object } transitionParams'}</code>
        <div>
          A Svelte
          <a
            href="https://svelte.dev/docs#Transition_parameters"
            target="_blank"
            rel="noopener noreferrer"
          >
            transition parameters
          </a>
          object used on transition property. Default <code>{'{}'}</code>.
        </div>
      </li>
      <li>
        <code>{'{ object } breakpoints'}</code>
        <p>
          Allows to customize the modal with specific properties for different breakpoints. Default
          <code>{'{}'}</code>.
        </p>
        <p>
          Breakpoint keys can be defined with <code>px</code>, <code>rem</code> and <code>em</code> units
          and behaves in a cascade way like CSS rules.
        </p>
        <blockquote>
          ⚠️ Allowed properties are only the <u>style properties</u>.
        </blockquote>
        <strong><small>Example:</small></strong>
        <CodeSnippet
          filename="App.svelte"
          language="markup"
          unescaped
          code={`
    <script>
      import smodale, { Modal } from 'smodale';
    
      const modalProps = {
        breakpoints: {
          // @media (min-width: 768px)
          '768px': {
            maxWidth: '450px',
            centered: true,
            borderRadius: 'var(--radius-md)',
          },
          // @media (min-width: 64rem)
          '64rem': {
            maxWidth: '650px',
          },
        },
      };
    
      smodale.show('modal-name');
    <\/script>
    
    <Modal name="modal-name" {...modalProps}>...</Modal>
    `}
        />
      </li>
    </ul>
  </li>
  <li>
    <strong>Style properties</strong>
    <p>Properties that can be also used in the generic <code>breakpoint</code> property.</p>
    <p>
      When properties are <code>string</code> type,
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
        target="_blank"
        rel="noopener noreferrer"
      >
        CSS custom properties
      </a> can be used.
    </p>
    <ul>
      <li>
        <code>{'{ string } maxWidth'}</code>
        <div>Set max width.</div>
      </li>
      <li>
        <code>{'{ string } margin'}</code>
        <div>Set margin.</div>
      </li>
      <li>
        <code>{'{ string } height'}</code>
        <div>Set height.</div>
      </li>
      <li>
        <code>{'{ string } backgroundColor'}</code>
        <div>Set background color. Default <code>#fff</code>.</div>
      </li>
      <li>
        <code>{'{ string } padding'}</code>
        <div>Set padding. Default <code>20px</code>.</div>
      </li>
      <li>
        <code>{'{ string } borderRadius'}</code>
        <div>Set border radius.</div>
      </li>
      <li>
        <code>{'{ string } backdropColor'}</code>
        <div>Set backdrop color. Default <code>rgba(0, 0, 0, 0.6)</code>.</div>
      </li>
      <li>
        <code>{'{ string } boxShadow'}</code>
        <div>Set box shadow.</div>
      </li>
      <li>
        <code>{'{ boolean } centered'}</code>
        <div>Whether or not vertically centered.</div>
      </li>
      <li>
        <code>{'{ boolean } scrollable'}</code>
        <div>Whether or not scrollable content.</div>
      </li>
      <li>
        <code>{'{ string } zIndex'}</code>
        <div>Set modal <code>z-index</code>. Default <code>50</code>.</div>
      </li>
    </ul>
  </li>
</List>
