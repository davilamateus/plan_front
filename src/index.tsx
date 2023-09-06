import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/fonts.scss';
import './styles/box.scss';
import './styles/buttons.scss';
import './styles/inputs.scss';
import './styles/skeletonThemeColors.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

