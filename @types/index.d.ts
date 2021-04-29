declare module 'smodale' {
  export function show(name: string, componentProps?: object, modalProps?: object, modalEvents?: object): Promise<any>;
  export function hide(name: string, data: any): void;
  export function cancel(name: string, data: any): void;
}
