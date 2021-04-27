import SectionSupport from 'Demo/components/organisms/SectionSupport';
import SectionTroubleshooting from 'Demo/components/organisms/SectionTroubleshooting';
import SectionNestedModals from 'Demo/components/organisms/SectionNestedModals';
import SectionCentered from 'Demo/components/organisms/SectionCentered';
import SectionLongContent from 'Demo/components/organisms/SectionLongContent';
import SectionEvents from 'Demo/components/organisms/SectionEvents';
import SectionProperties from 'Demo/components/organisms/SectionProperties';
import SectionApi from 'Demo/components/organisms/SectionApi';
import SectionInstallation from 'Demo/components/organisms/SectionInstallation';
import SectionIntroduction from 'Demo/components/organisms/SectionIntroduction';
import SectionSlots from 'Demo/components/organisms/SectionSlots';
import SectionTransition from 'Demo/components/organisms/SectionTransition';
import SectionBreakpoints from 'Demo/components/organisms/SectionBreakpoints';

export default [
  {
    label: 'Getting started',
    items: [
      {
        id: 'introduction',
        label: 'Introduction',
        component: SectionIntroduction,
      },
      {
        id: 'installation',
        label: 'Installation',
        component: SectionInstallation,
      },
    ],
  },
  {
    label: 'Component',
    items: [
      {
        id: 'api',
        label: 'API',
        component: SectionApi,
      },
      {
        id: 'properties',
        label: 'Properties',
        component: SectionProperties,
      },
      {
        id: 'events',
        label: 'Events',
        component: SectionEvents,
      },
      {
        id: 'slots',
        label: 'Slots',
        component: SectionSlots,
      },
    ],
  },
  {
    label: 'Examples',
    items: [
      {
        id: 'centered',
        label: 'Centered',
        component: SectionCentered,
      },
      {
        id: 'long-content',
        label: 'Long content',
        component: SectionLongContent,
      },
      {
        id: 'nested-modals',
        label: 'Nested modals',
        component: SectionNestedModals,
      },
      {
        id: 'transition',
        label: 'Transition',
        component: SectionTransition,
      },
      {
        id: 'breakpoints',
        label: 'Breakpoints',
        component: SectionBreakpoints,
      },
    ],
  },
  {
    label: 'Other',
    items: [
      {
        id: 'troubleshooting',
        label: 'Troubleshooting',
        component: SectionTroubleshooting,
      },
      {
        id: 'support',
        label: 'Support',
        component: SectionSupport,
      },
    ],
  },
];
