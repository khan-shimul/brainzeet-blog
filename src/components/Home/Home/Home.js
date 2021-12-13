import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import NewsLetter from '../NewsLetter/NewsLetter';
import Posts from '../Posts/Posts/Posts';
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
            <Posts />
            <NewsLetter />
        </div>
    );
};

export default Home;