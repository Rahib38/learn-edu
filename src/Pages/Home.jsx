import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Choose from './Choose';
import Card from './Card';
import Event from './Event';

const Home = () => {
    return (
        <div>
        

            <Banner></Banner>
            <Featured></Featured>
            <Choose></Choose>
            <Card></Card>
            <Event></Event>
        </div>
    );
};

export default Home;