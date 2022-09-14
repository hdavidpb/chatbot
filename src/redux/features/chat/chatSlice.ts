import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRandomNumber } from "../../../utils/utils";
import { IChat, IInitialState } from "./interfaces";
import { generateRandomId, sendMessageToBot } from "./services";

const initialState: IInitialState = {
  roomId: localStorage.getItem("roomId")!!,
  chats: [],
  buttonOptions: ["Solicitar crédito"],
  isSendingMessage: false,
  isGettingId: false,
};

const chatSlice = createSlice({
  initialState,
  name: "chatSlice",
  reducers: {
    sendMessage(state, action: PayloadAction<IChat>) {
      state.chats = [...state.chats, action.payload];
    },
    clearButtomOptions(state) {
      state.buttonOptions = [];
    },
  },

  extraReducers: ({ addCase }) => {
    addCase(sendMessageToBot.pending, (state) => {
      state.isSendingMessage = true;
    });
    addCase(sendMessageToBot.fulfilled, (state, { payload }) => {
      state.isSendingMessage = false;
      const newMessage: IChat = {
        id: generateRandomNumber({ max: 70000, min: 1 }),
        isSended: false,
        message: payload!,
      };

      state.chats = [...state.chats, newMessage];
    });
    addCase(generateRandomId.pending, (state) => {
      state.isGettingId = true;
    });
    addCase(generateRandomId.fulfilled, (state, { payload }) => {
      state.isGettingId = false;
      state.roomId = payload!;

      localStorage.setItem("roomId", payload!);
    });
  },
});

export const { sendMessage, clearButtomOptions } = chatSlice.actions;
export default chatSlice.reducer;
