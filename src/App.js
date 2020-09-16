import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        
        <Navbar/>
        <Route exact path='/' render={props => (<Home {...props}/>)}/>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  )
}