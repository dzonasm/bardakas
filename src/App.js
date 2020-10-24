import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';

import CocktailPage from './pages/cocktails/cocktail-page'
import Homepage from './pages/homepage/homepage';
import MenuPage from './pages/menu/menu-page'
import ContactPage from './pages/contact/contact-page'
import Navigation from './components/navigation/navigation.component'
import Footer from './components/footer/footer.component'
import AboutPage from './pages/about/about-page'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={CocktailPage} />
        <Route path='/cocktails' component={CocktailPage} />
        <Route path='/menu' component={MenuPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
