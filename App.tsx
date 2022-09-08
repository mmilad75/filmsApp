import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/navigators';
import {store} from './src/state';

const App: React.FC = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
