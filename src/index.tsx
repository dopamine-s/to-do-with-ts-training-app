import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';
import store, { STORE_NAME } from './store';
import saveState from './utils/store/saveState';

store.subscribe(() => saveState(store.getState(), STORE_NAME));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
