import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import Productive from '../Productive/Productive';
import Promote from '../Promote/Promote';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Banner />
            <Promote />
            <Categories />
            <Productive />
        </div>
    );
};

export default Home;