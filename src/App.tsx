import { Navbar, ExpectedImpactItem } from './components';
import {
  DesignStages,
  ExpectedImpact,
  Home,
  Introduction,
  NewTechnologies,
  Objectives,
  ThesisForm,
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
      <ThesisForm />
      <DesignStages />
    </>
  );
}

export default App;
