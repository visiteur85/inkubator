import React from 'react';
import "./App.css"


const App = () => {


    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FE55/production/_105090156_gettyimages-836351108.jpg"
                        alt="space"/>
                </div>
                <div>ava+description</div>
                <div>My Posts
                    <div>New Post</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
