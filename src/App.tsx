import { SiteDataProvider } from './contexts/SiteDataProvider';
import Handler from './Handler';

function App() {
  return (
    <SiteDataProvider>
      <Handler></Handler>
    </SiteDataProvider>
  );
}

export default App;
