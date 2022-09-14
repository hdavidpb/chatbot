import { useState } from "react";
const useSimpleForm = () => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (message: string) => {
    setMessage(message);
  };

  return {
    message,
    handleChangeMessage,
  };
};

export default useSimpleForm;
