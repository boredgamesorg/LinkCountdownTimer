<<<<<<< HEAD
import { SiteDataProvider } from "./contexts/SiteDataProvider";
import Handler from "./Handler";
import { ToastContainer } from "react-toastify";
=======
import { BrowserRouter } from 'react-router-dom';
import Handler from './Handler';
import { ToastContainer } from 'react-toastify';
>>>>>>> 304ddf39f7b5fdd80789f97917a10b6786dc793b

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
