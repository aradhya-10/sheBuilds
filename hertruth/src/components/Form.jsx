import React, { useState } from "react";
// const { Revise } = require("revise-sdk");
// const revise = new Revise({ auth: process.env.REVISE_AUTHKEY });

const Form = () => {
  var ddetail = {
    Date: "",
    Detail: "",
    Time: "",
  };

  const [details, setDetails] = useState(ddetail);

  function submitted(e) {
	const date = document.getElementById("floating_date");
    const metadata = document.getElementById("floating_metadata");
    const time = document.getElementById("floating_time");
	ddetail = {
      Date: date.value,
      Detail: metadata.value,
      Time: time,
    };
    setDetails(ddetail);
  }
  return (
    <div className="flex px-12">
      <form className="container flex-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-20 my-12 mx-auto p-8 lg:w-8/12 rounded-lg border-2 z-[5]">
        <h1 className="text-lg text-center">Fill out some details</h1>
        <div className="relative z-0 mb-6 w-6/12 group date datepicker">
          <input
            type="date"
            name="floating_date"
            datepicker
            id="floating_date"
            className="block py-2.5 px-0 w-full  text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer form-control rounded"
            placeholder="dd/mm/yyyy"
            required
          />
          <label
            htmlFor="floating_date"
            className=" peer-focus:font-medium absolute text-sm text-white durawhite transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white  peer-placeholder-shown:swhite peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date of the incident{" "}
          </label>
        </div>
		<div className="relative z-0 mb-6 w-6/12 group ">
          <input
            type="time"
            name="floating_time"
            timepicker
            id="floating_time"
            className="block py-2.5 px-0 w-full  text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer form-control rounded"
            placeholder="__:__"
            required
          />
          <label
            htmlFor="floating_time"
            className=" peer-focus:font-medium absolute text-sm text-white durawhite transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white  peer-placeholder-shown:swhite peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Time of the incident{" "}
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group text-white">
         Incident Description
          <div className="text-white relative bg-[rgb(116,104,126)] bg-opacity-40 flex-col mt-4 rounded-lg py-4 px-8">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_metadata"
                id="floating_metadata"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_metadata"
                className="peer-focus:font-medium absolute text-sm text-white  durawhite transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:swhite peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Type here
              </label>
            </div>            
          </div>
        </div>
        <button
          className="text-white bg-pink-400  hover:bg-pink-600 transition durawhite focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:focus:ring-white"
          onClick={submitted}
          onSubmit={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;