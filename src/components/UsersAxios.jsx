import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersAxios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data);
            } catch (error) {
                console.error('Gick inte som vi tänkt', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Lista med användare</h1>
            {users.length > 0 ? (
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

export default UsersAxios;
