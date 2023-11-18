import { Navbar, ExpectedImpactItem } from './components';
import { ExpectedImpact, Home, Introduction, NewTechnologies } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Introduction />
      <NewTechnologies />
      <ExpectedImpact />
    </>
  );
}

export default App;
