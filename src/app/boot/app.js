import React from 'react';
import { Link } from 'react-router-dom';
import Main from './main';

const App = () => {
    return (
        <div>
            <div>            
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <Main />
        </div>
    )
}

export default App;