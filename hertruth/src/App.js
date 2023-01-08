import { useState } from "react";
import RecordView from "./pages/RecordView";
import { Center, Navbar, Footer, AddPost } from "./components";
import axios from "axios";

function App() {
  const [allFiles, setAllFiles] = useState([]);
  const [submit, setSubmit] = useState(false);
  const handleSubmit = async () => {
    setSubmit(true);
  };
  return (
    <div className="min-h-screen">
      <div className="text-white">
        <Navbar />
        <Center />
        {/* <Form /> */}
        <div className="mx-auto w-fit pt-28 underline">RECORD SECTION</div>
        <div
          id="audio"
          className="mx-auto w-fit flex flex-col items-center p-2 m-4"
        >
          <div className="mx-auto">
            <span>Audio</span>
          </div>
          <RecordView submit={submit} audio={true} />
        </div>
        <div
          id="video"
          className="mx-auto w-fit flex flex-col items-center p-2 m-4"
        >
          Video
          <RecordView submit={submit} video={true} />
        </div>
        <div
          id="screen"
          className="mx-auto w-fit flex flex-col items-center p-2 m-4"
        >
          Screen
          <RecordView submit={submit} screen={true} />
        </div>
        <div
          id="addPost"
          className="mx-auto w-fit flex flex-col items-center p-2 m-4"
        >
          <AddPost submit={submit} />
        </div>
        <div id="submit" className="flex justify-center p-2 m-4">
          <button onClick={handleSubmit} className=" rounded p-2 bg-green-400 text-white">
            Submit All
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
