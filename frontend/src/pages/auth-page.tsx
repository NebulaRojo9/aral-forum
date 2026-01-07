

import "../styles/auth.css";
import "../styles/global.css";
import { Outlet } from "react-router";

export default function AuthPage() {

    return (
        <div id="auth-page-container">
            <div id="auth-page-container-left" />
            <div id="auth-page-container-center">
                <Outlet />
            </div>
            <div id="auth-page-container-right" />
        </div>
    )
}
