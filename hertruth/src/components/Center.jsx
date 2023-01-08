import React from "react";

const Center = () => {
  const org = [];
  return (
    <div bg-black>
      {/* <div className="container flex justify-center mt-40 mx-auto">
        <div className="h-fit w-fit p-8 bg-pink-500">Report Incident</div>
      </div> */}
	  <div className="container bg-black flex flex-wrap flex-col text-white">
		<div className="container flex flex-row justify-center">
			<div className="text-center container m-[1px] h-auto w-60 p-8 bg-pink-500">
				Upload Images/Videos
			</div>
			<div className="text-center container m-[1px] h-auto w-60 p-8 bg-pink-500">
				Record Video
			</div>
		</div>
		<div className="container flex flex-row justify-center">	
			<div className="text-center container m-[1px] h-auto w-60 p-8 bg-pink-500">
				Record Screen
			</div>
			<div className="text-center container m-[1px] h-auto w-60 p-8 bg-pink-500">
				Record Audio
			</div>
		</div>
	  </div>
      <div className="container flex">
        <div className="conatiner">
          {org.map((x) => {
            return (
              <>
                <h3>{x[0]}</h3>
                <a href={x[1]}>{x[1]}</a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Center;
