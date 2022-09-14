import styled from "styled-components";

export const ImageLoader = styled.img`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
`;

export const OptionsContianer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 10px;
  flex-wrap: wrap;
`;

export const ChipOption = styled.button`
  border: none;
  outline: none;
  padding: 6px 23px;
  border-radius: 23px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #00000036;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #80808030;
  }
`;
