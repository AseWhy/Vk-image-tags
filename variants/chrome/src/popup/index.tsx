import { Button, Paper } from "@mui/material";
import * as React from "react";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<Paper
            style={{
                width: 400,
                height: 500
            }}
        >
            <Button
                onClick={() => chrome.runtime.openOptionsPage()}
            >
                Открыть настройки
            </Button>
        </Paper>
	</React.StrictMode>
)