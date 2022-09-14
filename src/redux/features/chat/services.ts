import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://18.220.255.146:9000";

export const generateRandomId = createAsyncThunk(
  "generateRandomId",
  async () => {
    try {
      const res = await Axios.get<{ id: string }>(`${URL}/gen_id`);

      return res.data.id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendMessageToBot = createAsyncThunk(
  "sendMessage",
  async (messageData: { id: string; lee: string }) => {
    console.log("SENDING TO BOT");
    try {
      const res = await Axios.post<{ respuesta: string }>(
        `${URL}/chat`,
        messageData
      );

      return res.data.respuesta;
    } catch (error) {
      console.log(error);
    }
  }
);
