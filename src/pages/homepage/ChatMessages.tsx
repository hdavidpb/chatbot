import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LoadingMessage from "../../components/LoadingMessage";
import OptionsText from "../../components/OptionsText";
import { RootState } from "../../redux/store";
import * as SC from "./styles";

const ChatMessages = () => {
  const { chats, isSendingMessage } = useSelector(
    (store: RootState) => store.chatReducer
  );

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 9999;
    }
  }, [chatContainerRef, chats]);

  return (
    <SC.ChatMessagesContainer ref={chatContainerRef}>
      <p>Hola!, obtén tu crédito en minutos.</p>
      {chats.map((chat, index) => (
        <SC.Message
          justifyContent={chat.isSended ? "flex-end" : "flex-start"}
          key={chat.id}
        >
          <SC.ContentMessage
            justifyContent={chat.isSended ? "flex-end" : "flex-start"}
          >
            {chat.message}
          </SC.ContentMessage>
        </SC.Message>
      ))}
      {isSendingMessage && <LoadingMessage />}
      <OptionsText />
    </SC.ChatMessagesContainer>
  );
};

export default ChatMessages;
