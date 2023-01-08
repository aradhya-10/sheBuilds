import { useState } from "react";
import RecordView from "./pages/RecordView";
import { Form, Center, Navbar, Footer } from './components';

function App() {
  const [allFiles, setAllFiles] = useState([]);
  const uploadFiles = async () => {
    console.log(allFiles);
  };
  return (
    <div className="min-h-screen">
      <div className="text-white">
		<Navbar />
		<Center />
		{/* <Form /> */}
        <div className="mx-auto w-fit pt-28 underline">RECORD SECTION</div>
        <div id="audio" className="mx-auto w-fit">
          Audio
          <RecordView audio={true} />
        </div>
        <div id="video" className="mx-auto w-fit">
          Video
          <RecordView video={true} />
        </div>
        <div id="screen" className="mx-auto w-fit">
          Screen
          <RecordView screen={true} />
        </div>
		<Footer/>
      </div>
    </div>
  );
}

export default App;
