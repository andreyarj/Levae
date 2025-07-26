import React from 'react';

import Header from '../../Comps/Header';
import Welcome from './Welcome';
import Advertisings from './Advertisings';
import Differentials from './Differentials';
import About from './About';
import Feedbacks from './Feedbacks';
import Footer from '../../Comps/Footer';

function HomePage() {
    return (
        <>
        <Header />
        <Welcome />
        <Advertisings />
        <Differentials />
        <About />
        <Feedbacks />
        <Footer />
        </>
    );
}

export default HomePage;