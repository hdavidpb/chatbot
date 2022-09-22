interface IProps {
  message: string;
}

const Message = ({ message }: IProps) => {
  if (message.includes("http")) {
    return (
      <span>
        {message
          .split(" ")
          .slice(0, message.split(" ").length - 1)
          .join(" ") + " "}
        <span
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "blueviolet",
          }}
          onClick={() => {
            window.open(message.split(" ")[message.split(" ").length - 1]);
          }}
        >
          {message.split(" ")[message.split(" ").length - 1]}
        </span>
      </span>
    );
  } else {
    return <span>{message}</span>;
  }
};

export default Message;
