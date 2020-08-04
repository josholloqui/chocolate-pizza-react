import React from 'react';

class Footer extends React.Component {
render() {
    return (
        <footer>
            <p>
                <span>
                    <img class="mini-logo" src="./images/logo.png" alt="small-logo"/>
                </span>
            </p>
            <p>
                
                Delicious &copy; 2013 * All Right Reserved
                <br/>
                Proudly Published with Ghost
                
            </p>
        </footer>
    );
}
}

export default Footer;