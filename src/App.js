import React from 'react';
import Router from './Router';
import './assets/style.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import {BrowserRouter} from 'react-router-dom';
import Home from './containers/Home';

function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
        </>
    );
}

export default App;