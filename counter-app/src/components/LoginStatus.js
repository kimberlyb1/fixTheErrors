import React, { useState } from 'react';
// This React component is supposed to conditionally render a message based on whether the user is logged in or logged out. However, there are mistakes that prevent it from working properly.
// 1.Debug the code so that the login status toggles correctly.
// 2.Fix any issues with the conditional rendering.
// 3.Ensure that the button text and message update based on the login state.
function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            {isLoggedIn ? (
                <>
                <h2>Welcome back!</h2>
                <button onClick={toggleLogin}>Log Out</button>
            </>
            ) : (
                <>
                <h2>Please log in</h2>
                <button onClick={toggleLogin}>Log In</button>
           </> 
        )}
        </div>
    );
}

export default LoginStatus;
