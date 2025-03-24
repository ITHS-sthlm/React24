import { useEffect, useState } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const age = 16;

    useEffect(() => {
        console.log(age > 17 && 'test');

        return () => {
            console.log('useEffect CLEANUP: Körs när komponenten tas bort');
        };
    }, []);

    useEffect(
        () => {
            /* Detta sker först när sidan renderats klart, som t.ex all data från
        ett api etc. */
        },
        [
            /* med dessa undviker vi att allt som ligger inom useEffect ska ske om
        och om igen. dvs med dessa så sker hämtning eller annat bara en gång */
        ]
    );

    console.log('Komponentens kod körs (rendering)');

    return (
        <div>
            <h2>useEffect-demo</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Öka</button>
        </div>
    );
}

export default Effect;
