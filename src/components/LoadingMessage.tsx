import * as SC from "./styles";
import loader from "../assets/giphy.gif";
const LoadingMessage = () => {
  return <SC.ImageLoader src={loader} />;
};

export default LoadingMessage;
