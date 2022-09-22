import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../redux/features/chat/chatSlice";
import { IChat } from "../../redux/features/chat/interfaces";
import { sendMessageToBot } from "../../redux/features/chat/services";
import { RootState } from "../../redux/store";
import { generateRandomNumber } from "../../utils/utils";
import { AiOutlineSend } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import useSimpleForm from "../../hooks/useSimpleForm";
import * as SC from "./styles";
import ReactTooltip from "react-tooltip";
const FormMessage = () => {
  const dispatch = useDispatch<any>();

  const { roomId, isSendingMessage, buttonOptions } = useSelector(
    (store: RootState) => store.chatReducer
  );
  const {
    handleChangeMessage,
    message,
    startListening,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    SpeechRecognition,
  } = useSimpleForm();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || listening) {
      return;
    }
    const messageChat: IChat = {
      id: generateRandomNumber({ max: 80000, min: 1 }),
      isSended: true,
      message,
    };

    dispatch(sendMessage(messageChat));
    dispatch(sendMessageToBot({ id: roomId!, lee: message }));

    handleChangeMessage("");
    resetTranscript();
  };

  return (
    <SC.ChatForm onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => handleChangeMessage(e.target.value)}
        disabled={buttonOptions.length !== 0}
      />
      {!listening && (
        <SC.IconContainer
          data-tip="Enviar mensaje"
          type="submit"
          disabled={!message.trim() || isSendingMessage || !roomId}
        >
          <AiOutlineSend size={20} />
        </SC.IconContainer>
      )}

      {browserSupportsSpeechRecognition && (
        <>
          {listening ? (
            <SC.IconContainer
              data-tip="Enviar"
              disabled={buttonOptions.length !== 0}
              onClick={SpeechRecognition.abortListening}
            >
              <FaMicrophone size={20} color={"red"} />
            </SC.IconContainer>
          ) : (
            <SC.IconContainer
              data-tip="Enviar por voz"
              style={{ opacity: buttonOptions.length !== 0 ? 0.4 : 1 }}
              disabled={buttonOptions.length !== 0}
              onClick={startListening}
            >
              <FaMicrophone size={20} color={"grey"} />
            </SC.IconContainer>
          )}
        </>
      )}

      <ReactTooltip />
    </SC.ChatForm>
  );
};

export default FormMessage;
