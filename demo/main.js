import App from 'Demo/App';
import initGoogleAnalytics from 'Demo/lib/ga';

initGoogleAnalytics();

export default new App({ target: document.body });
