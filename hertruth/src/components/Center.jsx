import React from "react";

const Center = () => {
  const org = [];
  return (
    <div className="fixed z-[20] top-[18%] right-0 pr-1 ">
      {/* <div className="container flex justify-center mt-40 mx-auto">
        <div className="h-fit w-fit p-8 bg-pink-500">Report Incident</div>
      </div> */}
	  <div className="container pt-24 pb-8 flex flex-wrap flex-col text-white ">
			<a href="#video" className="text-center container m-[2px] h-auto w-40 hover:bg-pink-600 hover:font-semibold rounded-sm py-4 px-2 bg-pink-500">
				Record Video
			</a>
			<a href="#screen" className="text-center container m-[2px] h-auto w-40 hover:bg-pink-600 hover:font-semibold rounded-sm py-4 px-2 bg-pink-500">
				Record Screen
			</a>
			<a href="#audio" className="text-center container m-[2px] h-auto w-40 hover:bg-pink-600 hover:font-semibold rounded-sm py-4 px-2 bg-pink-500">
				Record Audio
			</a>
			<a href="#addPost" className="text-center container m-[2px] h-auto w-40 hover:bg-pink-600 hover:font-semibold py-4 px-2 rounded-sm bg-pink-500">
				Upload File
			</a>
			<a href="#submit" className="text-center container m-[2px] h-auto w-40 hover:bg-pink-600 hover:font-semibold rounded-sm py-4 px-2 bg-pink-500">
				Submit All
			</a>
	  </div>
    </div>
  );
};

export default Center;
