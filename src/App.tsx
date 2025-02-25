import { BrowserRouter } from "react-router-dom";
import Handler from "./Handler";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Handler></Handler>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
