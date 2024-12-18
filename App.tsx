import React from 'react';
import {AppStackNavigator} from '~/routes/AppStackNavigator.tsx';
import {Provider} from 'react-redux';
import {store} from '~/store';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppStackNavigator />
    </Provider>
  );
}

export default App;
