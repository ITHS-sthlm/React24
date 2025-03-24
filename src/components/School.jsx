import React from 'react';
import Students from './Students';

function School() {
    return (
        <>
            <Students name="Richard" age={37} isStudent={true} />
            <Students name="Brian" age={37} isStudent={false} />
            <Students name="Oskar" age={37} isStudent={false} />
            <Students name="Bertil" age="37" isStudent={true} />
        </>
    );
}

export default School;
