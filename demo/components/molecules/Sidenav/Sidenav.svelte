<script>
  import SidenavLabel from 'Demo/components/atoms/SidenavLabel';
  import SidenavList from 'Demo/components/atoms/SidenavList';
  import SidenavListItem from 'Demo/components/atoms/SidenavListItem';
  import ScrollSpyLink from 'Demo/components/atoms/ScrollSpyLink';
</script>

<nav>
  <SidenavLabel>Getting started</SidenavLabel>
  <SidenavList>
    <ScrollSpyLink let:prop={current} id="introduction">
      <SidenavListItem href="#introduction" {current}>Introduction</SidenavListItem>
    </ScrollSpyLink>
    <ScrollSpyLink let:prop={current} id="installation">
      <SidenavListItem href="#installation" {current}>Installation</SidenavListItem>
    </ScrollSpyLink>
  </SidenavList>

  <SidenavLabel>Component</SidenavLabel>
  <SidenavList>
    <ScrollSpyLink let:prop={current} id="api">
      <SidenavListItem href="#api" {current}>API</SidenavListItem>
    </ScrollSpyLink>
    <ScrollSpyLink let:prop={current} id="properties">
      <SidenavListItem href="#properties" {current}>Properties</SidenavListItem>
    </ScrollSpyLink>
    <ScrollSpyLink let:prop={current} id="events">
      <SidenavListItem href="#events" {current}>Events</SidenavListItem>
    </ScrollSpyLink>
  </SidenavList>

  <SidenavLabel>Examples</SidenavLabel>
  <SidenavList>
    <ScrollSpyLink let:prop={current} id="long-content">
      <SidenavListItem href="#long-content" {current}>Long content</SidenavListItem>
    </ScrollSpyLink>
    <ScrollSpyLink let:prop={current} id="vertically-centered">
      <SidenavListItem href="#vertically-centered" {current}>Vertically centered</SidenavListItem>
    </ScrollSpyLink>
    <ScrollSpyLink let:prop={current} id="nested-modals">
      <SidenavListItem href="#nested-modals" {current}>Nested modals</SidenavListItem>
    </ScrollSpyLink>
  </SidenavList>

  <SidenavLabel>Other</SidenavLabel>
  <SidenavList>
    <ScrollSpyLink let:prop={current} id="troubleshooting">
      <SidenavListItem href="#troubleshooting" {current}>Troubleshooting</SidenavListItem>
    </ScrollSpyLink>
    <ScrollSpyLink let:prop={current} id="support">
      <SidenavListItem href="#support" {current}>Support</SidenavListItem>
    </ScrollSpyLink>
  </SidenavList>
</nav>
