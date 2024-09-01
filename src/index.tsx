import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
/*
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { StyledEngineProvider} from '@mui/material/styles'
//import { ThemeContextProvider } from './App'
import App from './App.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element = { <App/>}> </Route>
			</Routes>
		<StyledEngineProvider injectFirst>
		</StyledEngineProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals() 
*/