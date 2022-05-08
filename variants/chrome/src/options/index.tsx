import * as React from "react";
import { createRoot } from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import App from "./App";

import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<ToastContainer />

		<App/>
	</React.StrictMode>
)