import ChatMessages from "./ChatMessages";
import FormMessage from "./FormMessage";
import * as SC from "./styles";

export const HomePage = () => {
  return (
    <SC.HomepageContainer>
      <SC.ChatContainer>
        <SC.ChatBar>
          <h6>Neero</h6>
        </SC.ChatBar>
        <ChatMessages />
        <FormMessage />
      </SC.ChatContainer>
    </SC.HomepageContainer>
  );
};
