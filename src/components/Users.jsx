import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Hämta data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Något gick fel med hämtningen');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Fel vid hämtning', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista med användare</h1>
            {users.length > 900 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Finns inget innehåll</p>
            )}
        </div>
    );
}

export default Users;
