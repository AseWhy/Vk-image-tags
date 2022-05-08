import { Navigate, Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import ServiceRoute from "./router/ServiceRouter";
import "./styles/components.css";

export default function App() {
    return <div className="application-container">
        <HashRouter>
            <Routes>
                <Route path={ServiceRoute.settings.route()} element={<SettingsPage/>}/>

                <Route
                    path="*"
                    element={<Navigate to={ServiceRoute.settings.route()}/>}
                />
            </Routes>
        </HashRouter>
    </div>
}