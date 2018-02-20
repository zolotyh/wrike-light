import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ThemeWrapper = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <ThemeWrapper/>,
  document.getElementById('root')
);

// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
