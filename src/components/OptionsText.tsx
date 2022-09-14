import { useDispatch, useSelector } from "react-redux";
import {
  clearButtomOptions,
  sendMessage,
} from "../redux/features/chat/chatSlice";
import { IChat } from "../redux/features/chat/interfaces";
import { sendMessageToBot } from "../redux/features/chat/services";
import { RootState } from "../redux/store";
import { generateRandomNumber } from "../utils/utils";
import * as SC from "./styles";

const OptionsText = () => {
  const dispatch = useDispatch<any>();
  const { buttonOptions, roomId } = useSelector(
    (store: RootState) => store.chatReducer
  );

  const handleSendMeesage = (msgOption: string) => {
    const message: IChat = {
      id: generateRandomNumber({ max: 80000, min: 1 }),
      isSended: true,
      message: msgOption,
    };
    dispatch(sendMessage(message));
    dispatch(sendMessageToBot({ id: roomId!, lee: msgOption }));
    dispatch(clearButtomOptions());
  };

  return (
    <SC.OptionsContianer>
      {buttonOptions.map((option, idx) => (
        <SC.ChipOption key={idx} onClick={() => handleSendMeesage(option)}>
          {option}
        </SC.ChipOption>
      ))}
    </SC.OptionsContianer>
  );
};

export default OptionsText;
