
export default function CreateUser() {
    const createUserError = true;
    const createUserErrorMsg = "unknown error message";

    return (
        <div id="auth-panel" className="create-user">
            <div id="auth-panel-header" className="create-user">
                Create User
            </div>

            <div id="auth-panel-body" className="create-user">
                <form>
                    <label>New username <input name="New Username"/></label>
                    <label>New password <input name="New Password"/></label>
                    <label>Confirm password <input name="Confirm Password"/></label>
                    <button type="submit" id="submit-button" className="create-user">Create</button>
                </form>
                <div id="switch-line">Already have an account? <strong>Click here</strong>.</div>
                 { createUserError ? (
                        <div className="auth-error-message">
                            {createUserErrorMsg}
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}