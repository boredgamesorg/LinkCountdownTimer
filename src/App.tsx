import { BrowserRouter } from 'react-router-dom';
import { SiteDataProvider } from './contexts/SiteDataProvider';
import Handler from './Handler';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <SiteDataProvider>
      <BrowserRouter>
        <Handler></Handler>
      </BrowserRouter>

      <ToastContainer />
    </SiteDataProvider>
  );
}

export default App;
