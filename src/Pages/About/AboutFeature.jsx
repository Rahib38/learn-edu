import React from 'react';

const AboutFeature = () => {
    return (
      <div>
        <div className="flex flex-col overflow-hidden bg-white rounded   shadow-slate-200 sm:flex-row mt-5 ">
          {/*  <!-- Body--> */}
          <div className=" flex-1 p-10 sm:mx-16 sm:px-0">
            <h1 className="text-3xl font-semibold">Our Platform`s main goal</h1>
            <p className="mt-10 ">
              Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
              euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
              viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
              interdum dui, ac tempor lorem convallis ut. Maecenas rutrum
              viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus
              pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Integer id convallis
              libero, sed blandit nibh. Nam ultricies tristique nibh, consequat
              ornare nibh. Quisque vitae odio ligula.
            </p>
          </div>
          {/*  <!-- Image --> */}
          <figure className="flex-1">
            <img
              src="../../public/images/about_1.jpg"
              alt="card image"
              className="object-cover min-h-full aspect-auto"
            />
          </figure>
        </div>
        <div className="flex flex-col overflow-hidden bg-white rounded   shadow-slate-200 sm:flex-row  mt-24">
          <figure className="flex-1">
            <img
              src="../../public/images/about_1.jpg"
              alt="card image"
              className="object-cover min-h-full aspect-auto"
            />
          </figure>

          {/*  <!-- Body--> */}
          <div className=" flex-1 p-10 sm:mx-16 sm:px-0">
            <h1 className="text-3xl font-semibold">Our Platform`s main goal</h1>
            <p className="mt-10 ">
              Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
              euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
              viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
              interdum dui, ac tempor lorem convallis ut. Maecenas rutrum
              viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus
              pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Integer id convallis
              libero, sed blandit nibh. Nam ultricies tristique nibh, consequat
              ornare nibh. Quisque vitae odio ligula.
            </p>
          </div>
          {/*  <!-- Image --> */}
        </div>
      </div>
    );
};

export default AboutFeature;