import App from 'Demo/App';
import { gtag } from 'Demo/lib/data-layer';

gtag('js', new Date());
gtag('config', process.env.GA_MEASUREMENT_ID, { anonymize_ip: true });

export default new App({ target: document.body });
