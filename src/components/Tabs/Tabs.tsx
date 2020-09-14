import React, { useEffect } from 'react'

function Tabs() {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
        }, []);

    return (
        <div>
           
        </div>
    );
}

export default Tabs;

