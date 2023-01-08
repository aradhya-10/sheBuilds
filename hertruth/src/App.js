import { useState } from "react";
import RecordView from "./pages/RecordView";

function App() {
  const [allFiles, setAllFiles] = useState([]);
  const uploadFiles = async () => {
    console.log(allFiles);
  };
  return (
    <div className="min-h-screen bg-black">
      <div className="text-white">
        <div className="mx-auto w-fit p-3 underline">RECORD SECTION</div>
        <div className="mx-auto w-fit">
          Audio
          <RecordView id="audio" audio={true} />
        </div>
        {/* <div>
          Video
          <RecordView video={true} />
        </div>
        <div>
          Screen
          <RecordView screen={true} />
        </div> */}
      </div>{" "}
    </div>
  );
}

export default App;
