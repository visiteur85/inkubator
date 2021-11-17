import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>JS</li>
            <li>react</li>
        </ul>
    )
}

const Header = () => {
    return <div>
        <a href="#">Home</a>
        <a href="#">News Feed</a>
        <a href="#">Messages</a>
    </div>
}
export default App;
