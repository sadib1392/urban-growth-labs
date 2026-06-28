import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import 'lenis/dist/lenis.css';

// Brand design-system tokens (order matters: fonts → colors → type → spacing → effects → base)
import './styles/tokens/fonts.css';
import './styles/tokens/colors.css';
import './styles/tokens/typography.css';
import './styles/tokens/spacing.css';
import './styles/tokens/effects.css';
import './styles/tokens/base.css';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
