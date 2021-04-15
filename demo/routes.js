import SectionSupport from 'Demo/components/organisms/SectionSupport';
import SectionTroubleshooting from 'Demo/components/organisms/SectionTroubleshooting';
import SectionNestedModals from 'Demo/components/organisms/SectionNestedModals';
import SectionVerticallyCentered from 'Demo/components/organisms/SectionVerticallyCentered';
import SectionLongContent from 'Demo/components/organisms/SectionLongContent';
import SectionEvents from 'Demo/components/organisms/SectionEvents';
import SectionProperties from 'Demo/components/organisms/SectionProperties';
import SectionApi from 'Demo/components/organisms/SectionApi';
import SectionInstallation from 'Demo/components/organisms/SectionInstallation';
import SectionIntroduction from 'Demo/components/organisms/SectionIntroduction';

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
        label: 'Api',
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
    ],
  },
  {
    label: 'Examples',
    items: [
      {
        id: 'long-content',
        label: 'Long content',
        component: SectionLongContent,
      },
      {
        id: 'vertically-centered',
        label: 'Vertically centered',
        component: SectionVerticallyCentered,
      },
      {
        id: 'nested-modals',
        label: 'Nested modals',
        component: SectionNestedModals,
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