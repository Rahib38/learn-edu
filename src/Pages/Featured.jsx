import React from "react";

const Featured = () => {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-base-300 rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row mt-5">
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <div className="flex justify-between">
            <button className="p-3 rounded-lg bg-orange-500 text-white">
              Featured
            </button>
            <h1 className="text-xl font-semibold">
              price: <span className="text-orange-600">$35</span>
            </h1>
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
