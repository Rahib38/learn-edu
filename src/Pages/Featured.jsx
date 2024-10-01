import React from "react";

const Featured = () => {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md  shadow-slate-200 sm:flex-row mt-5 ">
        {/*  <!-- Body--> */}
        <div className=" flex-1 p-10 sm:mx-16 sm:px-0">
          <div className="flex justify-between items-center">
            <button className="p-3 rounded-lg bg-orange-500 text-white">
              Featured
            </button>
            <h1 className="text-xl font-semibold">
              price: <span className="text-orange-600">$35</span>
            </h1>
          </div>
          <h1 className="text-3xl font-bold mt-7 hover:text-orange-500">
            Online Literature Course
          </h1>
          <p className="text-2xl mt-5 hover:text-orange-500">
            Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget
            lacus tempus pulvinar. Donec vehicula efficitur nibh, in pretium
            nulla interdum non.
          </p>
          <div className="flex justify-between items-center mt-20">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white border-2 border-white rounded-full bg-emerald-500"
              >
                <img
                  className="rounded-full"
                  src="../../public/images/featured_author.jpg"
                  alt=""
                />
              </a>
              <h1>By James S. Morrison</h1>
            </div>
            <div> 352 Sales</div>
          </div>
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
      {/*<!-- End Horizontal card--> */}
    </>
  );
};
export default Featured;
