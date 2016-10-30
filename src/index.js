import ReactDOM from 'react-dom';
import React from 'react';
import Players from './components/players';
import Games from './components/games';

ReactDOM.render(<div>
        <Games />
        <Players />
    </div>,
    document.getElementById('app-root')
);
