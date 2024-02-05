import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {  ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Form: {
            verticalLabelPadding: 0,
            itemMarginBottom: 15,
          }
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

