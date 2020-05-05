/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './app/store/store';
import Root from './app/base/root/root';

declare var global: { HermesInternal: null | {}, window: {} };
declare var window: any;

const App = (props: any) => {
  window.age = 10;
  return (
    <Provider store={Store}>
      <Root />
    </Provider >
  );
};

export default App;
