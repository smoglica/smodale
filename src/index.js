import Modal, { ModalDismissReasons } from './components/Modal.svelte';
import { getModalContext } from './context';
import plugin from './plugin';

export { Modal, ModalDismissReasons, getModalContext };
export default plugin;
