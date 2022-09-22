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

export interface IChatResponse {
  respuesta: Respuesta;
}

export interface Respuesta {
  error: boolean;
  payload: Payload;
}

export interface Payload {
  botones: string[];
  textos: string[];
  enlace: string;
}
