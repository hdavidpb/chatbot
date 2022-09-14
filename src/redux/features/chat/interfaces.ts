export interface IInitialState {
  roomId: string | null;
  chats: IChat[];
  buttonOptions: string[];
  isSendingMessage: boolean;
  isGettingId: boolean;
}

export interface IChat {
  id: number;
  isSended: boolean;
  message: string;
}
