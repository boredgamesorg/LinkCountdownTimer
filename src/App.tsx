import { SiteDataProvider } from './contexts/SiteDataProvider';
import Handler from './Handler';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <SiteDataProvider>
      <Handler></Handler>
      <ToastContainer />
    </SiteDataProvider>
  );
}

export default App;
