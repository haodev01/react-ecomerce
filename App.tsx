import React from 'react';
import {AppStackNavigator} from '~/routes/AppStackNavigator.tsx';
import {Provider} from 'react-redux';
import {persistor, store} from '~/store';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStackNavigator />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

export default App;
