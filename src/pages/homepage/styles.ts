import styled from "styled-components";

interface IProps {
  justifyContent?: "flex-start" | "flex-end";
}

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatContainer = styled.div`
  width: 475px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 15px 3px #00000038;
  border-radius: 15px;
`;

export const ChatBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  box-shadow: 0 2px 2px -2px gray;
  background-color: blueviolet;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  & h6 {
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 3px;
  }
`;

export const ChatMessagesContainer = styled.div`
  width: 100%;
  height: 350px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  overflow-y: scroll;
  /* background: url("https://media-exp1.licdn.com/dms/image/C560BAQEUwCLD2UX9lg/company-logo_200_200/0/1654611325074?e=1667433600&v=beta&t=d5B-LQ4BN0lEJ_hYWDoGXyZw34MfdCdtC4oPDUZziUo")
    no-repeat center center/cover;

  background-size: 150px 150px; */

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: blueviolet;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #80808036;
  }
`;

export const ChatForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top: solid 1px #80808080;

  & input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    border-bottom-left-radius: 15px;
  }
`;

export const IconContainer = styled.button`
  border: none;
  background-color: #ffffff;
  outline: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 15px;
  cursor: pointer;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }: IProps) => justifyContent};
  align-items: center;
`;

export const ContentMessage = styled.p`
  max-width: 90%;
  word-wrap: break-word;
  border-radius: 12px;
  border-bottom-right-radius: ${({ justifyContent }: IProps) =>
    justifyContent === "flex-end" ? 0 : "15px"};
  border-bottom-left-radius: ${({ justifyContent }: IProps) =>
    justifyContent === "flex-end" ? "15px" : 0};
  background-color: ${({ justifyContent }: IProps) =>
    justifyContent === "flex-end" ? "blueviolet" : "#FFFFFF"};
  color: ${({ justifyContent }: IProps) =>
    justifyContent === "flex-end" ? "#FFFFFF" : "#000000"};
  padding: 6px;
  font-size: 13px;
  box-shadow: 0 2px 15px -4px #00000038;
`;
