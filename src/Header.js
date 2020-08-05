import React from 'react';

class Logo extends React.Component {
    render() { 
        return (
        <div className="logo">
            <div>
                <img className="logo-pic" src="images/logo.png" alt="choco logo"/>
            </div>
            <div className="brand">
                <h2 className="logo-font">{this.props.logo}</h2>
                <p className="under-logo">THE BEST FOOD BLOG ON THE WEB</p>
            </div>
        </div>);
    }
}

class Nav extends React.Component {
    render() { 
        return (
            <nav className="social">
                <div>
                    <img className="icons" src="images/fb-icon.png" alt="icon"/>
                    <img className="icons" src="images/twit-icon.png" alt="icon"/>
                    <img className="icons" src="images/gp-icon.png" alt="icon"/>
                    <img className="icons" src="images/insta-icon.png" alt="icon"/>
                    <img className="icons" src="images/flic-icon.png" alt="icon"/>
                    <img className="icons" src="images/pint-icon.png" alt="icon"/>
                </div>
                <div>
                    <img className="icons" src="images/rss-icon.png" alt="icon"/>
                    <img className="icons" src="images/mail-icon.png" alt="icon"/>
                </div>
            </nav>
            );
    }
}

class Header extends React.Component {
    render() { 
        return (
            <header>
                <Logo logo={this.props.logo}/>
                <Nav />
            </header>
        );
    }
}
 
export default Header;