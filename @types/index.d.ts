declare module 'smodale' {
  import { SvelteComponent } from 'svelte/types/runtime';

  export function getModalContext();
  export let ModalDismissReasons;
  export let Modal: SvelteComponent;

  export default {
    show(
      name: string | SvelteComponent,
      componentProps?: object,
      modalProps?: object,
      modalEvents?: object
    ): Promise<any>;,
    hide(name: string, data: any): void;,
    cancel(name: string, data: any): void;,
  };
}
