import React, { useEffect } from "react";
import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import { File } from "web3.storage";
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
      const response = await fetch(mediaBlobUrl);
      const blob = await response.blob();
      const files = [];
      const file = new File([blob], Date.now());
      console.log("URI", mediaBlobUrl);
      console.log('here');
      const result = axios.post(`https://api.web3.storage/upload`, {
        file: file
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU5QTYzMUI0MjMzMDgxNDc3RDhiQTI2OEJDNjEwNWJEOTczOWJlRkMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzMwMjkzNDczNzgsIm5hbWUiOiJzdHJBUEkifQ.XSvQF6p4Mib1ntWJxnBaR4Tj7xIpxV2eLfEnG42swu0`,
        },
      });
      console.log('here');
      console.log(result);  
      setFiles((old) => {
        return [...old, mediaBlobUrl];
      });
    }
    if (mediaBlobUrl && files.indexOf(mediaBlobUrl) === -1) {
      setter();
    }
  }, [mediaBlobUrl, files]);
  return (
    <div className="bg-black w-fit mx-auto p-4 text-white overflow-x-hidden">
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
