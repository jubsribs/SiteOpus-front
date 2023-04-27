import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { AppRoutes } from './routes';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
