import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/globalStyle';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { slice } from './useStore';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const store = configureStore({ reducer: slice.reducer });

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<Helmet>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
				</Helmet>
				<GlobalStyle />
				<App />
			</HelmetProvider>
		</Provider>
	</React.StrictMode>,
)
