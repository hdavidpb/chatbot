import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingMessage from "./components/LoadingMessage";
import { HomePage } from "./pages/pages";
import { generateRandomId } from "./redux/features/chat/services";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch<any>();
  const { roomId, isGettingId } = useSelector(
    (store: RootState) => store.chatReducer
  );

  useEffect(() => {
    if (roomId === null) {
      dispatch(generateRandomId());
      console.log(`SE GENERO EL ID: ${roomId}`);
    }
  }, [roomId]);

  return !isGettingId ? <HomePage /> : <LoadingMessage />;
}

export default App;
