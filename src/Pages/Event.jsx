import React from "react";

const Event = () => {
  return (
    <div>
      <div className="flex justify-evenly gap-4 md:flex-row flex-col mt-16">
        <div>
          <section className="w-full divide-y rounded divide-slate-200 ">
            <details className="p-4 group" open>
              <summary className="[&::Webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
                How does TailwindCSS works?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac01 desc-ac01"
                >
                  <title id="title-ac01">Open icon</title>
                  <desc id="desc-ac01">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 w-60  text-slate-500">
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for className
                names, generating the corresponding styles and then writing them
                to a static CSS file.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="[&::Webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
                How do I install TailwindCSS?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac02 desc-ac02"
                >
                  <title id="title-ac02">Open icon</title>
                  <desc id="desc-ac02">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 w-60  text-slate-500">
                The simplest and fastest way to get up and running with Tailwind
                CSS from scratch is with the Tailwind CLI tool. The CLI is also
                available as a standalone executable if you want to use it
                without installing Node.js. Install tailwindcss via npm, and
                create your tailwind.config.js file.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="[&::Webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
                What is Wind UI about?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac03 desc-ac03"
                >
                  <title id="title-ac03">Open icon</title>
                  <desc id="desc-ac03">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 w-60  text-slate-500">
                Expertly made, responsive, accessible components in React and
                HTML ready to be used on your website or app. Just copy and
                paste them on your Tailwind CSS project.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="[&::Webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
                How do I use Wind UI components?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac04 desc-ac04"
                >
                  <title id="title-ac04">Open icon</title>
                  <desc id="desc-ac04">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 w-60  text-slate-500">
                All components can be copied and pasted and easily implemented
                in your tailwind css projects. You can choose which language you
                want to copy the desired component and just hover and click on
                the component you need and paste it on your project.
              </p>
            </details>
          </section>
        </div>
        <div className="space-y-2">
          <div className="flex gap-4">
            <div className="box-border bg-orange-500 w-24 h-24">
              <h1 className="text-white font-semibold text-2xl p-4 text-center">
                20 April
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                New Marketing Course Release
              </h1>
              <p className="font-medium">Location: Online Platform</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="box-border bg-orange-500 w-24 h-24">
              <h1 className="text-white font-semibold text-2xl p-4 text-center">
                20 April
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                New Marketing Course Release
              </h1>
              <p className="font-medium">Location: Online Platform</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="box-border bg-orange-500 w-24 h-24">
              <h1 className="text-white font-semibold text-2xl p-4 text-center">
                20 April
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                New Marketing Course Release
              </h1>
              <p className="font-medium">Location: Online Platform</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="box-border bg-orange-500 w-24 h-24">
              <h1 className="text-white font-semibold text-2xl p-4 text-center">
                20 April
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                New Marketing Course Release
              </h1>
              <p className="font-medium">Location: Online Platform</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="../../public/images/course_6.jpg" />
              </div>
            </div>
            <div>
              <p className="font-medium text-orange-500">April 02, 2018</p>
              <h1 className="text-2xl font-semibold">
                Why Choose online education?
              </h1>
              <p className="font-medium">By William Smith</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="../../public/images/course_7.jpg" />
              </div>
            </div>
            <div>
              <p className="font-medium text-orange-500">April 02, 2018</p>
              <h1 className="text-2xl font-semibold">
                Why Choose online education?
              </h1>
              <p className="font-medium">By William Smith</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="../../public/images/course_8.jpg" />
              </div>
            </div>
            <div>
              <p className="font-medium text-orange-500">April 02, 2018</p>
              <h1 className="text-2xl font-semibold">
                Why Choose online education?
              </h1>
              <p className="font-medium">By William Smith</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="../../public/images/course_9.jpg" />
              </div>
            </div>
            <div>
              <p className="font-medium text-orange-500">April 02, 2018</p>
              <h1 className="text-2xl font-semibold">
                Why Choose online education?
              </h1>
              <p className="font-medium">By William Smith</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <video controls className="w-full">
         
               <source src="movie.ogg" type="video/ogg"/>
                      
        </video>
      </div>
    </div>
  );
};

export default Event;
