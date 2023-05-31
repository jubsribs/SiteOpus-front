import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { AppRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
