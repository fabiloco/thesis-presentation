import { Navbar } from './components';
import { Home, Introduction } from './pages';
import { NewTechnologies } from './pages/NewTechnologies';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Introduction />
      <NewTechnologies />
    </>
  );
}

export default App;
