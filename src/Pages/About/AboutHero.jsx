import React from 'react';

const AboutHero = () => {
    return (
      <div>
        <div
          className="hero "
          style={{
            backgroundImage: "url(https://i.ibb.co.com/YhHDvzK/about.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        >
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">About us</h1>
              <p className="mb-5 font-bold">
                Home / <span className='text-orange-500'> About us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutHero;