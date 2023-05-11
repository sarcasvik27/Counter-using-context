import React from 'react';
import App_Navigator from './src/Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Store';
const App = () => {
return(
  <Provider store={store}>
      <App_Navigator/>
  </Provider>


)
};
export default App;
