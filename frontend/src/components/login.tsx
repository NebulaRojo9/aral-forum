

export default function Login() {
    const loginError = true;
    const loginErrorMsg = "unknown error message";

    return (
        <div id="auth-panel" className="login">
            <div id="auth-panel-header" className="login">
                Login User
            </div>

            <div id="auth-panel-body" className="login">
                <form>
                    <label>Username <input name="Username"/></label>
                    <label>Password <input name="Password"/></label>
                    <button type="submit" id="submit-button" className="login">Login</button>
                </form>
                <div id="switch-line">Don’t have an account? <strong>Click here</strong>.</div>
                 { loginError ? (
                        <div className="auth-error-message">
                            {loginErrorMsg}
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}