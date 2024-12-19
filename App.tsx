import React from 'react';
import {AppStackNavigator} from '~/routes/AppStackNavigator.tsx';
import {Provider} from 'react-redux';
import {store} from '~/store';
import Toast from 'react-native-toast-message';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppStackNavigator />
      <Toast />
    </Provider>
  );
}

export default App;
