import "regenerator-runtime/runtime";
import { useEffect, useState } from "react";
// import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// const appId = "dfad63d0-02f7-4367-845e-c2fad84d460a";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const useSimpleForm = () => {
  const [message, setMessage] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "es-CO" });

  const handleChangeMessage = (message: string) => {
    setMessage(message);
  };

  useEffect(() => {
    setMessage(transcript);
    console.log(transcript);
  }, [transcript]);
  return {
    message,
    listening,
    browserSupportsSpeechRecognition,
    SpeechRecognition,
    startListening,
    resetTranscript,
    handleChangeMessage,
  };
};

export default useSimpleForm;
