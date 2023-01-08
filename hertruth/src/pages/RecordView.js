import React, { useEffect } from "react";
import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import { getFilesFromPath } from "web3.storage";
const RecordView = ({ audio, video, screen }) => {
  const {
    status,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: audio, video: video, screen: screen });
  const [files, setFiles] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const onStop = async () => {
    stopRecording();
    setIsRecording(false);
  };
  useEffect(() => {
    async function setter() {
      // console.log(await getFilesFromPath(mediaBlobUrl));
      // const response = await fetch(mediaBlobUrl);
      // const blob = await response.blob();
      // const file = new File([blob], Date.now());
      // console.log(file);
      // function readFile(input){
      //   const fr = new FileReader();
      //   fr.readAsDataURL(input);
      //   fr.addEventListener('load', () => {
      //     const res = fr.result;
      //   })
      // }
      // readFile(file);
      const formData = new FormData();

      // formData.set("name", "Hello World");
      formData.append("data", mediaBlobUrl);
      console.log("URI",mediaBlobUrl)
      const result = axios.post(`upload-files`, formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // const reader = new FileReader();
      // reader.onload= () =>{

      // }
      // const audiofile = new File([audioBlob], "audiofile.webm", {
      //   type: "audio/webm",
      // });

      // console.log(audiofile);
      setFiles((old) => {
        return [...old, mediaBlobUrl];
      });

      console.log(result);
    }
    if (mediaBlobUrl && files.indexOf(mediaBlobUrl) === -1) {
      setter();
    }
  }, [mediaBlobUrl, files]);
  return (
    <div className="bg-black bg-opacity-20 rounded-md w-fit mx-auto p-4 mt-1 mb-3 text-white overflow-x-hidden">
      <p className="">
        Status: <span className={"uppercase"}>{status}</span>
      </p>

      <button
        disabled={isRecording}
        className={
          `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => {
          setIsRecording(true);
          startRecording();
        }}
      >
        Start
      </button>
      <button
        // disabled={isRecording}
        className={
          `p-2 rounded m-4 ` + (isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={resumeRecording}
      >
        Resume
      </button>
      <button
        disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={pauseRecording}
      >
        Pause
      </button>
      <button
        disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => onStop()}
      >
        Stop
      </button>
      {/* <button
        // disabled={!isRecording}
        className={
          `p-2 rounded m-4 ` +
          (!isRecording ? "bg-purple-900" : "bg-purple-500")
        }
        onClick={() => downloadRecording}
      >
        Download Recording
      </button> */}
      {/* {videos.map((url) => {
        return (
          <div> */}
      <div className="flex flex-wrap gap-4">
        {files.map((blobUrl) => {
          return audio ? (
            <audio
              className="max-w-[500px] rounded"
              src={blobUrl}
              // downloadRecordingPath="Files"
              downloadRecordingType="mp3"
              controls
            />
          ) : (
            <video
              className="max-w-[500px] rounded"
              src={blobUrl}
              downloadRecordingPath="Files"
              downloadRecordingType="mp4"
              controls
            />
          );
        })}
      </div>
      {/* </div>
        );
      })} */}
    </div>
  );
};
export default RecordView;
