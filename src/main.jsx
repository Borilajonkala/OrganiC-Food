import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FetchProvider } from './Context/FetchContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<FetchProvider>
				<App />
			</FetchProvider>
		</BrowserRouter>
	</StrictMode>,
)
