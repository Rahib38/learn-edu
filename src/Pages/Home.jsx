import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Choose from './Choose';
import Card from './Card';
import Event from './Event';
import Platform from './Platform';

const Home = () => {
    return (
        <div>
        

            <Banner></Banner>
            <Featured></Featured>
            <Choose></Choose>
            {/* <Card></Card> */}
            <Event></Event>
            <Platform></Platform>
        </div>
    );
};

export default Home;