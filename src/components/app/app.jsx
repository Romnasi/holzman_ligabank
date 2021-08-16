import React from 'react';
import Header from '../header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../footer/footer';
import Main from '../main/main';

function App () {
  return (
    <Router>
      <Header />

      <Main />

      <Footer />
    </Router>
  );
}

export default App;
