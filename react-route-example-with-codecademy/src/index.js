import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  //Router components only expect to receive a single child element.
  //To work within this limitation, it is useful to create an <App>
  //component that renders the rest of your application
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);

registerServiceWorker();
