import React from 'react';
import Header from '../header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../footer/footer';

function App () {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
