import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './Home.css';

const logo = 'Delicious'

const bio = `Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.`

function App() {
  return (
    <body className="App">
      <Header logo={logo}/>
      <Main bio={bio}/>
      <Footer />
    </body>
  );
}

export default App;