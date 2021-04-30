import App from 'Demo/App';
import { push } from 'Demo/lib/data-layer';

push('js', new Date());
push('config', process.env.GA_PROPERTY_ID, { anonymize_ip: true });

export default new App({ target: document.body });
