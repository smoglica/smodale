declare module 'smodale' {
  import { SvelteComponent } from 'svelte/types/runtime';
  import { TransitionConfig } from 'svelte/types/runtime/transition';

  interface ModalContext {
    hide(data?: any): void;
    cancel(data?: any): void;
    component: SvelteComponent;
  }

  interface ModalEvents {
    opened(): void;
    closed(): void;
  }
  interface Breakpoints {
    maxWidth?: string;
    margin?: string;
    height?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string | number;
    backdropColor?: string;
    boxShadow?: string;
    centered?: boolean;
    scrollable?: boolean;
    zIndex?: string | number;
  }

  interface ModalProps extends Breakpoints {
    name: string;
    transition?: (node: Element, params: any) => TransitionConfig;
    transitionParams: TransitionConfig;
    escapeToClose?: boolean;
    clickOutsideToClose?: boolean;
    disableBodyScroll?: boolean;
    focusOnOpen?: boolean;
    focusTrap?: boolean;
    classes?: string;
    breakpoints?: { [breakpoint: string]: Breakpoints };
  }

  type ModalDismissReasons = {
    BACKDROP_CLICK: string;
    ESC: string;
  };

  export function getModalContext(): ModalContext;
  export let ModalDismissReasons: ModalDismissReasons;
  export let Modal: SvelteComponent;

  export default {
    show(
      name: string | SvelteComponent,
      componentProps?: {},
      modalProps?: ModalProps,
      modalEvents?: ModalEvents
    ): Promise<any>;,
    hide(name: string, data: any): void;,
    cancel(name: string, data: any): void;,
  };
}
