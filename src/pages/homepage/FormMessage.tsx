import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useSimpleForm from "../../hooks/useSimpleForm";
import { sendMessage } from "../../redux/features/chat/chatSlice";
import { IChat } from "../../redux/features/chat/interfaces";
import { sendMessageToBot } from "../../redux/features/chat/services";
import { RootState } from "../../redux/store";
import { generateRandomNumber } from "../../utils/utils";
import * as SC from "./styles";
const FormMessage = () => {
  const dispatch = useDispatch<any>();

  const { roomId, isSendingMessage } = useSelector(
    (store: RootState) => store.chatReducer
  );
  const { handleChangeMessage, message } = useSimpleForm();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const messageChat: IChat = {
      id: generateRandomNumber({ max: 80000, min: 1 }),
      isSended: true,
      message,
    };

    dispatch(sendMessage(messageChat));
    dispatch(sendMessageToBot({ id: roomId!, lee: message }));
    handleChangeMessage("");
  };

  return (
    <SC.ChatForm onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => handleChangeMessage(e.target.value)}
      />
      <SC.IconContainer
        type="submit"
        disabled={!message.trim() || isSendingMessage || !roomId}
      >
        <AiOutlineSend size={20} />
      </SC.IconContainer>
    </SC.ChatForm>
  );
};

export default FormMessage;
