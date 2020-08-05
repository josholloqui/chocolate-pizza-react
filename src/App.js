import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './Home.css';

const logo = 'Delicious'

function App() {
  return (
    <body className="App">
      <Header logo={logo}/>
      <Main />
      <Footer />
    </body>
  );
}

export default App;