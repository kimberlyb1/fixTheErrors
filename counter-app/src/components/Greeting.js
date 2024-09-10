import React, { useState, useEffect } from 'react';
// The app should display a greeting with a user's name, but it currently doesn’t work as expected due to several errors.
// 1.Identify the errors in the code that prevent it from working correctly.
// 2.Fix the errors so that the greeting app functions as expected.
// 3.Ensure that as users type their name, it dynamically updates the greeting and the document title.
function Greeting() {
    const [name, setName] = useState();

    useEffect(() => {
        document.title = 'Welcome ' + name;
    }, [name]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <h1> Hello {name}!</h1>
            <input type="text" placeholder="Enter your name" onChage={handleNameChange} />
        </div>
    );
}

export default greeting;
