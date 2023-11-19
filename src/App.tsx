import { Navbar, ExpectedImpactItem } from './components';
import {
  DesignStages,
  ExpectedImpact,
  Home,
  Introduction,
  NewTechnologies,
  Objectives,
} from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Introduction />
      <NewTechnologies />
      {/*  <ExpectedImpact /> */}
      <Objectives />
      <DesignStages />
    </>
  );
}

export default App;
